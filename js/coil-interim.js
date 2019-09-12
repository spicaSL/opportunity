document.addEventListener('DOMContentLoaded', () => {
	//Create waypoint 
	let mission = new Waypoint({
		element: document.querySelector('#mission'),
		handler: function() {
			anime({
				targets: ["#mission", '#mission img'],
				easing: 'easeOutExpo',
				translateY: [-1000, 0],
				opacity: [0, 1],
				delay: anime.stagger(800, {start: 400}),
			})
		},
		context: document.querySelector('body'),
		offset: '100%',
	});

	
	let skills = new Waypoint({
		element: document.querySelector('#skills-line'),
		handler: function() {
			console.log('it works');
			anime({
				targets: "#skills-line-path",
				translateX: path('x'),
				translateY: path('y'),
				rotate: path('angle'),
				easing: 'linear',
				duration: 2000,
				loop: false,
			})
		},
		context: document.querySelector('body'),
		offset: '100%',
	})


})