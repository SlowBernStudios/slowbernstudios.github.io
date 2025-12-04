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
        const slugify = (value = '') => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const tags = Array.isArray(game.tags) ? game.tags.map(tag => slugify(tag)) : [];
        const platforms = Array.isArray(game.platforms) ? game.platforms.map(platform => slugify(platform)) : [];
        const platformLabel = Array.isArray(game.platforms) ? game.platforms.join(', ') : '';
        const hasImages = Array.isArray(game.images) && game.images.length > 0;
        const imageSrc = hasImages
            ? `assets/images/games/${game.id}/${game.images[0]}`
            : 'assets/images/games/placeholder.svg';
        const tagMarkup = Array.isArray(game.tags) && game.tags.length
            ? game.tags.map(tag => `<span class="tag ${slugify(tag)}">${tag}</span>`).join('')
            : '';
        const platformMarkup = platformLabel
            ? `<div class="game-platforms"><strong>Platforms:</strong> ${platformLabel}</div>`
            : '';
        return `
            <div class="game-card" data-status="${slugify(game.status)}" data-genre="${slugify(game.genre)}" data-tags="${tags.join(',')}" data-platforms="${platforms.join(',')}">
                <div class="game-image">
                    <img src="${imageSrc}" alt="${game.title}" loading="lazy">
                </div>
                <div class="game-info">
                    <span class="game-status ${slugify(game.status)}">${(game.status || '').replace('-', ' ')}</span>
                    <h3>${game.title}</h3>
                    <div class="game-genre">${game.genre}</div>
                    <p>${game.description}</p>
                    ${tagMarkup ? `<div class="game-tags">${tagMarkup}</div>` : ''}
                    ${platformMarkup}
                    <div class="game-links">
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
        const normalizedFilter = (filter || '').toLowerCase();
        const gameCards = document.querySelectorAll('.game-card');
        gameCards.forEach(card => {
            if (normalizedFilter === 'all') {
                card.style.display = 'block';
                return;
            }

            const tags = (card.dataset.tags || '').toLowerCase().split(',').filter(Boolean);
            const platforms = (card.dataset.platforms || '').toLowerCase().split(',').filter(Boolean);
            const status = (card.dataset.status || '').toLowerCase();
            const genre = (card.dataset.genre || '').toLowerCase();

            const matches = tags.includes(normalizedFilter) ||
                platforms.includes(normalizedFilter) ||
                status === normalizedFilter ||
                genre === normalizedFilter;

            card.style.display = matches ? 'block' : 'none';
        });
    }
}
