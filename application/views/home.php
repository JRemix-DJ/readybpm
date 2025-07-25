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
<meta property="og:title" content="ReadyBPM" />
<meta property="og:description" content="La mejor página para obtener tus remixes." />

    <style>
        .planeshome .contenedor {
            display: flex;
            flex-wrap: wrap;
            justify-content: center; /* Centra los planes horizontalmente */
            align-items: stretch; /* Asegura que todos los planes en una fila tengan la misma altura */
            gap: 30px; /* Espacio entre los planes */
            padding: 20px 0;
        }

        .planeshome .tabla {
            flex: 1 1 300px; /* Permite que los planes crezcan y se encojan, con una base de 300px */
            max-width: 350px; /* Límite de ancho para cada plan */
            display: flex;
            flex-direction: column; /* Organiza el contenido del plan verticalmente */
            border: 1px solid #ddd;
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .planeshome .tabla:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .planeshome .tabla .btn-default {
            margin-top: auto; /* Empuja el botón al final del plan */
        }
    </style>

</head>
<body>
<div id="fb-root"></div>
    <section class="home-hero">
    </section>
    <section class="home">
        <div class="content homecontent">
            <img id="logo" class="logo " src="<? echo base_url('images/logo-blanco.png?v=1.2'); ?>" alt="<? echo $title; ?>">

            <div id="btnvideos">
                <a href="<? echo base_url('audios/')?>" class="btn">Start Now</a>
            </div>

            <p class="information-home ">Ready BPM provides exclusive content for professional DJs, carefully produced to enhance performance. By accessing, you confirm that you are an active DJ, will use the material solely for your performances, and already own the original versions of the included tracks.</p>

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
                                             <h6>Descargas Ilimitadas de Audios.</h6>
                                        </div>
                                    <? }else{ ?>
                                    <div class="section_plan">
                                    <span class="table-tokens-video"><? if($plan->tokens_video!=0 && $plan->tokens_video!=NULL){ echo $plan->tokens_video; }else{ echo '0';} ?></span>
                                    <p> &nbsp; Descargas de Audio </p>
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
            <p class="test-new">Compatibilidad total con los software de DJ</p>
            <p class="test-new">  más destacadas a nivel global</p>
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
                    <li><a href="https://www.facebook.com/profile.php?id=61576190996039" target="_blank" class="fa fa-facebook"></a></li>
                    <li><a href="https://www.instagram.com/videoremixpool/" target="_blank" class="fa fa-instagram"></a></li>
                </ul>
                <div class="row">
                    <div class="col-xs-12">
                        <strong>&copy; Copyright  <? echo date('Y'); ?> ReadyBPM</strong>
                        <p>LOS MEJORES REMIX PARA DJS PROFESIONALES</p>
                    </div>
                </div>
            </div>
        </footer>
</body>
</html>