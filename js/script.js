$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.slick-dots').addClass('first-slick');

    $('.opinions').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
    });  
});

$('.video__button').on('click', function() {
    $(this).toggleClass('hide');
    $('#video__play').toggleClass('show');
}); 

$('.hamburger__link').on('click', function(){
    console.log('Вы нажали на элемент "hamburger__link"');
    $('.menu__btn').trigger('click');
});

