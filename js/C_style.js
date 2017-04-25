$(document).ready(function () {
    $('.share li').each(function (index) {
        this.onmouseenter=function () {
            $('.share li .C_img_1').eq($(this).index()).css('display','none');

            $('.share li .C_img_2').eq($(this).index()).css('display','block');

             this.onmouseleave=function () {
                 $('.share li .C_img_1').eq($(this).index()).css('display','block');

                 $('.share li .C_img_2').eq($(this).index()).css('display','none');
             }

        }
    })
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var oBox=$('.ontop a')
    oBox.mouseover(function () {
        $('.C_img_4').css('display','none')
        $('.C_img_3').css('display','block')
        oBox.mouseout(function () {
            $('.C_img_4').css('display','block')
            $('.C_img_3').css('display','none')
        })
    })




})