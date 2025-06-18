// js/data/news-data.js
const newsData = [
    {
        "id": "welcome-to-slowbern",
        "title": "Our Journey Begins",
        "date": "2025-06-18",
        "category": "announcement",
        "gameId": null,
        "content": `
            <p>Hello and welcome to Slowbern Studios! Today marks the first time we're sharing a glimpse behind the curtain at the games we've been quietly pouring our hearts into. If you're reading this, you're here right at the start of our journey—and we're grateful you found us.</p>
            
            <h3>Who We Are</h3>
            <p>Slowbern Studios is currently a one-person operation—every idea, line of code, and bit of design comes from a single (slightly over-caffeinated) creator. While "we" might just mean me for now, I use it because these games are meant to connect, and hopefully to grow into something bigger with your support. Our mission is to craft games that reward curiosity, spark a sense of wonder, and linger in your mind long after you've played.</p>

            <h3>Our Approach</h3>
            <p>At Slowbern, we lean into "slow-burning" design: rich, imaginative experiences that encourage you to think, explore, and see the world a little differently. Whether it's through narrative, puzzles, or playful experimentation, our goal is to craft games that offer more than just a fleeting distraction.</p>

            <h3>Introducing Our First Games</h3>
            <p>We're thrilled to announce the first wave of projects currently in development—each one very different, but all sharing our signature approach:</p>

            <ul>
                <li><strong>Beneath the Waves</strong> – Our most ambitious and enduring project. As a diver mysteriously bonded to the ocean's creatures, you'll explore a vast, living underwater world, communicate with unforgettable marine personalities, and take on the role of ocean guardian. Clean up pollution, aid struggling wildlife, and build a new home in a world threatened by environmental crisis. Your journey is open-ended—protect, discover, and connect in a story that evolves with the sea.</li>
                
                <li><strong>Water to a Fish</strong> – Take on the quirky challenge of running a boutique water shop for a town of discerning aquatic customers. Balance your books, manage stock, and serve a cast of eccentric fish—all while protecting your reputation in a playful time management sim where every bottle counts.</li>
                
                <li><strong>Prisn</strong> – Step into the shoes of a wrongfully imprisoned optical scientist in this narrative puzzle-platformer. Escape isn't just about clever platforming; you'll need to master color theory, mix light and pigments, and outwit color-coded security systems—all wrapped in a story of resilience and the science of seeing.</li>
                
                <li><strong>Mind the Gap</strong> – A hypercasual puzzle game inspired by comic strips, where every level is a tiny logic mystery. Drag, drop, and deduce your way through bite-sized visual stories—no reading required. Designed for mobile, Mind the Gap is easy to pick up, but sharpens reasoning, sequencing, and inference with every play.</li>
            </ul>
            
            <p>Each of these projects is rooted in our philosophy: playful experimentation, thoughtful mechanics, and a sense of wonder. We hope they'll delight players who crave something a little off the beaten path—games that make you smile, pause, or maybe even see things in a new light.</p>
            
            <h3>What's Next?</h3>
            <p>This blog will serve as your inside look at our creative process. We'll share dev updates, design deep-dives, and behind-the-scenes stories (and, yes, some of our growing pains as an indie team of one). We want you to be part of our community as these projects take shape.</p>
            
            <p>There are also a few surprises and prototypes waiting in the wings. We're eager to reveal more as we go—so stay tuned for future announcements and sneak peeks!</p>
            
            <h3>Join Us</h3>
            <p>Whether you're a fellow developer, an educator, a puzzle lover, or someone who just loves a beautifully made game, we'd love for you to follow along. Your feedback, encouragement, and curiosity will shape what Slowbern Studios becomes.</p>
            
            <p>Thank you for being here at the beginning. We can't wait to show you more.</p>
            
            <p><em>- The Slowbern Studios Team (a.k.a. just me for now!)</em></p>
        `,
        "tags": ["announcement", "introduction", "studio", "games"],
        "featured": true
    }
];

// Make sure the DevlogManager class is updated to handle the new data structure
class DevlogManager {
    renderNews() {
        return newsData.map(news => `
            <article class="news-item ${news.featured ? 'featured' : ''}" data-category="${news.category}">
                <div class="news-header">
                    <h3>${news.title}</h3>
                    <div class="news-meta">
                        <span class="date">${news.date}</span>
                        <span class="category ${news.category}">${news.category}</span>
                        ${news.tags ? news.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                    </div>
                </div>
                <div class="news-content">
                    ${news.content}
                </div>
                ${news.image ? `<img src="assets/images/blog/${news.image}" alt="${news.title}" class="news-image">` : ''}
            </article>
        `).join('');
    }
}