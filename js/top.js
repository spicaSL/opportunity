$(document).ready(function () {

	// demo day card animations
	$('.demo-day-card').mouseenter(function() {
		title = $(this).find('p');
		year = $(this).find('h1');
		linkContainer = $(this).find('.demo-day-link-container');

		title.animate({
			opacity: 0,
			top: "-100",
		}, {duration: 300});

		year.animate({
			top: "-100",
		}, { duration: 300, 
				complete: function() {
				console.log("in function");
				linkContainer.animate({
				opacity: "show",
				top: "-100",
				}, {duration: 300});
		}, 

		});

	});

	$('.demo-day-card').mouseleave(function() {
		console.log('exit');

		title = $(this).find('p');
		year = $(this).find('h1');
		linkContainer = $(this).find('.demo-day-link-container');

		title.animate({
			opacity: 1,
			top: "0",
		}, {duration: 300});

		year.animate({
			top: "0",
			}, {duration: 300}
		);

		linkContainer.animate({
			opacity: "hide",
			top: "0",
			}, {duration: 300}
		);
	});
});
