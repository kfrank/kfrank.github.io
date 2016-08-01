$(document).ready(function() {

  // Homepage tabs

  // If navigating to homepage from internal page, only show relevant category
  if ( document.location.href.indexOf('#work') > -1 ) {
    $('.type--thoughts').hide();
    $('.tabs a[href="#work"]').addClass('selected');
  } else if ( document.location.href.indexOf('#thoughts') > -1 ) {
    $('.type--work').hide();
    $('.tabs a[href="#thoughts"]').addClass('selected');
  }

  // Tab sorting
  $('.tabs a').click(function(){
    var postType = $(this).attr('href');

    console.log(postType);

    $('.posts a').hide();
    $('.type--' + postType.substring(1)).show();

    if( $(this).hasClass('selected') ) {
      $(this).removeClass('selected');
      $('.posts a').show();
      document.location.href = String( document.location.href ).replace( postType, "" );
    } else {
      $('.tabs a').removeClass('selected');
      $(this).addClass('selected');
    }
   
  });

  // Interior page scroll up header
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }

  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.header--interior').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.header--interior').removeClass('nav-up').addClass('nav-down');
          }
      }

      if (st < 50) {
        $('.header--interior').removeClass('nav-down');
      }
      
      lastScrollTop = st;

      console.log(st);
  }
});
