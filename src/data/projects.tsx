import type { ReactNode } from "react";
import type { Tag } from "./tags";

export interface Project {
  name: string;
  description: ReactNode;
  tags: Tag[];
  // "owner/name": the title links to the repo and the tile shows its stars.
  repo?: string;
  // A folder inside a repo; no stars, since they belong to the whole repo.
  source?: string;
  npm?: string;
  link?: string;
}

export interface Section {
  id: string;
  title: string;
  description: ReactNode;
  projects: Project[];
}

const tree = (repo: string, path: string, branch = "main") => `https://github.com/${repo}/tree/${branch}/${path}`;

export const sections: Section[] = [
  {
    id: "vovk",
    title: "Vovk.ts",
    description: (
      <>
        Back-end framework for the Next.js App Router. One codebase gives type-safe clients (TypeScript, Python, Rust),
        OpenAPI and AI tools.
      </>
    ),
    projects: [
      {
        name: "vovk",
        repo: "finom/vovk",
        npm: "vovk",
        description:
          "The runtime: controllers, procedures, the typed RPC client and AI tools derived from controllers.",
        tags: ["highlight", "node", "browser"],
      },
      {
        name: "vovk-cli",
        source: tree("finom/vovk", "packages/vovk-cli"),
        npm: "vovk-cli",
        description: "The CLI: project setup, the dev server, client generation and bundling.",
        tags: ["highlight", "cli", "node"],
      },
      {
        name: "vovk-ajv",
        source: tree("finom/vovk", "packages/vovk-ajv"),
        npm: "vovk-ajv",
        description: "Client-side JSON Schema validation with Ajv.",
        tags: ["highlight", "browser"],
      },
      {
        name: "vovk-python",
        source: tree("finom/vovk", "packages/vovk-python"),
        npm: "vovk-python",
        description: "Codegen templates for the Python client.",
        tags: ["highlight", "cli"],
      },
      {
        name: "vovk-rust",
        source: tree("finom/vovk", "packages/vovk-rust"),
        npm: "vovk-rust",
        description: "Codegen templates for the Rust client.",
        tags: ["highlight", "cli"],
      },
      {
        name: "vovk.dev",
        source: tree("finom/vovk", "docs"),
        link: "https://vovk.dev",
        description: "Vovk.ts documentation.",
        tags: ["highlight", "website", "documentation"],
      },
      {
        name: "hello-world",
        source: tree("finom/vovk", "examples/hello-world"),
        link: "https://hello-world.vovk.dev",
        description:
          "A minimal app: a JSON endpoint, a JSON Lines stream, OpenAPI, and its clients published to npm, PyPI and crates.io.",
        tags: ["highlight", "website"],
      },
      {
        name: "kitchen-sink",
        source: tree("finom/vovk", "examples/kitchen-sink"),
        link: "https://examples.vovk.dev",
        description: "The examples behind the live demos in the documentation.",
        tags: ["highlight", "website", "documentation"],
      },
      {
        name: "realtime-kanban",
        source: tree("finom/vovk", "examples/realtime-kanban"),
        link: "https://kanban.vovk.dev",
        description: "A Kanban board with a real-time UI and AI tools derived from its controllers.",
        tags: ["highlight", "website"],
      },
      {
        name: "multitenant",
        source: tree("finom/vovk", "examples/multitenant"),
        link: "https://multitenant.vovk.dev",
        description: "Multi-tenant routing by subdomain.",
        tags: ["highlight", "website"],
      },
      {
        name: "perf",
        source: tree("finom/vovk", "perf"),
        link: "https://vovk.dev/performance",
        description: "Overhead measurements against plain Next.js route handlers.",
        tags: ["highlight"],
      },
    ],
  },
  {
    id: "uicast",
    title: "uicast",
    description: (
      <>
        The expression-driven generative UI framework. A model writes the UI as JSON Lines; <strong>uicast</strong>{" "}
        renders it live from your own components.
      </>
    ),
    projects: [
      {
        name: "@uicast/core",
        repo: "finom/uicast",
        npm: "@uicast/core",
        description: "The framework-agnostic engine: the entry format, reactive scopes and the prompt builders.",
        tags: ["highlight", "node", "browser"],
      },
      {
        name: "@uicast/react",
        source: tree("finom/uicast", "packages/react"),
        npm: "@uicast/react",
        description: "The React binding: the renderer, per-element error boundaries and confirmations.",
        tags: ["highlight", "browser"],
      },
      {
        name: "@uicast/expr",
        source: tree("finom/uicast", "packages/expr"),
        npm: "@uicast/expr",
        description:
          "The expression language: JavaScript expressions over JSON data, run by an interpreter with a budget. No eval.",
        tags: ["highlight", "node", "browser"],
      },
      {
        name: "@uicast/shadcn-catalog",
        source: tree("finom/uicast", "packages/shadcn-catalog"),
        npm: "@uicast/shadcn-catalog",
        description: "The reference component catalog over shadcn/ui and Radix.",
        tags: ["highlight", "browser"],
      },
      {
        name: "@uicast/streamdown",
        source: tree("finom/uicast", "packages/streamdown"),
        npm: "@uicast/streamdown",
        description: "A Streamdown plugin: generated UI inside the code fences of Markdown chat replies.",
        tags: ["highlight", "browser"],
      },
      {
        name: "uicast.dev",
        source: tree("finom/uicast", "docs"),
        link: "https://uicast.dev",
        description: (
          <>
            <strong>uicast</strong> documentation.
          </>
        ),
        tags: ["highlight", "website", "documentation"],
      },
      {
        name: "back-office",
        source: tree("finom/uicast", "examples/back-office"),
        link: "https://warehouse.uicast.dev",
        description: "A demo: a chat workspace over generated UI.",
        tags: ["highlight", "website"],
      },
    ],
  },
  {
    id: "matreshka",
    title: "Matreshka.js",
    description: "Reactive data binding for the HTML you already have.",
    projects: [
      {
        name: "matreshka",
        repo: "finom/matreshka",
        npm: "matreshka",
        description: "Two-way data binding between JavaScript objects and the DOM, from a script tag or npm.",
        tags: ["highlight", "browser"],
      },
      {
        name: "matreshka.js.org",
        source: tree("finom/matreshka", "docs"),
        link: "https://matreshka.js.org",
        description: "Documentation in English, Ukrainian and Russian.",
        tags: ["highlight", "website", "documentation"],
      },
      {
        name: "examples",
        source: tree("finom/matreshka", "examples"),
        description: "Example apps built with Matreshka.js.",
        tags: ["highlight", "documentation"],
      },
    ],
  },
  {
    id: "misc",
    title: "Misc",
    description: "Projects that don't fit into other categories.",
    projects: [
      {
        name: "standard-tool",
        repo: "finom/standard-tool",
        npm: "standard-tool",
        description:
          "One type for an LLM tool: define it once, use it with any provider, SDK or framework. Built on Standard Schema.",
        tags: ["highlight", "node", "browser"],
      },
      {
        name: "static-klines",
        repo: "finom/static-klines",
        npm: "static-klines",
        link: "https://finom.github.io/static-klines",
        description:
          "Binance historical klines served as static JSON from GitHub Pages, updated daily, with TypeScript and Python clients.",
        tags: ["highlight", "node", "website"],
      },
      {
        name: "tsimmes",
        repo: "finom/tsimmes",
        npm: "tsimmes",
        description: "A function for selecting elements, in less than ¼ of a kilobyte.",
        tags: ["highlight", "browser"],
      },
      {
        name: "opensource.gubanov.eu",
        repo: "finom/opensource.gubanov.eu",
        link: "https://opensource.gubanov.eu",
        description: (
          <>
            This page. Designed by{" "}
            <a href="https://github.com/alexkolodko" target="_blank" rel="noopener noreferrer">
              Alex Kolodko
            </a>
            .
          </>
        ),
        tags: ["highlight", "website"],
      },
      {
        name: "tailwind-to-object",
        repo: "finom/tailwind-to-object",
        npm: "tailwind-to-object",
        description: "Converts Tailwind CSS class names into a CSS style object.",
        tags: ["browser", "node"],
      },
      {
        name: "rebloom",
        repo: "finom/rebloom",
        npm: "rebloom",
        description: "Type-safe React application state with zero setup.",
        tags: ["browser"],
      },
      {
        name: "use-change",
        repo: "finom/use-change",
        npm: "use-change",
        description: "An application-wide alternative to React.useState.",
        tags: ["browser"],
      },
      {
        name: "check-imports",
        repo: "finom/check-imports",
        npm: "check-imports",
        description: "Checks the imports in JS files and updates package.json dependencies.",
        tags: ["cli", "node"],
      },
      {
        name: "elegant-threading",
        repo: "finom/elegant-threading",
        npm: "elegant-threading",
        description: "Multi-threaded functions for Node.js and the browser.",
        tags: ["node", "browser"],
      },
      {
        name: "github-embed",
        repo: "finom/github-embed",
        npm: "github-embed",
        description: "Embeds code from GitHub on a web page.",
        tags: ["browser"],
      },
      {
        name: "deploy-to-git",
        repo: "finom/deploy-to-git",
        npm: "deploy-to-git",
        description: "Deploys build artifacts to a Git repository. Works with semantic-release and any CI service.",
        tags: ["cli", "node", "deployment"],
      },
      {
        name: "mongo-git-backup",
        repo: "finom/mongo-git-backup",
        npm: "mongo-git-backup",
        description: "Exports text dumps of a MongoDB database to a Git repository and restores them back.",
        tags: ["cli", "node"],
      },
      {
        name: "node-direct",
        repo: "finom/node-direct",
        npm: "node-direct",
        description:
          "Runs server-side JavaScript files as easily as PHP files on Apache (index.srv.js instead of index.php).",
        tags: ["cli", "node"],
      },
      {
        name: "fresh-up",
        repo: "finom/fresh-up",
        npm: "fresh-up",
        description: "Refreshes a Node.js module when its file changes. Made for node-direct.",
        tags: ["node"],
      },
      {
        name: "last-release-git",
        repo: "finom/last-release-git",
        npm: "last-release-git",
        description: "A semantic-release plugin for projects that aren't published to npm: Git tags hold the versions.",
        tags: ["node", "deployment"],
      },
      {
        name: "babel-plugin-transform-es2015-modules-simple-amd",
        repo: "finom/babel-plugin-transform-es2015-modules-simple-amd",
        npm: "babel-plugin-transform-es2015-modules-simple-amd",
        description: "Transforms ECMAScript 2015 modules into compact AMD.",
        tags: ["build"],
      },
      {
        name: "babel-plugin-transform-es2015-modules-simple-commonjs",
        repo: "finom/babel-plugin-transform-es2015-modules-simple-commonjs",
        npm: "babel-plugin-transform-es2015-modules-simple-commonjs",
        description: "Transforms ECMAScript 2015 modules into compact CommonJS.",
        tags: ["build"],
      },
      {
        name: "babel-plugin-transform-object-spread-inline",
        repo: "finom/babel-plugin-transform-object-spread-inline",
        npm: "babel-plugin-transform-object-spread-inline",
        description: 'Transforms object spread into fast "for" loops.',
        tags: ["build"],
      },
      {
        name: "babel-plugin-nofn",
        repo: "finom/babel-plugin-nofn",
        npm: "babel-plugin-nofn",
        description: 'An experimental Babel plugin that turns calls like nofn.forEach into fast "for" loops.',
        tags: ["build"],
      },
      {
        name: "babel-plugin-jsx-conditional-component",
        repo: "finom/babel-plugin-jsx-conditional-component",
        npm: "babel-plugin-jsx-conditional-component",
        description: (
          <>
            A fork of{" "}
            <a
              href="https://github.com/khmelevskii/babel-plugin-jsx-base-component"
              target="_blank"
              rel="noopener noreferrer"
            >
              babel-plugin-jsx-base-component
            </a>{" "}
            by Yurii Khmelevskii, made to support Babel 7.
          </>
        ),
        tags: ["build"],
      },
      {
        name: "css-dot-js-loader",
        repo: "finom/css-dot-js-loader",
        npm: "css-dot-js-loader",
        description: "A webpack loader that generates static CSS with JavaScript.",
        tags: ["build"],
      },
      {
        name: "eslint-plugin-output-todo-comments",
        repo: "finom/eslint-plugin-output-todo-comments",
        npm: "eslint-plugin-output-todo-comments",
        description: "An ESLint rule that reports warning comments and shows them as they are.",
        tags: ["node"],
      },
      {
        name: "vanillatree",
        repo: "finom/vanillatree",
        npm: "vanillatree",
        description: "A vanilla JS replacement for jstree: tree views of any depth without jQuery.",
        tags: ["browser"],
      },
      {
        name: "donut.js",
        repo: "finom/donutjs",
        npm: "donutjs",
        description: "Donut and pie charts in SVG, with a VML fallback for old browsers.",
        tags: ["browser"],
      },
    ],
  },
  {
    id: "defi",
    title: "defi.js",
    description: "A hard-fork of Matreshka.js with the framework parts removed.",
    projects: [
      {
        name: "defi",
        repo: "finom/defi",
        npm: "defi",
        description: "Utilities for accessor-based reactivity on JavaScript objects.",
        tags: ["browser", "node"],
      },
      {
        name: "defi-router",
        source: tree("finom/defi", "packages/router", "master"),
        npm: "defi-router",
        description: "Two-way data binding between object properties and parts of the URL.",
        tags: ["browser"],
      },
      {
        name: "defi-react",
        source: tree("finom/defi", "packages/react", "master"),
        npm: "defi-react",
        description: "React state management powered by defi.",
        tags: ["browser"],
      },
      {
        name: "defi.js.org",
        repo: "finom/defi.js.org",
        link: "https://defi.js.org",
        description: "The documentation, built from JSDoc.",
        tags: ["website", "documentation"],
      },
      {
        name: "common-binders",
        source: tree("finom/defi", "packages/common-binders", "master"),
        npm: "common-binders",
        description: "Binders for common cases: HTML, attributes, properties and more.",
        tags: ["browser"],
      },
      {
        name: "codemirror-binder",
        source: tree("finom/defi", "packages/codemirror-binder", "master"),
        npm: "codemirror-binder",
        description: "Binds a CodeMirror editor to an object property.",
        tags: ["browser"],
      },
      {
        name: "file-binders",
        source: tree("finom/defi", "packages/file-binders", "master"),
        npm: "file-binders",
        description: "Binders for reading files and drag'n'drop.",
        tags: ["browser"],
      },
    ],
  },
  {
    id: "altamoon",
    title: "Altamoon",
    description: "A desktop and web trading app for Binance Perpetual Futures.",
    projects: [
      {
        name: "altamoon",
        repo: "finom/altamoon",
        description: "The trading interface.",
        tags: [],
      },
      {
        name: "altamoon-plugins",
        repo: "finom/altamoon-plugins",
        description: "Official plugins for Altamoon.",
        tags: [],
      },
      {
        name: "altamoon-minicharts",
        repo: "finom/altamoon-minicharts",
        npm: "altamoon-minicharts",
        description: "Charts for every Binance Perpetual Futures market on one page.",
        tags: ["browser"],
      },
    ],
  },
  {
    id: "circlecell",
    title: "Circlecell",
    description: (
      <>
        Tools made for the{" "}
        <a href="https://github.com/circlecell" target="_blank" rel="noopener noreferrer">
          Circlecell
        </a>{" "}
        org.
      </>
    ),
    projects: [
      {
        name: "jscompress.com",
        repo: "circlecell/jscompress.com",
        link: "https://jscompress.com",
        description: "An online JavaScript compressor that works fully on the client side.",
        tags: ["website"],
      },
      {
        name: "jsoncompare.com",
        link: "https://jsoncompare.com",
        description: "An advanced JSON linter, built on community feedback.",
        tags: ["website"],
      },
      {
        name: "randomkeygen.com",
        link: "https://randomkeygen.com",
        description: "Random keys and passwords for securing applications, services and devices.",
        tags: ["website"],
      },
      {
        name: "dns-lookup.com",
        link: "https://dns-lookup.com",
        description: "Finds the IP address of a domain and its DNS records: A, MX, NS, SOA, TXT.",
        tags: ["website"],
      },
    ],
  },
];
