/*ª¨∂Ø*/
mui('.mui-scroll-wrapper').scroll({
    indicators:false
});

// µ„‘ﬁ
$('.com_top .zan').on('click',function (e) {
    console.log("zan");
    var $likeNum = $(this).find('.like_num');
    var num = +$likeNum.text()
    if(!$(this).hasClass('usefulClick')){
        $(this).addClass('usefulClick');
        $likeNum.text(++num);
    }else{
        console.log("tag has usefulClick");
    }

});


