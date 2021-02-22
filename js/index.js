/********* 전역선언 **********/
varscTop, topHeight, mainHeight, winWidth, navi = {};

/********* 사용자함수 **********/
function naviShowHide() {
	if(winWidth >= 1199) { //pc
		if(scTop >= topHeight + mainHeight) {
			$(".navi-wrapper").css({"display": "block"});
			$(".navi-wrapper").css({"position": "fixed"});
		}
		else{
			$(".navi-wrapper").css({"display": "none"});
			$(".navi-wrapper").css({"position": "relative"});
		}
	}
	else{
		$(".navi-wrapper").css({"display": "none"});
	}
}

/********* 이벤트선언 **********/
mainBanner();	// 배너세팅

$(window).scroll(onScroll); // scroll spy
$(window).resize(onResize).trigger("resize"); // el 높이, 폭, 위치

/********* 이벤트콜백 **********/
function onResize (e) {
	topHeight = $('.header-wrapper').outerHeight();
	mainHeight = $('.main-wrapper').outerHeight();
	winWidth = $(window).width();
}

function onScroll (e) {
	scTop = $(this).scrollTop();
	naviShowHide();
}


new WOW.init();