import React from 'react';

import tagDefs from '../data/tagDefs';

export default ({
  name,
  description,
  npm,
  tags,
  owner,
  link,
  githubLink,
  starsName,
}) => (
  <div className="tile" id={`project-${name}`} data-take-stars={starsName || name} data-tags={tags.join(',')}>
    <div className="links">
      <a href={githubLink || `https://github.com/${owner}/${name}`} title={name} className="github" target="_blank" rel="noopener noreferrer">
        <svg height="22" viewBox="0 0 16 16">
          <use href="#github" />
        </svg>
        <span className="text">{name}</span>
      </a>

      <Base
        component="a"
        href={npm ? `https://www.npmjs.com/package/${npm}` : link}
        className="home"
        exists={npm || link}
      >
        {npm ? 'NPM' : 'LINK'}
      </Base>
      {/* <Base
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
      */}
    </div>

    <div className="description">
      {description}
    </div>

    <div className="tags">
      {tags.map((tag) => (
        <span className={`tag ${tag}`}>
          {tagDefs[tag]}
        </span>
      ))}
      <span className="stars" />
    </div>
  </div>
);
