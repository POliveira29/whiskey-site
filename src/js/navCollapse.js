const navbar = document.querySelector(".navbar");

$(document).ready(function () {
  // Menu Navbar Toggle
  $(".header__menu").click(function () {
    $(".navbar").toggleClass("collapse");
  });
  // Menu SideNav Active
  $(".navbar__menu").click(function () {
    $(".business-card").addClass("transform");
  });
  // Close Sidenav
  $(".business-card__close").click(function () {
    $(".business-card").removeClass("transform");
  });
});

// Navbar fixed when differ height top plus 730
$(window).scroll(function () {
  if ($(window).scrollTop() > 730) {
    $(".navbar").addClass("fixed");
  } else {
    $(".navbar").removeClass("fixed");
  }
});
