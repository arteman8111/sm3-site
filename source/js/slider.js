const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 45,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export default swiper;
