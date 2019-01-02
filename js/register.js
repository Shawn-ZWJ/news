
$(function(){
    $('body').on('tap','.btn_register',function(){

        if(window.loading) return false;

        var data = {
            username:$.trim($('[name=username]').val()),
            password:$.trim($('[name=password]').val()),
            repassword:$.trim($('[name=repassword]').val()),
        }

        if(!data.username){
            mui.toast('请输入用户名');
            return false;
        }

        if(!data.password){
            mui.toast('请输入密码');
            return false;
        }

        if(!data.repassword){
            mui.toast('请再次输入密码');
            return false;
        }

        if(data.password != data.repassword){
            mui.toast('两次密码不一致');
            return false;
        }





        $.ajax({
            type:'post',
            url:'http://10.20.91.5:8080/www/register',
            data:data,
            dataType:'jsonp',
            jsonp:'jsoncallback',
            beforeSend:function(){
                window.loading = 1;
                $('.btn_register').html('正在提交...');
            },
            success:function(data){
                window.loading = null;
                if(data.register===success){
                    mui.toast('注册成功！');
                    location.href = login.html;
                }else{
                    mui.toast(data.message);
                    $('.btn_register').html('注册');
                }
            }
        });
    });
});