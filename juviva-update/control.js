$('.menu-toggle').click(function() {

  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');

})

$(document).ready(function() {
    var previousScroll = 0;

$(window).resize(function () {
  if($(window).width() >= 1920){
    $(window).scroll(function(){
  // do your stuff
       var currentScroll = $(this).scrollTop();
       if (currentScroll > previousScroll) {
    	   //Direction: Down
    	   $(".site-nav").fadeOut();
       } else {
    	   //Direction: Up
    	   $(".site-nav").fadeIn();
       }

       previousScroll = currentScroll;

       if (currentScroll == 0) {
    	   $(".site-nav").css("position", "relative");
       } else {
    	   $(".site-nav").css("position", "fixed");
       }
    });
  }
  });
});
