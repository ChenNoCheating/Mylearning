$(function() {
    var toolTop = $('.recommend').offset().top;
    var flag = true;
    toggleToll();

    function toggleToll() {
        if($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
    }
    
    $(window).scroll(function() {
        toggleToll();
        if(flag) {
            $('.floor .w').each(function(i,ele) {
                if($(document).scrollTop() >= $(ele).offset().top) {
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current');
                }
            })
        }
    })

    $('.fixedtool li').click(function() {
        var current = $('.floor .w').eq($(this).index()).offset().top;
        flag = false;
        $('body,html').stop().animate({
            scrollTop: current
        },function() {
            flag = true;
        })
        $(this).addClass('current').siblings().removeClass('current');
    })


})