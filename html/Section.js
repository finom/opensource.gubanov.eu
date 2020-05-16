import React from 'react';

import Tile from './Tile';

const Section = ({ title, description, items }) => (
  <section data-all-tags={[...new Set(items.map(({ tags }) => tags).flat())].join(',')}>
    <Base exists={title} component="h2" className="twelve columns">{title}</Base>
    <Base exists={description} component="p" className="section-description">
      {description}
    </Base>
    <div className="row">
      {items.map((item) => (
        <Tile {...item} />
      ))}
    </div>
  </section>
);

export default Section;
