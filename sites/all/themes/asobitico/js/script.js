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





		/*$(window).scroll(function(){
			    scrolls = $(window).scrollTop();

			    if($(".vista-impacto-regional-detalle").length > 0){
				    var ini = $(".impacto-regional-detalle-imagen-top").position();
				    ini = ini.top;
				    var fin = $("#empleos-disponibles").position();
				    fin = fin.top;
				    if (scrolls > ini && scrolls < (fin+100)) { 
				       $(".submenu-paises").addClass('opensub');
				    } else {
				       $(".submenu-paises").removeClass('opensub');
				    }

				    if($("#datos-numericos-pais").length >0 ){
				    	var sub1 = $("#datos-numericos-pais").position();
				    	sub1 = sub1.top;
				    }
				    if($("#impacto-positivo-pais").length >0 ){
				    	var sub2 = $("#impacto-positivo-pais").position();
				    	sub2 = sub2.top;
					}

				    if($("#testimonios-pais-detalle").length >0 ){
				    	var sub3 = $("#testimonios-pais-detalle").position();
				    	sub3 = sub3.top;
					}

					if($("#empleos-disponibles").length >0 ){
				    	var sub4 = $("#empleos-disponibles").position();
				    	sub4 = sub4.top;
				    }    	    

				    if(scrolls >= sub1){
				    	$(".subm").removeClass('activ');
				    	$(".opt1").addClass('activ');
				    }
				    if(scrolls >= sub2){
				    	$(".subm").removeClass('activ');
				    	$(".opt2").addClass('activ');
				    }
				    if(scrolls >= sub3){
				    	$(".subm").removeClass('activ');
				    	$(".opt3").addClass('activ');
				    }	    	    
				    if(scrolls >= sub4){
				    	$(".subm").removeClass('activ');
				    	$(".opt4").addClass('activ');
				    }
				}
				if($(".vista-user-micuenta").length > 0){

				    var ini = $("#imagen-nombre").position();
				    ini = ini.top;
				    var fin = $("#boton-enviar").position();
				    fin = fin.top;
				    if (scrolls > (ini-300) && scrolls < (fin-200)) { 
				       $(".submenu-lateral").addClass('opensub');
				    } else {
				       $(".submenu-lateral").removeClass('opensub');
				    }

				    var sub1 = $("#puestos-aplicados").position();
				    sub1 = sub1.top;
				    var sub2 = $("#editar-perfil").position();
				    sub2 = sub2.top;

				    if(scrolls >= sub1){
				    	$(".subm").removeClass('activ');
				    	$(".opt1").addClass('activ');
				    }
				    if(scrolls >= sub2){
				    	$(".subm").removeClass('activ');
				    	$(".opt2").addClass('activ');
				    }			
				}

			});*/




	});
})(jQuery);