/*����*/
mui('.mui-scroll-wrapper').scroll({
    indicators:false
});

$(function () {
    /*1.����Ĭ����Ⱦ ��һ�������Ӧ������*/
    getFirstCategoryData(function (data) {

        $('.cate_Left ul').html(template('firstTemplate',{ list: data }));

        /*��һ��һ�������Ӧ������*/
        var catatalogId = $('.cate_Left ul li:first-child').find('a').attr('data-id');
        render( catatalogId);
    });


    /*2.���������ض�Ӧ������*/

    $('.cate_Left').on('tap','a',function (e) {
        /*��ǰѡ�е�ʱ��ȥ����*/
        if($(this).parent().hasClass('now')) return false;
        /*��ʽ��ѡ�й���*/
        $('.cate_Left li').removeClass('now');
        $(this).parent().addClass('now');
        /*ѡ�����رղ˵�*/
        // $('#popover').hide();
        //   $('.mui-backdrop').hide();
        // /*��ֹ�¼�ð��*/
        //  $('.cate_Right').on('click','a',function (event) {
        //        event.preventDefault()
        //       });

        /*���ݵ���Ⱦ*/
        render( $(this).attr('data-id'));

    });

//��ȡ����id
    $('.cate_Right').on('tap','a',function (e) {
        var itemId=$(this).attr('data-itemId');
        this.href = this.href + '?itemId='+itemId;


        // render($(this).attr('data-itemid'));
        /*��Ⱦ*/

    });



});
/*��ȡ���������*/
var getFirstCategoryData = function (callback) {
    $.ajax({
        url:'http://10.20.91.5:8080/www/getCatalogList',
        type:'get',
        data:'',
        dataType:'jsonp',
        jsonp:'jsoncallback',
        success:function (data) {
            callback && callback(data);

        }
    });
};
/*��ȡ�������ŵ�����*/
/*params = {id:1}*/
var getSecondCategoryData = function (params,callback) {

    $.ajax({
        url:'http://10.20.91.5:8080/www/getCatalogNew',
        type:'get',
        data:params,
        dataType:'jsonp',
        jsonp:'jsoncallback',
        success:function (data) {
            callback && callback(data);

        }
    });
};
/*��Ⱦ*/
var render = function (catatalogId) {
    getSecondCategoryData({
        id:catatalogId
    },function (data) {

        $('.cate_Right ul').html(template('secondTemplate',{ list: data }));
    });
}

/*�����ť��ȡ������Ⱦ������*/

function addTabs(obj) {
     var text = $(obj).text();
     $("h3").html(text);
};







