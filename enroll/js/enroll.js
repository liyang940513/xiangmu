/**
 * Created by Administrator on 2017/10/16.
 */
/*点击logo跳转到主页*/
$(function(){
    $('.oMyGodTopa-con h1 a').click(function(){
        window.location.href = "../../index/html/index.html"
    })
    /*点击立即登录跳转到登录页面*/
    $('.oMyGodTopa-con p span').eq(0).bind({
        click:function(){
            window.location.href = "../../enter/html/enter.html";
        },
        mouseover:function(){
            $(this).css({color:'#f03468'})
        },
        mouseout:function(){
            $(this).css({color:''})
        }
    })
    /*手机号码验证*/
    var cookieke = "";
    $('.oMyGodzhuce-con input').eq(0).blur(function(){
        if(/^\d{11}$/.test($(this).val())){
            cookieke += "{name:'" + $(this).val() + "'";
            $(this).next().children().hide();
            $(this).next().html("");
            $(this).css({
                'border':'',
                'border-left':''
            });
            $(this).prev().css({
                'border':'',
                'border-right':''
            })
            $('.oMyGodbtn').attr('disabled',false);
        }else{
            $('.oMyGodbtn').attr('disabled',true);
            $(this).next().children().css('display','block');
            $(this).next().html("手机号格式不正确");
            $(this).css({
                'border':'1px solid #f03468',
                'border-left':'0'
            });
            $(this).prev().css({
                'border':'1px solid #f03468',
                'border-right':'0'
            })
        }
    })
    /*密码验证*/
    $('.oMyGodzhuce-con input').eq(1).blur(function(){
        $('.oMyGodqiangdujiance').css('display','block');
        if(/^\w{6,20}$/.test($(this).val())){
            /*创建cookie*/
            cookieke += ",pass:'" + $(this).val() + "'}";
            $.cookie('enroll',cookieke,{path:"/"});

            $('.oMyGodbtn').attr('disabled',false);
            if(/\d/.test(($(this).val()))){
                $('.oMyGodqiangdujiance p').css('background','');
                $('.oMyGodqiangdujiance p').eq(0).css('background','#ec9d21');
                if(/[a-z]/i.test(($(this).val()))){
                    $('.oMyGodqiangdujiance p').css('background','');
                    $('.oMyGodqiangdujiance p').eq(1).css('background','#ec9d21');
                    if(/[_]/.test($(this).val())){
                        $('.oMyGodqiangdujiance p').css('background','');
                        $('.oMyGodqiangdujiance p').eq(2).css('background','#ec9d21');
                    }
                }
            }
        }else{
            $('.oMyGodbtn').attr('disabled',true);
            $(this).next().children().css('display','block');
            $(this).next().html("密码格式不正确");
            $(this).css({
                'border':'1px solid #f03468',
                'border-left':'0'
            });
            $(this).prev().css({
                'border':'1px solid #f03468',
                'border-right':'0'
            })
        }
    })
    $('.oMyGodbtn').click(function(){
        window.location.href = "../../index/html/index.html";
    })
})