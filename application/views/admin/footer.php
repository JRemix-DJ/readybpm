<footer class="sl-footer">
    <div class="footer-left">
        <div class="mg-b-2"><strong>&copy; Copyright <?php echo date('Y'); ?> ReadyBPM</strong></div>
    </div>
</footer>
</div><script src="<?php echo base_url(); ?>admin_assets/lib/jquery/jquery.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/popper.js/popper.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/bootstrap/bootstrap.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/jquery-ui/jquery-ui.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/jquery.sparkline.bower/jquery.sparkline.min.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/highlightjs/highlight.pack.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/d3/d3.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/rickshaw/rickshaw.min.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/chart.js/Chart.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/Flot/jquery.flot.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/Flot/jquery.flot.pie.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/Flot/jquery.flot.resize.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/flot-spline/jquery.flot.spline.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/datatables/jquery.dataTables.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/datatables-responsive/dataTables.responsive.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/select2/js/select2.min.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/js/starlight.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/lib/spectrum/spectrum.js"></script>
<script src="<?php echo base_url(); ?>js/jplayer/jquery.jplayer.min.js"></script>
<script src="<?php echo base_url(); ?>js/jplayer/jplayer.playlist.min.js"></script>
<script src="<?php echo base_url(); ?>admin_assets/js/ResizeSensor.js"></script>

<?php if(isset($aditional_scripts)){ echo $aditional_scripts; } ?>

<?php if(isset($scripts)){
    foreach($scripts as $script){
        echo '<script src="'.$script.'" type="text/javascript"></script>';
    }
} ?>

<?php if (isset($uploader) && $uploader) { ?>
    <script>
        $(document).ready(function() {

            // --- PLANTILLA DE FORMULARIO ACTUALIZADA ---
            var formTemplate = `
        <div class="card pd-20 pd-sm-40 mg-t-20 product-form-instance">
            <button type="button" class="btn btn-danger btn-sm remove-product-btn" title="Eliminar de la cola" style="position: absolute; top: 15px; right: 15px; z-index: 10;">&times;</button>
            <h5 class="card-body-title"></h5>
            <div class="row mg-b-25">
                <div class="col-lg-6"><div class="form-group"><label class="form-control-label">Nombre:</label><input class="form-control" type="text" name="form_name"></div></div>
                <div class="col-lg-4"><div class="form-group"><label class="form-control-label">Género:</label><select class="form-control" name="form_gender"></select></div></div>
                <div class="col-lg-4"><div class="form-group"><label class="form-control-label">BPM:</label><input class="form-control" type="text" name="form_bpm"></div></div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="ckbox">
                            <input type="checkbox" class="auto-demo-cb" checked>
                            <span>Generar Demo automáticamente</span>
                        </label>
                    </div>
                    <div class="manual-demo-container" style="display: none;">
                        </div>
                </div>
            </div>

            <input type="hidden" name="form_descargable">
            <input type="hidden" name="form_demo">
        </div>
    `;

            var genreOptions = '';
            $('#genre-list span').each(function() {
                genreOptions += `<option value="${$(this).data('id')}">${$(this).text()}</option>`;
            });

            $("#multiple_audio_uploader").uploadFile({
                url: "<?php echo site_url('admin/subir_multiples/'); ?>",
                fileName: "files",
                multiple: true,
                autoSubmit: true,
                dragDropStr: "<span><b>Arrastra y Suelta una o más canciones</b></span>",
                onSuccess: function(files, response, xhr, pd) {
                    try {
                        var data = (typeof response === 'string' && response.trim() !== '') ? JSON.parse(response) : response;
                        if (!data) return;

                        $.each(data, function(index, fileInfo) {
                            if (fileInfo.success) {
                                // 1. Crea la nueva instancia del formulario
                                var $newForm = $(formTemplate);
                                var originalFilename = fileInfo.original_name;
                                var filename = originalFilename.replace(/\.[^/.]+$/, "");

                                // 2. Llena el menú de géneros INMEDIATAMENTE
                                var $genreSelect = $newForm.find('[name="form_gender"]');
                                $genreSelect.html(genreOptions);

                                // 3. Asigna los valores que no dependen del nombre del archivo
                                $newForm.find('[name="form_descargable"]').val(fileInfo.descargable);
                                $newForm.find('[name="form_demo"]').val(fileInfo.demo);

                                // 4. Ahora, intenta procesar el nombre del archivo
                                var parts = filename.split(' - ');
                                if (parts.length !== 5) {
                                    // Si falla, solo muestra el error. Los campos quedarán vacíos para llenado manual.
                                    $newForm.find('.card-body-title').css('color', 'red').text("Error de formato: " + originalFilename);
                                } else {
                                    // Si tiene éxito, autocompleta los campos
                                    var nombre = parts[0].trim(), artista = parts[1].trim(), generoNombre = parts[2].trim().toLowerCase(), version = parts[3].trim(), bpm = parts[4].replace(/\D/g, '').trim();
                                    var generoId = null;
                                    $('#genre-list span').each(function() {
                                        if ($(this).text().trim().toLowerCase() === generoNombre) {
                                            generoId = $(this).data('id');
                                            return false;
                                        }
                                    });

                                    $newForm.find('.card-body-title').text(originalFilename);
                                    $newForm.find('[name="form_name"]').val(nombre + " - " + artista + " - " + version);
                                    $newForm.find('[name="form_artist"]').val(artista);
                                    $newForm.find('[name="form_version"]').val(version);
                                    $newForm.find('[name="form_bpm"]').val(bpm);

                                    if (generoId) {
                                        $genreSelect.val(generoId);
                                    } else {
                                        $newForm.find('.card-body-title').append(' <span style="color:orange;">(Género no encontrado)</span>');
                                    }
                                }

                                // 5. Agrega el formulario (ya sea vacío o autocompletado) al contenedor
                                $('#product-forms-container').append($newForm);

                            } else {
                                $('#product-forms-container').append(`<div class="alert alert-danger">Error con ${fileInfo.original_name || 'un archivo'}: ${fileInfo.error}</div>`);
                            }
                        });

                        if ($('#product-forms-container').children().length > 0) {
                            $('#save-all-container').slideDown();
                        }
                    } catch (e) { console.error("Error al procesar respuesta:", e); }
                }
            });

            $('#product-forms-container').on('click', '.remove-product-btn', function() {
                $(this).closest('.product-form-instance').fadeOut(300, function() {
                    $(this).remove();
                    if ($('#product-forms-container').children().length === 0) {
                        $('#save-all-container').slideUp();
                    }
                });
            });

            $('#product-forms-container').on('change', '.auto-demo-cb', function() {
                var $checkbox = $(this);

                if (!$checkbox.is(':checked')) {
                    var $form = $checkbox.closest('.product-form-instance');
                    var $demoContainer = $form.find('.manual-demo-container');
                    var $demoInput = $form.find('input[name="form_demo"]');

                    $checkbox.closest('.form-group').hide();

                    $demoContainer.show();
                    $demoInput.val('');

                    if (!$demoContainer.data('uploadFile')) {
                        var manualUploader = $demoContainer.uploadFile({
                            url: "<?php echo site_url('admin/subir/'); ?>",
                            fileName: "files",
                            multiple: false,
                            autoSubmit: true,
                            dragDropStr: "<span><b>Arrastra el archivo DEMO aquí</b></span>",
                            dynamicFormData: function() { return { action: 'process_demo_file' }; },
                            onSuccess: function(files, response, xhr, pd) {
                                try {
                                    var data = JSON.parse(response);
                                    if (data.success) {
                                        $demoInput.val(data.filename);
                                        pd.statusbar.append("<span style='color:green; margin-left:10px;'>¡Demo subido!</span>");
                                    } else {
                                        pd.statusbar.html("<span style='color:red;'>" + (data.error || 'Error') + "</span>");
                                    }
                                } catch (e) { pd.statusbar.html("<span style='color:red;'>Error de servidor.</span>"); }
                            }
                        });
                        $demoContainer.data('uploadFile', manualUploader);
                    }
                }
            });

            $('#save-all-btn').on('click', function() {
                var btn = $(this);
                var productsData = [];
                $('.product-form-instance').each(function() {
                    var $form = $(this);
                    // Validar que el demo manual haya terminado si fue seleccionado
                    if (!$form.find('.auto-demo-cb').is(':checked') && $form.find('input[name="form_demo"]').val() === '') {
                        alert('Por favor, espera a que termine de subir el demo manual o súbelo para el archivo: ' + $form.find('.card-body-title').text());
                        productsData = []; // Vaciar el array para detener el proceso
                        return false; // Salir del bucle .each
                    }
                    var product = {
                        name: $form.find('[name="form_name"]').val(),
                        gender_id: $form.find('[name="form_gender"]').val(),
                        bpm: $form.find('[name="form_bpm"]').val(),
                        descargable: $form.find('[name="form_descargable"]').val(),
                        demo: $form.find('[name="form_demo"]').val()
                    };
                    if (product.name && product.gender_id) {
                        productsData.push(product);
                    }
                });

                if (productsData.length === 0) {
                    if (btn.text() !== 'Guardando...') alert("No hay productos válidos para guardar.");
                    return;
                }

                btn.prop('disabled', true).text('Guardando...');
                $.ajax({
                    url: "<?php echo site_url('admin/guardar_multiples/'); ?>",
                    type: "POST",
                    data: { products: JSON.stringify(productsData) }
                }).done(function(response){
                    if(response === 'true'){
                        alert('¡' + productsData.length + ' productos guardados con éxito!');
                        location.reload();
                    } else {
                        alert('Ocurrió un error al guardar los productos en la base de datos.');
                    }
                }).fail(function(){
                    alert('Error de conexión al guardar.');
                }).always(function(){
                    btn.prop('disabled', false).text('Guardar Todos los Productos');
                });
            });

            $('#cancel-all-btn').on('click', function() {
                location.reload();
            });
        });
    </script>
<?php } ?>

<script type="text/javascript">
    $('#tipo').on('change',function () {
        if ($(this).val() == 2) {
            $('#pagominimo').css({'display': 'block'});
        } else {
            $('#pagominimo').css({'display': 'none'});
        }
    });
</script>