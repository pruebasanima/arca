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

	// animation mouseover on each "capa_interactiva" SVG image
	$( ".capa_interactiva").mouseover(function(e) {
		targetNumber = e.target.id.substr(-1);
	    $('#interactiva_0'+targetNumber).css("fill",'#0C4C76');
	    $('#interactiva_0'+targetNumber).css("opacity",'0.3');
	});

	// animation mouseout on each "capa_interactiva" SVG image
	$(".capa_interactiva").mouseout(function() {
		$('#interactiva_0'+targetNumber).css("fill",'#FFFFFF');
	    $('#interactiva_0'+targetNumber).css("opacity",'');
	});

	// animation hover on "dots" SVG image
	$( ".circle").mouseover(function(e) {
	    $('#interactiva_0'+targetNumber).css("fill",'#0C4C76');
	    $('#interactiva_0'+targetNumber).css("opacity",'0.3');
	});

	//click dots
	$('.circle').click(function(){
		console.log("click in dot");
	});
});