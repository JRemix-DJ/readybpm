<table class="table clearfix canciones">
    <tbody>
    <?php
    $i = 0;
    if (!empty($products)):
        foreach ($products as $producto):
            $i++;
            // Buscamos la información completa del género para este producto
            $key = array_search($producto->gender_id, array_column($generos, 'id'));
            $genero_info = ($key !== false) ? $generos[$key] : null;
            ?>
            <tr id="singleVideoPlayer-<?php echo $i; ?>" data-product="<?php echo $producto->id; ?>"
                class="song-unit singleVideoPlayer player-<?php echo $producto->id; ?>" data-before="<?php echo $i; ?>">

                <td class="text-center align-middle">
                    <?php if ($genero_info && !empty($genero_info->img)): ?>
                        <img src="<?php echo base_url('images/generos/' . $genero_info->img); ?>"
                             alt="<?php echo html_escape($genero_info->name); ?>"
                             style="width: 60px; height: 60px; border-radius: 5px; object-fit: cover;">
                    <?php else: ?>
                        <img src="<?php echo base_url('images/generos/default.jpg'); ?>"
                             alt="Default genre image"
                             style="width: 60px; height: 60px; border-radius: 5px;">
                    <?php endif; ?>
                </td>

                <td class="song-title jp-title align-middle">
                    <em><?php echo html_escape($producto->name); ?></em>
                    <span class="intro"><?php if ($producto->version != null) { echo html_escape($producto->version); } ?></span>
                </td>

                <td class="song-bpm align-middle"><?php echo $producto->bpm; ?></td>

                <td class="align-middle">
                    <?php if ($genero_info): ?>
                        <a href="<?php echo base_url('genero/' . $genero_info->id); ?>">
                            <?php echo html_escape($genero_info->name); ?>
                        </a>
                    <?php else: ?>
                        <span>Unknown</span>
                    <?php endif; ?>
                </td>

                <td class="align-middle">
                    <div class="thumb_container video-popup-trigger" style="cursor: pointer;"
                         data-video-src="<?php echo base_url('assets/products/demos/' . $producto->demo); ?>"
                         data-video-title="<?php echo html_escape($producto->name); ?>">
                        <div class="new-ver-video">
                            <img src="<?php echo base_url('/images/television.png'); ?>" alt="" class="video_thumb">
                        </div>
                    </div>
                </td>

                <?php
                $user_file_info = null;
                if (isset($user_files) && !empty($user_files)) {
                    $file_key = array_search($producto->id, array_column($user_files, 'product_id'));
                    if ($file_key !== false) {
                        $user_file_info = $user_files[$file_key];
                    }
                }
                ?>
                <?php if($producto->gender_id == 45): ?>
                    <td class="align-middle">$<?php echo $producto->price; ?></td>
                <?php elseif(MONEY_PAYMENTS && $this->session->userdata('tokens_video') == 0 && $esuserfile == 0): ?>
                    <td class="tcenter align-middle">
                        <button class="song-btn addToCart btn btn-orange" data-id="<?php echo $producto->id; ?>">
                            $<?php echo $producto->price; ?>
                        </button>
                        <button class="btn btn-green anadido" style="display:none;"><i class="fa fa-check"></i>Añadido</button>
                    </td>
                <?php else: ?>
                    <td class="tcenter">
                        <button class="song-btn downloadButton btn btn-orange" style="background-color: #0ba1b5; border-radius: 50px;" data-id="<?php echo $producto->id; ?>">Download</button>
                    </td>
                <?php endif; ?>
            </tr>
        <?php
        endforeach;
    else:
        echo '<tr><td colspan="7">We have not found any products.</td></tr>'; // colspan ahora es 7
    endif;
    ?>
    </tbody>
</table>

<style>
    .canciones tbody tr.song-unit {
        cursor: pointer;
        /* Define las propiedades que van a animarse (transformación y color) y la duración */
        transition: transform 0.2s ease-in-out,
        background-color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out;
    }

    /* 2. Aplica los efectos cuando el mouse está sobre la fila */
    .canciones tbody tr.song-unit:hover {
        /* Efecto de "levantamiento" para simular el zoom */
        transform: translateY(-4px);

        /* Ligero cambio de color de fondo */
        background-color: #ffffff;

        /* Sombra suave para realzar el efecto de levantamiento */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    .video-popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.85);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .video-popup-overlay.visible {
        opacity: 1;
        visibility: visible;
    }

    .video-popup-container {
        background-color: #272727;
        border: 1px solid #444;
        border-radius: 10px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
        width: 90%;
        max-width: 800px;
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }

    .video-popup-overlay.visible .video-popup-container {
        transform: scale(1);
    }

    .video-popup-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid #444;
    }

    #video-popup-title {
        color: #fff;
        font-size: 1.1em;
        margin: 0;
    }

    .video-popup-close {
        background: none;
        border: none;
        color: #fff;
        font-size: 2em;
        font-weight: bold;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }

    .video-popup-body {
        padding: 5px; /* Un pequeño padding para el reproductor */
    }

    #video-popup-player {
        display: block; /* Elimina espacio extra debajo del video */
        width: 100%;
        border-radius: 0 0 8px 8px; /* Redondea las esquinas inferiores */
    }
</style>

<div id="video-popup-overlay" class="video-popup-overlay">
    <div id="video-popup-container" class="video-popup-container">
        <div class="video-popup-header">
            <h5 id="video-popup-title">Video Preview</h5>
            <button id="video-popup-close" class="video-popup-close">&times;</button>
        </div>
        <div class="video-popup-body">
            <video id="video-popup-player" width="100%" controls controlsList="nodownload"></video>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Seleccionar todos los elementos necesarios
        const triggers = document.querySelectorAll('.video-popup-trigger');
        const overlay = document.getElementById('video-popup-overlay');
        const closeBtn = document.getElementById('video-popup-close');
        const videoPlayer = document.getElementById('video-popup-player');
        const videoTitle = document.getElementById('video-popup-title');

        // Función para abrir el popup
        function openPopup(e) {
            // 'this' se refiere al div clickeado
            const videoSrc = this.dataset.videoSrc;
            const title = this.dataset.videoTitle;

            if (videoSrc) {
                videoTitle.textContent = title;
                videoPlayer.src = videoSrc;
                overlay.classList.add('visible');
                videoPlayer.play();
            }
        }

        // Función para cerrar el popup
        function closePopup() {
            overlay.classList.remove('visible');
            videoPlayer.pause();
            videoPlayer.src = ''; // Detener la descarga del video
        }

        // Asignar los eventos
        triggers.forEach(trigger => trigger.addEventListener('click', openPopup));
        closeBtn.addEventListener('click', closePopup);

        // Opcional: Cerrar el popup al hacer clic en el fondo oscuro
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closePopup();
            }
        });
    });
</script>