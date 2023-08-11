function clickAnchor() {
  const previewButton = document.querySelector('.preview__button');

  if (previewButton !== null) {
    previewButton.addEventListener('click', () => {
      const viewSection = document.querySelector('.programms');
      viewSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  } else {
    return;
  }
}
clickAnchor();
