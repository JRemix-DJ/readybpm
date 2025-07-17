<!-- Estilos para corregir el hover de los géneros -->
<style>
    /* 1. Cambia el color del fondo al pasar el puntero */
    .album-unit:hover figure:after {
        background-color: rgba(95, 71, 243, 0.2) !important; /* Color #5F47F3 con 20% de opacidad */
    }

    /* 2. Elimina el ícono molesto que aparece debajo del texto */
    .album-unit figure > figcaption:after {
        content: "" !important;
        display: none !important;
    }
</style>

<div id="ajaxArea">
    <section class="album-header">
        <figure class="album-cover-wrap">
            <div class="album-cover_overlay"></div>
        </figure>
        <div class="container">
            <div class="cover-content">
                <hr>
                <div class="clearfix text-uppercase">
                    <h1 style="padding-top: 30px">GÉNEROS</h1>
                    <cite class="album-author mb-20">ReadyBPM.COM</cite>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="album-grid-wrap style2">
                        <div class="album-grid text-uppercase clearfix">
                            <?php if (!empty($generos)) {
                                foreach ($generos as $genero) { ?>
                                    <a href="<?php echo base_url(); ?>genero/<?php echo $genero->id; ?>" class="album-unit">
                                        <figure>
                                            <img src="<?php echo base_url(); ?>images/generos/default.jpg" alt="<?php echo $genero->name; ?>" width="265" height="265">
                                            <figcaption>
                                                <span></span>
                                                <h3><?php echo $genero->name; ?></h3>
                                            </figcaption>
                                        </figure>
                                    </a>
                                    <?php
                                } // Fin del foreach
                            } // Fin del if
                            ?>
                        </div><!--album-grid-->
                    </div><!--album-grid-wrap-->
                </div><!--column-->
            </div><!--row-->
        </div><!--container-->
    </section>
</div>
