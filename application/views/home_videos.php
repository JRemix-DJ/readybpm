<style>
    @media (max-width: 768px) {
        /* Limitamos la altura máxima del slider en móviles para que no sea tan grande */
        .custom-slider,
        .custom-slider .flexslider {
            max-height: 250px; /* Puedes ajustar este valor, ej. 200px */
            overflow: hidden;  /* Oculta cualquier parte de la imagen que se desborde */
        }

        /* Hacemos que la imagen dentro del slider ocupe todo el espacio disponible
           sin deformarse, recortándose si es necesario. */
        .custom-slider .slides img {
            width: 100%;
            object-fit: cover; /* La propiedad mágica para que la imagen se ajuste bien */
        }
        .custom-slider{
            margin-top: 55px;
            height: 100%;
        }
        .xv_slide{
            width: auto;
            max-width: 500px;
            object-fit: cover;
            object-position: center;
        }
        .user-logged-in .custom-slider {
            margin-top: 130px;
        }
    }
</style>
<div id="ajaxArea">
    <!--=================================
    Main Slider
    =================================-->
    <section class="custom-slider">
        <div id="home-slider" class="xv_slider flexslider">
            <ul class="slides">
                <?
                if ( $banners != null ) {
                    foreach ( $banners as $banner ) {
                        ?>
                        <li class="xv_slide" data-slidebg="url('')">
                            <a href="<? echo $banner->url; ?>">
                                <img src="http://localhost/readybpm/images/banners/<? echo $banner->image; ?>" alt="">
                            </a>
                        </li>
                        <?
                    }
                }
                ?>
            </ul>
        </div>
    </section>
    <!--=================================================
    TOP songs /Trendding This week / Featured Songs
    ==================================================-->
    <section id="cuerpo">
        <? $this->load->view('search_box'); ?>

        <? if ( isset($_GET['s']) ) { ?>
            <div class="container search-container">
                <div class="search-filters text-uppercase text-bold">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-5">
                            <div class="searched-for" data-before="Results For : ">
                                <span class="s-keyword">Hip-Hop</span>
                            </div>
                        </div>

                    </div>
                </div><!--row-->
            </div><!--container-->
        <? } ?>
        <div class="container">
            <? $this->load->view('table_videos'); ?>
            <?php if ( isset($links) ) { ?>
                <?php echo $links ?>
            <?php } ?>
        </div>
    </section>
</div>
