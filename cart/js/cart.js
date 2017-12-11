$(function(){
    if(!$.cookie('enroll')){
        if(confirm('是否确认登录')){
            window.location.href = "../../enter/html/enter.html";
        }
    }else{
        var oMyGa = (new Function('return' + $.cookie('enroll'))());
        $('.oMyGodwelcome span').eq(0).html('你好，' + oMyGa.name);
        $('.oMyGodwelcome a').css({
            'display':'none'
        })
        $('.oMyGodwelcome .oMyGodtuichu').css({
            'display':'block',
            'left':$('.oMyGodwelcome span').offset().left + $('.oMyGodwelcome span').width()
        })
        $('.oMyGodwelcome .oMyGodtuichu').click(function(){
            $.cookie('name',null);
            $('.oMyGodwelcome span').eq(0).html('欢迎来到奥买家');
            $('.oMyGodwelcome a').css({
                'display':'inline-block'
            })
            $(this).css('display','');
        })
    }
    $('.oMyGodwelcome a').bind({
        mouseover:function(){
            $(this).css('font-weight','900');
        },
        mouseout : function(){
            $(this).css('font-weight','100');
        }
    })
    //鼠标点击地址栏显示
    $('.oMyGodaddress').bind({
        click:function(evt){
            $('.oMyGodaddressafter').css('display','block');
            $(this).css('border-bottom','0');
            $('.oMyGodcountry').eq(0).show();
            evt.stopPropagation();
        }
    })
    $(".oMyGodchoose div").bind({
        click:function(e){
            $(".oMyGodchoose div").css('opacity','0.3')
            $('.oMyGodaddressafter').css('display','block');
            $(this).css('opacity','1');
            e.stopPropagation();
        }
    })
    $(".oMyGodchoose div").eq(2).click(function(){
        $('.oMyGodcountry').children().click(function(){
            $('.oMyGodaddressafter').css('display','none');
        })
    })
    $('.oMyGodcountry').children().bind({
        mouseover:function(){
            $(this).css({
                'background':'#005ea7',
                'color':'white'
            });

        },
        mouseout:function(){
            $(this).css({
                'background':'',
                'color':''
            });
        }
    })
    //个人中心
    $('.oMyGodtopRightli1').bind({
        mouseover:function(e){
            $(this).css('background','white');
            $('.oMyGodtopRightli1 div').slideDown().show();
            $('.oMyGodtopRightli1 div a').bind({
                mouseover:function(e){
                    $(this).css('background','#eee');
                },
                mouseout:function(e){
                    $(this).css('background','');
                }
            })
            e.stopPropagation();
        }
    })
    //手机端
    $('.oMyGodtopRightli3').bind({
        mouseover:function(e){
            $(this).css({
                'background':'white',
                'border-bottom':'0'
            });
            $('.oMyGodtopPhone').slideDown().show();
            e.stopPropagation();
        }
    })
    //样式回收
    $(document).bind({
        click:function(evt){
            $('.oMyGodaddressafter').stop().hide();
            $('.oMyGodaddress').css('border-bottom','1px solid #e1e1e1')
            evt.stopPropagation();
        },
        mouseover:function(){
            $('.oMyGodtopRightli1 div').slideUp(function(){
                $('.oMyGodtopRightli1').css('background','');
            })
            $('.oMyGodtopPhone').slideUp(function(){
                $('.oMyGodtopRightli3').css('background','');
            });
            $('.oMyGodtopRightli1 div').slideUp("fast",function(){
                $('.oMyGodtopRightli1').css('background','');
            });
            $('.oMyGodnavList').hide();
        },
    })
    //底部样式区
    $('.oMyGodbottomcenter div h4 p a').bind({
        mouseover:function(){
            $(this).children().eq(1).css('display','block');
        },
        mouseout:function(){
            $(this).children().eq(1).hide();
        }
    })
    $('.oMyGodbottomcenter ul li a').bind({
        mouseover:function(){
            $(this).css('text-decoration','underline');
        },
        mouseout:function(){
            $(this).css('text-decoration','none');
        }
    })
    //临时购物车界面
    $('#oMyGodbuycart').css('height',$(window).height());
    $(window).resize(function(){
        $('#oMyGodbuycart').css('height',$(window).height());
        var cartTop = $(window).height() / 4;
        $('.oMyGodbuycar').css('top',cartTop);
    })

    $('.oMyGodbuycartleft div:not(.oMyGodtanma)').bind({
        mouseover:function(){
            $(this).css({
                'background':'#f03468'
            })
        },
        mouseout:function(){
            $(this).css('background','');
        }
    })
    //点击购物车，打开临时购物车界面。设置开关
    var oMyGodstop = true;
    $('.oMyGodbuycar').bind({
        click:function(){
            if(oMyGodstop){
                $('#oMyGodbuycart').animate({right:0},500);
            }else{
                $('#oMyGodbuycart').animate({right:'-280px'},500);
            }
            oMyGodstop = !oMyGodstop;
            $('.oMyGodtanma p i').click(function(){
                $(this).parent().parent().fadeOut();
                $('.oMyGodtanma').hide();
                if(!oMyGodstop){
                    $('#oMyGodbuycart').animate({right:'-280px'},500);
                    oMyGodstop = !oMyGodstop;
                }
            })
        }
    })
    //划过二维码图标，二维码显示 ========================================
    $('.oMyGodma').bind({
        mouseover:function(e){
            $('.oMyGodtanma').fadeIn().show();
            e.stopPropagation();
        },
        mouseout:function(e){
            $('.oMyGodtanma').bind({
                mouseover:function(e){
                    $(this).show();
                    e.stopPropagation();
                },
                mouseout:function(e){
                    $(this).hide().delay(1000);
                }
            })
            e.stopPropagation();
        }
    })
    $(document).mouseover(function(){
        $('.oMyGodtanma').fadeOut();
    })
    //回到顶部效果
    $(window).scroll(function(){
        if($(window).scrollTop() >= 800){
            $('.oMyGodgotop').fadeIn();
        }else{
            $('.oMyGodgotop').fadeOut();
        }
    })
    $('.oMyGodgotop').click(function(){
        $('body,html').animate({scrollTop:0},500);
    });
    /*点击logo进入奥买家主页*/
    $('.oMyGodlogo-con h1 img').click(function(){
        window.location.href = "../../index/html/index.html";
    })
    /*点击登录按钮进入登录页面*/
    $('.oMyGodtopLeft .oMyGodwelcome a').eq(0).click(function(){
        window.location.href = "../../enter/html/enter.html";
    })
    /*点击注册按钮进入注册页面*/
    $('.oMyGodtopLeft .oMyGodwelcome a').eq(1).click(function(){
        window.location.href = "../../enroll/html/enroll.html";
    })
    /*点击随便逛逛，进入网站主体*/
    $('.oMyGodzhuti-con .oMyGodsuibiangg a').bind({
        click:function(){
            window.location.href = "../../index/html/index.html";
        },
        mouseover:function(){
            $(this).css('text-decoration','underline');
        },
        mouseout:function(){
            $(this).css('text-decoration','');
        }
    })

    /*获取cookie*/
    //cookiek = "{src:" + $('.oMyGodsmalltu img').attr('src') + ",count:" + $('.oMyGodjiesuan p .oMyGodjishuqi').html() + ",zong:" + $('.oMyGodjiesuan p span').html() + ",dan:" + $('.oMyGodjia span i').html() + "}";
    if($.cookie('buy')){
        var oMyGodb = (new Function('return' + $.cookie('buy')))();
        $('.oMyGodshangpinxinxi').show();
        $('.oMyGodsuibiangg').hide();
        $('.oMyGodxie ul li img').attr('src',oMyGodb.src);
        $('.oMyGodjishu span').html(oMyGodb.count);
        $('.oMyGodjiage p span').html(oMyGodb.dan);
        $('.oMyGodzong p span,.oMyGodyingfu span i').html(oMyGodb.zong);
        $("input").prop("checked", true);
        $('.oMyGodzong a').css({
            'background':'#f03468',
            'color':'white'
        })
    }
    /*点击全选 。则全部选中*/
    $('input').attr('checked',false);
    $('#oMyGodinput,.oMyGodjies input').click(function(){
        if(this.checked){
            $("input").prop("checked", true);
            $('.oMyGodzong a').css({
                'background':'#f03468',
                'color':'white'
            })
            /*==========================用cookie来获取数量==================================================*/
            $('.oMyGodjishu span').html();
            /*总金额，税费，运费的填写*/
            $('.oMyGodzong p b').html($('.oMyGodshuiffei b').html());
            /*总金额的填写*/
            $('.oMyGodyingfu span i,.oMyGodzong p span').html(parseInt($('.oMyGodjiage p span').html()) * parseInt($('.oMyGodjishu span').html()));
        }else{
            $('input').attr('checked',false);
            $('.oMyGodzong a').css({
                'background':'',
                'color':''
            })
            $('.oMyGodzong p b').html("0.00");
            /*总金额的填写*/
            $('.oMyGodyingfu span i,.oMyGodzong p span').html("0.00");
        }
    })
    /*点击删除选中的商品和清空购物车。页面中的商品消失。空   浮现*/
    $('.oMyGodjies a').click(function(){
        $('.oMyGodshangpinxinxi').hide();
        $('.oMyGodsuibiangg').show();
    })

    if($.cookie('enroll')){
        var  a = (new Function('return' + $.cookie('enroll')))();
        /*页面跳转的时候欢迎这个用户*/
        $('.oMyGodwelcome span').eq(0).html('你好， ' + a.name);
        $('.oMyGodwelcome a').css({
            'display':'none'
        })
        $('.oMyGodwelcome .oMyGodtuichu').css({
            'display':'block',
            'left':$('.oMyGodwelcome span').offset().left + $('.oMyGodwelcome span').width()
        })
        /*点击退出按钮，则退出当前用户*/
        $('.oMyGodwelcome .oMyGodtuichu').click(function(){
            $.cookie('name',null);
            $('.oMyGodwelcome span').eq(0).html('欢迎来到奥买家！');
            $('.oMyGodwelcome a').css({
                'display':'inline-block'
            })
            $(this).css('display','');
        })
        $(window).scrollTop(0);
        $('.oMyGodwelcome a').bind({
            mouseover:function(){
                $(this).css('font-weight','900');
            },
            mouseout : function(){
                $(this).css('font-weight','100');
            }
        })
    }

})