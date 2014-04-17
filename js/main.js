$(document).ready(function() {
  $("header.post").headroom({
    "tolerance": 5,
    "offset": 205,
    "classes": {
      "initial": "animated",
      "pinned": "slideDown",
      "unpinned": "slideUp",
      "top": "headroom--top",
      "notTop": "headroom--not-top"
    }
    });

    // to destroy
    $("#header.post").headroom("destroy");
});