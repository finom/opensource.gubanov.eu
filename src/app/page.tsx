import { DownloadIcon } from "@/components/DownloadIcon";
import { Filters, filterCss } from "@/components/Filters";
import { Tile } from "@/components/Tile";
import { sections } from "@/data/projects";
import { type Tag, tags } from "@/data/tags";
import { site } from "@/lib/site";
import { formatNumber, getStats } from "@/lib/stats";

export default async function Home() {
  const stats = await getStats();
  const projects = sections.flatMap((section) => section.projects);
  const used = (Object.keys(tags) as Tag[]).filter((tag) => projects.some((project) => project.tags.includes(tag)));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: site.title,
    url: site.url,
    description: site.description,
    author: { "@type": "Person", name: site.author, url: site.authorUrl, sameAs: ["https://github.com/finom"] },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.name,
        url: project.link ?? project.source ?? `https://github.com/${project.repo}`,
      })),
    },
  };

  return (
    <div className="container">
      <style>{filterCss}</style>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is built from the data files.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <header className="header">
        <div>
          <h1>Open Source Projects</h1>
          <p className="byline">
            by{" "}
            <a href={site.authorUrl} target="_blank" rel="noopener noreferrer">
              Andrey Gubanov
            </a>
          </p>
          <p className="since">since 2011</p>
        </div>
        <dl className="totals">
          <div>
            <dt>npm installs over the past week</dt>
            <dd>
              <DownloadIcon />
              {formatNumber(stats.totalDownloads)}
            </dd>
          </div>
          <div>
            <dt>GitHub stars in total</dt>
            <dd>★ {formatNumber(stats.totalStars)}</dd>
          </div>
        </dl>
      </header>
      <main>
        <Filters used={used}>
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>
                <a href={`#${section.id}`}>{section.title}</a>
              </h2>
              <p className="section-description">{section.description}</p>
              <div className="row">
                {section.projects.map((project) => (
                  <Tile key={project.name} project={project} stats={stats} />
                ))}
              </div>
            </section>
          ))}
        </Filters>
      </main>
      <footer>
        © 2011–{stats.date.slice(0, 4)} Andrey Gubanov. Numbers from GitHub and npm, updated {stats.date}.{" "}
        <a href="https://github.com/finom/opensource.gubanov.eu" target="_blank" rel="noopener noreferrer">
          Source
        </a>
        .
      </footer>
    </div>
  );
}
