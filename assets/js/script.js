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


   $("#fakeLoader").fakeLoader({
        timeToHide:1200, //Time in milliseconds for fakeLoader disappear
        zIndex:999, // Default zIndex
        spinner:"spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
        bgColor:"#2ecc71", //Hex, RGB or RGBA colors
        
});


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
