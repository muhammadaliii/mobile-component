(function($){
	
	$(".toggle-down").click(function(){
        $(this).toggleClass("toggleDrawer").siblings(".menu").toggleClass("show").parents(".header-fix").toggleClass("show-menu");
    });

})(jQuery);