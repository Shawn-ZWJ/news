/*获取新闻ID*/
$(function () {

    getNewData(GetQueryString("itemId"),function (data) {
       $('.main_container').html(template('newTemplate',data ));
    });

    getNewComment(GetQueryString("itemId"),function (data) {
        $('.comments_list').html(template('commentTemplate',{list:data} ));

      });
     //地址加上id
    $('.comment_send').on('tap','a',function (e) {
        var itemId=getUrlParam('itemId');
        this.href = this.href + '?itemId='+itemId;


        // render($(this).attr('data-itemid'));
        /*渲染*/

    });
});
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) {
        return unescape(r[2]);
    }
    return null; //返回参数值
}

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if(r!=null)return  unescape(r[2]); return null;
}



/*根据Id获取新闻的数据*/
/*params = {itemId:10001}*/
var getNewData = function (params,callback) {
     $.ajax({
        url:'http://192.168.191.4:8080/www/getNewById',
        type:'get',
        data:{itemId:params},
        dataType:'jsonp',
        jsonp:'jsoncallback',
        success:function (data) {
            data.date.time=timestampToTime(data.date.time);
            callback && callback(data);

        }
    });
};

/*获取新闻的评论*/
/*params = {itemId:10001}*/
var  getNewComment = function (params,callback) {
    $.ajax({
        url:'http://192.168.191.4:8080/www/getComment',
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



//json时间戳转换为正常格式
function timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    return Y+M+D;
}