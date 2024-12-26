document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.reviews-slider-wrapper');
    const slider = document.querySelector('.reviews-slider');
    let sliderWidth = slider.offsetWidth;
    let cardWidth = document.querySelector('.review-card').offsetWidth + 20;
    let startPosition = 0;
    const modalReview = document.querySelector('.modal-review');
    const modalContent = document.querySelector('.modal-content');
    const reviewCards = document.querySelectorAll('.review-card');
  
      function resetSlider() {
          startPosition = - cardWidth
          sliderWrapper.style.transition = 'none';
          sliderWrapper.style.left = startPosition + 'px';
  
          setTimeout(() => {
              sliderWrapper.style.transition = '';
              for(let i = 0; i < 2; i++){
                  sliderWrapper.appendChild(sliderWrapper.firstElementChild);
              }
          }, 0);
      }
  
  
      sliderWrapper.addEventListener('animationiteration', () => {
         resetSlider()
      });
  
    reviewCards.forEach(card => {
      card.addEventListener('click', (event) => {
       const reviewId = card.getAttribute('data-review-id');
          const fulltext = card.querySelector('.review-fulltext').innerHTML;
          modalContent.innerHTML =  fulltext;
        modalReview.style.display = 'flex';
        sliderWrapper.style.animationPlayState = 'paused';
           document.body.style.overflow = 'hidden';
          event.stopPropagation()
  
      });
    });
  
    modalReview.addEventListener('click', (event) => {
      if(event.target === modalReview)
      {
        modalReview.style.display = 'none';
        sliderWrapper.style.animationPlayState = 'running';
        document.body.style.overflow = '';
      }
    });
  
     modalContent.addEventListener('click', (event) =>{
         event.stopPropagation()
     })
  });