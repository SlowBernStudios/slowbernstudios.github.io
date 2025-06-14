// js/data/news-data.js
const newsData = [
    {
        "id": "news-1",
        "title": "Game Update 1.2 Released",
        "date": "2024-01-15",
        "category": "update",
        "gameId": "game-1",
        "content": "We've released a major update...",
        "image": "news-1.jpg",
        "tags": ["update", "bugfix", "features"]
    }
];

// js/devlog.js
class DevlogManager {
    renderNews() {
        return newsData.map(news => `
      <article class="news-item" data-category="${news.category}">
        <h3>${news.title}</h3>
        <div class="news-meta">
          <span class="date">${news.date}</span>
          <span class="category">${news.category}</span>
        </div>
        <p>${news.content}</p>
      </article>
    `).join('');
    }
}