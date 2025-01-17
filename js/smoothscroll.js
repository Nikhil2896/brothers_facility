$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100, // Scroll 100 pixels more
        },
        800
      );

      // Optionally, update the URL without jumping
      if (history.pushState) {
        history.pushState(null, null, hash);
      } else {
        window.location.hash = hash; // Fallback for older browsers
      }
    } // End if
  });
});
