<div class="sl-pagebody">
    <div class="sl-page-title">
        <h5><? echo $title; ?></h5>
        <p><? echo $description; ?></p>
    </div><!-- sl-page-title -->

    <div class="card pd-20 pd-sm-40">
        <div class="form-layout">

            <? echo form_open_multipart(base_url() . 'products/edit_product'); ?>
            <div class="row mg-b-25">
                <div class="col-lg-8">
                    <div class="form-group">
                        <label class="form-control-label">Nombre: <span class="tx-danger">*</span></label>
                        <input class="form-control" type="text" name="name" value="<? echo $producto->name; ?>"
                               placeholder="Ingrese Nombre del producto">
                    </div>
                </div><!-- col-4 -->

                <div class="row">
                    <div class="col-md-8 hidden">
                        <div class="form-group">
                            <label class="form-control-label">Descripción del producto: <span class="tx-danger">*</span></label>
                            <textarea name="description" id="" cols="30" rows="14"
                                      class="form-control"><? echo $producto->description; ?></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="paginationnumber" value="<? echo $_GET['paginationnumber']; ?>">
                    <div class="col-md-4">
                        <div class="form-group" style="margin-left: 15px;>
                            <label class="form-control-label">BPM: <span class="tx-danger">*</span></label>
                            <input type="text" class="form-control" name="bpm" placeholder="BPM para el producto"
                                   value="<? echo $producto->bpm; ?>" style="margin-top: 8px">
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-control-label">Género: <span class="tx-danger">*</span></label>
                            <select name="gender_id" id="gender_id" class="form-control">
                                <option>Seleccione una Opción</option>
                                <? foreach($generos as $genero){ ?>
                                <option value="<? echo $genero->id; ?>" <? if ( $genero->id == $producto->gender_id ) {
                                    echo "selected";
                                } ?>><? echo $genero->name; ?></option>
                                <? } ?>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <? echo form_hidden('user_id' ,$producto->owner_id);?>
            <? echo form_hidden('product_id' ,$producto->id);?>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Descargable: <span class="tx-danger">*</span></label>
                        <input type="file" name="descargable" class="form-control">
                        <div class="row">
                            <div class="col-md-4">
                                Subido Previamente
                            </div>
                            <? if($producto->product_type_id == 3){ ?>
                            <video class="col-md-8"
                                   src="<? echo base_url() . 'assets/products/descargables/' . $producto->descargable; ?>"
                                   controls></video>
                            <? }else{ ?>
                            <audio class="col-md-8"
                                   src="<? echo base_url() . 'assets/products/descargables/' . $producto->descargable; ?>"
                                   controls></audio>
                            <? } ?>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Demo: <span class="tx-danger">*</span></label>
                        <input type="file" name="demo" class="form-control">
                        <div class="row">
                            <div class="col-md-4">
                                Subido Previamente
                            </div>
                            <? if($producto->product_type_id == 3){ ?>
                            <video class="col-md-8"
                                   src="<? echo base_url() . 'assets/products/demos/' . $producto->demo; ?>"
                                   controls></video>
                            <? }else{ ?>
                            <audio class="col-md-8"
                                   src="<? echo base_url() . 'assets/products/demos/' . $producto->demo; ?>"
                                   controls></audio>
                            <? } ?>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-layout-footer">
                <button class="btn btn-info mg-r-5">Actualizar</button>
                <? $aprobacion_param = ($producto->approved == 0) ? "?aprobacion=1" : "";

                // 2. Determinar la URL base según el tipo de producto
                $cancel_base_url = '';
                if ($producto->product_type_id == 3) { // El ID 3 es para videos
                    $cancel_base_url = site_url('admin/listar_videos/');
                } else { // Para cualquier otro tipo, usamos la lista de audios/productos
                    $cancel_base_url = site_url('admin/listar_productos/');
                }?>
                <a class="btn btn-secondary" href="<?php echo $cancel_base_url . $aprobacion_param; ?>">Cancelar</a>
            </div><!-- form-layout-footer -->

            <? echo form_close(); ?>
            <?php echo validation_errors(); ?>
            <? if(isset($mensaje)){ ?>
            <div class="alert alert-success" role="alert"><? echo $mensaje; ?></div>
            <? } ?>
        </div><!-- form-layout -->
    </div><!-- card -->
</div><!-- sl-pagebody -->