/*初始化区域滚动组件*/
mui('.mui-scroll-wrapper').scroll({
    indicators:false
});
/*轮播图的初始化*/
mui('.mui-slider').slider({
    interval:4000
});

// /*下拉刷新*/
// mui.init({
//     pullRefresh : {
//         container:".mui-scroll-wrapper",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
//         down : {
//             style:'circle',//必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
//             color:'#2BD009', //可选，默认“#2BD009” 下拉刷新控件颜色
//             height:'50px',//可选,默认50px.下拉刷新控件的高度,
//             range:'100px', //可选 默认100px,控件可下拉拖拽的范围
//             offset:'0px', //可选 默认0px,下拉刷新控件的起始位置
//             auto: true,//可选,默认false.首次加载自动上拉刷新一次
//             callback :pullfresh-function //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
//         }
//     }
// });


jQuery(document).ready(function(){


    getData();

    function getData(){
        $.ajax({
            type:'get',
            url:'http://10.20.91.5:8080/www/getNewsList',
            dataType:'jsonp',
            jsonp:'jsoncallback',
            data:'{}',
            success:function(json){
                if(json.length==null){
                    alert("获取不到数据");
                }
                else{
                    var html = template('hotTemplate',{ list: json });
                    $('.mui-table-view').html(html);
                    console.log(json);
                }

            },
            error:function(XMLHttpRequest, textStatus, errorThrown){

                console.log(XMLHttpRequest.status,XMLHttpRequest.readyState,textStatus,errorThrown);

            }

        })
}
})