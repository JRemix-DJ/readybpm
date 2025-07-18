<div class="sl-pagebody">
    <div class="sl-page-title">
        <h5><?php echo $title; ?></h5>
        <p><?php echo $description; ?></p>
    </div><!-- sl-page-title -->

    <div class="card pd-20 pd-sm-40">
        <div class="form-layout">
            <?php echo form_open_multipart(base_url() . 'admin/add_genero/'); ?>
            <div class="row mg-b-25">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label class="form-control-label">Nombre: <span class="tx-danger">*</span></label>
                        <input class="form-control" type="text" name="name" placeholder="Ingrese Nombre del Género" required>
                    </div>
                </div><!-- col-6 -->
                <div class="col-lg-6">
                    <div class="form-group">
                        <label class="form-control-label">Imagen del Género:</label>
                        <input class="form-control" type="file" name="image">
                    </div>
                </div><!-- col-6 -->
            </div><!-- row -->
            <div class="form-layout-footer">
                <button class="btn btn-info mg-r-5">Añadir Género</button>
                <a class="btn btn-secondary" href="<?php echo base_url('admin/listar_generos/'); ?>">Cancelar</a>
            </div><!-- form-layout-footer -->

            <?php echo form_close(); ?>
            <?php echo validation_errors(); ?>
            <?php if(isset($mensaje)){ ?>
                <div class="alert alert-success" role="alert"><?php echo $mensaje; ?></div>
            <?php } ?>
        </div><!-- form-layout -->
    </div><!-- card -->
</div><!-- sl-pagebody -->
