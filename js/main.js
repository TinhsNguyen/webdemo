function imgSlider(anything) {
    document.querySelector('.toggle-img').src = anything;
}
$(document).ready(function() {
    $('.btn-toggle-search').click(function() {
        $('._input-search').toggleClass('active');
    });
    $('.i-toggle-menu').click(function() {
        $('#_col-menu').addClass('toggle-menu-mobi');
    });
    $('.btn-close-menu').click(function() {
        $('#_col-menu').removeClass('toggle-menu-mobi');
    });

    $('._slider-image-asNav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.btn_prev-asNav'),
        nextArrow: $('.btn_next-asNav'),
        infinite: true,
        swipeToSlide: true
    });
    $('._slider-video').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('#btn_prev-video'),
        nextArrow: $('#btn_next-video'),
        infinite: true,
        swipeToSlide: true
    });
    $('._silder-dv').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('#btn_prev-dv'),
        nextArrow: $('#btn_next-dv'),
        infinite: true,
        swipeToSlide: true
    });
    $('._list-product-ud').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        prevArrow: $('#btn_prev-ud'),
        nextArrow: $('#btn_next-ud'),
        swipeToSlide: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('._slider-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        prevArrow: $('#btn_prev-bn'),
        nextArrow: $('#btn_next-bn'),
        swipeToSlide: true
    });
    $(".slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('#btn_prev-splq'),
        nextArrow: $('#btn_next-splq'),
        responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('._logo-dt').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        prevArrow: $('#btn_prev-dt'),
        nextArrow: $('#btn_next-dt'),
        swipeToSlide: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }]
    });
    // var indexLogoDT = $('._logo-dt a').length;
    // if (indexLogoDT > 6) {
    //     $('._logo-dt').slick({
    //         slidesToShow: 6,
    //         slidesToScroll: 1,
    //         dots: false,
    //         infinite: true,
    //         prevArrow: $('#btn_prev-dt'),
    //         nextArrow: $('#btn_next-dt'),
    //         swipeToSlide: true
    //     });
    // }
    var widthWindow = $(window).width();
    // if (widthWindow < 992) {
    //     $('._logo-dt').slick({
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         dots: false,
    //         infinite: true,
    //         prevArrow: $('#btn_prev-dt'),
    //         nextArrow: $('#btn_next-dt'),
    //         swipeToSlide: true
    //     });
    // }
    if (widthWindow > 767) {
        $('.a-lv1').click(function(e) {
            e.preventDefault();
        });
        var heightMenu = $('._menu-lv1').innerHeight();
        $('._menu-lv2').css('height', heightMenu + 'px');
    }
    if (widthWindow < 768) {
        $('._item-lv1').click(function(e) {
            // e.preventDefault();
            $(this).toggleClass('active').siblings().removeClass('active');
        });
    }
});