// This is where it all goes :)

$(document).ready(function() {
  $("html").removeClass("no-js");
  var Waypoint = $(".text-fade").waypoint(
    function(direction) {
      $(this.element).addClass("show");
      this.destroy();
    },
    { offset: "80%" }
  );

  var Waypoint2 = $(".fade").waypoint(
    function(direction) {
      $(this.element).addClass("show");
      this.destroy();
    },
    { offset: "80%" }
  );

  // Smooth anchor scrolling. Credit: https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});
