document.addEventListener('DOMContentLoaded', () => {
function toggleMoreText(element) {
    const description = element.querySelector('.suitable__description');
    const link = element.querySelector('.suitable__link');
  
    if (description && link) {
      if (description.style.display === 'none') {
        description.style.display = 'block';
        link.textContent = 'Скрыть';
      } else {
        description.style.display = 'none';
        link.textContent = 'Подробнее';
      }
    }
  }
  
  document.querySelectorAll('.suitable__item').forEach((item) => {
    item.addEventListener('click', () => {
      toggleMoreText(item);
    });
  });
  
})

  