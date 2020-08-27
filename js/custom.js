$(function(){
    $('.banner-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
        arrows: false,
        speed: 1500,
});

    
  $(window).on('load', function(){
      $('.preloder').delay(500).fadeOut(500);
  });  
    $('.back-top').click(function(){
        $('html,body').animate({scrollTop: 0},2000);
    });
    
    var containerEl = document.querySelector('.project-filter');

            var mixer = mixitup(containerEl);
    
    $('.venobox').venobox();
    
     $('.counter').counterUp({
                delay: 10,
                time: 3000
            });
    
    $('.blog-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
        arrows: false,
        speed: 1500,
        centerMode: true,
        centerPadding: false,
        
        responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
                     {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});
    
});
