(function($){
  $(function(){
    
    //initialisation du sidenav
    $('.sidenav').sidenav();
    /* $('.parallax').parallax();*/
    
    /*$('.carousel').carousel({
      fullWidth: true
    });
    instance.next(3);*/
    
    //initialisation du slider
    $('.slider').slider({
      indicators: true,
      height: 600
    });
    
    //initialisation du parallax
    $('.parallax').parallax();
    
    //initialisation du carousel
    
    $('.carousel').carousel({
      shift: 200,
      padding: -300
    });
    
    //initialisation material box
    
    $('.materialboxed').materialbox();
    
  }); // end of document ready
})(jQuery); // end of jQuery name space

var navContact = document.getElementById('navContact'),
navRealisation = document.getElementById('navRealisation'),
navService = document.getElementById('navService;');


navContact.addEventListener('click', function(){
  navContact.nextSibling.style.color = "#EEC400"
});


$(document).ready(function() {
  $('.galerie-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    dots: false
  });
});
$(document).ready(function () {
  var distance = $('.stat-con').offset().top,
  $window = $(window);
  $window.scroll(function () {
    if ($window.scrollTop() >= distance)
    {
      $('.stat-animation').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).data('value')
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });
});