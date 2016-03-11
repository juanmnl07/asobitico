<?php
					//exit(var_export('expression'));
if ($items){

$slides ="";
?>
<!-- Place somewhere in the <body> of your page -->
<?php $conFormulario = 0; ?>
<?php for ($i=0; $i < count($items); $i++) {
	
	$url = "";
	$link="";
	$link_title="";
	$titulo_slide="";
	$enlace = "";

		if (isset($items[$i]['field_image']['#items'][0]['uri'])){
			$url = '/sites/default/files/sliders/'.str_replace("public://sliders/","",$items[$i]['field_image']['#items'][0]['uri']);
		}

		if (isset($items[$i]['field_detalle']['#items'][0]['value'])){
			$titulo_slide = $items[$i]['field_detalle']['#items'][0]['value'];
		}

		if (isset($items[$i]['field_formulario_busqueda']['#items'][0]['value'])){
			$conFormulario = (int)$items[$i]['field_formulario_busqueda']['#items'][0]['value'];
		}

			if (isset($items[$i]['field_enlace']['#items'][0]['url'])){
				$link_title = $items[$i]['field_enlace']['#items'][0]['title'];
				$link = $items[$i]['field_enlace']['#items'][0]['url'];
			}
			if ($link == "" && $link_title == ""){
				//generar bloque para el formulario web de la busqueda en el primer slide
				if((drupal_is_front_page() || (arg(0) == "catalogo-de-viajes-en-oferta")) && ($conFormulario == 1)){
					$formulario_busqueda = module_invoke('webform', 'block_view', 'client-block-63');
					$slides .= "<li class='primero'><img src='".$url."' /><div class='flex-caption'>".$titulo_slide.render($formulario_busqueda['content'])."</div></li>";	
				} else {
					$slides .= "<li><img src='".$url."' /><div class='flex-caption'>".$titulo_slide."</div></li>";	
				}
			} else {
				$enlace = "<div class='enlace-wrapper'><div class='enlace'><a href='".$link."' target='_blank'>".$link_title."</a></div></div>";
				$slides .= "<li><img src='".$url."' /><div class='flex-caption'>".$titulo_slide.$enlace."</div></li>";
			}
		

} ?>
<div class="flexslider">
  	<ul class="slides">
		<?php print $slides ?>
	</ul>
    <div class="sombra">&nbsp;</div>
</div>
<?php 	flexslider_add(); } ?>
<script type="text/javascript">
(function( $ ){
	$(document).ready(function(){
		$('.flexslider').flexslider({
		    animation: "fade",
		    animationLoop: true,
		    pauseOnHover: true,
		    controlsContainer: ".container-nav",
		    directionNav: true,
			controlNav: false
	  	});
	});
})(jQuery);
</script>