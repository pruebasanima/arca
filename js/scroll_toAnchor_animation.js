$(document).ready(function() {
	// get the nav height
	var navHeight = $('.div_nav').outerHeight();
	//variable global for target SVG section
	var targetNumber = 0;

	//scroll function
	$('.list-group-item').click(function(e){				
		e.preventDefault();		//evitar el eventos del enlace normal
		var targetOffset = $(this).attr('href'); //id del ancla
		var targetOffsett = targetOffset.substr(1);
		console.log(navHeight);
		console.log($('#'+targetOffsett).offset());
		$('html, body').animate({
			scrollTop: $('#'+targetOffsett).offset().top - 450
		}, 1000);		
	});
});