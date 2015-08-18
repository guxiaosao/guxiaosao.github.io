$(document).ready(function(){
	UIdownlist();//下拉菜单
	UItab();//标签切换
	UIslideLoop();//左右滑动（可循环）
	UIslide();//左右滑动（不可循环）
	UIslideUp();//上下滑动（不可循环）
});

//下拉菜单JS
function UIdownlist(){
	/*=======================================
	自定义属性标识:downlist="over/click"
	必备class标枳:downlist
	可选class标识:downlistBar(当触发点样式需要改变时填加,并在同级加入hover样式)
	-----------------------------------------
	应用结构
	<任意标签 downlist="downlist">
		<任意标签 class="downlistBar"></任意标签>
		<任意标签 class="downlist"></任意标签>
	</任意标签>
	=========================================*/
	var coreVar = "downlist"; 
	var $root = $("*["+coreVar+"]");
	$root.each(function(){
		var $trigger = $(this).find("."+coreVar).parent();
		var $target;
		var timeoutID;
		var show = function(){
			var $thisTigger = $(this);
			timeoutID = setTimeout(function(){
			$target = $thisTigger.children("."+coreVar);
			$target.show();
			$target.siblings().addClass("hover");
			},100)
		}
		var hide = function(){
			clearTimeout(timeoutID);
			$target = $(this).children("."+coreVar);
			$target.hide();
			$target.siblings().removeClass("hover");
		}
		
		if($(this).attr(coreVar) == "over"){
			$trigger.hover(show,hide);
		}
		if($(this).attr(coreVar) == "click"){
			$trigger.click(show).mouseleave(hide);
		}
	})
	

}

//标签切换JS
function UItab(){
	/*=======================================
	自定义属性标识:tab="over/click"
	必备class标枳:tabBar/tabBody
	-----------------------------------------
	应用结构
	<任意标签 tab="over/click">
		<任意标签 class="tabBar">
			<ul>
				<li>tab内容一</li>
				<li>tab内容二</li>
			</ul>
		</任意标签>
		<任意标签 class="tabBody">
			<任意标签>内容一</任意标签>
			<任意标签>内容二</任意标签>
		</任意标签>
	</任意标签>
	=========================================*/
	var coreVar = "tab"; 
	var $root = $("*["+coreVar+"]");
	$root.each(function(n){
		var $trigger = $(this).children(".tabBar").children().children("li");
		var $target = $(this).children(".tabBody").children("ol");
		var timeoutID;
		$trigger.eq(0).addClass("frist choose");
		$target.hide().eq(0).show();
		$trigger.each(function(index){
			var switcher = function(){
				var $thisTrigger = $(this);
				timeoutID = setTimeout(function(){
					$target.hide().eq(index).show();
					$trigger.removeClass("choose");
					$thisTrigger.addClass("choose");
				},300)
			}
			if($root.eq(n).attr(coreVar) == "over"){
				$(this).mouseover(switcher);
				$(this).mouseout(function(){clearTimeout(timeoutID);});
			}
			if($root.eq(n).attr(coreVar) == "click"){
				$(this).click(switcher);
			}
		})
		
	})
}


//左右滑动（循环）JS
function UIslideLoop(){
	/*=======================================
	自定义属性标识:slideLoop="数字"
	必备class标枳:leftArrow/rightArrow/slideInfo
	-----------------------------------------
	应用结构
	=========================================*/
	var coreVar = "slideLoop"; 
	var $root = $("*["+coreVar+"]");
	$root.each(function(index){
		var rootValue = $root.eq(index).attr(coreVar);
		var $triggerLeft = $(this).find(".leftArrow");
		var $triggerRight = $(this).find(".rightArrow");
		var $target = $(this).find(".slideInfo"); 
		
		var $targetChildren=$target.children();//获取循环元素
		var slideLength = $targetChildren.outerWidth() * rootValue;//单次滑动距离
		var slideSpeed = 500; 
		var targetWidth = $targetChildren.outerWidth() * $targetChildren.length;//循环区域宽度
		var targetPosition = targetWidth-targetWidth*2;//左键定位初始值
		var error = '猪啊你！！在第 ' + (index+1) + ' 个包含' + coreVar + '属性的DOM中，' + coreVar + '属性值应为“数字”,现在的值为“' + rootValue + '”，还不快改！！';
		var tip = '循环数不得大于元素总数，此循环列表中的元素总数为：' + $targetChildren.length;
		
		$target.empty();
		$targetChildren.clone().prependTo($target);
		$targetChildren.clone().prependTo($target);
		$targetChildren.clone().prependTo($target);
		$target.css({
			"left":targetPosition,
			"width":targetWidth*3
		});
		
		$triggerLeft.click(function(){
			if(isNaN(parseFloat(rootValue))){
				alert(error);
			}else if(rootValue > $targetChildren.length){
				alert(tip);
			}else{
				if(targetPosition + slideLength <= 0){
					targetPosition += slideLength;
					$target.animate({"left":targetPosition},slideSpeed);
				}else{
					targetPosition -= targetWidth;
					$target.css({"left":targetPosition});
					
					targetPosition += slideLength;
					$target.animate({"left":targetPosition},slideSpeed);
				}
			}
		})
		
		$triggerRight.click(function(){
			if(isNaN(parseFloat(rootValue))){
				alert(error);
			}else if(rootValue > $targetChildren.length){
				alert(tip);
			}else{
				targetPosition -= slideLength;
				if(targetPosition + targetWidth*2 >= 0){
					$target.animate({"left":targetPosition},slideSpeed);
				}else{
					targetPosition = targetPosition + slideLength + targetWidth;
					$target.css({"left":targetPosition});
					
					targetPosition -= slideLength;
					$target.animate({"left":targetPosition},slideSpeed);
				}
			}
		})
		
	})
}

//左右滑动（不循环）JS
function UIslide(){
	/*=======================================
	自定义属性标识:slide="数字"
	必备class标枳:leftArrow/rightArrow/ableArrow/disableArrow/slideInfo
	-----------------------------------------
	应用结构
	=========================================*/
	var coreVar = "slide"; 
	var $root = $("*["+coreVar+"]");
	$root.each(function(index){
		var rootValue = $root.eq(index).attr(coreVar);
		var $triggerLeft = $(this).find(".leftArrow");
		var $triggerRight = $(this).find(".rightArrow");
		var $target = $(this).find(".slideInfo"); 
		
		var $targetChildren=$target.children();//获取滑动元素
		var slideLength = $targetChildren.outerWidth() * rootValue;//单次滑动距离
		var slideSpeed = 500; 
		var targetWidth = $targetChildren.outerWidth() * $targetChildren.length;//滑动区域宽度
		var targetVisualWidth = $target.parent().outerWidth();//滑动区可视宽度
		var targetPosition = 0;//左键定位初始值
		var error = '猪啊你！！在第 ' + (index+1) + ' 个包含' + coreVar + '属性的DOM中，' + coreVar + '属性值应为“数字”,现在的值为“' + rootValue + '”，还不快改！！';
		
		$target.css({"left":targetPosition,"width":targetWidth});
		
		if(targetVisualWidth >= targetWidth){
			$triggerLeft.addClass("disableArrow");
			$triggerRight.addClass("disableArrow");
		}else{
			$triggerLeft.addClass("disableArrow");
		}
		
		$triggerLeft.click(function(){
			if(isNaN(parseFloat(rootValue))){
				alert(error);
			}
			else{
				if(targetPosition < 0 && targetPosition + slideLength <= 0){
					targetPosition += slideLength;
					$target.animate({"left":targetPosition},slideSpeed);
				}else{
					targetPosition -= targetPosition;
					$target.animate({"left":targetPosition},slideSpeed);
				}
				arrowStyle();
			}
		})
		$triggerRight.click(function(){
			if(isNaN(parseFloat(rootValue))){
				alert(error);
			}else{
				var mod = targetPosition + targetWidth - targetVisualWidth;
				if(targetPosition + targetWidth >= targetVisualWidth && mod >= slideLength){
					targetPosition -= slideLength;
					$target.animate({"left":targetPosition},slideSpeed);
				}else if(targetVisualWidth >= targetWidth){
				}else{
					targetPosition -= mod;
					$target.animate({"left":targetPosition},slideSpeed);
				}
				arrowStyle();
			}
		})
		function arrowStyle(){
			if(targetPosition < 0){
				$triggerLeft.removeClass("disableArrow");
				$triggerLeft.addClass("ableArrow");
			}else{
				$triggerLeft.removeClass("ableArrow");
				$triggerLeft.addClass("disableArrow");
			}
			if(targetPosition + targetWidth <= targetVisualWidth){
				$triggerRight.removeClass("ableArrow");
				$triggerRight.addClass("disableArrow");
			}else{
				$triggerRight.removeClass("disableArrow");
				$triggerRight.addClass("ableArrow");
			}
		}
	})
}

//上下滑动（不循环）JS
function UIslideUp(){
	/*=======================================
	自定义属性标识:slideUp="数字"
	必备class标枳:leftArrow/rightArrow/ableArrow/disableArrow/slideInfo
	-----------------------------------------
	应用结构
	=========================================*/
	var coreVar = "slideUp"; 
	var $root = $("*["+coreVar+"]");
	$root.each(function(index){
		var rootValue = $root.eq(index).attr(coreVar);
		var $triggerUp = $(this).find(".upArrow");
		var $triggerDown = $(this).find(".downArrow");
		var $target = $(this).find(".slideInfo"); 
		
		var $targetChildren=$target.children();//获取滑动元素
		var slideLength = $targetChildren.outerHeight()*rootValue; //单次滑动距离
		var slideSpeed = 500; 
		var targetHeight = $target.outerHeight(); //滑动区域高度
		var targetVisualHeight = $target.parent().outerHeight(); //滑动区可视高度
		var targetPosition = 0;//上键定位初始值
		var error = '猪啊你！！在第 ' + (index+1) + ' 个包含' + coreVar + '属性的DOM中，' + coreVar + '属性值应为“数字”,现在的值为“' + rootValue + '”，还不快改！！';
		
		$target.css({"top":targetPosition,"height":targetHeight});
		
		if(targetVisualHeight >= targetHeight){
			$triggerUp.addClass("disableArrow");
			$triggerDown.addClass("disableArrow");
		}else{
			$triggerUp.addClass("disableArrow");
		}
		
		$triggerUp.click(function(){
			if(isNaN(parseFloat(rootValue))){
				alert(error);
			}
			else{
				if(targetPosition < 0 && targetPosition + slideLength <= 0){
					targetPosition += slideLength;
					$target.animate({"top":targetPosition},slideSpeed);
				}else{
					targetPosition -= targetPosition;
					$target.animate({"top":targetPosition},slideSpeed);
				}
				arrowStyle();
			}
		})
		$triggerDown.click(function(){
			if(isNaN(parseFloat(rootValue))){
				alert(error);
			}else{
				var mod = targetPosition + targetHeight - targetVisualHeight;
				if(targetPosition + targetHeight >= targetVisualHeight && mod >= slideLength){
					targetPosition -= slideLength;
					$target.animate({"top":targetPosition},slideSpeed);
				}else if(targetVisualHeight >= targetHeight){
				}else{
					targetPosition -= mod;
					$target.animate({"top":targetPosition},slideSpeed);
				}
				arrowStyle();
			}
		})
		function arrowStyle(){
			if(targetPosition < 0){
				$triggerUp.removeClass("disableArrow");
				$triggerUp.addClass("ableArrow");
			}else{
				$triggerUp.removeClass("ableArrow");
				$triggerUp.addClass("disableArrow");
			}
			if(targetPosition + targetHeight <= targetVisualHeight){
				$triggerDown.removeClass("ableArrow");
				$triggerDown.addClass("disableArrow");
			}else{
				$triggerDown.removeClass("disableArrow");
				$triggerDown.addClass("ableArrow");
			}
		}
	})
}




















