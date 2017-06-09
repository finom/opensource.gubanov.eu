import React from 'react';

export default [{
    name: 'mongo-git-backup',
    description: 'The tool exports text dumps (via mongoexport) of given MongoDB database to given Git repository and restores them back (via mongoimport). ',
    npm: 'mongo-git-backup',
    tags: ['cli', 'node'],
}, {
    name: 'github-embed',
    description: 'This tool allows to embed code from Github on a webpage (originally you could embed Github Gists only).',
    npm: 'github-embed',
    tags: ['browser'],
}, {
    name: 'bala',
    description: <span>
        A function for elements selections (in other words a tiny jQuery alternative)
        in less than &#8539; of a kilobyte.
    </span>,
    npm: 'balajs',
    tags: ['browser'],
}, {
    name: 'deploy-to-git',
    description: 'The tool makes possible to automatically or manually deploy build artifacts to a Git repository. The tool works great with semantic-release and any CI service.',
    npm: 'deploy-to-git',
    tags: ['cli', 'node', 'deployment'],
}, {
    name: 'node-direct',
    description: 'The tool allows to run server-side JavaScript files via NodeJS as easily as PHP files via Apache (like index.php but index.srv.js instead). Express.js is used as a core.',
    npm: 'deploy-to-git',
    tags: ['cli', 'node'],
}, {
    name: 'fresh-up',
    description: <span>
        Refreshes NodeJS module object when its file is modified. The function is originally created for{' '}
        <a href="https://github.com/finom/node-direct" target="_blank" rel="noopener noreferrer">node-direct</a>.
    </span>,
    npm: 'fresh-up',
    tags: ['node'],
}, {
    name: 'last-release-git',
    description: <span>
        A plugin for <a href="https://github.com/semantic-release/semantic-release" target="_blank" rel="noopener noreferrer">semantic-release</a>. It&#39;s made for projects which must not be published at NPM (any private project). Instead, it uses Git tags for versioning.
    </span>,
    npm: 'last-release-git',
    tags: ['node', 'deployment'],
}, {
    name: 'opensource.gubanov.eu',
    description: 'This website. Is built automatically on Travis CI using html-webpack-plugin and react-dom/server.',
    link: 'http://opensource.gubanov.eu',
    tags: ['website'],
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
    description: 'The plugin transforms object spread syntax into fast "for" loops with no need to use Object.assign or other functions.',
    npm: 'babel-plugin-transform-es2015-modules-simple-commonjs',
    tags: ['build'],
}, {
    name: 'eslint-plugin-output-todo-comments',
    description: 'A plugin for ESLint which contains a single rule. It warns about used "warning" comments and shows them as they are.',
    npm: 'eslint-plugin-output-todo-comments',
    tags: ['node'],
}, {
    name: 'babel-plugin-nofn',
    description: 'Quite experimental plugin for Babel. It converts function calls (like nofn.forEach) into fast "for" loops.',
    npm: 'babel-plugin-nofn',
    tags: ['build'],
}];
