const testiSwiper = new Swiper(".testimonials__container", {
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".testimonials__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev",
  },
});
