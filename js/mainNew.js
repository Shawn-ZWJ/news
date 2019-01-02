/*��ȡ����ID*/
$(function () {

    getNewData(GetQueryString("itemId"),function (data) {
       $('.main_container').html(template('newTemplate',data ));
    });

    getNewComment(GetQueryString("itemId"),function (data) {
        $('.comments_list').html(template('commentTemplate',{list:data} ));

      });
     //��ַ����id
    $('.comment_send').on('tap','a',function (e) {
        var itemId=getUrlParam('itemId');
        this.href = this.href + '?itemId='+itemId;


        // render($(this).attr('data-itemid'));
        /*��Ⱦ*/

    });
});
//��ȡurl�еĲ���
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //����һ������Ŀ�������������ʽ����
    var r = window.location.search.substr(1).match(reg);  //ƥ��Ŀ�����
    if (r != null) {
        return unescape(r[2]);
    }
    return null; //���ز���ֵ
}

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);//search,��ѯ������Ĳ�������ƥ������
    if(r!=null)return  unescape(r[2]); return null;
}



/*����Id��ȡ���ŵ�����*/
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

/*��ȡ���ŵ�����*/
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



//jsonʱ���ת��Ϊ������ʽ
function timestampToTime(timestamp) {
    var date = new Date(timestamp);//ʱ���Ϊ10λ��*1000��ʱ���Ϊ13λ�Ļ������1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    return Y+M+D;
}