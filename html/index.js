import React from 'react';
import ReactDOMServer from 'react-dom/server';
import IconDefs from './IconDefs';
import Tile from './Tile';
import data from '../data';

const Index = () => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>Hell yeah</title>
        </head>

        <body>
            <IconDefs />
            <div className="container">
                <h1 className="twelve columns">Open Source Projects made by Andrey Gubanov</h1>
                <p>This page contains my open source portfolio. Blah blah lorem ipsum.</p>
                <div className="row">
                    {data.general.map(({ name, description, npm, tags }) => (
                        <Tile {...{ name, description, npm, tags, owner: 'finom' }} />
                    ))}
                </div>
                <h2 className="twelve columns">Open Source Projects made by Andrey Gubanov</h2>
                <p>This page contains my open source portfolio. Blah blah lorem ipsum.</p>
                <div className="row">
                    {data.general.map(({ name, description, npm, tags }) => (
                        <Tile {...{ name, description, npm, tags, owner: 'finom' }} />
                    ))}
                </div>
            </div>
        </body>
    </html>
);

module.exports = () => {
    const html = ReactDOMServer.renderToStaticMarkup(<Index />);
    return `<!DOCTYPE html>${html}`;
};
