// Constans
const btnUp = document.querySelector('.btn-up');
// Functions
function toggleEventHandler() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (scrollY > 400) {
    btnUp.classList.remove('btn-up--hide');
    btnUp.addEventListener('click', smoothEventHandler);
  } else {
    btnUp.classList.add('btn-up--hide');
  }
}
function smoothEventHandler() {
  return (
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  );
}

window.addEventListener('scroll', toggleEventHandler);
