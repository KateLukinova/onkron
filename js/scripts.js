
$( document ).ready(function() {

    var screenWidth = $(window).width();
    if (screenWidth < 990) {
        $('.product-table').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 400,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});
