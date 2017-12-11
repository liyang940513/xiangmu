/**
 * Created by Administrator on 2017/10/16.
 */
$(function(){
    /*cookie*/
    if($.cookie('name2')){
        var oMGa = new Function("return" + $.cookie("name2"))();
        $('.oMyGodkanguo').append('<dl><dt><img src="' + oMGa.src + '" alt=""/></dt><dd>￥188.00</dd></dl>')
        $('.oMyGodsmalltu img,.oMyGodbigtu img,.oMyGodsmallb p img').attr('src',oMGa.src);
        $('.oMyGodjia span i').html(oMGa.price);
        $('.oMyGodjia del').html(oMGa.yuan);
        $.getJSON('../../json/list.json',function(response){
            for(var i = 0;i < 5;i ++){
                $('.oMyGodgess ul').each(function(){
                    var suiji = Math.floor(Math.random() * 100);
                    $(this).children().children().eq(0).attr('src',response[2].r[suiji]);
                    $('.oMyGodgess ul li img').click(function(){
                        $('.oMyGodsmalltu img,.oMyGodbigtu img,.oMyGodsmallb p img').attr('src',$(this).attr('src'));
                        $('.oMyGodjia span i').html($('.oMyGodgess ul li p span').html());
                        for(var i = 0;i < 5;i++){
                            var suiji2 = Math.floor(Math.random() * 100);
                            $('.oMyGodgess img').eq(i).attr('src',response[2].r[suiji2]);
                        }
                    })
                })
            }
            for(var i = 0;i < response[3].xiangxi.length + 1;i++){
                $('.oMyGodxiangxi').append('<img src="' + response[3].xiangxi[i] + '" alt="" />')
                $('.oMyGodxiangxi img').eq(4).attr('src',oMGa.src);
            }

        })
    }
    $(window).scrollTop(0);
    $('.oMyGodwelcome a').bind({
        mouseover:function(){
            $(this).css('font-weight','900');
        },
        mouseout : function(){
            $(this).css('font-weight','100');
        }
    })
    /*点击logo图片  跳转到主页面*/
    $('#oMyGodlogo-con .oMyGodlogo h1 a img').click(function(){
        window.location.href = "../../index/html/index.html";
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
            $('.oMyGodbannernav').css('display','none');
            $('.oMyGodcartsp span em').fadeOut();
        },
    })
    //鼠标划过。字体颜色改变
    $('.oMyGodtopRightli2 a,.oMyGodtopRightli4 a,.oMyGodSearch p span a,.oMyGodnav li a,.oMyGodbaopin .oMyGodbaopin-list dd h5,.oMyGodlistbodycenter div p a').bind({
        mouseover:function(){
            $(this).css('color','#fb463d');
        },
        mouseout:function(){
            $(this).css('color','');
        }
    })
    /*鼠标话过全部商品分类的时候，下边的列表显示*/
    $('#oMyGodnav-con .oMyGodnav .oMyGodnavli1').bind({
        mouseover:function(e){
            $('.oMyGodbannernav').css('display','block');
            e.stopPropagation();
        }
    })
    /*全部商品分类的列表显示*/
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
/*点击登录，跳转到登录按钮*/
    $('.oMyGodwelcome a').eq(0).click(function(){
        window.location.href = "../../enter/html/enter.html";
    })
/*点击注册，跳转到注册按钮*/
    $('.oMyGodwelcome a').eq(1).click(function(){
        window.location.href = "../../enroll/html/enroll.html";
    })
/*d点击我的购物车。跳转到购物车页面*/
    $('.oMyGodtopRight').click(function(){
        window.location.href = "../../cart/html/cart.html";
    })
    /*自身样式区*/
    /*鼠标划过商品图片。出现放大镜效果*/
    $('.oMyGodsmallzhezhao').bind({
        mouseover:function(e){
            $('.oMyGodjingzi').show();
            $('.oMyGodbigtu').show();
            /*镜子的xy值计算*/
            e.stopPropagation();
        },
        mousemove:function(e){
            var oMyGodjingzix = e.pageX - $('.oMyGodjingzi').width() / 2 - $('.oMyGodsmallzhezhao').offset().left;
            var oMyGodjingziy = e.pageY - $('.oMyGodjingzi').height() / 2 - $('.oMyGodsmallzhezhao').offset().top;
            /*设置边界*/
            if(oMyGodjingziy <= 0){
                oMyGodjingziy = 0;
            }else if(oMyGodjingziy >= $('.oMyGodsmallzhezhao').height() - $('.oMyGodjingzi').height()){
                oMyGodjingziy = $('.oMyGodsmallzhezhao').height() - $('.oMyGodjingzi').height() + "px";
            }
            if(oMyGodjingzix <= 0){
                oMyGodjingzix = 0;
            }else if(oMyGodjingzix >= $('.oMyGodsmallzhezhao').width() - $('.oMyGodjingzi').width()){

                oMyGodjingzix = $('.oMyGodsmallzhezhao').width() - $('.oMyGodjingzi').width() + "px";
            }
            $('.oMyGodjingzi').css({
                'left' : oMyGodjingzix + "px",
                'top' : oMyGodjingziy + "px"
            })
            /*设置大图的移动*/
            /*计算移动比例*/
            var l = oMyGodjingzix / ($('.oMyGodsmallzhezhao').width() - $('.oMyGodjingzi').width());
            var t = oMyGodjingziy / ($('.oMyGodsmallzhezhao').height() - $('.oMyGodjingzi').height());
            /*计算大图的移动*/
            $('.oMyGodbigtu img').css({
                'left' : -($('.oMyGodbigtu img').width() - $('.oMyGodbigtu').width()) * l + "px",
                'top' : -($('.oMyGodbigtu img').height() - $('.oMyGodbigtu').height()) * t + "px"
            })
            e.stopPropagation();
        },
        mouseout:function(e){
            $('.oMyGodjingzi').hide();
            $('.oMyGodbigtu').hide();
            e.stopPropagation();
        }
    })
    /*点击放大镜下边的小图，出现大图交换显示的效果*/
    /*划过小图时候  小图的样式改变*/
    $('.oMyGodsmalltu img').eq(0).css('z-index','100');
    $('.oMyGodsmallb p').eq(0).children().css('border','1px solid red');
    $('.oMyGodsmallb p').bind({
        mouseover:function(){
            $('.oMyGodsmallb p').css('border','1px solid white');
            $(this).css('border','1px solid red');
        },
        mouseout:function(){
            $(this).css('border','1px solid white');
        },
        /*点击小图的时候，改变大图的显示*/
        click:function(){
            var index = $(this).index();
            $('.oMyGodsmalltu img').css('z-index','0');
            $('.oMyGodsmalltu img').eq(index).css('z-index','100');
            $('.oMyGodsmallb p').children().css('border','1px solid white');
            $(this).children().css('border','1px solid red');
        }
    })
    /*点击+ 和 - 号的时候。里边的数字相应的增加或减少*/
    var oMyGodshulaing = 1;
    $('.oMyGodshuliang p span').eq(0).click(function(){
        if(oMyGodshulaing <= 0){
            $(this).next().html("0");
        }else{
            oMyGodshulaing --;
            $(this).next().html(oMyGodshulaing);
        }
    })
    $('.oMyGodshuliang p span').eq(2).click(function(){
        oMyGodshulaing ++;
        $(this).prev().html(oMyGodshulaing);
    })
    /*点击立即购买，跳转到购物车也，并且伴随着自身所有属性*/
    $('.oMyGodgoumai').click(function(){
        window.location.href = "../../cart/html/cart.html";
    })
    /*点击到购物车结算，跳转到购物车页面*/
    var cookiek = "";
    $('.oMyGodjiesuan input,.oMyGodtopRightli4 a').click(function(){
        var cooa = $('.oMyGodsmalltu img').attr('src');
        var coob = $('.oMyGodjiesuan p .oMyGodjishuqi').html();
        var cooc = $('.oMyGodjiesuan p span').html();
        var cood = $('.oMyGodjia span i').html();
        window.location.href = '../../cart/html/cart.html';
        cookiek = "{'src':'" + cooa + "','count':" + coob + ",'zong':" + cooc + ",'dan':" + cood + "}";
        $.cookie('buy',cookiek,{path:'/'});
    })
    /*点击加入购物车。出现飞入购物车的效果*/
    var oMyGod = 0;
    $('.oMyGodjiaru,.oMyGodxuanfuright a').click(function(e){
        oMyGod++;
        var oMyGodcount = parseInt($('.oMyGodspsl').text());
        var oMyGodbuy = 0;
        oMyGodbuy += oMyGodcount;
        /*点击改变去购物车结算的样式*/
        $('.oMyGodjiesuan input').css({
            'background':'#f00659',
            'color':'white'
        })
        /*购物车左侧的计数器*/
        $('.oMyGodbuycar span').html(oMyGod);
        $('.oMyGodtopRightli4 a span').html(oMyGod);
        /*购物车右侧的下方计数器*/
        $('.oMyGodjiesuan p .oMyGodjishuqi').html(oMyGod * oMyGodcount);
        /*右边的计价器*/
        $('.oMyGodjiesuan p span').html(oMyGod * oMyGodcount * $('.oMyGodjia span i').html());
        /*开始飞入购物车的效果*/
        $('.oMyGodsmalltu img').clone().appendTo($('.oMyGodshuliang'));
        $('.oMyGodshuliang img').stop().animate({left:$('.oMyGodbuycar').offset().left - $(this).offset().left + 160,top:$('.oMyGodbuycar').offset().top - $(this).offset().top + 80},1000,function(){
            $('.oMyGodshuliang img').hide();
        });
        $('.oMyGodface').hide();
        /*飞入购物车后，购物车中的笑脸盒子消失。插入类名为oMyGodcartsp的新盒子*/
        $('.oMyGodcar-con').append('<div class="oMyGodcartsp"><div class="oMyGodzhe"></div><a href="#"><img src="" alt=""/></a><p></p><span><i></i><b></b><em>x</em></span></div>');
        /*a下的img的src 是大图的图片*/
        $('.oMyGodcartsp a img').attr('src',$('.oMyGodsmalltu img').attr('src'));
        /*div中的p中的文字是*/
        $('.oMyGodcartsp p').html($('.oMyGodbiaoti h1 span').html());
        /*span中的i中是内容是价位中span的内容*/
        $('.oMyGodcartsp span i').html('¥ ' + $('.oMyGodjia span i').html())
        /*b中是数字，+= 数量中的数字*/
        $('.oMyGodcartsp span b').text(oMyGodbuy);
        /*鼠标划入到这个盒子的时候，后边的小x显示，点击小x  清除这个大盒子*/
        $('.oMyGodzhe').bind({
            mouseover:function(e){
                $('.oMyGodcartsp').css('background','#f9f9f9');
                $('.oMyGodcartsp span em').fadeIn();
                $('.oMyGodcartsp span em').unbind().bind({
                    mouseover:function(e){
                        $(this).css('display','block');
                        e.stopPropagation();
                    },
                    click:function(e){
                        //$('.oMyGodjiesuan input').removeAttr('disabled');
                        $(this).parent().parent().remove();
                        /*购物车左侧的计数器*/
                        oMyGod --;
                        $('.oMyGodbuycar span').html(oMyGod);
                        /*购物车右侧的下方计数器*/
                        $('.oMyGodjiesuan p .oMyGodjishuqi').html(oMyGod * oMyGodcount);
                        /*右边的计价器*/
                        $('.oMyGodjiesuan p span').html(oMyGod * oMyGodcount * $('.oMyGodjia span i').html());
                        /*如果点击后右边盒子中的子盒子数量为,2，则笑脸的盒子显示*/
                        if($('.oMyGodcar-con').children().length == 2){
                            $('.oMyGodface').css('display','block');
                            $('.oMyGodjiesuan input').css({
                                'background':'',
                                'color':'',
                            })
                            $('.oMyGodjiesuan input').attr('disabled','true');
                        }
                        e.stopPropagation();
                    }
                })
                e.stopPropagation();
            },
            mouseout:function(e){
                $('.oMyGodcartsp').css('background','');
                e.stopPropagation();
            }
        })
        return false;
    })
    /*商品保证区*/
    $('.oMyGodxunhuan').bind({
        mouseover:function(e){
            $(this).parent().children().eq(0).animate({left:-50,opacity:0},300,function(){
                $(this).parent().css('opacity','0');
            });
            $(this).parent().children().eq(1).animate({left:247,opacity:0},300);
            e.stopPropagation();
        },
        mouseout:function(e){
            $(this).parent().css('opacity','1');
            $(this).parent().children().eq(0).animate({left:45,opacity:1},300);
            $(this).parent().children().eq(1).animate({left:97,opacity:1},300);
            e.stopPropagation();
        }
    })
    /*滚动高度到上详情的时候固定定位，顶部悬浮*/
    $(window).scroll(function(){
        if($(window).scrollTop() >= $('.oMyGodxuanfu').offset().top){
            $('.oMyGodxuanfu').css({
                'position':'fixed',
                'top':'0',
                'left':'137px',
                'z-index':'9996'
            })
            $('.oMyGodxuanfu .oMyGodxuanfuright a').css({
                'display':'block'
            })
            if($(window).scrollTop() <= $('.oMyGodspxq').offset().top){
                $('.oMyGodxuanfu').css({
                    'position':'relative',
                    'left':'0'
                })
                $('.oMyGodxuanfu .oMyGodxuanfuright a').css({
                    'display':'none'
                })
            }
        }
    })
    /*点击商品详情，滚动高度滚动到商品详情区域*/
    $('.oMyGodxuanfu h3').click(function(){
        $(window).scrollTop($('#oMyGoddetails').offset().top);
        $('.oMyGodxuanfu h4,.oMyGodxuanfu h3').css({
            'background':'#000',
            'color':'white'
        })
        $(this).css({
            'background':'white',
            'color':'#f03468'
        })
    })
    $('.oMyGodxuanfu h4').click(function(){
        $(window).scrollTop($('.oMyGodspxq').offset().top);
        $('.oMyGodxuanfu h4,.oMyGodxuanfu h3').css({
            'background':'#000',
            'color':'white'
        })
        $(this).css({
            'background':'white',
            'color':'#f03468'
        })
    })
/*评价的点击事件*/
    $('.oMyGodhaoping a').click(function(e){
        $('.oMyGodhaoping a').css('background','#f5f5f5');
        $(this).css('background','white');
        return false;
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