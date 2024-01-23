$(function(){
    $("section.depoimentos .depoimento-wrapper").slick({
        dots: true,
        arrows: false,
        speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1
                }
            }
        ]
    });
});