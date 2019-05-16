
$(document).ready(function(){
    'use strict';
    // >> signup Page Taps 
    $('.signup-tabs a, input.next').click(function(e){
        e.preventDefault();
        $('.signup-tabs a').removeClass('active');
        
        let filterId = $(this).data('id');
        $('.signup-tabs a#'+filterId).addClass('active');
        $('.signup-info').find('.tab-item').hide();
        $('.signup-info').contents().filter('#'+filterId).fadeIn(500);
    });

    // >> fixed header 
    $(window).scroll(function() {
        var windowScroll = $(this).scrollTop();
        if(windowScroll > 50) {
            $('header').addClass('sticky');
            $("body").css("padding-top","70px");
            $('header .btns').fadeIn()
        }else {
            $('header').removeClass('sticky');
            $("body").css("padding-top","0");
            $('header .btns').fadeOut(0)
        }
    });
    


});

