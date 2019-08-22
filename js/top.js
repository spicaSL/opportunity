$(document).ready(function () {


	// demo day card animations
	$('.demo-day-card').mouseenter(function() {
		title = $(this).find('p');
		year = $(this).find('h1');
		linkContainer = $(this).find('.demo-day-link-container');

		title.animate({
			opacity: 0,
			top: "0",
		}, {duration: 300});

		year.animate({
			top: "-15",
		}, { duration: 300, 
				complete: function() {
				linkContainer.animate({
				opacity: "show",
				top: "-15",
				}, {duration: 300});
		}, 

		});

	});

	$('.demo-day-card').mouseleave(function() {

		title = $(this).find('p');
		year = $(this).find('h1');
		linkContainer = $(this).find('.demo-day-link-container');

		title.animate({
			opacity: 1,
			top: "90",
		}, {duration: 300});

		year.animate({
			top: "70",
			}, {duration: 300}
		);

		linkContainer.animate({
			opacity: "hide",
			top: "70",
			}, {duration: 300}
		);
	});
});
