$(function(){
    /* 其他样式*/
    if($.cookie('enroll')){
        var  oMyGa = (new Function('return' + $.cookie('enroll')))();
        /*页面跳转的时候欢迎这个用户*/
        $('.oMyGodwelcome span').eq(0).html('你好， ' + oMyGa.name);
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
    $('.oMyGodwelcome a').bind({
        mouseover:function(){
            $(this).css('font-weight','900');
        },
        mouseout : function(){
            $(this).css('font-weight','100');
        }
    })
    /*点击登录跳转到登录页*/
    $('.oMyGodwelcome a:not(.oMyGodtuichu)').eq(0).click(function(){
        window.location.href = "../../enter/html/enter.html";
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
//鼠标划过。字体颜色改变
    $('.oMyGodtopRightli2 a,.oMyGodtopRightli4 a,.oMyGodSearch p span a,.oMyGodnav li a,.oMyGodbaopin .oMyGodbaopin-list dd h5,.oMyGodlistbodycenter div p a,.oMyGodlisttop div ul li').bind({
        mouseover:function(){
            $(this).css('color','#fb463d');
        },
        mouseout:function(){
            $(this).css('color','');
        }
    })
//    搜索框样式    跳转到子页
    $('.oMyGodbtn,.oMyGodnav ul li:gt(1),.oMyGodbannernav ul li p a,.oMyGodabanner').click(function(){
        window.location.href = "../../list/html/list.html";
    })
//banner nav的样式改变
    $('.oMyGodbannernav ul li:last-child').css('border','0').css('height','');
    $('.oMyGodbannernav ul li').bind({
        mouseover:function(e){
            $('.oMyGodnavList').show().css({
                'background-image':'url(../img/1548c1f27a4_2_6cd4e4b1b96efb57a89c040f7c2aa7db_30x30.png) 25px 8px no-repeat;'
            });
            $(this).css('background','white');
            $(this).children().children().css('color','#f84b29');
            $(this).children().css('color','#f84b29');
            $(this).children().children().bind({
                mouseover:function(){
                    $(this).css('font-weight','900');
                },
                mouseout:function(){
                    $(this).css('font-weight','100');
                }
            })
            e.stopPropagation();
        },
        mouseout:function(){
            $(this).css('background','');
            $(this).children().children().css('color','');
            $(this).children().css('color','');
            var that = $(this);
            $('.oMyGodnavList').bind({
                mouseover:function(e){
                    $('.oMyGodbannernav ul li').css('background','');
                    $('.oMyGodbannernav ul li').children().children().css('color','');
                    $('.oMyGodbannernav ul li').children().css('color','');
                    that.css('background','white');
                    that.children().children().css('color','#f84b29');
                    that.children().css('color','#f84b29');
                    $('.oMyGodnavList div p span a').bind({
                        mouseover:function(){
                            $(this).css('color','#f84b29');
                        },
                        mouseout:function(){
                            $(this).css('color','');
                        }
                    })
                    e.stopPropagation();
                },
                mouseout:function(e){
                    $('.oMyGodbannernav ul li').css('background','');
                    $('.oMyGodbannernav ul li').children().children().css('color','');
                    $('.oMyGodbannernav ul li').children().css('color','');
                    e.stopPropagation();
                }
            })
        }
    })
//轮播图代码      这里需要使用ajax来动态获取到图片==================================
    $.getJSON("../../json/lunbo.json",function(response){
        for(var i = 0;i < response.length;i++){
            $('.oMyGodbannerTurn p').append($("<span></span>"))
        }
        var oMyGodlunbotudian = ($(window).width()-  $('.oMyGodbannerTurn p').width()) / 2;
        $('.oMyGodbannerTurn p').css({
            'left': oMyGodlunbotudian + "px"
        })
        $('#oMyGodbanner-con').css('background',response[0].src);
        $('.oMyGodbannerTurn p span').eq(0).css('background','white');
        //鼠标点击banner区域，连接到子页
        $('.oMyGodbanner').mouseover(function(){
            $(this).css('cursor','pointer');
        })
        $('.oMyGodbanner').click(function(){
            location.href = "../../list/html/list.html";
        })
        //轮播图函数
        var oMyGodlunbo = 0;
        var oMyGodlunbo2 = 0;
        function oMyGodlunbotu(oMyGodlunbo){
            $('#oMyGodbanner-con').css('background',response[oMyGodlunbo].src);
            $('.oMyGodbannerTurn p').children().css('background','');
            $('.oMyGodbannerTurn p').children().eq(oMyGodlunbo).css('background','white');
        }
        function oMyGodlunbofn(oMyGodlunbo){
            var oMyGodlunbotimer = null;
            oMyGodlunbotimer = setInterval(function(){
                oMyGodlunbotu(oMyGodlunbo);
                oMyGodlunbo ++;
                if(oMyGodlunbo >= response.length){
                    oMyGodlunbo = 0;
                }
            },2000);
            //    鼠标划过，停止计时器，
            $('.oMyGodbannerTurn p').children().unbind().bind({
                mouseover:function (e){
                    clearInterval(oMyGodlunbotimer);
                    oMyGodlunbo = $(this).index();
                    $('.oMyGodbannerTurn p span').css('background','');
                    $(this).css('background','white');
                    $('#oMyGodbanner-con').css('background',response[oMyGodlunbo].src);
                    return false;
                },
                mouseout:function(e){
                    $('.oMyGodbannerTurn p span').css('background','');
                    $(this).css('background','white');
                    oMyGodlunbofn(oMyGodlunbo);
                    return false;
                }
            })
        }
        oMyGodlunbofn(oMyGodlunbo);
    })
//必买爆品下的代码   这里需要使用ajax来动态获取到图片
    $('.oMyGodbaopin-list img,.oMyGodlistbodyleft img,.oMyGodlistbodyright img').bind({
        mouseover:function(){
            $(this).css({
                'transform':'scale(1.1) translateX(-6px)',
                'transition':'0.5s'
            })
        },
        mouseout:function(){
            $(this).css({
                'transform':'',
                'transition':'0.5s'
            })
        },
        click:function(){
            //写上子页地址。。。。。。。。。。。。。。。。。。，，，，，，，，，
            window.location.href = "";
        }
    })
//    爆品区域中马上抢的字体设置
    $('.oMyGodbaopin-list dd a').bind({
        mouseover:function(){
            $(this).css('font-weight','900');
        },
        mouseout:function(){
            $(this).css('font-weight','');
        }
    })
//全球品牌
    $.getJSON("../../json/pinpai.json",function(response){
        $('.oMyGodworldlistright div:lt(8)').each(function(){
            $(this).children().eq(1).html(response[$(this).index()].name);
            $(this).children().eq(0).css('background',response[$(this).index()].src);
        })
    })
    $('.oMyGodworldlistright div').eq(0).css({
        'background':'#ff442a',
        'color':'white'
    });
    $('.oMyGodpinpailist div').bind({
        mouseover:function(e){
            $(this).css('opacity','0.5');
            e.stopPropagation();
        },
        mouseout:function(e){
            $(this).css('opacity','1');
            e.stopPropagation();
        }
    })
    //品牌的小图标
    $.getJSON("../../json/world.json",function(response,status,xhr){
        for(var i = 0;i < response.length;i++){
            $('.oMyGodpinpailist').append("<div></div>");
        }
        $('.oMyGodpinpailist div').each(function(index,value){
            $(this).css('background',response[index].src);
        })
        $('.oMyGodworldlistright div:lt(8)').bind({
            mouseover:function(e){
                $('.oMyGodworldlistright div').css({
                    'background':'',
                    'color':''
                })
                $(this).css({
                    'background':'#ff442a',
                    'color':'white'
                })
                $('.oMyGodpinpailist div').each(function(){
                    var oMyGodsuiji = Math.floor(Math.random() * 18);
                    $(this).css('background',response[oMyGodsuiji].src);
                })
                e.stopPropagation();
            },
            mouseout:function(e){
                $(this).css({
                    'background':'',
                    'color':''
                })
                e.stopPropagation();
            }
        })
    })
    //商品列表中的字体颜色设置
    $('.oMyGodlistbody .oMyGodlistbodyleft .oMyGodlistbodyleftbottom p a').bind({
        mouseover:function(){
            $(this).css('color','#333');
        },
        mouseout:function(){
            $(this).css('color','');
        }
    })
    $('.oMyGodpinpailist').eq(8).bind({
        click:function(){
            //更多品牌子页。。。。。。。。。。。。。
            window.location.href = ""
        },
        mouseover:function(){
            $('.oMyGodpinpailist').css('display','none');
        },
        mouseout:function(){
            $('.oMyGodpinpailist').css('display','block');
        }
    })
/*ajax 获取商品详情，然后插入到页面中。 ======================================================*/
    $.getJSON('../../json/indexshow.json',function(response){
        for(var i = 0;i < response.length;i++){
            $('.oMyGodbody-con').append($('<div class="oMyGodlist clear" title=""><div class="oMyGodlisttop"><img src="" alt=""/><div><p><b></b> <span><i></i><b></b></span></p><ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li> <li></li></ul></div></div><div class="oMyGodlistbody"> <div class="oMyGodlistbodyleft"> <div class="oMyGodlistbodylefttop"><img src="" alt=""/></div><div class="oMyGodlistbodyleftbottom"><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p></div></div><div class="oMyGodlistbodycenter"><div><h4></h4><a href="#"><img src="" alt=""/></a><p><a href="#"></a></p><span></span><del></del></div><div><h4></h4><a href="#"><img src="" alt=""/></a><p><a href="#"></a></p><span></span><del></del></div><div><h4></h4><a href="#"><img src="" alt=""/></a><p><a href="#"></a></p><span></span><del></del></div><div><h4></h4><a href="#"><img src="" alt=""/></a><p><a href="#"></a></p><span></span><del></del></div></div><div class="oMyGodlistbodyright"><img src="" alt=""/></div></div></div>'))
        }
        $('.oMyGodlist').each(function(){
            //获取json中的对应的值
            var o = $(this).index() - 3;
            $(this).attr('title',response[o].name);
            //标题
            $(this).children().eq(0).children().eq(1).children().eq(0).children().eq(0).html(response[o].name);
            //标题后边的小字儿
            $(this).children().eq(0).children().eq(1).children().eq(0).children().eq(1).children().eq(1).html(response[o].aftername);
            //后边的小字儿
            $(this).children().eq(0).children().eq(1).children().eq(1).children().each(function(index){
                $(this).html(response[o].ulli[$(this).index()]);
            })
            //下班区左边的图
            $(this).children().eq(1).children().eq(0).children().eq(0).children().attr('src',response[o].middleimg);
            //左边下方的小字儿
            $(this).children().eq(1).children().eq(0).children().eq(1).children().each(function(){
                $(this).html('<a>' + response[o].jieshao[$(this).index()] + '</a>');
            })
            //下边中见的小图
            $(this).children().eq(1).children().eq(1).children().eq(0).children().eq(0).html('<i style="background:' + response[o].pinpai1i + '"></i>' + response[o].pinpai1name);
            $(this).children().eq(1).children().eq(1).children().eq(1).children().eq(0).html('<i style="background:' + response[o].pinpai2i + '"></i>' + response[o].pinpai2name);
            $(this).children().eq(1).children().eq(1).children().eq(2).children().eq(0).html('<i style="background:' + response[o].pinpai3i + '"></i>' + response[o].pinpai3name);
            $(this).children().eq(1).children().eq(1).children().eq(3).children().eq(0).html('<i style="background:' + response[o].pinpai4i + '"></i>' + response[o].pinpai4name);
            //下方的小图中的图片地址
            $(this).children().eq(1).children().eq(1).children().eq(0).children().eq(1).children().attr('src',response[o].pinpai1img);
            $(this).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().attr('src',response[o].pinpai2img);
            $(this).children().eq(1).children().eq(1).children().eq(2).children().eq(1).children().attr('src',response[o].pinpai3img);
            $(this).children().eq(1).children().eq(1).children().eq(3).children().eq(1).children().attr('src',response[o].pinpai4img);
            //商品简介
            $(this).children().eq(1).children().eq(1).children().eq(0).children().eq(2).children().html(response[o].pinpai1a);
            $(this).children().eq(1).children().eq(1).children().eq(1).children().eq(2).children().html(response[o].pinpai2a);
            $(this).children().eq(1).children().eq(1).children().eq(2).children().eq(2).children().html(response[o].pinpai3a);
            $(this).children().eq(1).children().eq(1).children().eq(3).children().eq(2).children().html(response[o].pinpai4a);
            //价格
            $(this).children().eq(1).children().eq(1).children().eq(0).children().eq(3).html(response[o].pinpai1span);
            $(this).children().eq(1).children().eq(1).children().eq(1).children().eq(3).html(response[o].pinpai2span);
            $(this).children().eq(1).children().eq(1).children().eq(2).children().eq(3).html(response[o].pinpai3span);
            $(this).children().eq(1).children().eq(1).children().eq(3).children().eq(3).html(response[o].pinpai4span);
            //原价
            $(this).children().eq(1).children().eq(1).children().eq(0).children().eq(4).html(response[o].pinpai1del);
            $(this).children().eq(1).children().eq(1).children().eq(1).children().eq(4).html(response[o].pinpai2del);
            $(this).children().eq(1).children().eq(1).children().eq(2).children().eq(4).html(response[o].pinpai3del);
            $(this).children().eq(1).children().eq(1).children().eq(3).children().eq(4).html(response[o].pinpai4del);
            //大图
            $(this).children().eq(1).children().eq(2).children().attr('src',response[o].bifimg);
        })
        //详细列表页中间的图片样式   所有商品图片的样式
        $('.oMyGodlistbodycenter img').bind({
            mouseover:function(){
                $(this).css({
                    'transform':'translateX(-6px)',
                    'transition':'0.3s'
                });
            },
            mouseout:function(){
                $(this).css({
                    'transform':'',
                    'transition':'0.3s'
                });
            }
        })
        $('.oMyGodlistbodyleft img,.oMyGodlistbodyright img').bind({
            mouseover:function(){
                $(this).css({
                    'transform':'scale(1.1) translateX(-6px)',
                    'transition':'0.5s'
                })
            },
            mouseout:function(){
                $(this).css({
                    'transform':'',
                    'transition':'0.5s'
                })
            },
            click:function(){
                //写上子页地址。。。。。。。。。。。。。。。。。。，，，，，，，，，
                window.location.href = "";
            }
        })
        $('.oMyGodlistbodycenter div p a,.oMyGodlisttop div ul li').bind({
            mouseover:function(){
                $(this).css('color','#fb463d');
            },
            mouseout:function(){
                $(this).css('color','');
            }
        })
        /*点击商品图片。跳转到详情页*/
        $('.oMyGodbaopin-list dt a img,.oMyGodbaopin-list dd a,.oMyGodlisttop ul li,.oMyGodlistbody img,.oMyGodlistbody a').click(function(){
            window.location.href = "../../details/html/details.html";
        })
            $('.oMyGodbaopin-list dt a img,.oMyGodlistbody img').click(function(){
                var  cooki = "";
                cooki = "{src:'" + $(this).attr('src') + "'}";
                $.cookie("name2",cooki,{path:"/"});
            })
        //楼梯效果
        $('#oMyGodlouti').css({
            'top': ($(window).height() - $('.oMyGodloutilist').height()) / 2 - 350 + "px"
        })
        $('.oMyGodbody-con>div').each(function(){
            var oMyGodlouceng = $(this).index();
            $('.oMyGodloutilist').append('<div>分类商品</div>');
            var index = $(this).index();
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('.oMyGodbody-con>div').eq(index).offset().top){
                    $('.oMyGodloutilist>div').css('background','').css('color','');
                    $('.oMyGodloutilist>div').eq(index).css('background','red').css('color','white');

                    $('.oMyGodloutilist>div').html('分类商品');
                    $('.oMyGodloutilist>div').eq(index).html($('.oMyGodbody-con>div').eq(index).attr('title'));
                    $('#oMyGodlouti p').unbind().bind({
                        mouseover:function(){
                            $(this).html('在线咨询');
                        },
                        mouseout:function(){
                            $(this).html("");
                        }
                    })
                }
                if($(window).scrollTop() >= $('.oMyGodbody-con>div').eq(0).offset().top){
                    $('#oMyGodlouti').fadeIn();
                }else{
                    $('#oMyGodlouti').fadeOut();
                }
            })
        })
        $('.oMyGodloutilist>div').click(function(){
            var index = $(this).index();
            $(window).scrollTop($('.oMyGodbody-con>div').eq(index).offset().top);
        })
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
    /*点击到购物车结算，跳转到购物车页面*/
    $('.oMyGodjiesuan input').click(function(){
        window.location.href = '../../cart/html/cart.html';
    })
    /*d点击我的购物车。跳转到购物车页面*/
    $('.oMyGodtopRight').click(function(){
        window.location.href = "../../cart/html/cart.html";
    })
/*点击立即注册跳转到注册页面*/
    $('.oMyGodwelcome a').eq(2).click(function(){
        window.location.href = "../../enroll/html/enroll.html";
    })





















})