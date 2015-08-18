$(function(){
		   var select_all=$("#orderState").find("option:selected").text();	
		   var select_zhuangtai=$("#orderState").find("option:selected").text();										
										    var select_shijian=$("#submitDate").find("option:selected").val();
											var  myDate = new Date();var month=myDate.getMonth();var year=myDate.getFullYear();
		   $("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
												 //alert($(this).hide()==true);
										      if($(this).hide()==true){$(this).hide()}else{
												  	if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]!=year){$(this).hide();
												}else
												{	
												if(a1!=shijian[1]&&a2!=shijian[1]){$(this).hide();
													}else{
												      $(this).show();
												   }
												}
												}}
														 
											                              })	
		   $("#orderState").change(function(){
											var select_zhuangtai=$(this).find("option:selected").text();										
										    var select_shijian=$("#submitDate").find("option:selected").val();
											var  myDate = new Date();var month=myDate.getMonth();var year=myDate.getFullYear();
											if(select_shijian=="1"){												
												$("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
											if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]!=year){$(this).hide();
												}else
												{	
												if(a1!=shijian[1]&&a2!=shijian[1]){$(this).hide();
													}else{
												      $(this).show();
												   }
												}
												}				 
											                              })							
												}
												
											
											if(select_shijian=="2"){												
												$("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
											if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]!=year){$(this).hide();
												}else
												{	
												
												      $(this).show();
												   
												}
												}				 
											                              })							
												}	
												
											if(select_shijian=="2014"){												
												$("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
											if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]!=2014){$(this).hide();
												}else
												{	
												
												      $(this).show();
												   
												}
												}				 
											                              })							
												}
												
												if(select_shijian=="2013"){												
												$("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
											if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]!=2013){$(this).hide();
												}else
												{	
												
												      $(this).show();
												   
												}
												}				 
											                              })							
												}
												
												if(select_shijian=="2012"){												
												$("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
											if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]!=2012){$(this).hide();
												}else
												{	
												
												      $(this).show();
												   
												}
												}				 
											                              })							
												}
												
													if(select_shijian=="3"){												
												$("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
											if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]>=2012){$(this).hide();
												}else
												{	
												      $(this).show();   
												}
												}				 
											                              })							
												}
                                             	})		
		   
		   
		   $("#submitDate").change(function(){
											var select_zhuangtai=$("#orderState").find("option:selected").text();										
										    var select_shijian=$("#submitDate").find("option:selected").val();
											var  myDate = new Date();var month=myDate.getMonth();var year=myDate.getFullYear();
											if(select_shijian=="1"){												
												$("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
												 //alert($(this).hide()==true);
										      if($(this).hide()==true){$(this).hide()}else{
												  	if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]!=year){$(this).hide();
												}else
												{	
												if(a1!=shijian[1]&&a2!=shijian[1]){$(this).hide();
													}else{
												      $(this).show();
												   }
												}
												}}
														 
											                              })							
												}
												
											
											if(select_shijian=="2"){												
												$("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
												 if($(this).hide()==true){$(this).hide()}else{
											if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]!=year){$(this).hide();
												}else
												{	
												
												      $(this).show();
												   
												}
												}}				 
											                              })							
												}	
												
											if(select_shijian=="2014"){												
												$("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
											if($(this).hide()==true){$(this).hide()}else{	 
											if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]!=2014){$(this).hide();
												}else
												{	
												
												      $(this).show();
												   
												}
												}}				 
											                              })							
												}
												
												if(select_shijian=="2013"){												
												$("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
												 if($(this).hide()==true){$(this).hide()}else{
											if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]!=2013){$(this).hide();
												}else
												{	
												
												      $(this).show();
												   
												}
												}}				 
											                              })							
												}
												
												if(select_shijian=="2012"){												
												$("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
												 if($(this).hide()==true){$(this).hide()}else{
											if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]!=2012){$(this).hide();
												}else
												{	
												
												      $(this).show();
												   
												}}
												}				 
											                              })							
												}
												
													if(select_shijian=="3"){												
												$("tbody").each(function(){
												 var zhuangtai=$(this).children(".tr-td").children("#zhuangtai").children("span").text();	
												 var shijian=$(this).children(".tr-td").children("#shijian").children("span").text().split("-");			                                                 var a1=month-1;
												 var a2=month-2;
												 if($(this).hide()==true){$(this).hide()}else{
											if(zhuangtai!=select_zhuangtai&&select_zhuangtai!=select_all)
											{$(this).hide();}
											else
											{
												if(shijian[0]>=2012){$(this).hide();
												}else
												{	
												      $(this).show();   
												}
												}	}			 
											                              })							
												}
											
											})
	   
		   })