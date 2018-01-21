$(document).ready(function(){
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });


  $("#fakeLoader").fakeLoader();


});

$(function () {
  $('.sample').textillate({
    loop: true,
    minDisplayTime: 2000,
    autoStart: true,
    inEffects: [],
    outEffects: [ 'hinge' ],
    // in animation settings
    in:{
            effect: 'fadeInLeftBig',
            delayScale: 1.5,
    },
  });

$('.lte').textillate({ in: { effect: 'bounceInDown' } });

})
