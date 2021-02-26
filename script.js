const smoothScroll = () => {
  
  let scroll = new SmoothScroll('a[href*="#"]', { speed: 300 });
};

$(function() {
  AOS.init();
  smoothScroll();
  $(".navbar-toggler").on("click", function() {

    if (
      $(this).attr("aria-expanded") === "true" &&
      $(document).scrollTop() <= 0
    ) {
      setTimeout(() => {
        $("#mainNavbar").toggleClass("scrolled", false);
      }, 200);
    } else {
      $("#mainNavbar").toggleClass("scrolled", true);
    }

  });
  
  $(document).scroll(function() {
    const $nav = $("#mainNavbar");
    if (
      $(".navbar-toggler").attr("aria-expanded") === "true" &&
      $(document).scrollTop() <= 0
    ) {
      $(".navbar-toggler").click();
    } else {
      $nav.toggleClass("scrolled", $(this).scrollTop() > 0);
    }
  });
  $("a.nav-link").on("click", function() {
    if ($(".navbar-toggler").attr("aria-expanded") === "true") {
      $(".navbar-toggler").click();
    }
  });
});
