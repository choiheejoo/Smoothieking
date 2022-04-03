// JavaScript Document

$(document).ready(function(e) {
	$(".item1").click(function(){
    	$(".prod_wrap").css("display","none");
		$("#prod1").css("display","block");
		$(".mtab").css({"background-color":"#fff", "color":"#222"});
		$(".item1").css({"background-color":"#ff1937", "color":"#fff"});
    });
	$(".item2").click(function(){
    	$(".prod_wrap").css("display","none");
		$("#prod2").css("display","block");	
		$(".mtab").css({"background-color":"#fff", "color":"#222"});
		$(".item2").css({"background-color":"#ff1937", "color":"#fff"});
    });
	$(".item3").click(function(){
		$(".prod_wrap").css("display","none");
		$("#prod3").css("display","block");	
		$(".mtab").css({"background-color":"#fff", "color":"#222"});
		$(".item3").css({"background-color":"#ff1937", "color":"#fff"});
    });
	$(".item4").click(function(){
		$(".prod_wrap").css("display","none");
		$("#prod4").css("display","block");	
		$(".mtab").css({"background-color":"#fff", "color":"#222"});
		$(".item4").css({"background-color":"#ff1937", "color":"#fff"});
    });
	
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
