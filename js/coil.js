$(document).ready(function () {
    $(document).on("scroll", onScroll);
 
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

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

});



function onScroll(event){
    var scrollPos = $(document).scrollTop();
    console.log(scrollPos);

    if (scrollPos > 550) {
         $('#mission').css('background', '#005FF3');
      }
  	if (scrollPos > 1400 || scrollPos <=550) {
         $('#mission').css('background', 'white');
      }

     if (scrollPos >5000) {
     	$('#contact').css('background', '#005FF3');
     }
     if (scrollPos <= 5000) {
     	$('#contact').css('background', 'white');
     }


    if (scrollPos > 1440 && scrollPos < 5075) {
    	$('.coil-brand h1').css("color", "black");
      	$('.coil-nav ul li a').css("color", "black");
    } else {
    	$('.coil-brand h1').css("color", "white");
      	$('.coil-nav ul li a').css("color", "white");
    }
    $('a').not(document.getElementById('continue-a')).each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 250 <= scrollPos && refElement.position().top + refElement.height() > scrollPos + 100) {
            $('#coil-nav ul li').removeClass("active-nav");
            currLink.parent().addClass("active-nav");
        }
        else{
            currLink.parent().removeClass("active-nav");
        }
    });


  // color change


}

