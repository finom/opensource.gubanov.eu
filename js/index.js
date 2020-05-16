['finom', 'defi', 'circlecell'].forEach(async (owner) => {
  const resp = await (
    await fetch(`https://api.github.com/users/${owner}/repos`)
  ).json();

  for (const { name, stargazers_count: stargazers } of resp) {
    const tile = document.getElementById(`project-${name}`);

    if (tile) {
      tile.querySelector('.stars').textContent = stargazers;
    }
  }
});

const filterTags = [...document.querySelectorAll('.filter-tag')];
filterTags.forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    const { tag } = target.dataset;

    filterTags.forEach(
      (filterTag) => filterTag.classList.toggle('active', filterTag.dataset.tag === tag)
    );

    [...document.querySelectorAll('.tile')].forEach((tile) => {
      // eslint-disable-next-line no-param-reassign
      tile.style.display = (tag === 'all' || tile.dataset.tags.split(',').includes(tag)) ? '' : 'none';
    });
  });
});
