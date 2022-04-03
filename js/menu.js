// JavaScript Document

$(document).ready(function(e) {
	$(".item1").click(function(){
    	$(".prod_wrap").css("display","none");
		$("#prod1").css("display","block");
		$("#prod_page").css("display","none");		
		$(".mtab").css({"background-color":"#fff", "color":"#222"});
		$(".item1").css({"background-color":"#ff1937", "color":"#fff"});
    });
	$(".item2").click(function(){
    	$(".prod_wrap").css("display","none");
		$("#prod2").css("display","block");	
		$("#prod_page").css("display","block");		
		$(".mtab").css({"background-color":"#fff", "color":"#222"});
		$(".item2").css({"background-color":"#ff1937", "color":"#fff"});
    });
	$(".item3").click(function(){
		$(".prod_wrap").css("display","none");
		$("#prod3").css("display","block");	
		$("#prod_page").css("display","none");		
		$(".mtab").css({"background-color":"#fff", "color":"#222"});
		$(".item3").css({"background-color":"#ff1937", "color":"#fff"});
    });
	$(".hover01").mouseover(function(){	$(".detail").css("display","none");$(".d1").css("display","block");});
	$(".hover01").mouseout(function(){$(".detail").css("display","none")});
	$(".d1").mouseover(function(){	$(".d1").css("display","block")});
	$(".d1").mouseout(function(){$(".d1").css("display","none")});
	$(".hover02").mouseover(function(){	$(".detail").css("display","none");$(".d2").css("display","block");});
	$(".hover02").mouseout(function(){$(".detail").css("display","none")});
	$(".d2").mouseover(function(){	$(".d2").css("display","block")});
	$(".d2").mouseout(function(){$(".d2").css("display","none")});
	$(".hover03").mouseover(function(){	$(".detail").css("display","none");$(".d3").css("display","block");});
	$(".hover03").mouseout(function(){$(".detail").css("display","none");});
	$(".d3").mouseover(function(){	$(".d3").css("display","block");});
	$(".d3").mouseout(function(){$(".d3").css("display","none");});
	$(".hover04").mouseover(function(){$(".detail").css("display","none");	$(".d4").css("display","block");});
	$(".hover04").mouseout(function(){$(".detail").css("display","none");});
	$(".d4").mouseover(function(){	$(".d4").css("display","block");});
	$(".d4").mouseout(function(){$(".d4").css("display","none");	});
	$(".hover05").mouseover(function(){$(".detail").css("display","none");	$(".d5").css("display","block");});
	$(".hover05").mouseout(function(){$(".detail").css("display","none");});
	$(".d5").mouseover(function(){	$(".d5").css("display","block");});
	$(".d5").mouseout(function(){$(".d5").css("display","none");	});
	$(".hover06").mouseover(function(){	$(".detail").css("display","none");$(".d6").css("display","block");});
	$(".hover06").mouseout(function(){$(".detail").css("display","none");});
	$(".d6").mouseover(function(){	$(".d6").css("display","block");});
	$(".d6").mouseout(function(){$(".d6").css("display","none");	});	
	$(".hover07").mouseover(function(){$(".detail").css("display","none");	$(".d7").css("display","block");});
	$(".hover07").mouseout(function(){$(".detail").css("display","none");});
	$(".d7").mouseover(function(){	$(".d7").css("display","block");});
	$(".d7").mouseout(function(){	$(".d7").css("display","none");});
	$(".hover08").mouseover(function(){	$(".detail").css("display","none");$(".d8").css("display","block");});
	$(".hover08").mouseout(function(){	$(".detail").css("display","none");});
	$(".d8").mouseover(function(){	$(".d8").css("display","block");});
	$(".d8").mouseout(function(){	$(".d8").css("display","none");});	
	$(".hover09").mouseover(function(){	$(".detail").css("display","none");$(".d9").css("display","block");});
	$(".hover09").mouseout(function(){	$(".detail").css("display","none");});
	$(".d9").mouseover(function(){	$(".d9").css("display","block");});
	$(".d9").mouseout(function(){	$(".d9").css("display","none");});	
	
	$(document).scroll(function() { 
	
		if($(document).scrollTop() > 80) {
			$(".gnb").addClass("fixedTop");
			$(".menubox").css("top","60px");
			$(".t_logo").children("img").attr("src","../images/common/icon.png");
		}
		else {
			$(".gnb").removeClass("fixedTop");
			$(".menubox").css("top","45px");
			$(".t_logo").children("img").attr("src","../images/common/logo.png");
		}
	}); //scroll


}); //jQB

