$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800
      );
      if (history.pushState) {
        history.pushState(null, null, hash);
      } else {
        window.location.hash = hash;
      }
    }
  });
});
