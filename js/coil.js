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
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();

    if (scrollPos > 1440 && scrollPos < 5075) {
    	$('.coil-brand h1').css("color", "black");
      	$('.coil-nav ul li a').css("color", "black");
    } else {
    	$('.coil-brand h1').css("color", "white");
      	$('.coil-nav ul li a').css("color", "white");
    }
    $('a').each(function () {
        var currLink = $(this);
        //console.log(currLink);
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

