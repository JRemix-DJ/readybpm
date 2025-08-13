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


    <meta property="og:image" content="<? echo base_url('images/dj_new.png'); ?>"/>
    <meta property="og:title" content="ReadyBPM"/>
    <meta property="og:description" content="La mejor página para obtener tus remixes."/>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Busca todos los elementos con la clase 'precio'
            const priceElements = document.querySelectorAll('.precio');

            priceElements.forEach(function(el) {
                // Obtiene el texto completo, ej: "19.90 $/month"
                const fullText = el.textContent.trim();

                // Divide el texto en partes: ["19.90", "$/month"]
                const textParts = fullText.split(' ');
                const priceString = textParts[0];
                const unitString = textParts.slice(1).join(' '); // Une el resto por si acaso

                // Divide el precio en entero y decimal: ["19", "90"]
                const priceParts = priceString.split('.');
                const integerPart = priceParts[0];
                const fractionPart = priceParts[1] ? '.' + priceParts[1] : '';

                // Reemplaza el HTML interno con la nueva estructura
                el.innerHTML = `
            <span class="int">${integerPart}</span>
            <span class="frac-unit">
                <span class="frac">${fractionPart}</span>
                <span class="unit">${unitString}</span>
            </span>
        `;
            });
        });
    </script>

    <style>
        @media (max-width: 768px) {
            .home .content {
                max-width: 100%;
                padding: 20px;
                box-sizing: border-box;
                display: flex !important;
                grid-template-columns: 100%;
                flex-direction: column !important;
                justify-content: flex-start !important;
                align-items: start !important;
                top: 20px;
                left: 0 !important;
            }

            .home .content #btnvideos {
                grid-area: boton1;
                width: 100%;
                display: flex;
                justify-self: start;
            }

            .btn {
                background-color: rgb(255, 255, 255) !important;
                color: rgb(95, 71, 243)!important;
                width: 30% !important;
                font-size: 12px !important;
                border: none; /* Quitamos el borde para un look más limpio */
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); /* La sombra principal */
                transition: all 0.2s ease-in-out; /* Animación suave para los efectos */
            }

            /* Ajustamos la sección principal para que sea más flexible */
            .home .content {
                display: flex;
                align-items: center; /* Centra verticalmente el contenido */
                justify-content: center; /* Centra horizontalmente el contenido */
                padding: 40px 15px; /* Añade un poco de espacio interno */
                min-height: auto; /* Quitamos alturas mínimas que puedan causar problemas */
                margin-bottom: 500px;
            }

            /* Reducimos el espaciado y el tamaño de los elementos dentro del héroe */
            .home .homecontent {
                position: static; /* Cambiamos el posicionamiento para un flujo normal */
                transform: none;  /* Reseteamos cualquier transformación */
                width: 100%;      /* Ocupa todo el ancho disponible */
                padding-top: 20px; /* Reducimos el espacio superior */
            }

            /* Hacemos el logo un poco más pequeño en móviles */
            .home .homecontent .logo {
                max-width: 450px;
                margin-bottom: 25px;
            }

            /* Ajustamos el margen del botón */
            .home .homecontent #btnvideos {
                margin-bottom: 20px;
            }

            /* Hacemos el texto de información un poco más pequeño */
            .home .homecontent .information-home {
                font-size: 10px;
                line-height: 1.6;
                text-align: left;
                padding-right: 100px;
            }

            /* Reducimos el espaciado de la sección "WHY US?" para que no haya tanto hueco */
            .why-us-section {
                padding: 40px 20px;
            }
            .logo{
                background-color: #ffffff;
                border-radius: 10px;
                padding: 5px;

            }
            .logo-background{
                display: inline-flex !important;
                background-color: rgb(255, 255, 255);
                margin-bottom: 10px;
                border-radius: 5px;
            }
        }

        .logo-background {
            display: contents;
        }

        .planeshome .contenedor {
            display: flex;
            flex-wrap: wrap;
            justify-content: center; /* Centra los planes horizontalmente */
            align-items: stretch; /* Asegura que todos los planes en una fila tengan la misma altura */
            gap: 30px; /* Espacio entre los planes */
            padding: 20px 0;
        }

        .planeshome .tabla {
            max-width: 350px; /* Límite de ancho para cada plan */
            display: flex;
            flex-direction: column; /* Organiza el contenido del plan verticalmente */
            border: 1px solid #ddd;
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            width: 340px;
        }

        .planeshome .tabla:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .planeshome .tabla .btn-default {
            margin-top: auto; /* Empuja el botón al final del plan */
        }

        .why-us-section {
            background-color: #5F47F3; /* Fondo color púrpura */
            padding: 20px 20px; /* Espaciado interno (vertical y horizontal) */
            text-align: center; /* Centra todo el contenido */
        }

        .why-us-title-wrapper {
            display: inline-block; /* Permite centrar el bloque y que se ajuste al contenido */
            background-color: #432e8c; /* Fondo de la elipse */
            border-radius: 50em; /* Crea la forma de elipse/píldora */
            padding: 15px 60px; /* Espaciado para la elipse (vertical y horizontal) */
            margin-bottom: 60px; /* Espacio entre el título y las columnas */
        }

        .why-us-title-wrapper h2 {
            color: #fff; /* Color del texto del título */
            margin: 0;
            font-weight: 700;
            text-transform: uppercase;
        }

        .feature-item .icon {
            font-size: 5em; /* Tamaño grande para los iconos */
            color: #ef91ac; /* Color rosado para los iconos */
            margin-bottom: 25px; /* Espacio debajo del icono */
            display: block;
        }

        .feature-item h3 {
            color: #fff; /* Color del texto de las características */
            text-transform: uppercase; /* Texto en mayúsculas */
            font-size: 1.3em;
            font-weight: 600;
            letter-spacing: 1px;
        }

        @media (max-width: 768px) {
            .feature-item {
                margin-bottom: 40px;
            }

            .why-us-section {
                padding: 60px 20px;
            }
            .information-home {
                display: none;
            }
        }
        .section_plan {
            display: flex;       /* Activa Flexbox para alinear elementos */
            align-items: center; /* Centra verticalmente el check con el texto */
            text-align: left;
            padding-left: 20px;  /* Añade un espacio a la izquierda del contenedor del plan */
            padding-right: 20px;
            margin: 0px !important; /* Ajusta el margen vertical */
            font-size: 18px;
        }

        .section_plan span, .section_plan h6 {
            font-weight: bold; /* Pone el texto en negrita */
        }

        .fa-check-circle-o{
            color: #04ae05;
            padding-right: 5px;
        }

        .btn-default{
            margin-top: 30px !important;
            margin-bottom: 30px;
            font-size: 16px;
            max-height: 37px;
            max-width: 280px;
        }
        .precio {
            display: flex;         /* Activa flexbox para alinear los elementos */
            align-items: center;   /* Centra verticalmente los elementos */
            justify-content: center; /* Centra el bloque de precio horizontalmente */
            line-height: 1;        /* Ajusta la altura de línea para un mejor control */
        }

        .precio .int {
            font-size: 100px;     /* Tamaño de fuente grande, ajústalo si es necesario */
            font-weight: 700;    /* Letra en negrita */
        }

        /* Contenedor para la parte decimal y la unidad */
        .precio .frac-unit {
            display: flex;
            flex-direction: column; /* Coloca el decimal encima de la unidad */
            margin-left: 5px;       /* Pequeño espacio a la izquierda */
        }

        /* Estilo para la parte decimal (ej. ".90") */
        .precio .frac {
            font-size: 50px;
            font-weight: 700;
        }

        /* Estilo para la unidad (ej. "$/month") */
        .precio .unit {
            font-size: 40px;
            font-weight: 400;
        }
        /* --- Estilos para destacar el segundo plan --- */

        /* Selecciona la segunda tarjeta de plan */
        .planeshome .contenedor .tabla:nth-child(2) {
            border: 2px solid #5F47F3; /* Añade el borde de color solicitado */
            position: relative;          /* Necesario para posicionar el banner */
            overflow: hidden;            /* Evita que el banner se salga de las esquinas redondeadas */
        }

        /* Crea el banner superior usando un pseudo-elemento ::before */
        .planeshome .contenedor .tabla:nth-child(2)::before {
            content: 'Best deal - Limited time only'; /* El texto del banner */
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            background-color: #5F47F3; /* Color de fondo del banner */
            color: #fff;               /* Color del texto */
            padding: 10px;
            text-align: center;
            font-weight: bold;
            font-size: 1em;
            margin-bottom: 20px;
        }

        /*
          Ajuste de espaciado para el contenido de la tarjeta destacada.
          Esto empuja el contenido hacia abajo para que no quede oculto por el banner.
        */
        .planeshome .contenedor .tabla:nth-child(2) .section_plan:first-child {
            padding-top: 60px !important; /* Aumenta el padding-top del primer elemento */
        }

        .backgrouwnd {
            width: 100%;
            height: 100%; /* O la altura que necesites */
            background-color: #5f47f3;
            position: relative;
            overflow: hidden;
            height: 160px;
            max-height: 200px;
        }

        /* Contenedor principal del footer */
        .modern-footer-minimal {
            background-color: #ffffff; /* Fondo blanco */
            border-top: 1px solid #e9e9e9; /* Una línea sutil para separarlo del contenido */
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; /* Una fuente más moderna */
        }

        /* Contenedor superior que alinea los enlaces y redes sociales */
        .modern-footer-minimal .footer-top {
            display: flex; /* Activa Flexbox */
            justify-content: space-between; /* Empuja los elementos a los extremos */
            align-items: center; /* Los centra verticalmente */
            flex-wrap: wrap; /* Permite que se apilen en pantallas pequeñas */
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-top: 20px;
            padding-top: 20px;
            border-bottom: 1px solid #e9e9e9; /* Línea divisoria */
        }

        /* Estilo para la lista de enlaces */
        .modern-footer-minimal .footer-links-minimal {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            gap: 25px; /* Espacio entre los enlaces */
        }

        /* Estilo para los enlaces de texto */
        .modern-footer-minimal .footer-links-minimal a {
            color: #272727; /* Color de letra principal (negro/gris oscuro) */
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: 0.5px;
            transition: color 0.3s ease;
        }

        /* Efecto hover para los enlaces */
        .modern-footer-minimal .footer-links-minimal a:hover {
            color: #5f47f3; /* Cambia al color morado en hover */
        }

        /* Estilo para la lista de redes sociales */
        .modern-footer-minimal .social-list-minimal {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            gap: 20px; /* Espacio entre los iconos */
        }

        /* Estilo para los iconos de redes sociales */
        .modern-footer-minimal .social-list-minimal a {
            color: #ffffff; /* Color morado principal */
            font-size: 20px; /* Tamaño del icono */
            text-decoration: none;
            transition: color 0.3s ease;
        }

        /* Efecto hover para redes sociales (un tono morado más intenso) */
        .modern-footer-minimal .social-list-minimal a:hover {
            color: #d2d2d3;
        }

        /* Contenedor inferior para el copyright */
        .modern-footer-minimal .footer-bottom {
            text-align: center;
        }

        /* Estilo para el texto de copyright */
        .modern-footer-minimal .footer-bottom p {
            margin: 0;
            font-size: 12px; /* Letra pequeña */
            color: #ffffff; /* Color plomo/gris claro */
            text-transform: none; /* Quitamos el 'uppercase' para que sea más legible */
        }

        /* --- Importación de Font Awesome (si no la tienes) --- */
        /* Añade esto a tu <head> o al inicio de tu CSS para los iconos */
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
    </style>
</head>
<body>
<div id="fb-root"></div>
<section class="home-hero">
</section>
<section class="home">
    <div class="content homecontent">
        <div class="logo-background">
            <img id="logo" class="logo " src="<? echo base_url('images/logocorto.png?v=1.2'); ?>"
                 alt="<? echo $title; ?>">
        </div>

<!--        <div id="btnvideos">-->
<!--            <a href="--><?// echo base_url('audios/')?><!--" class="btn">Audios</a>-->
<!--        </div>-->
        <div id="btnvideos">
            <a href="<? echo base_url('videos/')?>" class="btn">START NOW</a>
        </div>

        <p class="information-home ">Ready BPM provides exclusive content for professional DJs, carefully produced to
            enhance performance. By accessing, you confirm that you are an active DJ, will use the material solely for
            your performances, and already own the original versions of the included tracks.
        </p>

    </div>
</section>

<section class="why-us-section">
    <div class="container">

        <div class="why-us-title-wrapper">
            <h2>WHY US?</h2>
        </div>

        <div class="row">

            <div class="col-md-4 col-sm-12">
                <div class="feature-item">
                    <img src="<? echo base_url('images/icons/headphone.png'); ?>" alt="headphone">
                    <h3>BEST MUSIC SELECTION</h3>
                </div>
            </div>

            <div class="col-md-4 col-sm-12">
                <div class="feature-item">
                    <img src="<? echo base_url('images/icons/vinyl.png'); ?>" alt="turntable">
                    <h3>NEW RELEASES DAILY</h3>
                </div>
            </div>

            <div class="col-md-4 col-sm-12">
                <div class="feature-item">
                    <img src="<? echo base_url('images/icons/vinyl (1).png'); ?>" alt="disk">
                    <h3>WIDE VARIETY</h3>
                </div>
            </div>

        </div>
    </div>
</section>

<section id="cuerpo">
    <div class="container planeshome">
        <div class="row">
            <div class="col-xs-12">
                <section id="cuerpo" class="planespage">
                    <h2 class="home-title">OUR PLANS</h2>
                    <header class="style4 confirmacion">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="contenedor">
                                        <? if(isset($plans)){  ?>
                                        <? foreach($plans as $plan){ ?>
                                        <div class="tabla tabla hover ">
                                            <div class="section_plan" style="padding-top: 50px;">
                                                <h2 style="text-transform: capitalize !important;"><?= $plan->name; ?></h2>
                                            </div>
                                            <div class="section_plan">
                                                <p><? echo $plan->description;  ?></p>
                                            </div>
                                            <div class="section_plan">
                                                <span class="precio"><? echo $plan->price; ?> $/month</span>
                                            </div>
                                            <a class="btn btn-default"
                                               href="<? echo base_url(); ?>getplan/?plan_id=<? echo $plan->id; ?>&currency=USD"><b>Choose Plan</b>
                                            </a>
                                            <div class="section_plan"><i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                                <span class=""><? echo $plan->duration; ?></span>
                                                <span> &nbsp; days of access </span>
                                            </div>

                                            <? if ($plan->ilimitado_activo == 1) { ?>

                                            <div class="section_plan"><i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                                <span>Descargas Ilimitadas de Audios.</span>
                                            </div>
                                            <? }else{ ?>
                                            <div class="section_plan"> <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                                <span class="table-tokens-video"><? if ( $plan->tokens_video != 0 && $plan->tokens_video != NULL ) {
                                                    echo $plan->tokens_video;
                                                } else {
                                                    echo '0';
                                                } ?></span>
                                                <span> &nbsp; Audios Downloads </span>
                                            </div>
                                            <? } ?>
                                            <div class="section_plan">
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                                <span> Automatic Renewal </span>
                                            </div>
                                            <div class="section_plan"><i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                                <span> Advanced Search </span>
                                            </div>
                                            <div class="section_plan"><i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                                <span> New Products Daily </span>
                                            </div>
                                            <div class="section_plan"><i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                                <span> 1-Click Downloads </span>
                                            </div>
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

<footer class="modern-footer-minimal">
    <div class="backgrouwnd">
        <div class="container">
            <div class="footer-top">
                <ul class="footer-links-minimal">
                    <li><a href="<?php echo base_url(); ?>pages/become_a_member/" style="color: #ffffff !important;">BE A REMIXER</a></li>
                    <li><a href="<?php echo base_url(); ?>pages/terms_conditions/" style="color: #ffffff !important;">TERMS AND CONDITIONS</a></li>
                </ul>

                <ul class="social-list-minimal">
                    <li><a href="https://www.facebook.com/profile.php?id=61576190996039" target="_blank"
                           class="fa fa-facebook"></a></li>
                    <li><a href="https://www.instagram.com/readybpm/" target="_blank" class="fa fa-instagram"></a></li>
                </ul>
            </div>

            <div class="footer-bottom" style="margin-bottom: 50px">
                <p>&copy; Copyright <?php echo date('Y'); ?> ReadyBPM</p>
            </div>
        </div>
    </div>
</footer>
</body>
</html>
