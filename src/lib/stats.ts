import { sections } from "@/data/projects";

export interface Stats {
  stars: Record<string, number>;
  downloads: Record<string, number>;
  totalStars: number;
  totalDownloads: number;
  date: string;
}

async function getJson<T>(url: string, headers: Record<string, string> = {}): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    const response = await fetch(url, { headers, cache: "force-cache" });
    if (response.ok) return response.json() as Promise<T>;
    // npm and GitHub both answer 429 when called too often.
    if (attempt < 5 && (response.status === 429 || response.status >= 500)) {
      await new Promise((resolve) => setTimeout(resolve, 2000 * (attempt + 1)));
      continue;
    }
    throw new Error(`${url} answered ${response.status}`);
  }
}

interface Repo {
  full_name: string;
  stargazers_count: number;
  fork: boolean;
}

async function getRepos(path: string) {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const repos: Repo[] = [];
  for (let page = 1; ; page++) {
    const batch = await getJson<Repo[]>(`https://api.github.com/${path}?per_page=100&page=${page}`, headers);
    repos.push(...batch);
    if (batch.length < 100) return repos;
  }
}

async function getDownloads(packages: string[]) {
  const downloads: Record<string, number> = {};
  const unscoped = packages.filter((name) => !name.startsWith("@"));
  // The bulk endpoint takes up to 128 unscoped packages; a scoped one goes alone.
  for (let i = 0; i < unscoped.length; i += 128) {
    const chunk = unscoped.slice(i, i + 128);
    const result = await getJson<Record<string, { downloads: number } | null>>(
      `https://api.npmjs.org/downloads/point/last-week/${chunk.join(",")}`,
    );
    for (const name of chunk) downloads[name] = result[name]?.downloads ?? 0;
  }
  for (const name of packages.filter((name) => name.startsWith("@"))) {
    const result = await getJson<{ downloads: number }>(`https://api.npmjs.org/downloads/point/last-week/${name}`);
    downloads[name] = result.downloads;
  }
  return downloads;
}

// Every package ever published from the account, forks and deprecated ones included.
// The npm search API misses some of them; this list doesn't.
async function getPublished() {
  const packages = Object.keys(
    await getJson<Record<string, string>>("https://registry.npmjs.org/-/user/finom/package"),
  );
  if (!packages.length) throw new Error("npm lists no packages for finom");
  return packages;
}

async function loadStats(): Promise<Stats> {
  const projects = sections.flatMap((section) => section.projects);
  const listed = projects.flatMap(({ npm }) => (npm ? [npm] : []));
  const [ownRepos, circlecellRepos, published] = await Promise.all([
    getRepos("users/finom/repos"),
    getRepos("orgs/circlecell/repos"),
    getPublished(),
  ]);
  const downloads = await getDownloads([...new Set([...published, ...listed])]);

  const stars: Record<string, number> = {};
  for (const repo of [...ownRepos, ...circlecellRepos]) stars[repo.full_name.toLowerCase()] = repo.stargazers_count;

  const missing = projects.filter(({ repo }) => repo && stars[repo.toLowerCase()] === undefined);
  if (missing.length) throw new Error(`Repos not found on GitHub: ${missing.map(({ repo }) => repo).join(", ")}`);

  return {
    stars,
    downloads,
    totalStars: ownRepos.filter(({ fork }) => !fork).reduce((sum, repo) => sum + repo.stargazers_count, 0),
    totalDownloads: published.reduce((sum, name) => sum + downloads[name], 0),
    date: new Date().toISOString().slice(0, 10),
  };
}

let stats: Promise<Stats> | undefined;

// One load per build: the page and the OG image share it.
export function getStats() {
  stats ??= loadStats();
  return stats;
}

export const formatNumber = (value: number) => value.toLocaleString("en-US");
