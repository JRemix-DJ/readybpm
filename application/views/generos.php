<!-- Estilos para corregir el hover de los géneros -->
<style>
    .album-unit:hover figure:after {
        background-color: rgba(95, 71, 243, 0.2) !important; /* Color #5F47F3 con 20% de opacidad */
    }

    /* 2. Elimina el ícono molesto que aparece debajo del texto */
    .album-unit figure > figcaption:after {
        content: "" !important;
        display: none !important;
    }

    /* --- NUEVOS ESTILOS PARA IMÁGENES CUADRADAS --- */

    /* 3. Aseguramos que el contenedor de la imagen sea un cuadrado y oculte lo que sobre */
    .album-unit figure {
        width: 190px;
        height: 190px;
        overflow: hidden; /* Muy importante: oculta las partes de la imagen que se salen del cuadrado */
        background-color: #1a1a1a; /* Un color de fondo oscuro mientras carga la imagen */
    }

    /* 4. Hacemos que la imagen llene el contenedor sin deformarse */
    .album-unit figure img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* La propiedad clave: recorta la imagen para que encaje perfectamente */
        object-position: center; /* Asegura que la imagen esté centrada dentro del cuadrado */
    }

    .album-unit:hover figure:after {
        background-color: rgba(95, 71, 243, 0.2) !important;
    }
    .album-unit figure > figcaption:after {
        content: "" !important;
        display: none !important;
    }
    html{
        height: 100%;
    }
    body{
        min-height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0;
    }
    #ajaxArea{
        flex: 1 0 auto;
    }
</style>

<div id="ajaxArea" style="margin-top: 40px">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="album-grid-wrap style2">
                        <div class="album-grid text-uppercase clearfix">
                            <?php if (!empty($generos)) {
                                foreach ($generos as $genero) {
                                    // Determinar la ruta de la imagen
                                    $image_path = base_url() . 'images/generos/default.jpg'; // Imagen por defecto
                                    if (!empty($genero->img) && file_exists('./images/generos/' . $genero->img)) {
                                        $image_path = base_url() . 'images/generos/' . $genero->img;
                                    }
                                    ?>
                                    <a href="<?php echo base_url(); ?>genero/<?php echo $genero->id; ?>" class="album-unit">
                                        <figure>
                                            <!-- CORRECCIÓN AQUÍ: Se usa la ruta de imagen dinámica -->
                                            <img src="<?php echo $image_path; ?>" alt="<?php echo $genero->name; ?>" width="265" height="265">
                                            <figcaption>
                                                <span></span>
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
