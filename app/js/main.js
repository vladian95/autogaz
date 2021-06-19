$(function(){

    $('.tabs__inner .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.tabs__inner').find('.tab-item').removeClass('active-tab').hide();
        $('.tabs__inner .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.slider__inner').slick({
        autoplay: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="slide__arrow slick-prev" style="background-image: url(images/slider/left.png);"></button>',
        nextArrow: '<button class="slide__arrow slick-next" style="background-image: url(images/slider/right.png);"></button>'
    });

    
});