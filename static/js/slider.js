import { topTexts, bottomTexts } from './constants.js';

const swiper = new Swiper('.functional-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    on: {
        slideChange: updateText,
    },
});

const topTextElement = document.getElementById('text-top');
const bottomTextElement = document.getElementById('text-bottom');

function updateText() {
    const currentIndex = swiper.realIndex;
    topTextElement.textContent = topTexts[currentIndex];
    bottomTextElement.textContent = bottomTexts[currentIndex];
}

