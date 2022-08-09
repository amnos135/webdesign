$(function(){

    menu();  //가로메뉴
    drop();  //가로메뉴 서브전체 배경
    tab();  //탭메뉴
    pop_open(); 
    pop_close();
    menu4(); 
    menu2();
    menu3();
    visual();   //배너


    //가로메뉴
    function menu() {
        $('.depth1 >li').hover(function(){
            $('.depth2').stop().slideDown();
        }, function() {
            $('.depth2').stop().slideUp();
        });
    }


    //가로메뉴 서브전체 배경
    function drop() {
        $('.depth1').hover(function (){
            $('#drop').stop().slideDown();
        }, function() {
            $('#drop').stop().slideUp();
        });
    }



    //비주얼 배너
    function visual() {
        var current =0,
            next = 0,
            n = $('#slide ul li').length;

        $('#slide').css('overflow', 'hidden');
        $('#slide ul li').css({
            left:'100%'
        }).eq(current).css('left','0');


        var timer = 0,
            delay =3000;

        timer = setInterval(slide, delay);

        function slide() {
            current ++;
            current = current % n;
            $('#slide ul li').eq(current).css('left', '100%').animate({
                left: '0'
            },400);
            $('#slide ul li').eq(next).animate({
                left:'-100%'
            }, 400);
            next = current;
        }
    }

    /* 탭메뉴 */

    function tab() {
        $('.tab>ul>li>a').click(function() {
            $('.tab>ul>li').removeClass('on');
            $('.content').removeClass('on');

            $(this).parent('li').addClass('on');
            $('.content').hide();
            $('.content').eq($(this).parent('li').index()).show();

            return false;
        })
    }


    /* 가로메뉴2 */
    function menu2() {
        $('.depth3>li').hover(function(){
            $(this).children('.depth4').stop().slideDown();
        }, function() {
            $(this).children('.depth4').stop().slideUp();
        });
    }

    /* 세로메뉴 */
    function menu3() {
        $('.depth5>li').hover(function(){
            $(this).children('.depth6').stop().slideDown();
        }, function() {
            $(this).children('.depth6').stop().slideUp();
        });
    }

    function menu4() {
        $('.depth7>li').hover(function(){
            $(this).children('.depth8').stop().slideDown();
        }, function() {
            $(this).children('.depth8').stop().slideUp();
        });
    }

    //팝업
    function pop_open(){
        $('.open').click(function(){
            $('#pop').fadeIn('fast');
        });
    }
    function pop_close(){
        $('.close').click(function(){
            $('#pop').fadeOut('fast');
        });
    }





});

