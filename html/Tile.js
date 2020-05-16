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
      <a href={githubLink || `https://github.com/${owner || 'finom'}/${name}`} title={name} className="github" target="_blank" rel="noopener noreferrer">
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
        target="_blank"
        rel="noopener noreferrer"
      >
        {npm ? 'NPM' : 'LINK'}
      </Base>
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
