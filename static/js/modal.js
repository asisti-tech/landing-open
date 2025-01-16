document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('.reviews__item');
    const modal = document.querySelector('.modal');
    const modalContentElement = document.querySelector('.modal__content');
    const closeButton = document.querySelector('.modal__close');

    const modalContent = {
        name: modal.querySelector('.reviews__name'),
        rating: modal.querySelector('.review__rating'),
        author: modal.querySelector('.review__author'),
        text: modal.querySelector('.review__text'),
    };
    
    function openModal(review) {
        const name = review.querySelector('.reviews__name').textContent;
        const rating = review.querySelector('.review__rating').innerHTML;
        const author = review.querySelector('.review__author').textContent;
        const text = review.querySelector('.review__text').textContent;

        modalContent.name.textContent = name;
        modalContent.rating.innerHTML = rating;
        modalContent.author.textContent = author;
        modalContent.text.textContent = text;

        document.body.style.overflow = 'hidden';
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    closeButton.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {        
        if (e.target === modalContentElement) closeModal()
    });
    
    reviews.forEach((review) => {
        review.addEventListener('click', () => openModal(review));
    });
});