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
            <title>Open Source Projects made by Andrey Gubanov</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto:400" rel="stylesheet" />
        </head>

        <body>
            <IconDefs />
            <div className="container">
                <h1 className="twelve columns">
                    Open Source Projects
                    <span>
                        by{' '}
                        <a href="http://gubanov.eu" target="_blank" rel="noopener noreferrer">
                            Andrey Gubanov
                        </a>
                    </span>
                </h1>
                <div className="row">
                    {data.general.map(({ name, description, npm, tags, link }) => (
                        <Tile {...{ name, description, npm, tags, link, owner: 'finom' }} />
                    ))}
                </div>
                <h2 className="twelve columns">Matreshka.js</h2>
                <p>
                    Matreshka.js is created by me when the maket used Knockout and
                    Backbone frameworks which I didn&#39;t like.
                    This is the first (or at least one of the first) famous JavaScript
                    framework made by somebody from exUSSR.
                </p>
                <div className="row">
                    {data.matreshka.map(({ name, description, npm, tags, owner, link }) => (
                        <Tile {...{ name, description, npm, tags, owner, link }} />
                    ))}
                </div>
                <h2 className="twelve columns">Circlecell</h2>
                <p>
                    Projects created for{' '}
                    <a href="https://github.com/circlecell" target="_blank" rel="noopener noreferrer">
                        Circlecell
                    </a>.
                </p>
                <div className="row">
                    {data.circlecell.map(({ name, description, npm, tags, owner, link }) => (
                        <Tile {...{ name, description, npm, tags, owner, link }} />
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
