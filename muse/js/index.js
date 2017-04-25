window.onload=function(){
    (function(){
        var aLi=$('.h7');
        var aA=$('.a1');
        var aP=$('.a2');
        
        aLi.mouseenter(function(){
            aA.eq($(this).index()-1).css('color','#A00');
            aA.eq($(this).index()-1).stop().animate({'top':20},300);
            aP.eq($(this).index()-1).stop().animate({'top':4},300);
        })
        aLi.mouseleave(function(){
            aA.eq($(this).index()-1).css('color','#666');
            aA.eq($(this).index()-1).stop().animate({'top':4},300);
            aP.eq($(this).index()-1).stop().animate({'top':20},300);
        })
    })();
    /* 头部 */

    (function(){
        var oInp=$('.sec6');
        var oSbmt=$('.sec7');
        var reg=/^1[3578]\d{9}$/;
        oInp.focus(function(){
            oInp.css('color','#000');
            oInp.val()=='';
        });
        oInp.blur(function(){
            var str=oInp.val();
            if(str){
                if(!reg.test(str)){
                    alert('请填写正确的手机号码！')
                };
            };
        });
        oSbmt.click(function(){
            var str=oInp.val();
            if(str){
                if(!reg.test(str)){
                    alert('请填写手机号码！')
                }
            }else{
                alert('请填写手机号码！')
            }
        });
    })();
    /* 表单验证 */

    (function(){
        function hoverDis(obj, ev){
            var x=obj.offsetWidth/2+obj.offsetLeft-ev.clientX;
            var y=obj.offsetHeight/2+obj.offsetTop-ev.clientY;

            return Math.round((Math.atan2(y, x)*180/Math.PI+180)/90)%4;
        };
        var oUl=document.getElementById('co19');
        var aLi=oUl.children;
        var aP=oUl.getElementsByTagName('p');

        for(var i=0; i<aLi.length; i++){
            aLi[i].index=i;
            aLi[i].onmouseover=function(ev){
                var oEvent=ev || event;

                var from=oEvent.fromElement || oEvent.relatedTarget;
                if(this.contains(from))return;

                var n=hoverDis(this, oEvent);
                var oP=aP[this.index];
                switch(n){
                    case 0:
                        oP.style.left='248px';
                        oP.style.top=0;
                        break;
                    case 1:
                        oP.style.left=0;
                        oP.style.top='248px';
                        break;
                    case 2:
                        oP.style.left='-248px';
                        oP.style.top=0;
                        break;
                    case 3:
                        oP.style.left=0;
                        oP.style.top='-248px';
                        break;
                }
                move(oP, {left: 0, top: 0});
            };

            aLi[i].onmouseout=function(ev){
                var oEvent=ev || event;

                var to=oEvent.toElement || oEvent.relatedTarget;
                if(this.contains(to))return;

                var n=hoverDis(this, oEvent);
                var oP=aP[this.index];

                switch(n){
                    case 0:
                        move(oP, {left: 292, top: 0});
                        break;
                    case 1:
                        move(oP, {left: 0, top: 248});
                        break;
                    case 2:
                        move(oP, {left: -292, top: 0});
                        break;
                    case 3:
                        move(oP, {left: 0, top: -248});
                        break;
                }
            };
        }
    })();
    /* 透明层 */

        
    (function(){
        var n=0;
        var timer=null;
        var oLeft=$('.left-1');
        var oRight=$('.right-1');
        var aHide=$('.hide-1');
        timer=setInterval(function(){
            
            n++;
            aHide.hide();
            aHide.eq(n).show();
            if(n>=2){
                n=-1;
            }

        },3000);

        oLeft.on('click',function(){
            clearInterval(timer);
            n++;
            aHide.hide();
            aHide.eq(n).show();
            if(n>=2){
                n=-1;
            }
        });
        oRight.on('click',function(){
            clearInterval(timer);
            n++;
            aHide.hide();
            aHide.eq(n).show();
            if(n>=2){
                n=-1;
            }
        });
        oRight.on('mouseleave',function(){
            setInterval(function(){
                n++;
                aHide.hide();
                aHide.eq(n).show();
                if(n>=2){
                    n=-1;
                }

            },2000);
        })
        oLeft.on('mouseleave',function(){
            setInterval(function(){
                n++;
                aHide.hide();
                aHide.eq(n).show();
                if(n>=2){
                    n=-1;
                }

            },2000);
        })
    })();
    /* 选项卡 */

    (function(){
        var oHead=$('.head');
        var oH=$('.h10');

        $(document).scroll(function(){
            oHead.css({'position':'fixed','top':0,'left':0,'z-index':20});
            oH.css('display','block');
        })
    })();
    /* 吸顶条  */

    var oBox=$('.ontop a');
    oBox.mouseover(function () {
        $('.C_img_4').css('display','none')
        $('.C_img_3').css('display','block')
        oBox.mouseout(function () {
            $('.C_img_4').css('display','block')
            $('.C_img_3').css('display','none')
        })
    })
};
