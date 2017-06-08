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
                <h1 className="twelve columns">Open Source Projects made by Andrey Gubanov (the page is under development yet)</h1>
                <div className="row">
                    {data.general.map(({ name, description, npm, tags }) => (
                        <Tile {...{ name, description, npm, tags, owner: 'finom' }} />
                    ))}
                </div>
                <h2 className="twelve columns">Matreshka.js</h2>
                <p>Matreshka.js is one big project with long history. This is the first (or at least one of the first) famous JavaScript framework made by somebody from exUSSR.</p>
                <div className="row">
                    {data.matreshka.map(({ name, description, npm, tags }) => (
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
