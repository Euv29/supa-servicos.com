(function ($) {

    "use strict";

        // PRE LOADER
        $(window).load(function(){
          $('.preloader').delay(800).slideUp('slow'); // set duration in brackets    
        });


        // MENU
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });


        // PARALLAX JS
        function initParallax() {
          $('#home').parallax("60%", 100);
          $('#about').parallax("100%", 80);
          $('#service').parallax("80%", 60);
          $('#team').parallax("40%", 40);
          $('#contact').parallax("20%", 20);
          }
        initParallax();


        // Owl Carousel
        var owl = $("#owl-team");
          owl.owlCarousel({
            autoPlay: 6000,
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            Speedfast: 200,
        });

})(jQuery);


function main() {

  (function () {
     'use strict';
     
      $('a.page-scroll').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 40
              }, 900);
              return false;
            }
          }
        });
  
    
      // Show Menu on Book
      $(window).bind('scroll', function() {
          var navHeight = $(window).height() - 500;
          if ($(window).scrollTop() > navHeight) {
              $('.navbar-default').addClass('on');
          } else {
              $('.navbar-default').removeClass('on');
          }
      });
  
      $('body').scrollspy({ 
          target: '.navbar-default',
          offset: 80
      });
  
    // Hide nav on click
    $(".navbar-nav li a").click(function (event) {
      // check if window is small enough so dropdown is created
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse('hide');
      }
    });
    
       
  
  }());
  
  
  }
  main();

 // SMOOTH SCROLL
 $(document).ready(function () {
  $(window).on('scroll', function () {
       $('.service-card').each(function () {
            var cardTop = $(this).offset().top;
            var cardBottom = cardTop + $(this).outerHeight();
            var windowTop = $(window).scrollTop() + $(window).height();

            if (cardTop < windowTop) {
                 $(this).addClass('visible');
            }
       });
  });
});

// TYPING EFFECT
$(document).ready(function () {
  var textElements = ["Bem - vindo", "VISUAL XPERIENCE", "Design Gráfico & Web design"];
  var welcomeText = document.querySelector('.welcome');
  var currentIndex = 0;
  var currentText = '';
  var typingSpeed = 100; // Velocidade da digitação (em milissegundos)

  function typeText() {
       if (currentText.length < textElements[currentIndex].length) {
            currentText = textElements[currentIndex].slice(0, currentText.length + 1);
            welcomeText.textContent = currentText;
            setTimeout(typeText, typingSpeed);
       } else {
            // Aguarde um tempo para exibir o próximo texto
            setTimeout(eraseText, 1000);
       }
  }

  function eraseText() {
       if (currentText.length > 0) {
            currentText = currentText.slice(0, currentText.length - 1);
            welcomeText.textContent = currentText;
            setTimeout(eraseText, typingSpeed);
       } else {
            // Aguarde um tempo antes de exibir o próximo texto
            currentIndex = (currentIndex + 1) % textElements.length;
            setTimeout(typeText, 1000);
       }
  }

  typeText(); // Inicie a digitação
});