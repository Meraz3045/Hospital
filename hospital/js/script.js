var navOff = $('.menu').offset().top;

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling > navOff){
        $('.menu').addClass('menu_fix');
    }

    else{
        $('.menu').removeClass('menu_fix');
    }
});