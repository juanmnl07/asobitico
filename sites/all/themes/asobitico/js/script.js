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

		$('.pin.clic').live('click', function(){
			$('.pin').addClass('clic').find('.popup').hide();
			var divpopup = $(this).find('.popup');
			//if(!divpopup.hasClass('act')){
				$(this).removeClass('clic').find('.popup').addClass('act').show();
			//}
		});
		$('.cerrar-popup').live('click', function(){
			$('.pin').addClass('clic').find('.popup').removeClass('act').hide();
		});

		var view_mapa = "#views-exposed-form-colegios-block-pin-mapa";
		$(view_mapa + ' #edit-field-colegio-tid').live('change', function(){
			cambiar_clase($(this));
			$(view_mapa + ' #edit-submit-colegios').trigger('click');
		});

		var view_listado = "#views-exposed-form-colegios-block-listado-colegios";
		var selector_colegio = view_listado + ' #edit-field-colegio-tid';
		var selector_colegio2 = view_listado + ' #edit-field-colegio-tid--2';

		var boton_colegio = view_listado + ' #edit-submit-colegios';
		var boton_colegio2 = view_listado + ' #edit-submit-colegios--2';

		$('#quicktabs-mapa ul li a').addClass('tab-azul');

		$(selector_colegio).live('change', function(){
			cambiar_clase($(this), view_mapa);
			$(boton_colegio).trigger('click');
		});

		$(selector_colegio2).live('change', function(){
			cambiar_clase($(this), view_listado);
			$(boton_colegio2).trigger('click');
		});


	});

	function cambiar_clase(object, vista){
		var valor_select_pin = $(object).val();
		var class_tab = 'tab-azul';
		var class_to_remove = 'tab-rojo';
		if(valor_select_pin == 5){
			class_to_remove = 'tab-azul';
			class_tab = 'tab-rojo';
		}

		alert(vista + " #edit-field-colegio-tid option[value='" + valor_select_pin + "']");

		$(vista + " #edit-field-colegio-tid option[value='" + valor_select_pin + "']").attr("selected","selected");

		$('#quicktabs-mapa ul li a').removeClass(class_to_remove);
		$('#quicktabs-mapa ul li a').addClass(class_tab);
	}

})(jQuery);