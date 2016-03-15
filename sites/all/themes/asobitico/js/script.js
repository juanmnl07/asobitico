(function( $ ){
	$(document).ready(function(){



		var flexs = $('.flexslider');
		if(flexs.length > 0){
			$('.flexslider').flexslider({
			    animation: "fade",
			    animationLoop: true,
			    pauseOnHover: true,
			    controlsContainer: ".container-nav",
			    directionNav: true,
				controlNav: false
		  });
		}


		var menuLateral = $('#menu-lateral');
		if(menuLateral.length > 0){
			$('#menu-lateral a[href^="http://'+location.hostname+'/' + location.pathname.split("/")[1] + '"]').addClass('active');
		}


		/* Script efecto scroll a las anclas */
		$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();
			var target = this.hash,
			$target = $(target);
		
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		});

		$('.menu-anclas li a').on('click', function(){
			$('.menu-anclas li a').removeClass("activ");
			$(this).addClass("activ");
		});


		/*$(window).scroll(function(){
		  scrolls = $(window).scrollTop();
			var scrollPos = $(document).scrollTop();
	    $('.menu-anclas li a').each(function (indice, elemento) { console.log(indice);
	        var currlink = $(this).find('a'); console.log(currlink.attr("href"));
	        var refelement = $(currlink.attr("href"));
	        refelement = refelement.offset();
	        if (refelement.top <= scrollPos) {
	            $('.menu-anclas ul li a').removeClass("activ");
	            currlink.addClass("activ");
	        }
	        else{
	            currlink.removeClass("activ");
	        }
	    });
		});*/


	});
})(jQuery);