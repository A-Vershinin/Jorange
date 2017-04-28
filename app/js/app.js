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
        // menuHam.toggleClass("hamburger--collapse");
        // menu.toggleClass("menu__list--mobile");
        // menu.slideToggle();
      });
    }
    headerFix();
    function headerFix() {
      var wrap = $(".wrapper");
      var header = $(".header__nav");
      wrap.on("scroll", function(e) {
        if (this.scrollTop > 845) {
          header.addClass("header__nav--fixed");
        } else {
          header.removeClass("header__nav--fixed");
        }
        if (this.scrollTop < 768) {
          header.removeClass("header__nav--fixed");
        }
      });
    }

    popupCallback();
    function popupCallback() {
      var error = document.querySelector(".error"),
          overlay = document.querySelector(".overlay"),
          callBtn = document.querySelector(".header__do-btn"),
          callPopup = document.querySelector(".popup__callback"),
          callClose = callPopup.querySelector(".popup__callback-close"),
          form = callPopup.querySelector("#callback__form"),
          nameUser = callPopup.querySelector("[name=name]"),
          phoneUser = callPopup.querySelector("[name=phone]"),
          messageUser = callPopup.querySelector("[name=message]"),
          storage = localStorage.getItem("loginUser");

      callBtn.addEventListener("click", function(event) {
        event.preventDefault();
        callPopup.classList.add("popup__callback--show");
        overlay.classList.add("overlay--show");
        nameUser.focus();
        if (storage) {
          nameUser.value = storage;
          phoneUser.focus();
        } else {
          nameUser.focus();
        }
        if (storage) {
          phoneUser.value = storage;
          messageUser.focus();
        } else {
          phoneUser.focus();
        }
      })
      callClose.addEventListener("click", function(event) {
        event.preventDefault();
        callPopup.classList.remove("popup__callback--show");
        overlay.classList.remove("overlay--show");
        callPopup.classList.remove("error");
      });
      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (callPopup.classList.contains("popup__callback--show")) {
            callPopup.classList.remove("popup__callback--show");
            overlay.classList.remove("overlay--show");
            callPopup.classList.remove("error");
          }
        }
      });
      form.addEventListener("submit", function(event) {
        if (!nameUser.value || !phoneUser.value || !messageUser.value) {
          event.preventDefault();
          // callPopup.classList.remove("error");
          // callPopup.offsetWidth = callPopup.offsetWidth;
          // callPopup.classList.add("error");
        } else {
          localStorage.setItem("Name", nameUser.value);
          localStorage.setItem("Phone", phoneUser.value);
          localStorage.setItem("Message", messageUser.value);
        }
      });
    }
    popupSucces();
    function popupSucces() {
      var succesBtn = document.querySelector(".contact-form__btn"),
      succesPopup = document.querySelector(".popup__succes"),
      succesPopupClose = succesPopup.querySelector(".popup__succes-close");

      succesBtn.addEventListener("click", function(event) {
        event.preventDefault();
        succesPopup.classList.add("popup__callback--show");
      });
      succesPopup.addEventListener("click", function(event) {
        event.preventDefault();
        succesPopup.classList.remove("popup__callback--show");
      });
    }
    headerSlider();
    function headerSlider() {
      var carousel = $(".slider").owlCarousel({
        items: 1,
        loop: true,
        center: true,
        margin: 10,
        nav: true,
        navigation: true,
        dots: false,
        // autoplay: true,
        autoHeight: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 5000,
        navSpeed: 1500,
        smartSpeed: 1500,
        fluidSpeed: 1500,
        lazyLoad: true,
        navigationText : ["",""],
        responsiveClass: true,
        navText: "",
        responsive:{
          0: {
            items: 1,
            nav: false
            // navigation: false,
            // dots: true
          },
          576: {
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
      $(".slider__arrow-prev").click(function(e) {
        e.preventDefault();
        carousel.trigger("prev.owl.carousel");
      });

      $(".slider__arrow-next").click(function(e) {
        e.preventDefault();
        carousel.trigger("next.owl.carousel");
      });
    }
    workSlider();
    function workSlider() {
      var carousel = $(".work__slide-list").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        navigation: true,
        dots: false,
        autoplay: true,
        autoHeight: true,
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
        animateOut: "slideOutDown",
        animateIn: "fadeInDown",
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
      $(".work__slide-arrow--prev").click(function(e) {
        e.preventDefault();
        carousel.trigger("prev.owl.carousel");
      });

      $(".work__slide-arrow--next").click(function(e) {
        e.preventDefault();
        carousel.trigger("next.owl.carousel");
      });
    }

    feedbacklider();
    function feedbacklider() {
      var carousel = $(".feedback__slide-list").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        navigation: true,
        dots: false,
        autoplay: true,
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
        animateOut: "slideOutDown",
        animateIn: "fadeInDown",
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
      $(".feedback__slide-arrow--prev").click(function(e) {
        e.preventDefault();
        carousel.trigger("prev.owl.carousel");
      });

      $(".feedback__slide-arrow--next").click(function(e) {
        e.preventDefault();
        carousel.trigger("next.owl.carousel");
      });
    }

    selectForm();
    function selectForm() {
      $(".select").on("click",".select__title",function() {
        var parent = $(this).closest(".select");
        if (!parent.hasClass("is-open")) {
          parent.addClass("is-open");
          $(".select.is-open").not(parent).removeClass("is-open");
        }else {
          parent.removeClass("is-open");
        }
      }).on("click","ul>li",function() {
        var parent = $(this).closest(".select");
        parent.removeClass("is-open").find(".select__title").text($(this).text());
        parent.find("input[type=hidden]").attr("value", $(this).attr("data-value"));
      });
    }
    //inputFile
    inputFile();
    function inputFile() {
      $("#file-field").change(function() {
      if ($(this).val() != "") $(this).prev()
        .text("Выбрано файлов: " + $(this)[0].files.length);
      else $(this).prev().text("Выберите файлы");
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
