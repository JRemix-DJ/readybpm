<style>
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

<div class="modal fade " id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Login</h4>
            </div>
            <div class="modal-body">
                <form action="#" id="login-form">
                    <label for="">
                        E-mail:
                    </label>
                    <input type="text" name="email" id="email">
                    <label for="">Password: </label>
                    <input type="password" name="password" id="password">
                    <a href="#" data-toggle="modal" data-target="#myModalRecuperar">¿Olvidaste tu contraseña?</a>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" id="login-btn">Ingresar</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="myModalRecuperar" tabindex="-1" role="dialog" aria-labelledby="Recuperar">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Login</h4>
            </div>
            <div class="modal-body">
                <form action="#" id="recuperar-form">
                    <label for="">
                        E-mail:
                    </label>
                    <input type="text" name="email" id="recuperar-email">
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" id="recuperar-btn">Recuperar</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade darktext" id="messagesModal" tabindex="-1" role="dialog" aria-labelledby="Registrarme">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel"></h4>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="myModalRegistrarme" tabindex="-1" role="dialog" aria-labelledby="Registrarme">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Registro</h4>
            </div>
            <div class="modal-body">
                <form action="#" id="registrar-form">
                    <label for="">
                        E-mail:
                    </label>
                    <input type="text" name="registro-email" id="registro-email">
                    <label>Username</label>
                    <input type="text" name="registro-username" id="registro-username">
                    <label>Password</label>
                    <input type="password" name="registro-password" id="registro-password">
                    <label>Repetir Password</label>
                    <input type="password" name="registro-repeatpassword" id="registro-repeatpassword">
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" id="registrar-btn">Registrarme</button>
            </div>
        </div>
    </div>
</div>

<audio id="shared-audio-player"></audio>

<?
if(isset($_SESSION['content_type'])){
if($this->session->userdata('content_type') == 'videos'){?>
<div class="modal" id="myModalVideo" tabindex="-1" role="dialog" aria-labelledby="ModalVideo" data-keyboard="false"
     data-backdrop="static">
    <div class="modal-dialog" role="document">
        <div class="modal-content modalvideos">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div id="jquery_jplayer_2" class="jp-jplayer"></div>
                <div id="jp_container_2" class="jp-video jp-video-270p" role="application" aria-label="media player">
                    <div class="jp-type-single">
                        <div id="jquery_jplayer_1" class="jp-jplayer"></div>
                        <div class="jp-gui">
                            <div class="jp-video-play">
                                <button class="jp-video-play-icon" role="button" tabindex="0">play</button>
                            </div>
                            <div class="jp-interface">
                                <div class="jp-progress">
                                    <div class="jp-seek-bar">
                                        <div class="jp-play-bar"></div>
                                    </div>
                                </div>
                                <div class="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
                                <div class="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
                                <div class="jp-controls-holder">
                                    <div class="jp-controls">
                                        <button class="jp-play" role="button" tabindex="0">play</button>
                                        <button class="jp-stop" role="button" tabindex="0">stop</button>
                                    </div>
                                    <div class="jp-volume-controls">
                                        <button class="jp-mute" role="button" tabindex="0">mute</button>
                                        <button class="jp-volume-max" role="button" tabindex="0">max volume</button>
                                        <div class="jp-volume-bar">
                                            <div class="jp-volume-bar-value"></div>
                                        </div>
                                    </div>
                                    <div class="jp-toggles">
                                        <button class="jp-repeat" role="button" tabindex="0">repeat</button>
                                        <button class="jp-full-screen" role="button" tabindex="0">full screen</button>
                                    </div>
                                </div>
                                <div class="jp-details">
                                    <div class="jp-title" aria-label="title">&nbsp;</div>
                                </div>
                            </div>
                        </div>
                        <div class="jp-no-solution">
                            <span>Update Required</span>
                            To play the media you will need to either update your browser to a recent version or update
                            your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?
}else{
?>

<div id="jquery_jplayer_1" class="jp-jplayer"></div>
<div id="jp_container_1" class="jp-audio" role="application" aria-label="media player">
    <div class="jp-type-single">
        <div class="jp-gui jp-interface">
            <div class="jp-controls">
                <a class="jp-play"><i class="fa fa-play"></i></a>
                <a class="jp-pause"><i class="fa fa-pause"></i></a>
                <a class="jp-stop"><i class="fa fa-stop"></i></a>
            </div>
            <div class="jp-progress">
                <div class="jp-seek-bar">
                    <div class="jp-play-bar"></div>
                </div>
            </div>
            <div class="jp-volume-controls">
                <a class="jp-mute"><i class="fa fa-volume-off"></i></a>
                <a class="jp-volume-max"><i class="fa fa-volume-up"></i></a>
                <div class="jp-volume-bar">
                    <div class="jp-volume-bar-value"></div>
                </div>
            </div>
            <div class="jp-time-holder">
                <div class="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
                <div class="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
            </div>
        </div>
        <div class="jp-no-solution">
            <span>Update Required</span>
            To play the media you will need to either update your browser to a recent version or update your <a
                href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
        </div>
    </div>
</div>
<?
}
}else{ ?>

<div id="jquery_jplayer_1" class="jp-jplayer"></div>
<div id="jp_container_1" class="jp-audio" role="application" aria-label="media player">
    <div class="jp-type-single">
        <div class="jp-gui jp-interface">
            <div class="jp-controls">
                <a class="jp-play"><i class="fa fa-play"></i></a>
                <a class="jp-pause"><i class="fa fa-pause"></i></a>
                <a class="jp-stop"><i class="fa fa-stop"></i></a>
            </div>
            <div class="jp-progress">
                <div class="jp-seek-bar">
                    <div class="jp-play-bar"></div>
                </div>
            </div>
            <div class="jp-volume-controls">
                <a class="jp-mute"><i class="fa fa-volume-off"></i></a>
                <a class="jp-volume-max"><i class="fa fa-volume-up"></i></a>
                <div class="jp-volume-bar">
                    <div class="jp-volume-bar-value"></div>
                </div>
            </div>
            <div class="jp-time-holder">
                <div class="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
                <div class="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
            </div>
        </div>
        <div class="jp-no-solution">
            <span>Update Required</span>
            To play the media you will need to either update your browser to a recent version or update your <a
                href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
        </div>
    </div>
</div>


<? } ?>


<div class="modal" id="myModalTerms" tabindex="-1" role="dialog" aria-labelledby="Terms" data-keyboard="false"
     data-backdrop="static">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Terms</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <img src="<? echo base_url(); ?>images/logocorto.png" alt="" class="col-md-4 col-md-offset-4">
                </div>
                <p>ReadyBPM is a remix service designed to be used mainly by DJs who seek to improve their
                    performance on stage.</p>
                <p>The remixes contained on our website are produced by professional DJs and music producers from around
                    the world.</p>

                <p>By clicking "I agree", you certify that you are a DJ that works and will use the material obtained at
                    ReadyBPM for the sole purpose of improving your performance as a DJ and will NOT sell,
                    resell or redistribute any of the files purchased on this website.</p>

                <p>Also, before purchasing any of the remixes on ReadyBPM, you certify that you are already in
                    possession of the original works contained in the remixed compositions respectively.</p>

                <p>BY CLICKING "I ACCEPT" YOU ACCEPT THE TERMS SET FORTH ABOVE</p>

            </div>
            <div class="modal-footer">
                <a href="https://readybpm.com" class="btn btn-success btn-lg" data-dismiss="modal"
                   id="accept-terms">I ACCEPT</a>
            </div>
        </div>
    </div>
</div>

<!--=================================
Script Source
=================================-->
<script src="<? echo base_url(); ?>js/jquery.js"></script>
<script src="<? echo base_url(); ?>js/ajaxify.min.js"></script>
<script src="<? echo base_url(); ?>js/jquery.downCount.js"></script>
<script src="<? echo base_url(); ?>js/jquery.datetimepicker.full.min.js"></script>
<script src="<? echo base_url(); ?>js/jplayer/jquery.jplayer.min.js"></script>
<script src="<? echo base_url(); ?>js/jplayer/jplayer.playlist.min.js"></script>

<script src="<? echo base_url(); ?>js/jquery.flexslider-min.js"></script>
<script src="<? echo base_url(); ?>js/jquery.stellar.min.js"></script>
<script src="<? echo base_url(); ?>js/jquery.sticky.js"></script>
<script src="<? echo base_url(); ?>js/bootstrap.min.js"></script>
<script src="<? echo base_url(); ?>js/jquery.waitforimages.js"></script>
<script src="<? echo base_url(); ?>js/masonry.pkgd.min.js"></script>
<script src="<? echo base_url(); ?>js/packery.pkgd.min.js"></script>
<script src="<? echo base_url(); ?>js/tweetie.min.js"></script>
<script src="<? echo base_url(); ?>js/owl.carousel.min.js"></script>
<script src="<? echo base_url(); ?>js/jquery.bxslider.min.js"></script>
<script src="<? echo base_url(); ?>js/main.js?v=2.9.2021"></script>
<script>
    <? if(isset($_SESSION['user_products'])){ ?>
    var user_products = <? echo json_encode($this->session->userdata('user_products')); ?>;
    console.log(user_products);

    $('.singleSongPlayer').each(function () {
        var product_id_temp;
        var product_id_string;


        product_id_temp = $(this).data('product');

        product_id_string = product_id_temp.toString();
        if (user_products.includes(product_id_string)) {
            $(this).addClass('archivo_cliente');
        }

    });

    $('.singleVideoPlayer').each(function () {
        var product_id_temp;
        var product_id_string;


        product_id_temp = $(this).data('product');

        product_id_string = product_id_temp.toString();
        if (user_products.includes(product_id_string)) {
            $(this).addClass('archivo_cliente');
        }

    });
    <? } ?>

</script>
<script>
    $(document).ready(function() {
        // Escuchar el clic en el botón "Recuperar" del modal
        $('#recuperar-btn').on('click', function(e) {
            e.preventDefault(); // Evitar que el formulario se envíe de la forma tradicional

            var btn = $(this);
            var email = $('#recuperar-email').val();

            // Validación simple para que el correo no esté vacío
            if (email.trim() === '') {
                alert('Por favor, ingresa tu correo electrónico.');
                return;
            }

            // Cambiar el texto del botón para dar feedback al usuario
            btn.text('Enviando...').prop('disabled', true);

            // Petición AJAX al controlador
            $.ajax({
                url: '<?php echo site_url("login/send_reset_link"); ?>',
                type: 'POST',
                data: { email: email },
                dataType: 'json',
                success: function(response) {
                    // 1. Cerrar el modal de recuperación
                    $('#myModalRecuperar').modal('hide');

                    // 2. Usar tu modal de mensajes para mostrar la confirmación
                    $('#messagesModal .modal-title').text('Solicitud Enviada');
                    $('#messagesModal .modal-body').html('<p>' + response.message + '</p>');
                    $('#messagesModal').modal('show');
                },
                error: function() {
                    // En caso de un error inesperado en el servidor
                    alert('Ocurrió un error al procesar tu solicitud. Por favor, intenta de nuevo.');
                },
                complete: function() {
                    // Devolver el botón a su estado original
                    btn.text('Recuperar').prop('disabled', false);
                }
            });
        });
    });
</script>

</body>
</html>