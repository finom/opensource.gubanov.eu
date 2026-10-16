export const tags = {
  highlight: "Maintained",
  cli: "CLI Tool",
  deployment: "Deployment Tool",
  node: "Node.js",
  browser: "Browser",
  website: "Website",
  build: "Build Tool",
  documentation: "Documentation",
} as const;

export type Tag = keyof typeof tags;
