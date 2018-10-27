(function($){

	$('.mouse-scroll').click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 700, 'linear');
	});

	$('#filter-modal, #sort-modal, #date-modal').on('shown.bs.modal', function (e) {
		$('html').addClass('no-overflow');
	});

	$('#filter-modal, #sort-modal, #date-modal').on('hidden.bs.modal', function (e) {
		$('html').removeClass('no-overflow');
	});

})(jQuery);
