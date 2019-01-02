$(function(){
    /*渲染用户信息*/
    var render = function(){
        getUserData(function(data){
            $('.mui-media-body').html(data.name+'<p class="mui-ellipsis">手机:'+data.phone+'</p>');
            $('#head-img').attr("src", data.user_icon);
        });
    }
    render();
    /*退出*/
    $('.mui-block').on('click',function(){

        $.ajax({
            type:'get',
            url:'http://10.20.91.5:8080/www/logout',
            data:'',
            dataType:'jsonp',
            jsonp:'jsoncallback',
            success:function(data){
                if(data.logout){
                    location.href = 'login.html';
                }
            }
        });
    });
});
/*获取用户信息*/
var getUserData = function(callback){
    $.ajax({
        type:'get',
        url:'http://10.20.91.5:8080/www/getUser',
        data:'',
        dataType:'jsonp',
        jsonp:'jsoncallback',
        success:function(data){
            if(data.userid){
               callback && callback(data);
            }
            else{
                location.href = 'login.html';
            }


        }
    });
}