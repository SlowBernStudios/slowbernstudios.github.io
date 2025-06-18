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
            <article class="news-item ${news.featured ? 'featured' : ''}" data-category="${news.category}">
                <div class="news-header">
                    <h3>${news.title}</h3>
                    <div class="news-meta">
                        <span class="date">${this.formatDate(news.date)}</span>
                        <span class="category ${news.category}">${news.category}</span>
                    </div>
                </div>
                <div class="news-content">
                    ${news.content}
                </div>
                <div class="news-tags">
                    ${news.tags ? news.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                </div>
                ${news.image ? `<img src="assets/images/blog/${news.image}" alt="${news.title}" class="news-image">` : ''}
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

                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
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

// Initialize the DevlogManager when the page loads
document.addEventListener('DOMContentLoaded', function() {
    new DevlogManager();
});