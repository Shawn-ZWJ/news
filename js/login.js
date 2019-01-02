$(function(){
    $('#loginBtn').on('tap',function(){
        if(window.login){
            return false;
        }
        /*获取数据*/
        var data = {
            username:$('[name="username"]').val(),
            password:$('[name="password"]').val()
        };
        /*校验数据*/
        if(!data.username){
            mui.toast('请输入用户名');
            return false;
        }
        if(!data.password){
            mui.toast('请输入密码');
            return false;
        }
        /*发送数据*/
        $.ajax({
            type:'post',
            url:'http://10.20.91.5:8080/www/login',
            data:data,
            dataType:'jsonp',
            jsonp:'jsoncallback',
            beforeSend:function(){
                window.login = true;
            },
            success:function(data){
                if(data.login=="success"){
                    /*1.回跳*/
                    if(location.search && location.search.indexOf('?returnUrl=') > -1){
                        var returnUrl = location.search.replace('?returnUrl=','');
                        location.href = returnUrl;
                    }

                    else{
                        location.href = 'user.html';
                    }
                }else{
                    mui.toast('用户名或密码错误！');
                }
                window.login = false;
            },
            error:function(){
                mui.toast('服务繁忙！');
                window.login = false;
            }
        });

    });
    $('#regBtn').on('tap',function(){

        location.href = 'register.html';
    });
});