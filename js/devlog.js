// js/devlog.js
class DevlogManager {
    constructor() {
        this.news = newsData;
        this.init();
    }

    init() {
        this.renderNews();
        this.setupFilters();
    }

    renderNews() {
        const container = document.getElementById('news-container');
        if (!container) return;

        const newsHTML = this.news.map(news => this.createNewsItem(news)).join('');
        container.innerHTML = newsHTML;
    }

    createNewsItem(news) {
        return `
            <article class="news-item" data-category="${news.category}">
                <div class="news-header">
                    <h3>${news.title}</h3>
                    <div class="news-meta">
                        <span class="date">${this.formatDate(news.date)}</span>
                        <span class="category ${news.category}">${news.category}</span>
                    </div>
                </div>
                <div class="news-content">
                    <p>${news.content}</p>
                    ${news.image ? `<img src="assets/images/news/${news.image}" alt="${news.title}">` : ''}
                </div>
                <div class="news-tags">
                    ${news.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </article>
        `;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    setupFilters() {
        const filterButtons = document.querySelectorAll('.news-filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterNews(e.target.dataset.filter);
            });
        });
    }

    filterNews(filter) {
        const newsItems = document.querySelectorAll('.news-item');
        newsItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}