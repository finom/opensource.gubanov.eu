import React from 'react';

export default [{
  name: 'opensource.gubanov.eu',
  description: (
    <span>
      This page. Designed by
      {' '}
      <a href="https://github.com/alexkolodko" target="_blank" rel="noopener noreferrer">Alex Kolodko</a>
      .
      Deployed to Github Pages with another project I&apos;ve developed
      {' '}
      <a href="https://github.com/finom/deploy-to-git">deploy-to-git</a>
      .
    </span>
  ),
  link: 'http://opensource.gubanov.eu',
  tags: ['website'],
}, {
  name: 'tailwind-to-object',
  description: 'A tool that converts Tailwind CSS classes to JavaScript objects.',
  npm: 'tailwind-to-object',
  tags: ['highlight', 'browser', 'node'],
}, {
  name: 'use-change',
  description: 'The one "keep it stupid simple" React hook for application state.',
  npm: 'use-change',
  tags: ['browser'],
}, {
  name: 'rebloom',
  description: 'Another experimental React state library to try alternative syntax for React hooks.',
  npm: 'rebloom',
  tags: ['browser'],
}, {
  name: 'mongo-git-backup',
  description: 'The tool exports text dumps (via mongoexport) of a MongoDB database to a Git repository and restores them back (via mongoimport).',
  npm: 'mongo-git-backup',
  tags: ['cli', 'node'],
}, {
  name: 'github-embed',
  description: 'This tool allows to embed code from Github on a webpage.',
  npm: 'github-embed',
  tags: ['browser'],
}, {
  name: 'tsimmes',
  description: (
    <span>
      A function for elements selections (in other words a tiny jQuery alternative)
      in less than ¼ of a kilobyte.
    </span>
  ),
  npm: 'balajs',
  tags: ['highlight', 'browser'],
}, {
  name: 'deploy-to-git',
  description: 'The tool deploys build artifacts to a Git repository. Works great with semantic-release and any CI service.',
  npm: 'deploy-to-git',
  tags: ['highlight', 'cli', 'node', 'deployment'],
}, {
  name: 'node-direct',
  description: 'The tool allows to run server-side JavaScript files via NodeJS as easily as PHP files via Apache (like index.php but index.srv.js instead). Express.js is used as a core.',
  npm: 'node-direct',
  tags: ['cli', 'node'],
}, {
  name: 'fresh-up',
  description: (
    <span>
      Refreshes NodeJS module object when its file is modified.
      The function is originally created for
      {' '}
      <a href="https://github.com/finom/node-direct" target="_blank" rel="noopener noreferrer">node-direct</a>
      .
    </span>
  ),
  npm: 'fresh-up',
  tags: ['node'],
}, {
  name: 'last-release-git',
  description: (
    <span>
      A plugin for semantic-release.
      It&#39;s made for projects which shouldn&#39;t be published at NPM (any private project).
      Instead, it uses Git tags for versioning.
    </span>
  ),
  npm: 'last-release-git',
  tags: ['node', 'deployment'],
}, {
  name: 'babel-plugin-transform-es2015-modules-simple-amd',
  description: 'The plugin transforms ECMAScript 2015 modules into compact AMD form.',
  npm: 'babel-plugin-transform-es2015-modules-simple-amd',
  tags: ['build'],
}, {
  name: 'babel-plugin-transform-es2015-modules-simple-commonjs',
  description: 'The plugin transforms ECMAScript 2015 modules into compact CommonJS form.',
  npm: 'babel-plugin-transform-es2015-modules-simple-commonjs',
  tags: ['build'],
}, {
  name: 'babel-plugin-transform-object-spread-inline',
  description: 'The plugin transforms object spread syntax into fast "for" loops.',
  npm: 'babel-plugin-transform-es2015-modules-simple-commonjs',
  tags: ['build'],
}, {
  name: 'eslint-plugin-output-todo-comments',
  description: 'A plugin for ESLint which contains a single rule. It warns about used "warning" comments and shows them as they are.',
  npm: 'eslint-plugin-output-todo-comments',
  tags: ['node'],
}, {
  name: 'babel-plugin-nofn',
  description: 'An experimental plugin for Babel. It converts function calls (like nofn.forEach) into fast "for" loops.',
  npm: 'babel-plugin-nofn',
  tags: ['build'],
}, {
  name: 'css-dot-js-loader',
  description: 'A Webpack loader that allows to generate static CSS code via JavaScript.',
  npm: 'css-dot-js-loader',
  tags: ['build'],
}, {
  name: 'elegant-threading',
  description: 'A straightforward definition of multi-threaded functions for NodeJS and browser.',
  npm: 'elegant-threading',
  tags: ['node', 'browser'],
},
{
  name: 'check-imports',
  description: 'Check imports in JS files and update package.json dependencies automatically.',
  npm: 'check-imports',
  tags: ['highlight', 'cli'],
},
{
  name: 'babel-plugin-jsx-conditional-component',
  description: (
    <span>
      The plugin is a fork of
      {' '}
      <a href="https://github.com/khmelevskii/babel-plugin-jsx-base-component">babel-plugin-jsx-base-component</a>
      {' '}
      made by
      {' '}
      <a href="https://github.com/khmelevskii">Yurii Khmelvskii</a>
      . Originally it was forked to add support for Babel 7.
    </span>
  ),
  npm: 'babel-plugin-jsx-conditional-component',
  tags: ['build'],
}];
