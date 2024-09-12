let currentImageIndex = 0;
const heroTexts = [
    {
        heading: 'Discover Amazing Destinations',
        description: 'Plan your next adventure with us and explore the world\'s most beautiful places.'
    },
    {
        heading: 'Welcome to Our IT Services',
        description: 'Providing top-notch IT services to help your business grow.'
    },
    {
        heading: 'Streamline Your Trading Operations',
        description: 'Offering comprehensive trading solutions for seamless and efficient market operations.'
    },
    {
        heading: 'Comprehensive Healthcare Solutions',
        description: 'Delivering quality healthcare services to improve your well-being and health outcomes.'
    }
];

function updateHeroContent() {
    const heroContent = document.getElementById('heroContent');
    const { heading, description } = heroTexts[currentImageIndex];
    heroContent.innerHTML = `<h1>${heading}</h1><p>${description}</p>`;
    currentImageIndex = (currentImageIndex + 1) % heroTexts.length;
}

setInterval(updateHeroContent, 5000); // Change text every 5 seconds
document.addEventListener('DOMContentLoaded', updateHeroContent); // Initialize with first content
