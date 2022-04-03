/* 배너디자인 */

var idx = 0; /* 현재 배너 슬라이드 번호 */
var slidemax = 2; /* 마지막 이미지 */
var pos = 100; /* 슬라이드 너비값 */

/*************************************************************
	1. 자동이동
	함수 : sliding
	가눙 : 슬라이드가 자동으로 좌우로 움직일 수 있는 기능
		=> setInterval을 이용해서 sliding(1)을 반복
***************************************************************/
function sliding(add){ //add : 증가시킬 값(왼쪽: -1, 오른쪽 : 0)
	/*	오른쪽으로 : 0 => sliding()에서 받는 add값에 idx에 더하는 기능을 갖고 있기 때문 */
	
	idx=idx+add; //왼쪽으로 갈지, 오른쪽으로 갈지에 따라 슬라이드 번호가 감소, 증가할 지 결정
	
	if(idx<0) idx=slidemax; //첫번째 슬라이드를 마지막으로 오게
	else if(idx>slidemax) idx =0; // 마지막번재 슬라이드를 첫번째로 오게
	
	$("#slide>ul").stop().animate({"left": -(idx*pos)+"%"},"3000");
	var cnum = parseInt($("#slide>ul").children("li").eq(idx).attr("class").substr(6,1));
	//console.log(cnum);
	$("#bullet div").eq(cnum).css("background-color","#d80c27").siblings().css("background-color","#fff");
} //sliding

autoslide = setInterval(function(){sliding(1)},3000);

/*************************************************************
	4. 버튼 이동 클릭 
	함수 : after
	가눙 : setTimeout으로 3초 이후 슬라이드가 자동으로 움직일 수 있는 기능
***************************************************************/

function after(){
	setTimeout(function(){ 
		clearInterval(autoslide);
		autoslide = setInterval(function(){sliding(1)}, 5000);
	},3000);
}

$(document).ready(function(e){

	
	/******************************3. 각 블릿버튼 ********************************/
	$("#bullet>div").click(function(e){
		e.preventDefault();
		clearInterval(autoslide); //자동슬라이드 기능 일시정지	
		idx = $(this).index();
		sliding(0);
		after();
		/*	
			sliding(1)이 아니라 sliding(0)인 이유는  sliding()에서 받는 add값에 더하는 기능을 갖고 있기 때문
			add값을 1 또는 -1로 넣으면 누른 버튼의 슬라이드에서 오른쪽 또는 왼쪽 슬라이드로 움직이게 되는데
			add값을 넣어도 클릭한 블릿의 슬라이드로 넘어가는 기능이 이미 삽입되어 있으므로 0으로 변경 
		*/	
	}); //각 bullet click

});//JQB

