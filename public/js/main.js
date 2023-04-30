(function ($) {
  "use strict";

  /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

  function navbarFixed() {
    if ($(".header_area_two,.header_area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll) {
          $(".header_area_two,.header_area").addClass("navbar_fixed");
        } else {
          $(".header_area_two,.header_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  /*--------------- mobile dropdown js--------*/
  function active_dropdown2() {
    if ($(window).width() < 991) {
      $(".navbar-nav > li.submenu").on("click", function () {
        $(this).find("> ul").first().slideToggle(300);
        $(this).siblings().find("> ul").hide(300);
        return false;
      });
    }
  }
  active_dropdown2();

  /*----------------------------------------------------*/
  /*  Main Slider js
    /*----------------------------------------------------*/
  $(".main_slider").on("init", function (e, slick) {
    var $firstAnimatingElements = $("div.slider_item:first-child").find(
      "[data-animation]"
    );
    doAnimations($firstAnimatingElements);
  });
  $(".main_slider").on("beforeChange", function (
    e,
    slick,
    currentSlide,
    nextSlide
  ) {
    var $animatingElements = $(
      'div.slider_item[data-slick-index="' + nextSlide + '"]'
    ).find("[data-animation]");
    doAnimations($animatingElements);
  });
  var slideCount = null;

  $(".main_slider").on("init", function (event, slick) {
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
  });
  $(".main_slider").on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    setCurrentSlideNumber(nextSlide);
  });

  function setSlideCount() {
    var $el = $(".slide-count-wrap").find(".total");
    if (slideCount < 10) {
      $el.text("0" + slideCount);
    } else {
      $el.text(slideCount);
    }
  }

  function setCurrentSlideNumber(currentSlide) {
    var $el = $(".slide-count-wrap").find(".current");
    $el.text(currentSlide + 1);
  }

  $(".main_slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    prevArrow: ".prev",
    nextArrow: ".next",
  });

  function doAnimations(elements) {
    var animationEndEvents =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data("delay");
      var $animationType = "animated " + $this.data("animation");
      $this.css({
        "animation-delay": $animationDelay,
        "-webkit-animation-delay": $animationDelay,
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }

  /*-------------------------------------------------------------------------------
	  Portfolio isotope js
	-------------------------------------------------------------------------------*/

  function portfolioMasonry() {
    var portfolio = $("#portfolio_masonry,.portfolio_gallery");
    if (portfolio.length) {
      portfolio.imagesLoaded(function () {
        // images have loaded
        // Activate isotope in container
        portfolio.isotope({
          layoutMode: "masonry",
          masonry: {
            columnWidth: 10,
          },
        });
      });
    }
  }
  portfolioMasonry();

  if ($(".testimonial_slider").length) {
    $(".testimonial_slider").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: false,
      fade: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            dots: false,
          },
        },
      ],
    });
  }

  /*-------------------------------------------------------------------------------
	  popup js
	-------------------------------------------------------------------------------*/
  function popupGallery() {
    if ($(".popup-youtube").length) {
      $(".popup-youtube").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: "mfp-with-zoom mfp-img-mobile",
      });
    }
  }
  popupGallery();

  // Counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /*---------  SPLITTING TEXT -----------*/
  Splitting();

  if ($("select").length) {
    $("select").niceSelect();
  }

  $(".burger_menu").on("click", function () {
    if ($(".burger_menu,.offcanvas_menu").hasClass("open")) {
      $(this).removeClass("open");
      $(".offcanvas_menu").removeClass("open");
    } else {
      $(this).addClass("open");
      $(".offcanvas_menu").addClass("open");
    }
    return false;
  });

  $(".close_icon").on("click", function () {
    $(".offcanvas_menu,.burger_menu").removeClass("open");
  });

  var dropToggle = $(".side_menu > li").has("ul").children("a");
  dropToggle.on("click", function () {
    dropToggle.not(this).closest("li").find("ul").slideUp(300);
    $(this).closest("li").children("ul").slideToggle(300);
    return false;
  });

  //scorl animation js
  var $single_portfolio_img = $(".portfolio_item");
  var $window = $(window);

  function scroll_addclass() {
    var window_height = $(window).height() - 200;
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($single_portfolio_img, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;

      //check to see if this current container is within viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.addClass("show");
      }
    });
  }
  scroll_addclass();
  $window.on("scroll resize", scroll_addclass);
  $window.trigger("scroll");

  if ($("#luxy").length) {
    luxy.init({
      wrapper: "#luxy",
      targets: ".luxy-el",
      wrapperSpeed: 0.07,
    });
  }

  /*-------------------------------------------------------------------------------
	  WOW js
	-------------------------------------------------------------------------------*/
  Pace.on("done", function () {
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 100,
      mobile: true,
      live: true,
    }).init();
  });
  /*----------------------------------------------------*/
  /*  Go To
    /*----------------------------------------------------*/
  if ($(".go_top").length > 0) {
    $(".go_top").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  }

  Pace.on("done", function () {
    $("#preloader").addClass("load_coplate");
    $(".product_name").addClass("load_coplate");
  });
})(jQuery);
