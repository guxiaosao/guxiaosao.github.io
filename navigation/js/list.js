$(function(){
		   $("b2").children("i").children("span").children("a").click(function(){
									$(this).parents("span").parents("i").parents("b2").hide();
									})


	$("#as_value1").children("ul").children("li").click(function(){
																 $("#as_warp1").hide();
																var b1_text=$(this).text();
																//alert(b1_text);
															     $("#b1").show().children("i").children("span").children("b3").text(b1_text);
																})
	$("#fl").click(function(){
		$("#as_warp1").show();

	})
	$("#as_value2").children("ul").children("li").click(function(){ $("#as_warp2").hide();
																var b2_text=$(this).text();
																//alert(b1_text);
															     $("#b2").show().children("i").children("span").children("b3").text(b2_text);
																})
	$("#cx").click(function(){
		$("#as_warp2").show();

	})
		$("#as_value3").children("ul").children("li").click(function(){ $("#as_warp3").hide();
																var b3_text=$(this).text();
																//alert(b1_text);
															     $("#b3").show().children("i").children("span").children("b3").text(b3_text);
																})
	$("#pp").click(function(){
		$("#as_warp3").show();

	})
		$("#ad_value0").children("ul").children("li").click(function(){ $(".ad_wrap").hide();
																var b0_text=$(this).children("a").attr("title");
																//alert(b1_text);
																$("#trigger").children("span").children("b4").show();
															    $("#trigger").children("span").children("b3").text(b0_text)
																})
		   })// JavaScript Document