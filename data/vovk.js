export default [{
  name: 'vovk',
  description: 'The main library that\'s going to be used in production. It provides a wrapper for Next.js API routes, client-side RPC tooling, utilities and types.',
  tags: ['highlight', 'node'],
  npm: 'vovk',
},
{
  name: 'vovk.dev',
  description: 'Vovk.ts documentation.',
  link: 'https://vovk.dev',
  tags: ['highlight', 'website', 'documentation'],
},
{
  name: 'vovk-zod',
  githubLink: 'https://github.com/finom/vovk/tree/main/packages/vovk-zod',
  description: 'Zod validation library for Vovk.ts.',
  tags: ['highlight', 'node'],
  npm: 'vovk-zod',
}, {
  name: 'vovk-yup',
  githubLink: 'https://github.com/finom/vovk/tree/main/packages/vovk-yup',
  description: 'Yup validation library for Vovk.ts.',
  tags: ['node'],
  npm: 'vovk-yup',
}, {
  name: 'vovk-ajv',
  githubLink: 'https://github.com/finom/vovk/tree/main/packages/vovk-ajv',
  description: 'Ajv client-side validation for Vovk.ts.',
  tags: ['highlight', 'browser'],
  npm: 'vovk-ajv',
}, {
  name: 'vovk-dto',
  githubLink: 'https://github.com/finom/vovk/tree/main/packages/vovk-dto',
  description: 'class-validator library for Vovk.ts.',
  tags: ['highlight', 'node', 'browser'],
  npm: 'vovk-dto',
}, {
  name: 'vovk-apis',
  githubLink: 'https://github.com/finom/vovk/tree/main/packages/vovk-apis',
  description: 'Alternative clients for most common APIs.',
  tags: ['highlight', 'node'],
  npm: 'vovk-apis',
}, {
  name: 'vovk-cli',
  githubLink: 'https://github.com/finom/vovk/tree/main/packages/vovk-cli',
  description: 'The Vovk.ts CLI that will be used as a devDependency in a Vovk.ts app.',
  tags: ['highlight', 'node', 'cli'],
  npm: 'vovk-cli',
}, {
  name: 'vovk-client',
  githubLink: 'https://github.com/finom/vovk/tree/main/packages/vovk-client',
  description: 'A module that re-exports generated client from node_modules/.vovk-client.',
  tags: ['highlight', 'browser'],
  npm: 'vovk-client',
}, {
  name: 'vovk-python',
  githubLink: 'https://github.com/finom/vovk/tree/main/packages/vovk-python',
  description: 'Provides template files and necessary utilities to generate Python/mypy client.',
  tags: ['highlight', 'cli'],
  npm: 'vovk-python',
}, {
  name: 'vovk-rust',
  githubLink: 'https://github.com/finom/vovk/tree/main/packages/vovk-rust',
  description: 'Provides template files and necessary utilities to generate Rust client.',
  tags: ['highlight', 'cli'],
  npm: 'vovk-rust',
}, {
  name: 'vovk-init',
  githubLink: 'https://github.com/finom/vovk/tree/main/packages/vovk-init',
  description: 'A setup wizard for a Vovk.ts project. Updates tsconfig.json with experimentalDecorators, updates NPM scripts, creates config file and installs the necessary dependencies.',
  tags: ['highlight', 'node'],
  npm: 'vovk-init',
}, {
  name: 'vovk-examples',
  link: 'https://examples.vovk.dev',
  description: 'Random examples and proofs-of-concepts created with Vovk.ts.',
  tags: ['highlight', 'website', 'documentation'],
}, {
  name: 'vovk-multitenant-example',
  description: 'A multi-tenant example using Vovk.ts.',
  link: 'https://multitenant.vovk.dev',
  tags: ['highlight', 'website'],
}, {
  name: 'vovk-react-native-example',
  description: 'A React Native example using Vovk.ts.',
  tags: [],
}, {
  name: 'vovk-perf-test',
  description: 'Overhead performance tests for Vovk.ts over plain Next.js API routes.',
  link: 'https://vovk.dev/performance',
  tags: ['highlight'],
}, {
  name: 'vovk-hello-world',
  link: 'https://hello-world.vovk.dev',
  description: 'A "Hello World" example using Vovk.ts. Demonstrates a JSON endpoint, a JSONLines endpoint, OpenAPI spec generation, publishing to NPM/PyPi/Crates, etc.',
  tags: ['highlight', 'website'],
}, {
  name: 'vovk-kanban-demo',
  link: 'https://kanban.vovk.dev',
  description: 'A Kanban board demo using Vovk.ts with AI capabilities, such as function calling, real-time UI etc.',
  tags: ['highlight', 'website'],
}];

/*
vovk-ajv
fix: BREAKING rename generatorConfig config key to outputConfig
yesterday
vovk-apis
fix: BREAKING rename generatorConfig config key to outputConfig
yesterday
vovk-cli
fix: BREAKING rename generatorConfig config key to outputConfig
yesterday
vovk-client
doc: Update READMEs
last week
vovk-dto
fix: BREAKING rename generatorConfig config key to outputConfig
yesterday
vovk-init
doc: Update READMEs
last week
vovk-python
fix: BREAKING rename generatorConfig config key to outputConfig
yesterday
vovk-rust
fix: BREAKING rename generatorConfig config key to outputConfig
yesterday
vovk-yup
feat: BREAKING make bundle library-agnostic
3 days ago
vovk-zod
feat: BREAKING make bundle library-agnostic
3 days ago
vovk
*/
