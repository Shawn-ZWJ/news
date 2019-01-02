/*滑动*/
mui('.mui-scroll-wrapper').scroll({
    indicators:false
});

// 点赞
$('.zan').on('tap',function (e) {
    var $likeNum = $(this).find('.like_num');
    var num = +$likeNum.text()
    if(!$(this).hasClass('usefulClick')){
        $(this).addClass('usefulClick');
        $likeNum.text(++num);
    }else{
        console.log("tag has usefulClick");
    }

});


/*获取新闻评论*/
$(function () {

    getNewComment(GetQueryString("itemId"),function (data) {

        $('.comments_list').html(template('commentTemplate',{list:data} ));
        $('.title').html('<h3>当前话题：'+data[0].title+'</h3>');
    });

});

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if(r!=null)return  unescape(r[2]); return null;
}



/*获取新闻的评论*/
/*params = {itemId:10001}*/
var  getNewComment = function (params,callback) {
    $.ajax({
        url:'http://10.20.91.5:8080/www/getComment',
        type:'get',
        data:{itemId:params},
        dataType:'jsonp',
        jsonp:'jsoncallback',
        success:function (data) {
            if(data.itemId!==null){

                callback && callback(data);
            }
            else{

                getNewTitle(GetQueryString("itemId"),function (data) {

                    $('.comments_list').html(template('commentTemplate',{list:data} ));
                    $('.title').html('<h3>当前话题：'+data.title+'</h3>');
                });
            }

        }
    });
};

/*如果没有新闻只显示标题*/
var  getNewTitle = function (params,callback) {
    $.ajax({
        url:'http://10.20.91.5:8080/www/getNewById',
        type:'get',
        data:{itemId:params},
        dataType:'jsonp',
        jsonp:'jsoncallback',
        success:function (data) {

                console.log(data);
                callback && callback(data);


        }
    });
};


/*点击按钮添加评论*/
$('.btn').on('tap',function (e) {
    /*获取数据*/
    console.log($('[name="comments"]').val())
    if($('[name="comments"]').val().length==0){
        mui.toast('内容不能为空！');
        return false;
    }

    var data = {
        commentText:$('[name="comments"]').val(),
        itemId:GetQueryString("itemId"),
    };
    $('[name="comments"]').val("");
    setComment(data);

});


/*添加评论*/
var  setComment = function (data) {
    $.ajax({
        url:'http://10.20.91.5:8080/www/insertComment',
        type:'post',
        data:data,
        dataType:'jsonp',
        jsonp:'jsoncallback',
        success:function (data) {
            if(data.login=="faild"){
                location.href = 'login.html';
            }
            else if(data.insert!==null){
                getNewComment(GetQueryString("itemId"),function (data) {

                    $('.comments_list').html(template('commentTemplate',{list:data} ));
                    $('.title').html('<h3>当前话题：'+data[0].title+'</h3>');
                });
            }


        }
    });
};



