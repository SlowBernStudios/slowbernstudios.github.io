// js/expansions.js
class ExpansionManager {
    constructor() {
        this.expansions = gamesData.expansions;
    }

    renderExpansions(baseGameId) {
        const expansions = this.expansions.filter(exp => exp.baseGame === baseGameId);
        return expansions.map(expansion => `
            <div class="expansion-card">
                <h4>${expansion.title}</h4>
                <p>${expansion.description}</p>
                <span class="expansion-status ${expansion.status}">${expansion.status}</span>
                ${expansion.status === 'released' ? this.createDownloadLinks(expansion.downloadLinks) : ''}
            </div>
        `).join('');
    }

    createDownloadLinks(links) {
        return Object.entries(links).map(([platform, url]) =>
            `<a href="${url}" class="download-link ${platform}" target="_blank">${platform}</a>`
        ).join('');
    }
}