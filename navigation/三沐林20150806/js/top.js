///**
// * Created by Administrator on 2015/8/1.
// */
//window._scroll$ = {},_scroll$.scrolldelay;
//_scroll$.PgUp = function(flag){
//    // window.scrollTo(0,0); ֱ�ӻض���
//    var y = window.scrollY;
//    if(y <= 0 || flag){ //���ﶥ��,����ִ���������ʱ��ֹͣ����
//        clearTimeout(_scroll$.scrolldelay);
//    }else{
//        window.scrollBy(0,-100);
//        _scroll$.scrolldelay = setTimeout(function(){
//            _scroll$.PgUp();
//        },10);
//    }
//}