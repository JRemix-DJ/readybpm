<?php
if ( !$this->session->userdata('is_logued_in') ) {
    exit();
}
?>
<style>
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
<div class="sl-pagebody">
    <div class="sl-page-title">
        <h2><?php echo $title; ?></h2>
        <p><?php echo $description; ?></p>
    </div><div class="row">
        <div class="col-12">
            <div class="card pd-20 pd-sm-40">
                <div class="form-layout">
                    <h3 class="card-body-title">SUBIDA DE AUDIO</h3>
                    <p>
                        <strong>Paso 1:</strong> Arrastra y suelta el archivo de audio completo.
                        <br>
                        <small>El nombre del archivo debe seguir el formato: <code>Nombre Cancion - Artista - Genero - Version - 90 BPM.mp3</code></small>
                    </p>

                    <div class="row mg-t-20">
                        <div class="col-12">
                            <div id="main_audio_uploader">Subir Audio Completo</div>
                        </div>
                    </div>

                    <div id="demo-upload-section" class="mg-t-30" style="display: none;">
                        <div class="form-group">
                            <label class="ckbox">
                                <input type="checkbox" id="auto_demo_checkbox" checked>
                                <span>Generar demo automáticamente (recomendado)</span>
                            </label>
                        </div>
                        <div id="manual_demo_uploader_container" style="display: none;">
                            <p><strong>Opcional:</strong> Si lo prefieres, sube tu propio archivo de vista previa (demo).</p>
                            <div id="manual_demo_uploader">Subir Demo Manual</div>
                        </div>
                    </div>

                    <div id="product-details-form" class="mg-t-30" style="display: none;">
                        <h4 class="card-body-title">Verificar Datos del Producto</h4>
                        <div class="row mg-b-25">
                            <div class="col-lg-6"><div class="form-group"><label class="form-control-label">Nombre:</label><input class="form-control" type="text" id="form_name"></div></div>
                            <div class="col-lg-6"><div class="form-group"><label class="form-control-label">Artista:</label><input class="form-control" type="text" id="form_artist"></div></div>
                            <div class="col-lg-4"><div class="form-group"><label class="form-control-label">Género:</label><select class="form-control" id="form_gender"><?php foreach ($generos as $genero) { echo '<option value="'.$genero->id.'">'.$genero->name.'</option>'; } ?></select></div></div>
                            <div class="col-lg-4"><div class="form-group"><label class="form-control-label">Versión:</label><input class="form-control" type="text" id="form_version"></div></div>
                            <div class="col-lg-4"><div class="form-group"><label class="form-control-label">BPM:</label><input class="form-control" type="text" id="form_bpm"></div></div>
                        </div>
                        <input type="hidden" id="form_descargable">
                        <input type="hidden" id="form_demo">
                        <div class="form-layout-footer">
                            <button id="save-product-btn" class="btn btn-info mg-r-5">Guardar Producto</button>
                            <button id="cancel-product-btn" class="btn btn-secondary">Cancelar</button>
                        </div>
                    </div>

                    <div id="genre-list" style="display: none;"><?php foreach ($generos as $genero) { echo '<span data-id="'.$genero->id.'">'.$genero->name.'</span>'; } ?></div>
                </div>
            </div>
        </div>
    </div>
</div>
