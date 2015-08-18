$(function () {

    $(".huadong").mouseover(function () {
        $(this).show().css('padding-left', '10px')

    });
    $(".huadong").mouseout(function () {
        $(this).show().css('padding-left', '-10px');
    });
    $("#searchSelected").click(function(){
        $("#searchTab").toggle();
        $(this).addClass("searchOpen");
    });

    $("#searchTab li").hover(function(){
        $(this).addClass("selected");
    },function(){
        $(this).removeClass("selected");
    });

    $("#searchTab li").click(function(){
        $("#searchSelected").html($(this).html());
        $("#searchTab").hide();
        $("#searchSelected").removeClass("searchOpen");
    });
    $('.orange').click(function(event) {
        $('.popup').show();
    });
    $('.close').click(function(event) {
        $('.popup').hide();
    });



});
//返回顶部
window._scroll$ = {},_scroll$.scrolldelay;
_scroll$.PgUp = function(flag) {
    // window.scrollTo(0,0); 直接回顶部
    var y = window.scrollY;
    if (y <= 0 || flag) { //到达顶部,或者执行特殊操作时，停止滚动
        clearTimeout(_scroll$.scrolldelay);
    } else {
        window.scrollBy(0, -100);
        _scroll$.scrolldelay = setTimeout(function () {
            _scroll$.PgUp();
        }, 10);
    }
}
