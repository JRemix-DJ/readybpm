<div class="sl-pagebody">
    <div class="sl-page-title">
        <h5><? echo $title; ?></h5>
        <p><? echo $description; ?></p>
    </div><!-- sl-page-title -->
    <div class="top_btn">
        <a href="https://readybpm.com/admin/nuevo_genero/" class="btn btn-success">Añadir Nuevo</a>
    </div>
    <div class="card pd-20 pd-sm-40">
        <div class="form-layout">
            <?php echo form_open_multipart(base_url() . 'admin/update_genero/'); ?>
            <input type="hidden" name="id" value="<?php echo $genero->id; ?>">

            <div class="row mg-b-25">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label class="form-control-label">Nombre: <span class="tx-danger">*</span></label>
                        <input class="form-control" type="text" name="name" value="<?php echo html_escape($genero->name); ?>" required>
                    </div>
                </div><div class="col-lg-6">
                    <div class="form-group">
                        <label class="form-control-label">Cambiar Imagen (Opcional):</label>
                        <input class="form-control" type="file" name="image">
                    </div>
                    <?php if (!empty($genero->img) && file_exists('./images/generos/' . $genero->img)) : ?>
                        <div class="form-group">
                            <label class="form-control-label">Imagen Actual:</label>
                            <br>
                            <img src="<?php echo base_url('images/generos/' . $genero->img); ?>" class="img-fluid" width="100" alt="Imagen actual">
                        </div>
                    <?php endif; ?>
                </div></div><div class="form-layout-footer">
                <button class="btn btn-info mg-r-5">Actualizar Género</button>
                <a class="btn btn-secondary" href="<?php echo base_url('admin/listar_generos/'); ?>">Cancelar</a>
            </div><?php echo form_close(); ?>
            <?php if(isset($mensaje)){ ?>
                <div class="alert alert-success" role="alert"><?php echo $mensaje; ?></div>
            <?php } ?>
        </div>
    </div>
</div>
