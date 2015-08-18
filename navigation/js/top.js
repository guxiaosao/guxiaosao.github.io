///**
// * Created by Administrator on 2015/8/1.
// */
//window._scroll$ = {},_scroll$.scrolldelay;
//_scroll$.PgUp = function(flag){
//    // window.scrollTo(0,0); 直接回顶部
//    var y = window.scrollY;
//    if(y <= 0 || flag){ //到达顶部,或者执行特殊操作时，停止滚动
//        clearTimeout(_scroll$.scrolldelay);
//    }else{
//        window.scrollBy(0,-100);
//        _scroll$.scrolldelay = setTimeout(function(){
//            _scroll$.PgUp();
//        },10);
//    }
//}