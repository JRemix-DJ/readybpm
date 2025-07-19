<? $this->load->helper('url'); ?>
<!DOCTYPE html>
<!--[if lte IE 9]>
<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js">
<!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title><? echo $title; ?></title>
    <!--=================================
    Meta tags
    =================================-->
    <meta name="description" content="<? echo $description; ?>">
    <meta content="yes" name="apple-mobile-web-app-capable"/>
    <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no"/>
    <!--=================================
    Style Sheets
    =================================-->
    <link href="https://fonts.googleapis.com/css?family=Lato:400,900,700,400italic,300,700italic" rel="stylesheet"
          type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic,700' rel='stylesheet'
          type='text/css'>


    <link rel="shortcut icon" href="<? echo base_url(); ?>images/icons/favicon.ico" type="image/x-icon"/>
    <link rel="apple-touch-icon" href="<? echo base_url(); ?>images/icons/apple-touch-icon.png"/>
    <link rel="apple-touch-icon" sizes="57x57" href="<? echo base_url(); ?>images/icons/apple-touch-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="<? echo base_url(); ?>images/icons/apple-touch-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="<? echo base_url(); ?>images/icons/apple-touch-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114"
          href="<? echo base_url(); ?>images/icons/apple-touch-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120"
          href="<? echo base_url(); ?>images/icons/apple-touch-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144"
          href="<? echo base_url(); ?>images/icons/apple-touch-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152"
          href="<? echo base_url(); ?>images/icons/apple-touch-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180"
          href="<? echo base_url(); ?>images/icons/apple-touch-icon-180x180.png"/>


    <link rel="stylesheet" type="text/css" href="<? echo base_url(); ?>css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="<? echo base_url(); ?>css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="<? echo base_url(); ?>css/flexslider.css">
    <link rel="stylesheet" type="text/css" href="<? echo base_url(); ?>css/owl.carousel.css">
    <link rel="stylesheet" type="text/css" href="<? echo base_url(); ?>css/animations.css">
    <link rel="stylesheet" type="text/css" href="<? echo base_url(); ?>css/dl-menu.css">
    <link rel="stylesheet" type="text/css" href="<? echo base_url(); ?>css/jquery.datetimepicker.css">
    <link rel="stylesheet" type="text/css" href="<? echo base_url(); ?>css/jquery.bxslider.css">

    <link rel="stylesheet" href="<? echo base_url(); ?>css/main.css?v=1.25.2">
    <link rel="stylesheet" href="<? echo base_url(); ?>css/table.css?v=1.16">
    <link rel="stylesheet" href="<? echo base_url(); ?>css/colors/blue.css?v=1.19">

    <link href="<? echo base_url('assets/jplayer/css/jplayer-flat-audio-theme.css'); ?>" rel="stylesheet"
          type="text/css"/>
    <? //echo $is_video_section; ?>
    <? if ($this->session->userdata('content_type') == 'videos') { ?>
        <link href="<? echo base_url(); ?>assets/jplayer/css/jplayer.pink.flag.css" media="screen" rel="stylesheet"
              type="text/css">
    <? } ?>
    <!--=================================
    Place color files here ( right after main.css ) for example
    <link rel="stylesheet" type="text/css" href="assets/css/colors/color-name.css">
    ===================================-->

    <script src="<? echo base_url(); ?>js/modernizr-2.6.2-respond-1.1.0.min.js"></script>


    <meta property="og:image" content="<? echo base_url('images/dj_new.png'); ?>"/>
    <meta property="og:title" content="ReadyBPM"/>
    <meta property="og:description" content="La mejor página para obtener tus remix."/>

</head>
<body>
<div id="fb-root"></div>
<script>
    window.fbAsyncInit = function () {
        FB.init({
            xfbml: true,
            version: 'v9.0'
        });
    };
    (function (d,s,id) {
        var js,fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/es_ES/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js,fjs);
    }(document,'script','facebook-jssdk'));</script>
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
<!--===============================
Preloading Splash Screen
===================================-->
<div class="pageLoader"></div>

<div class="majorWrap">
    <!--========================================
    Header Content
    ===========================================-->
    <header id="sticktop" class="doc-header">
        <!--========================================
        Player
        ===========================================-->
        <? if ($this->session->userdata('is_user_unlimited') == true) { ?>
            <section id="audio-player" class="the-xv-Jplayer mini-cart"
                     style="line-height: 1em; display: grid; align-content: center;">
              <span style="line-height: 1em;" id="tokens_total">
                <span id="cantidad_tokens">UNLIMITED</span><br>
                <span style="font-size: 0.6em">USER</span>
              </span>
            </section>
        <? } else { ?>
            <? if ($this->session->userdata('is_user_tokens') == false) { ?>
                <? if (MONEY_PAYMENTS) { ?>
                    <section id="audio-player" class="the-xv-Jplayer mini-cart">
                        <a href="<? echo base_url(); ?>cart"><i class="fa fa-shopping-cart"></i> Carrito (<span
                                    class="cant"><? if (!isset($_SESSION['cart'])) {
                                    echo '0';
                                } else {
                                    echo count($_SESSION['cart']['items']);
                                } ?></span>)</a>
                    </section>
                <? } ?>
                <? if (isset($_SESSION['cart'])) {
                    if (count($_SESSION['cart']['items']) > 0) { ?>
                        <section id="audio-player" class="the-xv-Jplayer mini-cart">
                            <a href="<? echo base_url(); ?>cart"><i class="fa fa-shopping-cart"></i> Carrito (<span
                                        class="cant"><? if (!isset($_SESSION['cart'])) {
                                        echo '0';
                                    } else {
                                        echo count($_SESSION['cart']['items']);
                                    } ?></span>)</a>
                        </section>
                    <? } ?>
                <? } ?>
            <? } else { ?>

                <section id="audio-player" class="the-xv-Jplayer mini-cart"
                         style="line-height: 1em; display: grid; align-content: center;">
                <span style="line-height: 1em;" id="tokens_total">
                 <span id="cantidad_tokens_video"><? echo $this->session->userdata('tokens_video'); ?></span> <small
                            style="font-size: 1em">DESCARGAS</small> <br>                <span
                            style="font-size: 1em">DISPONIBLES</span>
                </span>
                </section>
            <? } ?>
        <? } ?>
        <!--========================================
        Nav
        ===========================================-->
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="<? echo base_url(); ?>">

                        <img class="logo-header" src="<? echo base_url(); ?>images/logocorto.png" alt=""/>

                    </a>
                </div>

                <div id="dl-menu" class="xv-menuwrapper responsive-menu">
                    <button class="menuTrigger"><i class="fa fa-navicon"></i></button>
                    <div class="clearfix"></div>
                    <ul class="dl-menu">
                        <li class="parent active"><a
                                    href="<? if ($this->session->userdata('content_type') == 'videos') {
                                        echo base_url('/videos/');
                                    } else {
                                        echo base_url('/audios/');
                                    } ?>">Inicio</a></li>

                        <? if ($this->session->userdata('is_logued_in')) { ?>
                            <li class="cyan parent">
                                <a href="<? echo base_url(); ?>micuenta"><i class="fa fa-user" aria-hidden="true"></i>
                                    Mi Cuenta</a>
                                <ul class="dl-submenu">
                                    <li><a href="<? echo base_url(); ?>micuenta">Ver Mi Cuenta</a></li>
                                    <li><a href="<? echo base_url(); ?>login/logout/">Logout</a></li>
                                </ul>
                            </li>
                        <? } else { ?>
                            <li class="cyan"><a href="#" data-toggle="modal" data-target="#myModal"><i
                                            class="fa fa-user" aria-hidden="true"></i> Ingresar</a></li>
                            <li class="cyan"><a href="#" data-toggle="modal" data-target="#myModalRegistrarme"><i
                                            class="fa fa-user-plus" aria-hidden="true"></i> Registrarse</a></li>
                        <? } ?>
                    </ul>
                </div><!-- /dl-menuwrapper -->
                <div class="responsive-menu xv-menuwrapper" id="generalmenu">
                    <ul class="dl-menu">
                        <!--
                  <li class="parent"><a href="<? echo base_url('pages/become_a_member/'); ?>">Remixers</a>
                  <ul class="dl-submenu cols3">
                    <? foreach ($djs as $dj) { ?>
                      <li><a href="<? echo base_url('remixers/').$dj->id; ?>"><? echo $dj->username; ?></a></li>
                    <? } ?>
                  </ul>
                  </li> -->
                        <li><a href="<? echo base_url('audios/'); ?>">Audios</a></li>
                        <li class="parent"><a href="<? echo base_url('generos/'); ?>">Genres</a>
                            <!--<ul class="dl-submenu cols3">
                        <? foreach ($generos as $genre) { ?>
                          <li><a href="<? echo base_url('genero/').$genre->id; ?><? if (isset($is_video_section)) {
                                if ($is_video_section == 1) {
                                    echo '?isvideo=1';
                                }
                            } ?>"><? echo $genre->name; ?></a></li>
                        <? } ?>
                      </ul>-->
                        </li>
                        <!--<li><a href="<? echo base_url('drops'); ?>">Drops</a></li>-->
                        <li><a href="<? echo base_url('planes'); ?>">Plans</a></li>
                        <li><a href="<? echo base_url('pages/become_a_member/'); ?>">Be a Remixer</a></li>
                        <!--<li><a href="<? echo base_url('tienda'); ?>">Tienda</a></li>-->
                        <? if ($this->session->userdata('is_logued_in')) { ?>
                            <li class="cyan parent onlymobile">
                                <a href="<? echo base_url(); ?>micuenta"><i class="fa fa-user" aria-hidden="true"></i>
                                    Mi Cuenta</a>
                                <ul class="dl-submenu">
                                    <li><a href="<? echo base_url(); ?>micuenta">Ver Mi Cuenta</a></li>
                                    <li><a href="<? echo base_url(); ?>login/logout/">Logout</a></li>
                                </ul>
                            </li>
                        <? } else { ?>
                            <li class="cyan onlymobile"><a href="#" data-toggle="modal" data-target="#myModal"><i
                                            class="fa fa-user" aria-hidden="true"></i> Ingresar</a></li>
                            <li class="cyan onlymobile"><a href="#" data-toggle="modal"
                                                           data-target="#myModalRegistrarme"><i class="fa fa-user-plus"
                                                                                                aria-hidden="true"></i>
                                    Registrarse</a></li>
                        <? } ?>
                    </ul>

                </div>
            </div>
        </nav>
    </header>