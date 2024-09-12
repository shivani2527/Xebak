let currentSlideIndex = 0;

function showSlides() {
    const container = document.querySelector('.testimonials-container');
    const testimonials = document.querySelectorAll('.testimonial');
    const totalSlides = Math.ceil(testimonials.length / 3); // Calculate total sets of slides
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    const percentage = currentSlideIndex * (100 / totalSlides);
    container.style.transform = `translateX(-${percentage}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showSlides, 6000); // Change every 6 seconds
    showSlides(); // Initial display
});


