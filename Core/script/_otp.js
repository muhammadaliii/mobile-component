(function($){

	$('#input-otp').pincodeInput({
		hidedigits: false,
		inputs: 4,
		// complete:function(value, e, errorElement){
		// 	$(".pincode-callback").html("This is the 'complete' callback firing. Current value: " + value);

		// 	if(value!="1234"){
		// 		$('.pincode-callback').html("The code is not correct. Should be '1234'").addClass('error');
		// 	}else{
		// 		$('.pincode-callback').removeClass('error');
		// 	}
		// }
	
	});

})(jQuery);