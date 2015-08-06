$(function(){
		   $("img[id=button]").click(function(){
							 //alert("ok");
							$(".w .m #2-3-4").slideToggle("slow");
							 //alert($(this).attr("src"));												 
							if($(this).attr("src")=="image/down.png")
							{$(this).attr("src","image/up.png");}
							else
							{$(this).attr("src","image/down.png");}
							})
		   
		   var show_num=0;
		   var i=0;
		   
		      for(i=0;i<3;i++){
				  var id=".w .m #2-3-4 #step-cont-"+i;
				  //alert(id);
				  if($(id).css("display")=="block"){
					  show_num++;
					  }
				  //alert(show_num);
				  }
	$(".extra-r").click(function(){
					 $(".black").show();
					$(".zengjia_dizhi").show();			 
								 })

		$("#closediv").click(function(){
									  if($("input[name=shouhuoren]").val()==""||$("input[name=xiangxidizhi]").val()==""||$("input[name=shoujihaoma]").val()==""){
										  alert("please fill in the blanks completely");
										  }else{
											  var partten1 = /^0(([1,2]\d)|([3-9]\d{2}))\d{7,8}$/;
                                                var partten = /^1[3,5,8]\d{9}$/;
												var ss=$("input[name=shoujihaoma]").val();
												//alert(ss);
												if(!partten.test(ss)&&!partten1.test(ss))
                                                              {
                                                                   alert('The phone number is not properly formatted');
                
                                                                 } else{
							switch(show_num){
							case 0:
							var a1=$("input[name=shouhuoren]").val();//alert("1");
							var a2_1= $("#select1").find("option:selected").text();//alert(a2_1);
						    var a2_2= $("#select2").find("option:selected").text();//alert(a2_1);
							var a2_3= $("#select3").find("option:selected").text();//alert(a2_1);
							var a2=a2_1+" "+a2_2+" "+a2_3;//alert(a2);
							var b1=a1+" "+a2_1;
							var a3= $("input[name=xiangxidizhi]").val();	
							var b2=a2+" "+a3;
							var a4= $("input[name=shoujihaoma]").val();
							$(".w .m #2-3-4 #step-cont-0").css("display","block");
							$(".w .m #2-3-4 #step-cont-0 #consignee_index_div_0 #name_diqu").text(b1);
							$(".w .m #2-3-4 #step-cont-0 .addr-detail #name").text(a1);
							$(".w .m #2-3-4 #step-cont-0 .addr-detail #diqu_xiangxidizhi").text(b2);
							$(".w .m #2-3-4 #step-cont-0 .addr-detail #dianhua").text(a4);
							show_num++;
							$("input[name=shouhuoren]").val("");$("input[name=xiangxidizhi]").val("");$("input[name=shoujihaoma]").val("");
							//alert(show_num);
							break;
							case 1:
							var a1=$("input[name=shouhuoren]").val();//alert("2");alert(a1);
							var a2_1= $("#select1").find("option:selected").text();//alert(a2_1);
							var a2_2= $("#select2").find("option:selected").text();//alert(a2_1);
							var a2_3= $("#select3").find("option:selected").text();//alert(a2_1);
							var a2=a2_1+" "+a2_2+" "+a2_3;//alert(a2);
							var b1=a1+" "+a2_1;//alert(b1);
							var a3= $("input[name=xiangxidizhi]").val();	
							var b2=a2+" "+a3;
							var a4= $("input[name=shoujihaoma]").val();
							$(".w .m #2-3-4 #step-cont-0").css("display","block");
							$(".w .m #2-3-4 #step-cont-1").css("display","block");
						    $(".w .m #2-3-4 ").children("#step-cont-1").children("#consignee_index_div_0").children(" #name_diqu").text(b1);
							$(".w .m #2-3-4").children(" #step-cont-1").children(".addr-detail").children(" #name").text(a1);
							$(".w .m #2-3-4 ").children("#step-cont-1 ").children(".addr-detail").children(" #diqu_xiangxidizhi").text(b2);
							$(".w .m #2-3-4").children(" #step-cont-1 ").children(".addr-detail ").children("#dianhua").text(a4);
							show_num++;
							$("input[name=shouhuoren]").val("");$("input[name=xiangxidizhi]").val("");$("input[name=shoujihaoma]").val("");
							//alert(show_num);
							break;
							case 2:
							var a1=$("input[name=shouhuoren]").val();// alert("3");
							var a2_1= $("#select1").find("option:selected").text();//alert(a2_1);
							var a2_2= $("#select2").find("option:selected").text();//alert(a2_1);
							var a2_3= $("#select3").find("option:selected").text();//alert(a2_1);
							var a2=a2_1+" "+a2_2+" "+a2_3;//alert(a2);
							var b1=a1+" "+a2_1;
							var a3= $("input[name=xiangxidizhi]").val();	
							var b2=a2+" "+a3;
							var a4= $("input[name=shoujihaoma]").val();
							$(".w .m #2-3-4 #step-cont-0").css("display","block");
							$(".w .m #2-3-4 #step-cont-1").css("display","block");
							$(".w .m #2-3-4 #step-cont-2").css("display","block");
							  $(".w .m #2-3-4 ").children("#step-cont-2").children("#consignee_index_div_0").children(" #name_diqu").text(b1);
							$(".w .m #2-3-4").children(" #step-cont-2").children(".addr-detail").children(" #name").text(a1);
							$(".w .m #2-3-4 ").children("#step-cont-2 ").children(".addr-detail").children(" #diqu_xiangxidizhi").text(b2);
							$(".w .m #2-3-4").children(" #step-cont-2 ").children(".addr-detail ").children("#dianhua").text(a4);
							show_num-=2;
							$("input[name=shouhuoren]").val("");$("input[name=xiangxidizhi]").val("");$("input[name=shoujihaoma]").val("");
							//alert(show_num);
							break;
							}					
					 $(".black").hide();
					$(".zengjia_dizhi").hide();
					$(".w .m #2-3-4").slideDown("slow");
					$("img[id=button]").attr("src","image/up.png");
									  }}
								 })
		
		$(".step-cont" ).children("div").click(function(){//alert("ok");		
				$(this).children("b").css("width","12px");
				$(this).siblings().children("b").css("width","0px");
				//alert("ok");
				})
		$(".mode-tab-nav li").click(function(){
											 $(this).children("b").css("width","12px");
											 $(this).siblings().children("b").css("width","0px");
												$(this).css("border","1px  #10a8c2 solid").siblings().css("border","1px  #ddd solid");
												})
		  
        $("#2-3-4").children(".step-cont").children("div").click(function(){
										// alert("ok");
										 $(this).children("b2").css("width","12px");
										 $(this).parents(".step-cont").siblings(".step-cont").children("div").children("b2").css("width","0px");
										 $("b1").css("width","0px");
										 })
		$("b1").parent("div").click(function(){//alert("ok");
											  $("b1").css("width","12px");
											  $("b2").css("width","0px")
											  })
// JavaScript Document
})