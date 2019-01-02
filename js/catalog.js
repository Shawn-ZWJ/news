/*滑动*/
mui('.mui-scroll-wrapper').scroll({
    indicators:false
});

$(function () {
    /*1.分类默认渲染 第一个分类对应的新闻*/
    getFirstCategoryData(function (data) {

        $('.cate_Left ul').html(template('firstTemplate',{ list: data }));

        /*第一个一级分类对应的新闻*/
        var catatalogId = $('.cate_Left ul li:first-child').find('a').attr('data-id');
        render( catatalogId);
    });


    /*2.点击分类加载对应的新闻*/

    $('.cate_Left').on('tap','a',function (e) {
        /*当前选中的时候不去加载*/
        if($(this).parent().hasClass('now')) return false;
        /*样式的选中功能*/
        $('.cate_Left li').removeClass('now');
        $(this).parent().addClass('now');
        /*选完分类关闭菜单*/
        // $('#popover').hide();
        //   $('.mui-backdrop').hide();
        // /*阻止事件冒泡*/
        //  $('.cate_Right').on('click','a',function (event) {
        //        event.preventDefault()
        //       });

        /*数据的渲染*/
        render( $(this).attr('data-id'));

    });

//获取新闻id
    $('.cate_Right').on('tap','a',function (e) {
        var itemId=$(this).attr('data-itemId');
        this.href = this.href + '?itemId='+itemId;


        // render($(this).attr('data-itemid'));
        /*渲染*/

    });



});
/*获取分类的数据*/
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
/*获取分类新闻的数据*/
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
/*渲染*/
var render = function (catatalogId) {
    getSecondCategoryData({
        id:catatalogId
    },function (data) {

        $('.cate_Right ul').html(template('secondTemplate',{ list: data }));
    });
}

/*点击按钮获取文字渲染到标题*/

function addTabs(obj) {
     var text = $(obj).text();
     $("h3").html(text);
};







