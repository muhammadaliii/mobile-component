(function($){
	function stickyHeader() {
	 	var lastScroll = 300;
		$(window).scroll(function(event){
			var st = $(this).scrollTop();
			
			if(st < 32) {
				$('body').removeClass('on-scroll');
			} else {
				$('body').addClass('on-scroll');
			}

			lastScroll = st;
		});
	}

	$(document).ready(function () {
		stickyHeader();
	});

})(jQuery);
