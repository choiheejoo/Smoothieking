// JavaScript Document

$(document).ready(function(e) {
	$("#tab_list>.item1").click(function(){
    	$(".tab_cont").css("display","none");
		$("#tab_cont1").css("display","block");
		$("#tab_area").css("border-top","4px solid #d80c27");
			$("#scrollAni>div").eq(0).css({"transform":"rotate(12deg)","transition":"1.5s 1s"}); //인핸서스푼
			$("#scrollAni>div").eq(1).css({"opacity": "0", "transform":"translateY(150px) rotate(30deg)","transition":"2s 1.16s"}); //인핸서
			$("#scrollAni>div").eq(2).css({"transform":"rotate(-15deg)","transition":"1.5s 1.4s"}); //엑스트라 스푼
			$("#scrollAni>div").eq(3).css({"top": "68%","right":"36%","transform":"rotate(-330deg)","transition":"2.3s 1.5s"});//딸기*/
			$("#scrollAni>div").eq(4).css({"opacity": "1","transition":"1s 2s"}); //믹서 인핸서
			$("#scrollAni>div").eq(7).css({"opacity": "1","transform":"scale(1)","transition":"1.2s 2.5s"}); //로우칼로리 화살표
			$("#scrollAni>div").eq(8).css({"opacity": "1","transform":"scale(1.05)","transition":"1.5s 2.7s"}); //로우칼로리 텍스트
    });
	$("#tab_list>.item2").click(function(){
    	$(".tab_cont").css("display","none");
		$("#tab_cont2").css("display","block");
		$("#tab_area").css("border-top","4px solid #f7941d");
		
    });
	$("#tab_list>.item3").click(function(){
    	$(".tab_cont").css("display","none");
		$("#tab_cont3").css("display","block");
		$("#tab_area").css("border-top","4px solid #8dc63f");
    });
	$(document).scroll(function() { 
		if ($(document).scrollTop()>=1200) { 

			$("#scrollAni>div").eq(0).css({"transform":"rotate(12deg)","transition":"1.5s 1s"}); //인핸서스푼
			$("#scrollAni>div").eq(1).css({"opacity": "0", "transform":"translateY(150px) rotate(30deg)","transition":"2s 1.16s"}); //인핸서
			$("#scrollAni>div").eq(2).css({"transform":"rotate(-15deg)","transition":"1.5s 1.4s"}); //엑스트라 스푼
			$("#scrollAni>div").eq(3).css({"top": "68%","right":"36%","transform":"rotate(-330deg)","transition":"2.3s 1.5s"});//딸기*/
			$("#scrollAni>div").eq(4).css({"opacity": "1","transition":"1s 2s"}); //믹서 인핸서
			$("#scrollAni>div").eq(7).css({"opacity": "1","transform":"scale(1)","transition":"1.2s 2.5s"}); //로우칼로리 화살표
			$("#scrollAni>div").eq(8).css({"opacity": "1","transform":"scale(1.05)","transition":"1.5s 2.7s"}); //로우칼로리 텍스트
		} //if
		else{
			$("#scrollAni>div").eq(0).css({"transform":"rotate(0deg)","transition":"0.01s"}); //인핸서스푼
			$("#scrollAni>div").eq(1).css({"opacity": "1", "transform":"translateY(0px) rotate(0deg)","transition":"0.01s"}); //인핸서
			$("#scrollAni>div").eq(2).css({"transform":"rotate(0deg)","transition":"0.01s"}); //엑스트라 스푼
			$("#scrollAni>div").eq(3).css({"top": "48%","right":"36%","transform":"rotate(0deg)","transition":"0.01s"});//딸기*/
			$("#scrollAni>div").eq(4).css({"opacity": "0","transition":"1s 2s","transition":"0.01s"}); //믹서 인핸서
			$("#scrollAni>div").eq(7).css({"opacity": "0","transform":"scale(0.5)","transition":"0.01s"}); //로우칼로리 화살표
			$("#scrollAni>div").eq(8).css({"opacity": "0","transform":"scale(1)","transition":"0.01s"}); //로우칼로리 텍스트
		};
	
		if($(document).scrollTop() > 80) {
			$(".gnb").addClass("fixedTop");
			$(".menubox").css("top","60px");
			$(".t_logo").children("img").attr("src","images/common/icon.png");
		}
		else {
			$(".gnb").removeClass("fixedTop");
			$(".menubox").css("top","45px");
			$(".t_logo").children("img").attr("src","images/common/logo.png");
		}
	}); //scroll
	


}); //JQB