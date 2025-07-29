<style>
    /* --- AÑADE ESTA CLASE AQUÍ --- */
    .force-hide {
        display: none !important;
    }

    .ajax-file-upload {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        line-height: 20px;
        height: 25px;
        margin: 0 10px 10px 0;
        display: inline-block;
        text-decoration: none;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        padding: 6px 10px 4px 10px;
        color: #fff;
        background: #5F47F3;
        border: 0;
        -moz-box-shadow: 0 2px 0 0 #3624a8;
        -webkit-box-shadow: 0 2px 0 0 #3624a8;
        box-shadow: 0 2px 0 0 #3624a8;
        vertical-align: middle
    }

    .ajax-file-upload:hover {
        background: #5F47F3;
        -moz-box-shadow: 0 2px 0 0 #3624a8;
        -webkit-box-shadow: 0 2px 0 0 #3624a8;
        box-shadow: 0 2px 0 0 #3624a8
    }
</style>
<?php
if (!$this->session->userdata('is_logued_in')) {
    exit();
}
?>
<div class="sl-pagebody">
    <div class="sl-page-title">
        <h2><?php echo $title; ?></h2>
        <p><?php echo $description; ?></p>
    </div><div class="row">
        <div class="col-12">
            <div class="card pd-20 pd-sm-40">
                <div class="form-layout">
                    <h3 class="card-body-title">SUBIDA DE AUDIO MÚLTIPLE</h3>
                    <p>
                        <strong>Paso 1:</strong> Arrastra y suelta una o varias canciones a la vez.
                        <br>
                        <small>Cada archivo debe seguir el formato: <code>Nombre Cancion - Artista - Genero - Version - 90 BPM.mp3</code></small>
                    </p>

                    <div class="row mg-t-20">
                        <div class="col-12">
                            <div id="multiple_audio_uploader">Subir Audios</div>
                        </div>
                    </div>

                    <div id="product-forms-container" class="mg-t-30">
                    </div>

                    <div id="save-all-container" class="form-layout-footer mg-t-30" style="display: none;">
                        <button id="save-all-btn" class="btn btn-info mg-r-5">Guardar Todos los Productos</button>
                        <button id="cancel-all-btn" class="btn btn-secondary">Cancelar Todo</button>
                    </div>

                    <div id="genre-list" style="display: none;">
                        <?php
                        // --- INICIO DE LA CORRECCIÓN ---
                        // Verificamos que $generos sea una lista válida antes de recorrerla
                        if (is_array($generos) || is_object($generos)) {
                            foreach ($generos as $genero) {
                                echo '<span data-id="' . $genero->id . '">' . $genero->name . '</span>';
                            }
                        }
                        // --- FIN DE LA CORRECCIÓN ---
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

