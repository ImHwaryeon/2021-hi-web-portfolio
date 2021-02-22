/********* 전역선언 **********/
var scTop, navi = {};

/********* 사용자함수 **********/

/********* 이벤트선언 **********/
$(window).scroll(onScroll); // scroll spy


/********* 이벤트콜백 **********/
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
