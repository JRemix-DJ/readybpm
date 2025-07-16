<?php
if (!$this->session->userdata('is_logued_in')) {
    exit();
}
?>
<div class="sl-pagebody">
    <div class="sl-page-title">
        <h2><?php echo $title; ?></h2>
        <p><?php echo $description; ?></p>
    </div><!-- sl-page-title -->
    <div class="row">
        <div class="col-12">
            <div class="card pd-20 pd-sm-40">
                <div class="form-layout">
                    <h3 class="card-body-title">SUBIDA DE AUDIO CON VERIFICACIÓN</h3>
                    <p>
                        <strong>Paso 1:</strong> Arrastra y suelta un archivo de audio en el cuadro de abajo.
                        <br>
                        <small>El nombre del archivo debe seguir el formato: <code>Nombre Cancion - Artista - Genero - Version - 90 BPM.mp3</code></small>
                    </p>
                    <p>
                        <strong>Paso 2:</strong> El sistema subirá el archivo, creará la vista previa y rellenará el formulario. Verifica que los datos sean correctos.
                    </p>
                    <p>
                        <strong>Paso 3:</strong> Presiona el botón "Guardar Producto" para registrarlo en la base de datos.
                    </p>

                    <!-- 1. Contenedor para el cargador de archivos -->
                    <div class="row mg-t-20">
                        <div class="col-12">
                            <div id="audio_uploader">Subir Audio</div>
                        </div>
                    </div>

                    <!-- 2. Formulario de Verificación (inicialmente oculto) -->
                    <div id="product-details-form" class="mg-t-30" style="display: none;">
                        <h4 class="card-body-title">Verificar Datos del Producto</h4>

                        <div class="row mg-b-25">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label class="form-control-label">Nombre:</label>
                                    <input class="form-control" type="text" id="form_name" name="name">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label class="form-control-label">Artista:</label>
                                    <input class="form-control" type="text" id="form_artist" name="artist">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label class="form-control-label">Género:</label>
                                    <select class="form-control" id="form_gender" name="gender_id">
                                        <?php foreach ($generos as $genero) { ?>
                                            <option value="<?php echo $genero->id; ?>"><?php echo $genero->name; ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label class="form-control-label">Versión:</label>
                                    <input class="form-control" type="text" id="form_version" name="version">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label class="form-control-label">BPM:</label>
                                    <input class="form-control" type="text" id="form_bpm" name="bpm">
                                </div>
                            </div>
                        </div>

                        <!-- Campos ocultos para enviar al backend -->
                        <input type="hidden" id="form_descargable">
                        <input type="hidden" id="form_demo">

                        <div class="form-layout-footer">
                            <button id="save-product-btn" class="btn btn-info mg-r-5">Guardar Producto</button>
                            <button id="cancel-product-btn" class="btn btn-secondary">Cancelar</button>
                        </div>
                    </div>

                    <!-- Lista de géneros (oculta), la usaremos con JavaScript -->
                    <div id="genre-list" style="display: none;">
                        <?php foreach ($generos as $genero) { ?>
                            <span data-id="<?php echo $genero->id; ?>"><?php echo $genero->name; ?></span>
                        <?php } ?>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
