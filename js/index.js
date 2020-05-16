['finom', 'circlecell'].forEach(async (owner) => {
  let resp;
  try {
    resp = await (
      await fetch(`https://api.github.com/users/${owner}/repos?per_page=100`)
    ).json();

    localStorage[`latestGithubResp_${owner}`] = JSON.stringify(resp);
  } catch (e) {
    resp = JSON.parse(localStorage[`latestGithubResp_${owner}`] || '[]');
  }


  for (const { name, stargazers_count: stargazers } of resp) {
    const tile = document.querySelector(`[data-take-stars="${name}"]`);

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

    [...document.querySelectorAll('section')].forEach((tile) => {
      // eslint-disable-next-line no-param-reassign
      tile.style.display = (tag === 'all' || tile.dataset.allTags.split(',').includes(tag)) ? '' : 'none';
    });
  });
});
