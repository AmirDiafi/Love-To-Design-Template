/*globle ducument, $*/

$(document).ready(function () {
    'use strict';
    $(window).on('scroll', function () {
    
        var sc = $(window).scrollTop();
        if (sc > 100) {
            $('section .main').css({
                width: '30px',
                height: '30px',
                borderRadius: '50px',
                position: 'fixed',
                top: '15%',
                left: '30%',
            })
        } else {
            $('section .main').css({
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                borderRadius: '0',
            })
        }

        if (sc > 350) {
            $('section > h1').text('A').css({
                fontSize: '140px'
            })
            $('section .main').css({
                top: '15%',
                left: '12%',
                width: '20px',
                height: "20px"
            })
        } else {
            $('section > h1').text('Amir').css({
                fontSize: '140px'
            })
        }
        
    });

    $('.show-menu').on('click', function () {
        $('section .menu').slideDown(800, function () {
            $('section .menu .cont').slideDown(800);
        });
    })

    $('.hide-menu').on('click', function () {
        $('section .menu .cont').slideUp(500, function () {
            $('section .menu').slideUp(500);
        });
    })
    
})