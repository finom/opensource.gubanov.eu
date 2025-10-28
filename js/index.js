(async () => {
  let totalStars = 0;
  const table = [];
  await Promise.all(['finom'].map(async (owner) => {
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
      table.push({ name, stargazers });
      const tile = document.querySelector(`[data-take-stars="${name}"]`);
      totalStars += stargazers;
      if (tile) {
        tile.querySelector('.stars').textContent = stargazers;
      }
    }
  }));

  if (totalStars > 0) {
    document.querySelector('.total-stars').textContent = `★ ${totalStars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  }

  table.sort((a, b) => b.stargazers - a.stargazers);
  console.table(table);
})();


(async () => {
  const { objects } = await (
    await fetch('https://registry.npmjs.org/-/v1/search?text=maintainer:finom&size=100')
  ).json();
  const allDownloads = await Promise.all(objects.map(async ({ package: { name } }) => {
    const { downloads } = await (
      await fetch(`https://api.npmjs.org/downloads/range/last-month/${name}`)
    ).json();

    return downloads.reduce((a, { downloads: d }) => d + a, 0);
  }));

  const downloadsTotal = allDownloads.reduce((a, c) => c + a, 0);

  document.querySelector('.total-downloads').textContent = `⬆ ${downloadsTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
})();


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
