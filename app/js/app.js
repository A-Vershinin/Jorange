"use strict";

document.addEventListener("DOMContentLoaded", function() {
  (function() { //область видимости

    //js-status
    nojsreplace();
    function nojsreplace() {
      // if (document.documentElement.html.className == "no-js") {
      //   document.body.classList.remove("no-js");
      // }
      // console.log(document.documentElement);
    }




    toggleMenu();
    function toggleMenu() {
      var menuHam = $(".menu__hamburger");
      var menu = $(".menu__list");
      var action = $(".header__action");
      menuHam.on("click", function(e) {
        menuHam.toggleClass("is-active");
        // menu.toggleClass("menu__list--mobile");
        // menu.slideToggle();
        // action.toggleClass("header__action--mobile");
      });
    }

    workSlider();
    function workSlider() {
      var carousel = $('.work__slide-list').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        navigation: true,
        dots: false,
        autoWidth: true,
        // autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 2500,
        autoplayTimeout: 5000,
        navSpeed: 2500,
        smartSpeed: 2500,
        fluidSpeed: 1500,
        lazyLoad: true,
        navigationText : ["",""],
        responsiveClass: true,
        navText: "",
        animateOut: 'slideOutDown',
        animateIn: 'fadeInDown',
        responsive:{
          0: {
            items: 1,
            nav: false
          },
          650: {
            items: 1,
            nav: false
          },
          768: {
            items: 1,
            nav: true
          },
          992: {
            items: 1,
            nav: true
          },
          1200: {
            items: 1,
            nav: true
          }
        }
      });
      $('.work__slide-arrow--prev').click(function(e) {
        e.preventDefault();
        carousel.trigger('prev.owl.carousel');
      });

      $('.work__slide-arrow--next').click(function(e) {
        e.preventDefault();
        carousel.trigger('next.owl.carousel');
      });
    }


    // btn Up
    scrollUp();
    function scrollUp() {
      var winHeight = $(document).height(),
          step = 4,
          timeToScroll = winHeight/step,
          scrollUp = $(".scrollup");
      $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
          scrollUp.fadeIn();
        } else {
          scrollUp.fadeOut();
        }
      });
      scrollUp.on("click", function() {
        $("html, body").animate({scrollTop: 0}, timeToScroll);
      });
    }



  })();
});
