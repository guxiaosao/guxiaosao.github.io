$(document).ready(function(){
	UIdownlist();//�����˵�
	UItab();//��ǩ�л�
	UIslideLoop();//���һ�������ѭ����
	UIslide();//���һ���������ѭ����
	UIslideUp();//���»���������ѭ����
});

//�����˵�JS
function UIdownlist(){
	/*=======================================
	�Զ������Ա�ʶ:downlist="over/click"
	�ر�class����:downlist
	��ѡclass��ʶ:downlistBar(����������ʽ��Ҫ�ı�ʱ���,����ͬ������hover��ʽ)
	-----------------------------------------
	Ӧ�ýṹ
	<�����ǩ downlist="downlist">
		<�����ǩ class="downlistBar"></�����ǩ>
		<�����ǩ class="downlist"></�����ǩ>
	</�����ǩ>
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

//��ǩ�л�JS
function UItab(){
	/*=======================================
	�Զ������Ա�ʶ:tab="over/click"
	�ر�class����:tabBar/tabBody
	-----------------------------------------
	Ӧ�ýṹ
	<�����ǩ tab="over/click">
		<�����ǩ class="tabBar">
			<ul>
				<li>tab����һ</li>
				<li>tab���ݶ�</li>
			</ul>
		</�����ǩ>
		<�����ǩ class="tabBody">
			<�����ǩ>����һ</�����ǩ>
			<�����ǩ>���ݶ�</�����ǩ>
		</�����ǩ>
	</�����ǩ>
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


//���һ�����ѭ����JS
function UIslideLoop(){
	/*=======================================
	�Զ������Ա�ʶ:slideLoop="����"
	�ر�class����:leftArrow/rightArrow/slideInfo
	-----------------------------------------
	Ӧ�ýṹ
	=========================================*/
	var coreVar = "slideLoop"; 
	var $root = $("*["+coreVar+"]");
	$root.each(function(index){
		var rootValue = $root.eq(index).attr(coreVar);
		var $triggerLeft = $(this).find(".leftArrow");
		var $triggerRight = $(this).find(".rightArrow");
		var $target = $(this).find(".slideInfo"); 
		
		var $targetChildren=$target.children();//��ȡѭ��Ԫ��
		var slideLength = $targetChildren.outerWidth() * rootValue;//���λ�������
		var slideSpeed = 500; 
		var targetWidth = $targetChildren.outerWidth() * $targetChildren.length;//ѭ��������
		var targetPosition = targetWidth-targetWidth*2;//�����λ��ʼֵ
		var error = '���㣡���ڵ� ' + (index+1) + ' ������' + coreVar + '���Ե�DOM�У�' + coreVar + '����ֵӦΪ�����֡�,���ڵ�ֵΪ��' + rootValue + '����������ģ���';
		var tip = 'ѭ�������ô���Ԫ����������ѭ���б��е�Ԫ������Ϊ��' + $targetChildren.length;
		
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

//���һ�������ѭ����JS
function UIslide(){
	/*=======================================
	�Զ������Ա�ʶ:slide="����"
	�ر�class����:leftArrow/rightArrow/ableArrow/disableArrow/slideInfo
	-----------------------------------------
	Ӧ�ýṹ
	=========================================*/
	var coreVar = "slide"; 
	var $root = $("*["+coreVar+"]");
	$root.each(function(index){
		var rootValue = $root.eq(index).attr(coreVar);
		var $triggerLeft = $(this).find(".leftArrow");
		var $triggerRight = $(this).find(".rightArrow");
		var $target = $(this).find(".slideInfo"); 
		
		var $targetChildren=$target.children();//��ȡ����Ԫ��
		var slideLength = $targetChildren.outerWidth() * rootValue;//���λ�������
		var slideSpeed = 500; 
		var targetWidth = $targetChildren.outerWidth() * $targetChildren.length;//����������
		var targetVisualWidth = $target.parent().outerWidth();//���������ӿ��
		var targetPosition = 0;//�����λ��ʼֵ
		var error = '���㣡���ڵ� ' + (index+1) + ' ������' + coreVar + '���Ե�DOM�У�' + coreVar + '����ֵӦΪ�����֡�,���ڵ�ֵΪ��' + rootValue + '����������ģ���';
		
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

//���»�������ѭ����JS
function UIslideUp(){
	/*=======================================
	�Զ������Ա�ʶ:slideUp="����"
	�ر�class����:leftArrow/rightArrow/ableArrow/disableArrow/slideInfo
	-----------------------------------------
	Ӧ�ýṹ
	=========================================*/
	var coreVar = "slideUp"; 
	var $root = $("*["+coreVar+"]");
	$root.each(function(index){
		var rootValue = $root.eq(index).attr(coreVar);
		var $triggerUp = $(this).find(".upArrow");
		var $triggerDown = $(this).find(".downArrow");
		var $target = $(this).find(".slideInfo"); 
		
		var $targetChildren=$target.children();//��ȡ����Ԫ��
		var slideLength = $targetChildren.outerHeight()*rootValue; //���λ�������
		var slideSpeed = 500; 
		var targetHeight = $target.outerHeight(); //��������߶�
		var targetVisualHeight = $target.parent().outerHeight(); //���������Ӹ߶�
		var targetPosition = 0;//�ϼ���λ��ʼֵ
		var error = '���㣡���ڵ� ' + (index+1) + ' ������' + coreVar + '���Ե�DOM�У�' + coreVar + '����ֵӦΪ�����֡�,���ڵ�ֵΪ��' + rootValue + '����������ģ���';
		
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




















