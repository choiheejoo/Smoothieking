// JavaScript BrandStory

$(document).ready(function(e) {
	$(document).scroll(function() { 
		if ($(document).scrollTop()>=400) { 
			$("#btxt01").css({"top":"119px","opacity":"1","transition":"0.8s"}); //인핸서스푼
		}; //if
		if ($(document).scrollTop()>=800) { 
			$("#btxt02").css({"top":"384px","opacity":"1","transition":"0.8s"}); //인핸서스푼
		}; //if
		if ($(document).scrollTop()>=1100) { 
			$("#btxt03").css({"top":"655px","opacity":"1","transition":"0.8s"}); //인핸서스푼
		}; //if
		if ($(document).scrollTop()>=1400) { 
			$("#btxt04").css({"bottom":"383px","opacity":"1","transition":"0.8s"}); //인핸서스푼
		}; //if
		if ($(document).scrollTop()>=1700) { 
			$("#btxt05").css({"bottom":"110px","opacity":"1","transition":"0.8s"}); //인핸서스푼
		}; //if
	
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

});