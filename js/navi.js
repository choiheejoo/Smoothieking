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




























