window.onload=function(){
    /*1.�������� */
     search();
    /*2.�ֲ�ͼ */
    banner();
    /*3.����ʱ */
    downTime();
}
var search=function(){
    /*1.Ĭ�Ϲ̶�����͸������*/


    var searchBox=document.querySelector(".jd_search_box");
    var banner=document.querySelector(".jd_banner");
    var height=banner.offsetHeight;
    /*����ҳ������¼�*/
    window.onscroll=function () {
        var scrollTop = document.documentElement.scrollTop;
         /*Ĭ��͸����*/
        var opacity=0;
        if(scrollTop<height){
            /*2.��ҳ�������ʱ��---����ҳ������ĸ߶ȱ��͸���ȱ��*/
            opacity=scrollTop/height*0.85;
        }
        else{
            /*3.��ҳ�������ʱ��---����ĳһ���߶ȵ�ʱ��͸���Ȳ���*/
            opacity=0.85;
        }
        searchBox.style.background='rgba(201,21,36,'+opacity+')';
    }
};
var banner=function () {

};

var downTime=function () {

};
