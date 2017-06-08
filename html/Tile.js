import React from 'react';

export default ({
    name,
    description,
    npm,
    tags,
    owner
}) => (
    <div className="tile" id={`project-${name}`}>
        <div className="links">
            <a href={`https://github.com/${owner}/${name}`} className="github" target="_blank" rel="noopener noreferrer">
                <svg height="16" viewBox="0 0 16 16">
                    <use href="#github" />
                </svg>
                {name}
            </a>
            <a href={`https://www.npmjs.com/package/${npm}`} className="npm" target="_blank" rel="noopener noreferrer">
                <svg width="40" viewBox="0 0 18 7">
                    <use href="#npm" />
                </svg>
            </a>
        </div>

        <div className="description">
            {description}
        </div>

        <div className="tags">
            {tags.map(tag => (
                <span className={`tag ${tag}`}>
                    {({
                        cli: 'CLI',
                        ci: 'CI',
                        node: 'NodeJS',
                        browser: 'Browser'
                    })[tag]}
                </span>
            ))}
            <span className="stars" />
        </div>
    </div>
);
