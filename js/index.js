/********* 전역선언 **********/
var scTop, navi = {};

/********* 사용자함수 **********/
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


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
