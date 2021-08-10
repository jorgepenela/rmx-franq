$(document).ready(function(){

    //TOPLINK
  jQuery("a.toplink").click(function() {
    jQuery("html, body").animate({
      scrollTop: jQuery(jQuery(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });


    $('.sliderhome').slick({
        dots : true,
        infinite : true,
        speed: 500,
        fade: true,
        cssEase : 'linear',
        autoplay : true,
    })

    $('.quehace').slick({
        dots : true,
        autoplay : true,
        arrows : false
    })

    $('.sliderTestimonials').slick({
        dots : true,
        infinite : true,
        autoplay : true,
        slidesToShow : 3,
        slidesToScroll : 1,
        responsive:[
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

        
    })
})

