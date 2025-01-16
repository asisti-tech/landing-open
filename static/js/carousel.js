document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.reviews__carousel');
    const items = carousel.children;
    const itemWidth = items[0].offsetWidth + 40;
    let position = 0;

    function moveCarousel() {
        position -= 1;
        if (Math.abs(position) >= itemWidth) {
            position = 0;
            carousel.appendChild(carousel.firstElementChild);
        }
        carousel.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveCarousel);
    }

    moveCarousel();
});