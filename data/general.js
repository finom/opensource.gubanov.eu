import React from 'react';

export default [{
    name: 'mongo-git-backup',
    description: 'The tool exports text dump (via mongoexport) of given MongoDB database to given Git repository and restores it back (via mongoimport). ',
    npm: 'mongo-git-backup',
    tags: ['cli', 'node']
}, {
    name: 'github-embed',
    description: 'This tool allows to embed code from Github on a webpage (originally you could embed Github Gitsts only).',
    npm: 'github-embed',
    tags: ['browser']
}, {
    name: 'bala',
    description: <span>A function for elements selections (in other words tiny jQuery alternative) in less than &#8539; of a kilobyte.</span>,
    npm: 'balajs',
    tags: ['browser']
}, {
    name: 'deploy-to-git',
    description: 'The tool makes possible to automatically or manually deploy build artifacts to a Git repository. The tool works great with semantic-release and any CI service.',
    npm: 'deploy-to-git',
    tags: ['cli', 'node', 'ci']
}, {
    name: 'node-direct',
    description: 'The tool allows to run server-side JavaScript files via NodeJS as easily as PHP files via Apache (like index.php but index.srv.js instead).',
    npm: 'deploy-to-git',
    tags: ['cli', 'node']
}, {
    name: 'fresh-up',
    description: <span>
        Refreshes NodeJS module object when its file is modified. The function is originally created for{' '}
        <a href="https://github.com/finom/node-direct" target="_blank">node-direct</a>.
    </span>,
    npm: 'fresh-up',
    tags: ['node']
}, {
    name: 'last-release-git',
    description: <span>
        A plugin for <a href="https://github.com/semantic-release/semantic-release" target="_blank">semantic-release</a>. It's made for projects which must not be published at NPM (any private project). Instead, it uses Git tags for versioning.
    </span>,
    npm: 'last-release-git',
    tags: ['node', 'ci']
}];
