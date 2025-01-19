$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 620);
  var scrollPosition = $(this).scrollTop();
  $(".navbar-nav .nav-link").each(function () {
    var section = $($(this).attr("href"));
    if (
      section.position().top - 120 <= scrollPosition &&
      section.position().top + section.height() - 120 > scrollPosition
    ) {
      $(".navbar-nav .nav-link").removeClass("active");
      $(this).addClass("active");
    }
  });
});
