$(document).ready(function(){
    var slider1 = $('.slider-1').slick({
        slidesToScroll:1,
        arrows:false,
        dots:true,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.slider-2',

    });

    var slider1 = $('.slider-2').slick({
        slidesToScroll:1,
        arrows:false,
        dots:true,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.slider-1',

    })

});