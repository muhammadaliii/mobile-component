function stickyFooterNav() {
	var lastScroll		= 300;
		$footerNav		= $(".footer-navigation"),
		$footer    		= $("footer"),
		$window			= $(window),
		offset     		= $footerNav.offset(),
		offsetBottom	= $footer.offset(),
		_height			= $(window).outerHeight(),
		topPadding		= 10;

	$window.scroll(function() {
		if ($window.scrollTop() > (offsetBottom.top - _height)) {
			$footerNav.addClass("hiding");
		} else {
			$footerNav.removeClass("hiding");
		}
	});
}

(function($){

	$(window).scroll(function(event){
		if ($('.footer-navigation').length > 0) {
			stickyFooterNav();
		}
	});

    $(document).ready(function () {
		if ($('.footer-navigation').length > 0) {
			stickyFooterNav();
		}
    });


})(jQuery);