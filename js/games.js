// js/games.js
class GameManager {
    constructor() {
        this.games = gamesData;
        this.init();
    }

    init() {
        this.renderGamesList();
        this.setupFilters();
    }

    renderGamesList() {
        const container = document.getElementById('games-container');
        const gamesHTML = this.games.current.map(game => this.createGameCard(game)).join('');
        container.innerHTML = gamesHTML;
    }

    createGameCard(game) {
        return `
            <div class="game-card" data-tags="${game.tags.join(',')}" data-status="${game.status}" data-genre="${game.genre.toLowerCase().replace(/[^a-z0-9]/g, '-')}">
                <div class="game-image">
                    <img src="assets/images/games/${game.id}/${game.images[0]}" alt="${game.title}" loading="lazy">
                </div>
                <div class="game-info">
                    <span class="game-status ${game.status}">${game.status.replace('-', ' ')}</span>
                    <h3>${game.title}</h3>
                    <div class="game-genre">${game.genre}</div>
                    <p>${game.description}</p>
                    
                    ${game.features ? `
                        <div class="game-features">
                            <h4>Key Features:</h4>
                            <div class="feature-list">
                                ${game.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="game-tags">
                        ${game.tags.map(tag => `<span class="tag ${tag}">${tag}</span>`).join('')}
                    </div>
                    
                    <div class="game-platforms">
                        <strong>Platforms:</strong> ${game.platforms.join(', ')}
                    </div>
                    
                    <div class="game-links">
                        ${this.createDownloadLinks(game.downloadLinks)}
                        <a href="pages/games/${game.id}.html" class="download-link info">Learn More</a>
                    </div>
                </div>
            </div>
        `;
    }

    createDownloadLinks(links) {
        return Object.entries(links).map(([platform, url]) =>
            `<a href="${url}" class="download-link ${platform}" target="_blank" rel="noopener">${this.getPlatformName(platform)}</a>`
        ).join('');
    }

    getPlatformName(platform) {
        const platformNames = {
            'steam': 'Steam',
            'itch': 'Itch.io',
            'google-play': 'Google Play',
            'app-store': 'App Store'
        };
        return platformNames[platform] || platform;
    }

    setupFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');

                this.filterGames(e.target.dataset.filter);
            });
        });
    }

    filterGames(filter) {
        const gameCards = document.querySelectorAll('.game-card');
        gameCards.forEach(card => {
            const shouldShow = filter === 'all' ||
                card.dataset.tags.includes(filter) ||
                card.dataset.status === filter ||
                card.dataset.genre === filter;

            card.style.display = shouldShow ? 'block' : 'none';
        });
    }
}