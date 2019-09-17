$(window).on("load", function() {
	

	// waypoint - mission 
	let mission = new Waypoint({
		element: document.querySelector('#mission'),
		handler: function(direction) {
			console.log('mission');
			anime({
				targets: ["#mission", '#mission img'],
				easing: 'easeOutExpo',
				translateY: [-1000, 0],
				opacity: [0, 1],
				delay: anime.stagger(800, {start: 2000}),
			})
		},
		context: document.querySelector('body'),
		offset: '50%',
	});

	// waypoint - who we are
	let coil = new Waypoint({
		element: document.querySelector('#who-we-are'),
		handler: function() {
			console.log('coil');
			anime({
				targets: ["#who-we-are h1", '#who-we-are p'],
				easing: 'easeOutExpo',
				translateY: [-1000, 0],
				opacity: [0, 1],
				delay: anime.stagger(500, {start: 0}),
			})
		},
		context: document.querySelector('body'),
		offset: '100%',
	});

	// nav bar on scroll
	$(document).on("scroll", function() {
		var $nav = $(".usa-nav a");
		$nav.toggleClass('scrolled', $(this).scrollTop() >$nav.height());
	});


	// hero image change
	if($(window).width() < 481){
         var images = [
				  "img/coil-hero-mobile.png",
				  "img/coil-hero-02.png",
				]

		var hero = document.getElementById('hero');
		var i = 0;
		setInterval(function() {
	      hero.style.backgroundImage = "url(" + images[i] + ")";
	      i = i + 1;
	      if (i == images.length) {
	        i =  0;
		      }
		}, 3000);
   } 

   else {
   		var images = [
				  "img/coil-hero-01.png",
				  "img/coil-hero-03.png",
				  "img/coil-hero-04.png"
				]

		var hero = document.getElementById('hero');
		var i = 0;
		setInterval(function() {
	      hero.style.backgroundImage = "url(" + images[i] + ")";
	      i = i + 1;
	      if (i == images.length) {
	        i =  0;
		      }
		}, 3000);
   }


})