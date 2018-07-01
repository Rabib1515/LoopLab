// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// Init Scrollspy
$("body").scrollspy({ target: "#main-nav" });

// Smooth Scrolling
$(document).ready(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
