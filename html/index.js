import React from 'react';
import ReactDOMServer from 'react-dom/server';
import IconDefs from './IconDefs';
import data from '../data';
import tagDefs from '../data/tagDefs';
import Section from './Section';

const Index = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Open Source Projects made by Andrey Gubanov</title>
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,900&display=swap" rel="stylesheet" />
    </head>

    <body>
      <IconDefs />
      <div className="container">
        <h1 className="twelve columns">
          <span className="total-downloads">Checking...</span>
          <span className="total-stars">Checking...</span>

          Open Source Projects
          <span>
            by
            {' '}
            <a href="http://gubanov.eu" target="_blank" rel="noopener noreferrer">
              Andrey Gubanov
            </a>
          </span>
        </h1>
        <div className="filters">
          Show:
          <a className="filter-tag active" data-tag="all">All</a>
          {Object.entries(tagDefs).map(([tag, displayName]) => (
            <a key={tag} className="filter-tag" data-tag={tag}>
              {tag === 'highlight' ? '♥ ' : ''}
              {displayName}
            </a>
          ))}
        </div>

        <Section items={data.general} />
        <Section
          items={data.seemple}
          title="Seemple.js"
          description={(
            <>
              Seemple.js (previously called Matreshka.js) is a reactive framework developed by me.
              It&#39;s inspired by Backbone (if you remember what Backbone is)
              and follows reactive principles.
              Today it&#39;s not widely used but it still can be a
              good starting point for JavaScript juniors.
            </>
        )}
        />

        <Section
          items={data.defi}
          title="defi.js"
          description={(
            <>
              This is a hard-fork of Seemple.js where all framework-ish features were removed.
            </>
        )}
        />

        <Section
          items={data.circlecell}
          title="Circlecell"
          description={(
            <>
              Projects created for
              {' '}
              <a href="https://github.com/circlecell" target="_blank" rel="noopener noreferrer">
                Circlecell
              </a>
              {' '}
              company.
            </>
        )}
        />
      </div>
      <script dangerouslySetInnerHTML={{
        __html: `
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                ga('create', 'UA-12418613-10', 'auto');
                ga('send', 'pageview');
            `,
      }}
      />
    </body>
  </html>
);

export default () => {
  const html = ReactDOMServer.renderToStaticMarkup(<Index />);
  return `<!DOCTYPE html>${html}`;
};
