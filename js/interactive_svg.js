$(document).ready(function() {
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
	$('.capa_interactiva').click(function(e){
		click_interactive(e);
	});

	$('.circle').click(function(e){
		click_interactive(e);
	});


    //-------------functions--------------
	function click_interactive(e) {
		console.log(e.target.id);
		targetNumber = e.target.id.substr(-1);
		$('.line_0'+targetNumber).toggleClass("d-none");
		$('.text_0'+targetNumber).toggleClass("d-none");
	}
});