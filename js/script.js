// blog slider or service section slider
$(function () {
  $('.blog_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: '.next',
    prevArrow: '.right',
    autoplaySpeed: 2000,

    responsive: [{
        breakpoint: 579,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]


  });


  // next prev slider
  // $('.nxt_prev_slider').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   arrows:true,
  //   nextArrow:'.nxt',
  //   prevArrow:'.prev',
  //   autoplaySpeed: 2000,


  // });


  // aos file js  
  AOS.init();


  // back-to-top js code

  //==== Back-to-top button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200)
    } else {
      $('.back-to-top').fadeOut(200)
    }
  });
  //==== Animate the scroll to top
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0,
    }, 1000);
  });

// navbar js code 

var ham = document.querySelector('.navbar-toggler');
var nav_icon_main = document.querySelector('.nav_icon_main');
var navbar = document.querySelector('.navbar');

ham.addEventListener("click", function(){
  $('.navbar').toggleClass('navbarxxx');
  $('.nav_icon_main').toggleClass('nav_icon_main_js');
  $('.navbar-brand').toggleClass('.nav_brand_ac');
});
 









});