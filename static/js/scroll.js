document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.advantage-card');
    const container = document.querySelector('.advantages-container-scroll');

    const hideCard = (card) => {
         card.classList.add('advantage-card-hidden');
         console.log('Hide card:', card);
    };
   
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log('Intersection observer callback triggered:', entry.target);
            if (entry.isIntersecting){
                 console.log('Element is visible:', entry.target);
                entry.target.classList.remove('advantage-card-hidden')
                entry.target.classList.add('advantage-card-visible')
                observer.unobserve(entry.target)
           }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    });

    cards.forEach(card => {
        hideCard(card); 
        observer.observe(card);
         console.log('Observing card:', card);
    });
});