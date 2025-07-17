<div id="mc_embed_signup">
    <div class="new_email">
        <p class="test-new">Compatibilidad total con los software de DJ</p>
        <p class="test-new">  más destacadas a nivel global</p>
        <img class="logmarcas" src="<? echo base_url('images/logo3.png?v=1.2'); ?>" alt="<? echo $title; ?>">
    </div>
</div>
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

<footer class="doc-footer text-uppercase text-center">
    <div class="container">
        <ul class="style1 footer-links">
            <li><a href="<? echo base_url(); ?>pages/become_a_member/">CONVERTIRME EN EDITOR</a></li>
            <li><a href="<? echo base_url(); ?>pages/terms_conditions/">TÉRMINOS Y CONDICIONES</a></li>
            <li><a href="<? echo base_url('faq'); ?>">PREGUNTAS FRECUENTES</a></li>
        </ul>
        <ul class="social-list style2 circular">
            <li><a href="https://www.facebook.com/profile.php?id=61576190996039" target="_blank"
                   class="fa fa-facebook"></a></li>
            <li><a href="https://www.instagram.com/readybpm/" target="_blank" class="fa fa-instagram"></a></li>
        </ul>
        <div class="row">
            <div class="col-xs-12">
                <strong>&copy; Copyright <? echo date('Y'); ?> ReadyBPM</strong>
                <p>LOS MEJORES REMIX PARA DJS PROFESIONALES</p>
            </div>
        </div>
    </div>
</footer>


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
                    <img src="<? echo base_url(); ?>images/logo.png" alt="" class="col-md-4 col-md-offset-4">
                </div>
                <p>VideoRemixPool.com is a remix service designed to be used mainly by DJs who seek to improve their
                    performance on stage.</p>
                <p>The remixes contained on our website are produced by professional DJs and music producers from around
                    the world.</p>

                <p>By clicking "I agree", you certify that you are a DJ that works and will use the material obtained at
                    VideoRemixPool.com for the sole purpose of improving your performance as a DJ and will NOT sell,
                    resell or redistribute any of the files purchased on this website.</p>

                <p>Also, before purchasing any of the remixes on VideoRemixPool.com, you certify that you are already in
                    possession of the original works contained in the remixed compositions respectively.</p>

                <p>BY CLICKING "I ACCEPT" YOU ACCEPT THE TERMS SET FORTH ABOVE</p>

            </div>
            <div class="modal-footer">
                <a href="https://videoremixpool.com/home/" class="btn btn-success btn-lg" data-dismiss="modal"
                   id="accept-terms">ACEPTAR</a>

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

</body>
</html>