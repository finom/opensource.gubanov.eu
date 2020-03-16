import React from 'react';

export default ({
  name,
  description,
  npm,
  tags,
  owner,
  link,
}) => (
  <div className="tile" id={`project-${name}`}>
    <div className="links">
      <a href={`https://github.com/${owner}/${name}`} className="github" target="_blank" rel="noopener noreferrer">
        <svg height="16" viewBox="0 0 16 16">
          <use href="#github" />
        </svg>
        {name}
      </a>

      <Base
        component="a"
        exists={npm}
        href={`https://www.npmjs.com/package/${npm}`}
        className="npm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="40" viewBox="0 0 18 7">
          <use href="#npm" />
        </svg>
      </Base>

      <Base
        component="a"
        exists={link}
        href={link}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>

    <div className="description">
      {description}
    </div>

    <div className="tags">
      {tags.map((tag) => (
        <span className={`tag ${tag}`}>
          {({
            cli: 'CLI',
            deployment: 'Deployment',
            node: 'NodeJS',
            browser: 'Browser',
            website: 'Website',
            example: 'Example',
            build: 'Build',
          })[tag]}
        </span>
      ))}
      <span className="stars" />
    </div>
  </div>
);
