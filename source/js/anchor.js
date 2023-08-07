const previewButton = document.querySelector('.preview__button');
previewButton.addEventListener('click', () => {
  const viewSection = document.querySelector('.programms');
  viewSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
