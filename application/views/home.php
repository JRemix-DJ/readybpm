<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><? echo $title; ?></title>
    <meta name="description" content="<? echo $description; ?>">
    
    <link rel="shortcut icon" href="<? echo base_url(); ?>images/icons/favicon.ico">
    <link rel="stylesheet" href="<? echo base_url('css/newhome.css'); ?>">
    <link rel="stylesheet" href="<? echo base_url('css/bootstrap.min.css'); ?>">
    <link rel="stylesheet" href="<? echo base_url('css/colors/blue.css'); ?>">
    <link rel="stylesheet" href="<? echo base_url('css/font-awesome.min.css'); ?>">
    <link rel="stylesheet" href="<? echo base_url('css/newhomeblue.css'); ?>"> 
    <link rel="stylesheet" href="<? echo base_url(); ?>css/table.css?v=1.14">
    
    
<meta property="og:image" content="<? echo base_url('images/dj_new.png'); ?>" />
<meta property="og:title" content="Video Remix Pool" />
<meta property="og:description" content="La mejor página para obtener tus remixes." />

</head>
<body>
<div id="fb-root"></div>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v9.0'
          });
        };
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/es_ES/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>
 <!-- Your Chat Plugin code -->
 <div class="fb-customerchat"
        attribution=setup_tool
        page_id="100765198078235"
  logged_in_greeting="Hola !!!  Escribenos un mensaje y atenderemos tu consulta rapidamente :"
  logged_out_greeting="Hola !!!  Escribenos un mensaje y atenderemos tu consulta rapidamente :">
      </div>
      <style>
      .fb_dialog {
    bottom: 40pt !important;
}

/* The following are for the chat box, on display and on hide */
iframe.fb_customer_chat_bounce_in_v2 {
    bottom: 110px !important;
}
iframe.fb_customer_chat_bounce_out_v2 {
    bottom: 110px !important;
}
      </style>
    <section class="home-hero">

    </section>
    <section class="home">
        <div class="content homecontent">
                <img  class="logo " src="<? echo base_url('images/logocorto.png?v=1.2'); ?>" alt="<? echo $title; ?>">
            
                <p class="information-home ">Los mejores VideoRemix para <br> DJs Profesionales, sin marcas ni sellos.</p>
            <div id="btnvideos">
                <a href="<? echo base_url('videos/')?>" class="btn">Acceder</a><br>
            </div>
        
        </div>
    </section>
    <section id="cuerpo">
        <div class="container planeshome">
            <div class="row">
                <div class="col-xs-12">
                    <section id="cuerpo" class="planespage">
                        <h2 class="home-title">NUESTROS PLANES</h2>
    		<header class="style4 confirmacion">
		    	<div class="container">
		    		<div class="row">
		    			<div class="col-xs-12">
                            
                        <div class="contenedor" >
                        <? if(isset($plans)){  ?>
                            <? foreach($plans as $plan){ ?>
                                <div class="tabla tabla hover ">
                                    <div class="section_plan">
                                        <h2><?= $plan->name; ?></h2>
                                    </div>
                                    <div class="section_plan">
                                        <p><? echo $plan->description;  ?></p>
                                    </div>
                                    <div class="section_plan">
                                        <span class="precio">$<? echo $plan->price; ?></span>
                                    </div>
                                    <div class="section_plan">
                                    <span class=""><? echo $plan->duration; ?></span>
                                    <p> &nbsp; días</p>
                                    </div>
                             
                                    <? if ($plan->ilimitado_activo == 1) { ?>
                                        
                                        <div class="section_plan">
                                             <h6>Descargas Ilimitadas de Video.</h6>
                                        </div>
                                    <? }else{ ?>
                                    <div class="section_plan">
                                    <span class="table-tokens-video"><? if($plan->tokens_video!=0 && $plan->tokens_video!=NULL){ echo $plan->tokens_video; }else{ echo '0';} ?></span>
                                    <p> &nbsp; Descargas Video </p>
                                    </div>
                                    <? } ?>
                                    <div class="section_plan">
                                    <p> Renovacion Automatica </p>
                                    </div>
                                    <div class="section_plan">
                                    <p>Busqueda Avanzada </p>
                                    </div>
                                    <div class="section_plan">
                                    <p>Nuevos Productos Diariamente </p>
                                    </div>
                                    <div class="section_plan">
                                    <p> Descargas con 1 Click </p>
                                    </div>
                                    <a class="btn btn-default" href="<? echo base_url(); ?>getplan/?plan_id=<? echo $plan->id; ?>&currency=USD"><b>Comprar</b></a>   
                                </div>
                                <? } ?>
                            <? } ?>
                            </div>
		    			</div>
		    		</div>
		    	</div> 
    		</header>
    	</section>
                </div>
            </div>
        </div> 
    </section>
    <div id="mc_embed_signup">
               <div class="new_email">
                   <p class="test-new">Nuestros videos son 100% compatibles con los</p>
                   <p class="test-new">software más populares en el mundo DJ</p>
               <img  class="logo " src="<? echo base_url('images/logo3.png?v=1.2'); ?>" alt="<? echo $title; ?>" style="width: 500px; max-width: 100%; margin-top: 40px;">
               </div>                         
        </div>
        <footer class="doc-footer text-uppercase text-center">
        <div class="container">
            <ul class="style1 footer-links">
  
                <li><a href="<? echo base_url(); ?>pages/become_a_member/">CONVERTIRME EN EDITOR</a></li>
                <li><a href="<? echo base_url(); ?>pages/terms_conditions/">TERMINOS Y CONDICIONES</a></li>

            </ul>
            <ul class="social-list style2 circular">
                <li><a href="https://www.facebook.com/videoremixpool" target="_blank" class="fa fa-facebook"></a></li>
                <li><a href="https://www.instagram.com/videoremixpool/" target="_blank" class="fa fa-instagram"></a></li>
            
            </ul>
            <div class="row">
                <div class="col-xs-12">
                    <strong>&copy; Copyright  <? echo date('Y'); ?> Video Remix Pool</strong>
                    <p>LOS MEJORES VIDEOREMIX PARA DJS PROFESIONALES</p>
                    <p>Sitio web desarrollado por <a href="http://shiftandcontrol.com">Shift & Ctrl</a></p>
                </div>
            </div>
        </div>
    </footer>
</div>

</body>
</html>