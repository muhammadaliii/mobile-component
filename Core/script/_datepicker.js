(function($){

	var optComponent = {
		format: 'dd-mm-yyyy',
		todayHighlight: true,
		autoclose: true
	};

	$('.custom-datepicker').datepicker(optComponent);


	// ======== Datepicker Filter ========
	$('#datepicker-filter').datepicker({
		format: 'dd-mm-yyyy',
		todayHighlight: true,
	});
	$('#datepicker-filter').on('changeDate', function() {
		$('#value-datepicker-filter').val(
			$('#datepicker-filter').datepicker('getFormattedDate')
		);
	});
	// ======== End Datepicker Filter ========

	// ======== Datepicker Treatement ========
	$('#datepicker-treatment').datepicker({
		format: 'dd-mm-yyyy',
		todayHighlight: true,
	});
	$('#datepicker-treatment').on('changeDate', function() {
		$('#value-datepicker-treatment').val(
			$('#datepicker-treatment').datepicker('getFormattedDate')
		);
	});
	// ======== End Datepicker Treatement ========

	// ======== Datepicker Doctor ========
	$('#datepicker-doctor').datepicker({
		format: 'dd-mm-yyyy',
		todayHighlight: true,
	});
	$('#datepicker-doctor').on('changeDate', function() {
		$('#value-datepicker-doctor').val(
			$('#datepicker-doctor').datepicker('getFormattedDate')
		);
	});
	// ======== End Datepicker Doctor ========

	
})(jQuery);
