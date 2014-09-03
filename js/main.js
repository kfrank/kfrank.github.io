$(document).ready(function() {
  $('.tabs a').click(function(){
    var postType = $(this).attr('href');

    $('.posts a').hide();
    $('.type--' + postType.substring(1)).show();

    if( $(this).hasClass('selected') ) {
      $(this).removeClass('selected');
      $('.posts a').show();
    } else {
      $('.tabs a').removeClass('selected');
      $(this).addClass('selected');
    }
   
  });
});
