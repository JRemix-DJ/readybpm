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
            var formTemplate = `
        <div class="card pd-20 pd-sm-40 mg-t-20 product-form-instance">
            <h5 class="card-body-title"></h5>
            <div class="row mg-b-25">
                <div class="col-lg-6"><div class="form-group"><label class="form-control-label">Nombre:</label><input class="form-control" type="text" name="form_name"></div></div>
                <div class="col-lg-6"><div class="form-group"><label class="form-control-label">Artista:</label><input class="form-control" type="text" name="form_artist"></div></div>
                <div class="col-lg-4"><div class="form-group"><label class="form-control-label">Género:</label><select class="form-control" name="form_gender"></select></div></div>
                <div class="col-lg-4"><div class="form-group"><label class="form-control-label">Versión:</label><input class="form-control" type="text" name="form_version"></div></div>
                <div class="col-lg-4"><div class="form-group"><label class="form-control-label">BPM:</label><input class="form-control" type="text" name="form_bpm"></div></div>
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
                        var data;
                        if (typeof response === 'string' && response.trim() !== '') {
                            data = JSON.parse(response);
                        } else if (typeof response === 'object' && response !== null) {
                            data = response;
                        } else {
                            pd.statusbar.html("<span style='color:red;'>Error: Respuesta vacía del servidor.</span>");
                            console.error("Respuesta vacía o inválida del servidor:", response);
                            return;
                        }

                        $.each(data, function(index, fileInfo) {
                            if (fileInfo.success) {
                                var $newForm = $(formTemplate);
                                var originalFilename = fileInfo.original_name;
                                var filename = originalFilename.replace(/\.[^/.]+$/, "");
                                var parts = filename.split(' - ');

                                if (parts.length !== 5) {
                                    $newForm.find('.card-body-title').css('color', 'red').text("Error de formato: " + originalFilename);
                                } else {
                                    var nombre = parts[0].trim();
                                    var artista = parts[1].trim();
                                    var generoNombre = parts[2].trim().toLowerCase();
                                    var version = parts[3].trim();
                                    var bpm = parts[4].replace(/\D/g, '').trim();
                                    var generoId = null;
                                    $('#genre-list span').each(function() {
                                        if ($(this).text().trim().toLowerCase() === generoNombre) {
                                            generoId = $(this).data('id');
                                            return false;
                                        }
                                    });

                                    $newForm.find('.card-body-title').text(originalFilename);
                                    $newForm.find('[name="form_name"]').val(nombre);
                                    $newForm.find('[name="form_artist"]').val(artista);
                                    $newForm.find('[name="form_version"]').val(version);
                                    $newForm.find('[name="form_bpm"]').val(bpm);
                                    $newForm.find('[name="form_descargable"]').val(fileInfo.descargable);
                                    $newForm.find('[name="form_demo"]').val(fileInfo.demo);
                                    var $genreSelect = $newForm.find('[name="form_gender"]');
                                    $genreSelect.html(genreOptions);

                                    if (generoId) {
                                        $genreSelect.val(generoId);
                                    } else {
                                        $newForm.find('.card-body-title').append(' <span style="color:orange;">(Género no encontrado)</span>');
                                    }
                                }
                                $('#product-forms-container').append($newForm);
                            } else {
                                $('#product-forms-container').append(`<div class="alert alert-danger">Error con ${fileInfo.original_name || 'un archivo'}: ${fileInfo.error}</div>`);
                            }
                        });

                        if ($('#product-forms-container').children().length > 0) {
                            $('#save-all-container').slideDown();
                        }

                    } catch (e) {
                        pd.statusbar.html("<span style='color:red;'>Error al procesar respuesta.</span>");
                        console.error("Error al procesar JSON:", e);
                        console.error("Respuesta recibida:", response);
                    }
                },
                onError: function(files, status, errMsg, pd) {
                    pd.statusbar.html("<span style='color:red;'>Error de subida: " + errMsg + "</span>");
                }
            });

            $('#save-all-btn').on('click', function() {
                var btn = $(this);
                var productsData = [];
                $('.product-form-instance').each(function() {
                    var $form = $(this);
                    var product = {
                        name: $form.find('[name="form_name"]').val(),
                        artist: $form.find('[name="form_artist"]').val(),
                        gender_id: $form.find('[name="form_gender"]').val(),
                        version: $form.find('[name="form_version"]').val(),
                        bpm: $form.find('[name="form_bpm"]').val(),
                        descargable: $form.find('[name="form_descargable"]').val(),
                        demo: $form.find('[name="form_demo"]').val()
                    };
                    if (product.name && product.artist && product.gender_id) {
                        productsData.push(product);
                    }
                });

                if (productsData.length === 0) {
                    alert("No hay productos válidos para guardar.");
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