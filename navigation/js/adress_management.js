$(function(){	   
		   $(".common-add table tr td #button_xiugai").click(function(){
											  //alert("ok");
											  $(".black").show();
											  $(".xiugai_dizhi").show();
											  var s0=$(this).parents().attr("id");
											  //alert(s0);
											  var s1=$(this).parents().siblings("#td-shouhuoren").text();										 
											  var s2=$(this).parents().siblings("#td-diqu").text();											
											  var s3=$(this).parents().siblings("#td-xiangxidizhi").text();										
											  var s4=$(this).parents().siblings("#td-youbian").text();											        								      var s5=$(this).parents().siblings("#td-dianhua").text();
											 //alert(s1); alert(s2); alert(s3); alert(s4); alert(s5);
											 $("input[name=shouhuoren]").val(s1);
											 $("input[name=diqu]").val(s2);
											 $("input[name=xiangxidizhi]").val(s3);
											 $("input[name=youbian]").val(s4);
											 $("input[name=shoujihaoma]").val(s5);
											  $("input[name=xiugai-id]").val(s0);
											  })
		   $("#closediv").click(function(){
										    var a0=$("input[name=xiugai-id]").val();
										    var a1=$("input[name=shouhuoren]").val();
											var a2= $("input[name=diqu]").val();
											var a3= $("input[name=xiangxidizhi]").val();
											var a4= $("input[name=youbian]").val();
											var a5= $("input[name=shoujihaoma]").val();
											var xx=".common-add table tr #"+a0;
											if(a0==""||a1==""||a2==""||a3==""||a4==""||a5==""){alert("Content has not yet been completed");}
											else{
												var partten1 = /^0(([1,2]\d)|([3-9]\d{2}))\d{7,8}$/;
                                                var partten = /^1[3,5,8]\d{9}$/;
												if(!partten.test(a5)&&!partten1.test(a5))
                                                              {
                                                                   alert('The phone number is not properly formatted');
                
                                                                 }  else{
																	 var yb=/^[1-9]{1}[0-9]{5}$/;
												if(!yb.test(a4)){
													alert('The PostCode is not properly formatted');
													}else{
											$(xx).siblings("#td-shouhuoren").text(a1);
											$(xx).siblings("#td-diqu").text(a2);
											$(xx).siblings("#td-xiangxidizhi").text(a3);
											$(xx).siblings("#td-youbian").text(a4);
											$(xx).siblings("#td-dianhua").text(a5);
										  $(".black").hide();
										  $(".xiugai_dizhi").hide();
										  }}}
										 })
		   
		   })// JavaScript Document