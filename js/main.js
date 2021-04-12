const btnMobileMenu = $('.btn-mobile-menu');
const navigationMenu = $('.header-nav');

$("a[href^='#']").click(function() {
	if (navigationMenu.hasClass('active')) {
		btnMobileMenu.removeClass('active');
		navigationMenu.removeClass('active');
	}
	var _href = $(this).attr("href");
	$("html, body").animate( {
		scrollTop: $(_href).offset().top+"px"
	});
	return false;
});

btnMobileMenu.click(function () {
	btnMobileMenu.toggleClass('active');
	navigationMenu.toggleClass('active');
});

new Swiper('.swiper-container', {
	observer: true,
	observerParents: true,
	observerChildren: true,
	autoHeight: true,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		'479': {
			slidesPerView: 2,
			spaceBetween: 20
		},
		'768': {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
});