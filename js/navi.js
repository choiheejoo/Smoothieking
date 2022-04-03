// JavaScript Document
/*$(document).ready(function(e) {
	$(".item01").mouseover(function(){
		$(".item01>a").css({"color":"#222","border-bottom":"3px solid #d80c27"});
		$("#menubox1").css({"height":"255px","transition":"height 0.3s"});
	});
	$(".item01").mouseout(function(){
		$(".item01>a").css({"color":"#818181","border-bottom":"0px"});
		$(".menubox").css("height","0");
	});
		$(".item02").mouseover(function(){
		$(".item02>a").css({"color":"#222","border-bottom":"3px solid #d80c27"});
		$("#menubox2").css("display","block");
	});
	$(".item02").mouseout(function(){
		$(".item02>a").css({"color":"#818181","border-bottom":"0px"});
		$(".menubox").css("display","none");
	});
		$(".item03").mouseover(function(){
		$(".item03>a").css({"color":"#222","border-bottom":"3px solid #d80c27"});
		$("#menubox3").css("display","block");
	});
	$(".item03").mouseout(function(){
		$(".item03>a").css({"color":"#818181","border-bottom":"0px"});
		$(".menubox").css("display","none");
	});
		$(".item04").mouseover(function(){
		$(".item04>a").css({"color":"#222","border-bottom":"3px solid #d80c27"});
		$("#menubox4").css("display","block");
	});
	$(".item04").mouseout(function(){
		$(".item04>a").css({"color":"#818181","border-bottom":"0px"});
		$(".menubox").css("display","none");
	});
		$(".item05").mouseover(function(){
		$(".item05>a").css({"color":"#222","border-bottom":"3px solid #d80c27"});
		$("#menubox5").css("display","block");
	});
	$(".item05").mouseout(function(){
		$(".item05>a").css({"color":"#818181","border-bottom":"0px"});
		$(".menubox").css("display","none");
	});
		$(".item06").mouseover(function(){
		$(".item06>a").css({"color":"#222","border-bottom":"3px solid #d80c27"});
		$("#menubox6").css("display","block");
	});
	$(".item06").mouseout(function(){
		$(".item06>a").css({"color":"#818181","border-bottom":"0px"});
		$(".menubox").css("display","none");
	});

	
});
*/


$(document).ready(function(e){
	$(".gnb>ul>.gnb_m").mouseenter(function(){
		$(".gnb").css({"height":"270px","transition":"height 0.3s"});
		$(".menubox").css({"height":"225px","transition":"height 0.3s"});
		
		$(this).children(".menubox").css({"display":"block","height":"225px","transition":"height 0.3s"})
		.parent().siblings().find(".menubox").css("display","none");
		
		$(this).children('a').css({"color":"#222","border-bottom":"3px solid #d80c27"})
		.parent().siblings().children("a").css({"color":"#818181","border-bottom":"0px"});
		}); //mouseenter
	$(".gnb").mouseleave(function(){
		$(".gnb").css({"height":"45px","transition":"height 0.3s"});
		$(".menubox").css({"display":"block","height":"0","transition":"all 0.3s"});
		$(".gnb_m>a").css({"color":"#818181","border-bottom":"0px"});

		}); //mouseleave

});




























