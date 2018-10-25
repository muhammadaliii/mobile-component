(function($){

	$('.hero-banner .slider-wrapper').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		autoplay: true,
		slidesToShow: 1
	});

	$('.card-slider .slider-wrapper').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		autoplay: true,
		slidesToShow: 1
	});

	$('.thumb-slider .slider-wrapper').slick({
		dots: false,
		arrows: true,
		prevArrow: "<span class='fa fa-angle-left arrow-prev'></span>",
		nextArrow: "<span class='fa fa-angle-right arrow-next'></span>",
		infinite: true,
		speed: 300,
		autoplay: true,
		slidesToShow: 1
	});

})(jQuery);