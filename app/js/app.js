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

    feedbacklider();
    function feedbacklider() {
      var carousel = $('.feedback__slide-list').owlCarousel({
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
        itemsDesktop: [
            1200, 3
        ],
        itemsDesktopSmall: [
            992, 1
        ],
        itemsTablet: [
            768, 1
        ],
        itemsMobile: [
            576, 1
        ],
      });
      $('.feedback__slide-arrow--prev').click(function(e) {
        e.preventDefault();
        carousel.trigger('prev.owl.carousel');
      });

      $('.feedback__slide-arrow--next').click(function(e) {
        e.preventDefault();
        carousel.trigger('next.owl.carousel');
      });
    }

    selectForm();
    function selectForm() {
      $('.select').on('click','.select__title',function() {
        var parent = $(this).closest('.select');
        if (!parent.hasClass('is-open')) {
          parent.addClass('is-open');
          $('.select.is-open').not(parent).removeClass('is-open');
        }else {
          parent.removeClass('is-open');
        }
      }).on('click','ul>li',function() {
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.select__title').text($(this).text());
        parent.find('input[type=hidden]').attr('value', $(this).attr('data-value'));
      });
    }
    //inputFile
    inputFile();
    function inputFile() {
      $('#file-field').change(function() {
      if ($(this).val() != '') $(this).prev()
        .text('Выбрано файлов: ' + $(this)[0].files.length);
      else $(this).prev().text('Выберите файлы');
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
