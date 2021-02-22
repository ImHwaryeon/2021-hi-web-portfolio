/********* 전역선언 **********/
var scTop, topHeight, mainHeight, winWidth, navi = {};

/********* 사용자함수 **********/
function naviShowHide() {

}

/********* 이벤트선언 **********/

$(window).scroll(onScroll); // scroll spy
$(window).resize(onResize).trigger("resize"); // el 높이, 폭, 위치

/********* 이벤트콜백 **********/
function onResize (e) {
	topHeight = $('.header-wrapper').outerHeight();
	mainHeight = $('.main-wrapper').outerHeight();
	winWidth = $(window).width();
}

function onScroll (e) {
	var scTop = $(this).scrollTop();
	var skillsTop = $(".skills-wrapper").offset().top;
	console.log(skillsTop, scTop);
	if(scTop >= skillsTop) {
		$(".navi-wrapper").addClass('active');
	}
	else {
		$(".navi-wrapper").removeClass('active');
	}
}


$('.header-wrapper .sub-wrap').click(function(){
	$('.header-wrapper').toggleClass('active');
})


new WOW().init();
