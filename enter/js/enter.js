$(function(){
    if($.cookie('enroll')){
        var oMyG = (new Function('return' + $.cookie('enroll'))());
        $('.oMyGodzhucename input').eq(0).val(oMyG.name);
        $('.oMyGodzhucename input').eq(1).val(oMyG.pass);
    }
    /*点击logo跳转到主页*/
    $('.oMyGodTop-con h1 a').click(function(){
        window.location.href = "../../index/html/index.html"
    })
    /*点击  立即注册   跳转到注册页面*/
$('.oMyGodTop-con p span').eq(0).click(function(){
    window.location.href = "../../enroll/html/enroll.html";
})
    /*点击立即注册跳转到注册页面*/
    $('.oMyGodTop-con p span').eq(0).bind({
        click:function(){
            window.location.href = "../../enroll/html/enroll.html";
        },
        mouseover:function(){
            $(this).css('color','#f03468')
        },
        mouseout:function(){
            $(this).css('color','')
        }
    })
    /*登录验证*/
    var cookiekey = "";
    $('.oMyGodzhucename input').eq(0).blur(function(){
        if(/^\d{11}$/.test($(this).val())){
            $(this).parent().css({
                'border':''
            })
            $(this).css('color','');
            $('.oMyGoddenglu').removeAttr('disabled');
            cookiekey += "{name:'" + $(this).val() + "'}";
        }else{
            $(this).parent().css({
                'border':'1px solid #f03468'
            })
            $(this).val('您输入的账号名错误');
            $(this).css('color','#f03468');
            $('.oMyGoddenglu').attr('disabled',"true");
        }
        /*点击跳转到主页*/
    })
    $('.oMyGoddenglu').click(function (){
        $.cookie('enroll',cookiekey,{'path':'/'});
        window.location.href = "../../index/html/index.html";
    })
    $('.oMyGodzhucename input').eq(1).blur(function(){
        if(/^[0-9a-zA-Z]{6,20}$/.test($(this).val())){
            $(this).parent().css({
                'border':''
            })
            $(this).css('color','');
            $('.oMyGoddenglu').removeAttr('disabled');
        }else{
            $(this).parent().css({
                'border':'1px solid #f03468'
            })
            $(this).val('您输入的账号名错误');
            $(this).css('color','#f03468');
            $('.oMyGoddenglu').attr('disabled',"true");
        }
    })

/*点击账号和手机登录时候，两个模块互换*/
    $('.oMyGoddengluTop p').click(function(){
        $('.oMyGoddengluTop p').css({
            'color':'#999',
            'border-bottom':'0'
        })
        $(this).css({
            'color':'#333',
            'border-bottom':'2px solid #f03468'
        })
    })
    $('.oMyGoddengluTop p').eq(0).click(function(){
        $('.oMyGoddenglucenter').animate({left:0},500);
        $('.oMyGodshoujidenglu').animate({right:-350},500);
    })
    $('.oMyGoddengluTop p').eq(1).click(function(){
        $('.oMyGoddenglucenter').animate({left:-350},500);
        $('.oMyGodshoujidenglu').animate({right:0},500);
    })
/*验证码格式*/
$('.oMyGodyanzhengma1').blur(function(){
    if(!(/^\d{6}$/.test($(this).val()))){
        $(this).parent().css({
            'border':'1px solid #f03468'
        });
        $(this).css('color','#f03468');
        $(this).val('验证码格式不正确');
    }else{
        $(this).parent().css({
            'border':''
        });
        $(this).css('color','');
    }
})













})
