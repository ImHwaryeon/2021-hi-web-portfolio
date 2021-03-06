/********* 전역선언 **********/
var scTop, navi = {};
var typingInterval = null;
var typing = ['개발자', '프론트엔드 개발자', '백엔드 개발자', '웹 퍼블리셔'];
var typingIdx = 0;
var $span = $('.typing')

/********* 사용자함수 **********/
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1, //한 슬라이드에 보여줄 갯수
	spaceBetween: 20, //슬라이드 사이 여백
	loop: true, //슬라이드 반복 여부
	centeredSlides: true,
	allowTouchMove:false, //터치슬라이딩 기능 막음
	autoplay: { //자동 슬라이드 설정, 비 활성화 시 false
		delay: 3000, //시간 설정
		disableOnInteraction: false, //false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
});

$(".swiper-container").mouseenter(function(){
	swiper.autoplay.stop();
});

$(".swiper-container").mouseleave(function(){
	swiper.autopaly.start();
});

$(".swiper-container").mouseenter(function(){
	swiper.autoplay.stop();
});

$(".swiper-container").mouseleave(function(){
	swiper.autopaly.start();
});

typingInterval = setInterval(onInterval, 150);


/********* 이벤트선언 **********/
$(window).scroll(onScroll); // scroll spy


/********* 이벤트콜백 **********/
function onNavi(n) {
	var tar = [];
	$(".pages").each(function(v) {
		tar.push($(this).offset().top);
	});
	$("html, body").stop().animate({"scrollTop": tar[n]+"px"}, 500);
}


function onScroll (e) {
	var scTop = $(this).scrollTop();
	var skillsTop = $(".skills-wrapper").offset().top;
	// console.log(skillsTop, scTop);
	if(scTop + 100 >= skillsTop) {
		$(".navi-wrapper").addClass('active');
	}
	else {
		$(".navi-wrapper").removeClass('active');
	}
}

function onInterval() {
	var spanLen = $span.text().length;
	var typingLen = typing[typingIdx].length

	if(spanLen == typingLen) {
		clearInterval(typingInterval);
		setTimeout(function(){
			$span.text('');
			typingIdx = typingIdx == typing.length - 1 ? 0 : typingIdx + 1;
			typingInterval = setInterval(onInterval, 150);
		}, 2000)
	}
	else {
		$span.text( typing[typingIdx].substr(0, spanLen + 1) )
	}
	// console.log(typing[0].length);
}


$('.header-wrapper .sub-wrap').click(function(){
	$('.header-wrapper').toggleClass('active');
})

