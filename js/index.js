/*��ʼ������������*/
mui('.mui-scroll-wrapper').scroll({
    indicators:false
});
/*�ֲ�ͼ�ĳ�ʼ��*/
mui('.mui-slider').slider({
    interval:4000
});

// /*����ˢ��*/
// mui.init({
//     pullRefresh : {
//         container:".mui-scroll-wrapper",//����ˢ��������ʶ��querySelector�ܶ�λ��cssѡ�������ɣ����磺id��.class��
//         down : {
//             style:'circle',//��ѡ������ˢ����ʽ��Ŀǰ֧��ԭ��5+ ��circle�� ��ʽ
//             color:'#2BD009', //��ѡ��Ĭ�ϡ�#2BD009�� ����ˢ�¿ؼ���ɫ
//             height:'50px',//��ѡ,Ĭ��50px.����ˢ�¿ؼ��ĸ߶�,
//             range:'100px', //��ѡ Ĭ��100px,�ؼ���������ק�ķ�Χ
//             offset:'0px', //��ѡ Ĭ��0px,����ˢ�¿ؼ�����ʼλ��
//             auto: true,//��ѡ,Ĭ��false.�״μ����Զ�����ˢ��һ��
//             callback :pullfresh-function //��ѡ��ˢ�º��������ݾ���ҵ������д������ͨ��ajax�ӷ�������ȡ�����ݣ�
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
                    alert("��ȡ��������");
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