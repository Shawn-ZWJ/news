window.onload=function(){
    /*1.顶部搜索 */
     search();
    /*2.轮播图 */
    banner();
    /*3.倒计时 */
    downTime();
}
var search=function(){
    /*1.默认固定顶部透明背景*/


    var searchBox=document.querySelector(".jd_search_box");
    var banner=document.querySelector(".jd_banner");
    var height=banner.offsetHeight;
    /*监听页面滚动事件*/
    window.onscroll=function () {
        var scrollTop = document.documentElement.scrollTop;
         /*默认透明度*/
        var opacity=0;
        if(scrollTop<height){
            /*2.当页面滚动的时候---随着页面卷曲的高度变大透明度变大*/
            opacity=scrollTop/height*0.85;
        }
        else{
            /*3.当页面滚动的时候---超过某一个高度的时候透明度不变*/
            opacity=0.85;
        }
        searchBox.style.background='rgba(201,21,36,'+opacity+')';
    }
};
var banner=function () {

};

var downTime=function () {

};
