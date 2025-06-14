// js/meta-manager.js
class MetaManager {
    updatePageMeta(gameData) {
        document.title = `${gameData.title} - Slowbern Studios`;
        this.updateMetaTag('description', gameData.description);
        this.updateMetaTag('og:title', gameData.title);
        this.updateMetaTag('og:description', gameData.description);
        this.updateMetaTag('og:image', `assets/images/games/${gameData.id}/${gameData.images[0]}`);
    }

    updateMetaTag(property, content) {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('property', property);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    }
}