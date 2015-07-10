/* global $ */
/* global jQuery */
/* global Tock */
(function() {
	var timer = new Tock();
	$('#start').on('click', function() {
    	timer.start($('#clock').val());
	});
	
	$('#stop').on('click', function() {
    	timer.stop();
	});
	
})(jQuery)