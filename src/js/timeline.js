const swiper = new Swiper(".swiper-container", {
  // If we need pagination
  slidesPerView: "2",
  centeredSlides: true,
  spaceBetween: 60,
  grabCursor: true,
  // Navigation arrows
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
