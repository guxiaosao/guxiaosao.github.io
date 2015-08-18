
$(window).ready(function () {
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
		var newslist = $("input[name=newslist]");
		var flag = false;
		if(this.checked == true){
			flag = true;
		}else{
			flag = false;
		}
		newslist.each(function(i,v){
				v.checked = flag;
		});
		jisuan();
	});

	$('.orange').click(function (event) {
		$('.popup').show();
	});
	$('.close').click(function (event) {
		$('.popup').hide();
	});


});
function jisuan(){
		var list = $("input[name=newslist]");
		var sum = 0, count = 0;
		for(var i = 0; i < list.length; i++){
			var sel = list[i],index,price,number;
			if(sel.checked == true){
				 index = sel.id.split("-")[1];
				 price = +$("#price-" + index).text();
				 sum += number = +$("#text_box" + index).val();
				 count += number * price;
			}else{
				continue;
			}
		}
		$("#zong1").text(count.toFixed(2));
		$("#shuliang").text(sum);
		$("#goods_counts").html(sum);
	}
function delRow(obj){
	var row = obj.parentNode.parentNode;
	var tb = row.parentNode;
	var rowIndex = row.rowIndex;
	tb.deleteRow(rowIndex);
	tb.parentElement.style.padding="0";
	tb.parentElement.style.border="none";
	jisuan();
}


