$(function(){
        $(window).scrollTop(0);
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
    /*点击logo图片  跳转到主页面*/
    $('#oMyGodlogo-con .oMyGodlogo h1 a img').click(function(){
        window.location.href = "../../index/html/index.html";
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
                $('.oMyGodbaozhe').prev().fadeOut();
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




//    自身样式区\
//    轮播图代码
    for(var i = 1;i < 2;i++){
        $('.oMyGodbannerTurn p').append($("<span></span>"))
    }
    var oMyGodlunbotudian = ($(window).width()-  $('.oMyGodbannerTurn p').width()) / 2;
    $('.oMyGodbannerTurn p').css({
        'left': oMyGodlunbotudian + "px"
    })
    var oMyGodlunbo = 1;
    $('#oMyGodbanner').css('background','url(../img/banner' + 1 + '.jpeg) center no-repeat');
    $('.oMyGodbannerTurn p span').eq(0).css('background','white');
    //  轮播图函数   鼠标点击banner区域，连接到详情页
    $('.oMyGodbanner').click(function(){
        //跳转到的页面==========-----------------------------------
        location.href = "";
    })
    function oMyGodlunbotu(oMyGodlunbo){
        $('#oMyGodbanner').css('background','url(../img/banner' + oMyGodlunbo + '.jpeg) center no-repeat');
        $('.oMyGodbannerTurn p').children().css('background','');
        $('.oMyGodbannerTurn p').children().eq(oMyGodlunbo - 1).css('background','white');
    }
    function oMyGodlunbofn(){
        var oMyGodlunbotimer = null;
        oMyGodlunbotimer = setInterval(function(){
            oMyGodlunbo ++;
            oMyGodlunbotu(oMyGodlunbo);
            if(oMyGodlunbo >= 2){
                oMyGodlunbo = 0;
            }
        },5000);
        //    鼠标划过，停止计时器，
        var oMyGodlunbo2 = 0;
        $('.oMyGodbannerTurn p').children().bind({
            mouseover:function (){
                clearInterval(oMyGodlunbotimer);
                oMyGodlunbo2 = $(this).index();
                $('.oMyGodbannerTurn p span').css('background','');
                $(this).css('background','white');
                oMyGodlunbotu(oMyGodlunbo2 + 1);
            },
            mouseout:function(){
                $('.oMyGodbannerTurn p span').css('background','');
                $(this).css('background','white');
                oMyGodlunbofn(oMyGodlunbo);
            }
        })
    }
    oMyGodlunbofn();
/*//!*!/新品首发中的轮播图      需要获取json数据
//    在盒子中添加要展示的商品*!/*/
    $.getJSON("../../json/list.json",function(response){
        for(var i = 0;i < response[1].n.length;i++){
            $('.oMyGodlunbonei').append($('<div><dl><dt><p></p><img src="' + response[1].n[i] + '" alt=""/></dt><dd><p class="oMyGodnewfirstjie">西班牙Babybol女童小童冬款简西班牙Babybol女童小童冬款简</p><h6><i>¥</i><span>188.00 </span><del>￥378.00</del></h6></dd></dl></div>'));
        }
        //下方的小图
        for(var i = 0;i < response[0].s.length;i++){
            $('.oMyGodunderlist div').append('<a><img src="' + response[0].s[i] + '" alt=""/></a>')
        }
        //商品详情区的图
        for(var i = 0;i < response[2].r.length;i++){
            $('.oMyGodbaokuandiv').append('<div><img src="' + response[2].r[i] + '" alt=""/><p class="oMyGodnewfirstjie">西班牙Babybol女童小童冬款简西班牙Babybol女童小童冬款简</p><h6><i>¥</i><span>188.00 </span><del>￥378.00</del></h6><h5><a href="#">加入购物车</a></h5><div class="oMyGodbaozhe"></div></div>')
        }
        /*鼠标点击页面上的图片。然后跳转到详情页*/
        $('.oMyGodlunbonei img,.oMyGodunderlist div img').click(function(e){
            var  cooki = "";
            cooki = "{src:'" + $(this).attr('src') + "'}";
            $.cookie("name2",cooki,{path:"/"});
            window.location.href = "../../details/html/details.html";
            e.stopPropagation();
        })
        $('.oMyGodbaozhe').click(function(e){
            var  cooki = "";
            cooki = "{src:'" + $(this).parent().children().eq(0).attr('src') + "'}";
            $.cookie("name2",cooki,{path:"/"});
            window.location.href = "../../details/html/details.html";
            e.stopPropagation();
        })
        /*鼠标划过商品图，则a显示*/
        $('.oMyGodbaozhe').bind({
            mouseover:function(e){
                $(this).parent().css({
                    'box-shadow':'0 -2px 2px gray'
                })
                $(this).prev().fadeIn();
                $(this).prev().bind({
                    mouseover:function(e){
                        $(this).show();
                        e.stopPropagation();
                    },
                    click:function(e){
                        var  cooki = "";
                        cooki = "{src:'" + $(this).parent().children().eq(0).attr('src') + "',say:'" + $(this).parent().children().eq(1).html() + "',price:'" + $(this).parent().children().eq(2).children().eq(1).html() + "',yuan:'" + $(this).parent().children().eq(2).children().eq(2).html() + "'}";
                        $.cookie("name2",cooki,{path:"/"});
                        window.location.href = "../../details/html/details.html";
                        e.stopPropagation();
                    },
                })
                e.stopPropagation();
            },
            mouseout:function(){
                $(this).parent().css({
                    'box-shadow':'0 0 0'
                })
            }
        })
        //设置外边大盒子的宽度
        $('.oMyGodlunbonei').css('width',$('.oMyGodlunbonei div').length * 300);
        //小圆点的个数
        var oMyGodxinpinheight = parseInt($('.oMyGodlunbonei').width() / 1200 + 1);
        //添加小圆点
        for(var i = 0;i < oMyGodxinpinheight;++i){
            $('.oMyGodxinpinyuandian').append('<a></a>');
        }
        //设置初始的小圆点样式
        $('.oMyGodxinpinyuandian a').eq(0).css('background','#f03468');
        //给小圆点添加点击事件
        var oMyGodxinpinindex = 0;
        var oMyGoda = 0;
        $('.oMyGodxinpinyuandian a').bind({
            click:function(){
                oMyGoda = oMyGodxinpinindex = $(this).index();
                $('.oMyGodxinpinyuandian a').css('background','');
                $(this).css('background','#f03468');
                var oMyGodlunboneiwidth = oMyGodxinpinindex * 1200;
                $('.oMyGodlunbonei').animate({left:-oMyGodlunboneiwidth+ 'px'},500);
            }
        })
    //    给左右箭头添加点击事件
        $('.oMyGodzuojiantou').bind({
            click:function(e){
                oMyGoda--;
                if(oMyGoda < 0){
                    oMyGoda = $('.oMyGodxinpinyuandian a').length - 1;
                }
                var awidth = oMyGoda * 1200;
                $('.oMyGodlunbonei').animate({left:-awidth+ 'px'},500);
                $('.oMyGodxinpinyuandian a').css('background','');
                $('.oMyGodxinpinyuandian a').eq(oMyGoda).css('background','#f03468');
                e.stopPropagation();
            },
            mouseover:function(e){
                $('.oMyGodzuojiantou').css({
                    'opacity':'0.5',
                    'cursor':'pointer'
                })
                e.stopPropagation();
            },
            mouseout:function(e){
                $('.oMyGodzuojiantou').css({
                    'opacity':'0.1',
                    'cursor':'pointer'
                })
                e.stopPropagation();
            }
        })
    //    右箭头的点击事件
        $('.oMyGodyoujiantou').bind({
            click:function(e){
                oMyGoda++;
                if(oMyGoda > $('.oMyGodxinpinyuandian a').length - 1){
                    oMyGoda = 0;
                }
                var awidth = oMyGoda * 1200;
                $('.oMyGodlunbonei').animate({left:-awidth+ 'px'},500);
                $('.oMyGodxinpinyuandian a').css('background','');
                $('.oMyGodxinpinyuandian a').eq(oMyGoda).css('background','#f03468');
                e.stopPropagation();
            },
            mouseover:function(e){
                $('.oMyGodyoujiantou').css({
                    'opacity':'0.5',
                    'cursor':'pointer'
                })
                e.stopPropagation();
            },
            mouseout:function(e){
                $('.oMyGodyoujiantou').css({
                    'opacity':'0.1',
                    'cursor':'pointer'
                })
                e.stopPropagation();
            }
        })
    })
/*首发下方的图片样式*/
    $('.oMyGodunderlist img').bind({
        mouseover:function(){
            $(this).css('opacity','0.5');
        },
        mouseout:function(){
            $(this).css('opacity','');
        }
    })

/*楼梯的样式*/
    $('#oMyGodlouti').css({
        'top': ($(window).height() - $('.oMyGodloutilist').height()) / 2 - 200 + "px"
    })
    $('.oMyGodmain-con>div').each(function(){
        $('.oMyGodloutilist').append('<div></div>');
        var index = $(this).index();
        $(window).scroll(function(){
            if($(window).scrollTop() >= $('.oMyGodmain-con>div').eq(index).offset().top){
                $('.oMyGodloutilist>div').css('border','').css('color','');
                $('.oMyGodloutilist>div').eq(index).css({
                    'border':'1px solid red',
                    'color':'red'
                })
                $('.oMyGodloutilist>div').html("");
                $('.oMyGodloutilist>div').eq(index).html($('.oMyGodmain-con>div').eq(index).children().eq(0).children().eq(0).html());
            }
            if($(window).scrollTop() >= $('.oMyGodmain-con>div').eq(0).offset().top){
                $('#oMyGodlouti').css('display','block');
            }else{
                $('#oMyGodlouti').css('display','none');
            }
        })
    })
    $('.oMyGodloutilist>div').click(function(){
        var index = $(this).index();
        $(window).scrollTop($('.oMyGodmain-con>div').eq(index).offset().top);
    })
    /*点击到购物车结算，跳转到购物车页面*/
    $('.oMyGodjiesuan input').click(function(){
        window.location.href = '../../cart/html/cart.html';
    })
    /*d点击我的购物车。跳转到购物车页面*/
    $('.oMyGodtopRight').click(function(){
        window.location.href = "../../cart/html/cart.html";
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
/*获取json来实现图片的转换*/






})





