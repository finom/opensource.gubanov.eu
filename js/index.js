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
