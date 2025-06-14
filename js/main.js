// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize managers based on current page
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];

    switch(currentPage) {
        case 'games':
            if (document.getElementById('games-container')) {
                new GameManager();
            }
            break;
        case 'devlog':
            if (document.getElementById('news-container')) {
                new DevlogManager();
            }
            break;
        case 'index':
        case '':
            // Initialize homepage features
            initHomepage();
            break;
    }

    // Initialize meta manager for all pages
    new MetaManager();
});

function initHomepage() {
    // Display featured games on homepage
    if (document.getElementById('featured-games')) {
        const featuredGames = gamesData.current.slice(0, 4); // Show first 4 games
        const featuredHTML = featuredGames.map(game => createFeaturedGameCard(game)).join('');
        document.getElementById('featured-games').innerHTML = featuredHTML;
    }
}

function createFeaturedGameCard(game) {
    return `
        <div class="featured-game">
            <img src="assets/images/games/${game.id}/${game.images[0]}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <a href="pages/games/${game.id}.html" class="btn">Learn More</a>
        </div>
    `;
}