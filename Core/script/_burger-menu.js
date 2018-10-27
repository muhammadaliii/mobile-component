(function($){
	
	$('.button-action.drawer').click(function(){
		$(this).toggleClass('click').parents('.header-menu').find('.drawer-menu').toggleClass('showing');
		$('overlay-body').toggleClass('showing');
	});
	
	$('.drawer-menu .hide-drawer').click(function(){
		$('.button-action.drawer').trigger( "click" );
	});

})(jQuery);