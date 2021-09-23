//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "31 dec 2021 23:59:59",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	