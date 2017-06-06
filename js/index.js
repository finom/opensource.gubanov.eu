['finom', 'matreshkajs', 'circlecell'].forEach(async (owner) => {
    const resp = await(
        await fetch(`https://api.github.com/users/${owner}/repos`)
    ).json();

    for(const { name, stargazers_count } of resp) {
        const tile = document.getElementById(`project-${name}`);

        if(tile) {
            tile.querySelector('.stars').textContent = stargazers_count;
        }
    }
});
