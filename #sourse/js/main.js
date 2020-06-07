$(document).ready(function(){



$('.slider__body').slick({
	fade:true,
	dots:true,
	sliderToShow:1,
	sliderToScroll:1,
	infinite:true,
	arrows:false,

});
let iconMenu = document.querySelector(".menu__icon");
let body = document.querySelector("body");
let menuBody = document.querySelector(".header__menu");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
};

let header = $('#header');
let intro= $("#features");
let introH;
let scrollPos = $(window).scrollTop();

$(window).on("scroll load resize", function(){
	introH = intro.innerHeight();
	scrollPos = $(this).scrollTop();

	if(scrollPos > introH){
		header.addClass("fixed");
	} else {
		header.removeClass("fixed");
	}
});

 $("[data-scroll]").on("click", function(event){
event.preventDefault();
let elementID = $(this).data('scroll');
let elementOffset= $(elementID).offset().top
$("html,body").animate({
	scrollTop: elementOffset
});
 });
});

