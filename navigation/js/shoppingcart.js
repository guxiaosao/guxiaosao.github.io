$(function(){
//①通用函数 计算（）
var length=$("input[name=newslist]").length; 
function jisuan(){
		
		//alert(length);
		var sum=0;
		var sum_shuliang=0;
		for(var i=1;i<=length;i++)
		   { 
		     var num="newslist-"+i;
		   //alert(num);
		   var shulianghe="#text_box"+i;
		   //alert(shulianghe);
		   var price="#price-"+i;
		   var price1=$(price).text();
		   var text_box="#text_box"+i;
		    var text_box1=$(text_box).val();;
		   //alert(text_box1);
		 
		     var newslist_num=document.getElementById(num);
			 newslist_num.value=parseFloat(text_box1)*parseFloat(price1);
			 //alert(newslist_num.value);
			 if(newslist_num.checked==true){
			 //alert(sum);
			 sum+=parseFloat(newslist_num.value);
			 //alert(sum);
			 sum_shuliang+=parseInt($(shulianghe).val());
			 //alert(sum_shuliang);
			 }		      
		    }
			//alert(sum);
		$("#zong1").text(sum.toFixed(2));
		$("#shuliang").text(sum_shuliang);
			}
			
// ②checkbox的点击事件			
$("input[name=newslist]").click(function(){
		jisuan();
		})
//③buttom-的点击减法算法			
$("input[id=min]").click(function(){
	  var shuliang=$(this).siblings("input[name=text_box]").val();
	  //alert(shuliang);
	  if(shuliang!="0"){
	  $(this).siblings("input[name=text_box]").val(parseInt(shuliang)-1);
	    var danjia=$(this).parents(".tb1_td5").siblings(".tb1_td4").children(".pricep").children(".price").text();
	  //alert(danjia);
	  var xxx=parseFloat(danjia)*(parseInt(shuliang)-1);
	  $(this).parents(".tb1_td5").siblings(".tb1_td6").children("label").text(xxx.toFixed(2));}	  
		jisuan();
		})	
//④buttom-的点击加法算法
$("input[id=add]").click(function(){
	  var shuliang=$(this).siblings("input[name=text_box]").val();
	  //alert(shuliang);
	  $(this).siblings("input[name=text_box]").val(parseInt(shuliang)+1); 
	  var danjia=$(this).parents(".tb1_td5").siblings(".tb1_td4").children(".pricep").children(".price").text();
	  //alert(danjia);
	  var xxx=parseFloat(danjia)*(parseInt(shuliang)+1);
	  $(this).parents(".tb1_td5").siblings(".tb1_td6").children("label").text(xxx.toFixed(2));
		jisuan();
		})	
//⑤数量文本编写的点击算法
$("input[name=text_box]").keyup(function(){
	  var value=$(this).val(); 
	  if((/^(\+|-)?\d+$/.test( value )) && value>=0)
              {
				  var danjia=$(this).parents(".tb1_td5").siblings(".tb1_td4").children(".pricep").children(".price").text();
				  var xxx=parseFloat(danjia)*parseInt(value);
				  $(this).parents(".tb1_td5").siblings(".tb1_td6").children("label").text(xxx.toFixed(2));
                jisuan(); 
              }
              else
              {
                $(this).parents(".tb1_td5").siblings(".tb1_td6").children("label").text("0.00");
                $(this).val("0");jisuan();
              }		
		})	
//⑥selectall的点击事件
$("#Checkbox1").click(function(){		
						//alert(document.getElementById("Checkbox1").checked);
					 if(document.getElementById("Checkbox1").checked==true){
						 for(var i=1;i<=length;i++){
							 var num="newslist-"+i;
							  var newslist_num=document.getElementById(num);
							  newslist_num.checked=true;
							 }
						      jisuan();
						 }
					 })
})		
