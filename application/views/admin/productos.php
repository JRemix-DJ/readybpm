<? $role = $this->session->userdata('role'); ?>
<div class="sl-pagebody">
    <div class="sl-page-title">
        <h5><? echo $title; ?></h5>
        <p><? echo $description; ?></p>
    </div><!-- sl-page-title -->
    <div class="top_btn">
        <a href="https://readybpm.com/admin/nuevo_producto/" class="btn btn-success">
            Añadir Nuevo
        </a>
    </div>
    <div class="card pd-20 pd-sm-40">
        <div class="table-wrapper">
            <div class="row">
                <div class="col-md-4 form-group">
                    <label for="">Generos</label>
                    <select name="genero-productos" id="genero-productos" class="form-control">
                        <option value="">Selecciona una opción</option>
                        <? foreach ($generos as $genero) { ?>
                            <option value="<? echo $genero->id; ?>" <? if ( isset($_GET['genero_filter']) ) {
                                if ( $_GET['genero_filter'] == $genero->id ) { ?> selected <? }
                            } ?>><? echo $genero->name; ?></option>
                        <? } ?>
                    </select>
                </div>
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <form action="<? echo base_url('admin/listar_productos/'); ?>">
                        <? if ( isset($_GET['aprobacion']) ) { ?>
                            <input type="hidden" name="aprobacion" value="1">
                        <? } ?>
                        <div class="form-grup">
                            <label for="">Buscar</label>
                            <input type="text" name="search" class="form-control" placeholder="Buscar..."
                                   value="<? if ( isset($_GET['search']) ) {
                                       echo $_GET['search'];
                                   } ?>">
                        </div>
                    </form>
                </div>
            </div>
            <? if ( isset($mensaje) ) { ?>
                <div class="alert alert-danger" role="alert"><? echo $mensaje; ?></div>
            <? } ?>
            <table id="datatable1" class="table display wrap text-center">
                <thead>
                <tr>
                    <th>Fecha Aprobación</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Género</th>
                    <th>BPM</th>
                    <th>Artista</th>
                    <th>Version</th>
                    <th>Editor</th>
                    <th>Escuchar</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                <? if ( isset($products) ) { ?>
                    <? if ( $products ) { ?>
                        <? $i = 0;
                        foreach ($products as $producto) {
                            $i++;
                            ?>
                            <tr class="audio_product" id="producto<?php echo $i; ?>">
                                <td class="align-middle">
                                    <?php
                                    // Si la fecha no es nula, la formateamos. Si no, mostramos "Pendiente".
                                    if ($producto->time_approved) {
                                        echo date_format(date_create($producto->time_approved), 'm/d/Y');
                                    } else {
                                        echo 'Pendiente';
                                    }
                                    ?>
                                </td>
                                <td class="align-middle" style="max-width: 300px"><?php echo $producto->name; ?></td>
                                <td class="align-middle">$<?php echo $producto->price; ?></td>
                                <td class="align-middle">
                                    <?php
                                    // --- CORRECCIÓN 1: Verificación para Género ---
                                    $key = array_search($producto->gender_id, array_column($generos, 'id'));
                                    echo ($key !== false) ? $generos[$key]->name : 'Desconocido';
                                    ?>
                                </td>
                                <td class="align-middle"><?php echo $producto->bpm; ?></td>
                                <td class="align-middle"><?php echo $producto->artist; ?></td>
                                <td class="align-middle">
                                    <?php if($producto->version != null){ ?>
                                        <?php echo $producto->version; ?>
                                    <?php } ?>
                                </td>
                                <td class="align-middle">
                                    <?php
                                    // --- CORRECCIÓN 3: Verificación para Editor (Usuario) ---
                                    $key = array_search($producto->owner_id, array_column($users, 'id'));
                                    echo ($key !== false) ? $users[$key]->username : 'Desconocido';
                                    ?>
                                </td>
                                <td class="align-middle">
                                    <div class="audio_demo" data-mp3="<?php echo base_url() . 'assets/products/demos/' . $producto->demo; ?>" id="player<?php echo $i; ?>"></div>
                                    <div class="playit controls jp-controls-holder">
                                        <i class=" fa fa-play-circle-o jp-play pc-play"></i>
                                        <i class=" fa fa-pause-circle-o jp-pause pc-pause"></i>
                                    </div>
                                </td>
                                <td class="actions align-middle">
                                    <?php if (($role == 'is_admin' || $role == 'is_subadmin') || ($this->input->get('aprobacion') == 1)) { ?>
                                        <a href="<?php echo base_url(); ?>admin/editar_producto/?product_id=<?php echo $producto->id . '&paginationnumber=' . $paginationnumber; ?>" class="btn btn-danger btn-sm">Editar</a>
                                    <?php } ?>

                                    <?php if (($role == 'is_admin' || $role == 'is_subadmin') && ($this->input->get('aprobacion') !== null)) { ?>
                                        <a href="<?php echo base_url(); ?>admin/listar_productos/?aprobacion=1&action=approve&product_id=<?php echo $producto->id; ?>" class="btn btn-success btn-sm">Aprobar</a>
                                    <?php } ?>

                                    <?php if (($role == 'is_admin' || $role == 'is_subadmin') && ($this->input->get('aprobacion') == null)) { ?>
                                        <a href="<?php echo base_url(); ?>admin/listar_productos/?action=disapprove&product_id=<?php echo $producto->id; ?>" class="btn btn-warning btn-sm">Desaprobar</a>
                                    <?php } ?>

                                    <?php if (($role == 'is_admin' || $role == 'is_subadmin')) { ?>
                                        <a href="<?php echo base_url(); ?>products/descargar_admin/<?php echo $producto->id; ?>" class="btn btn-primary btn-sm">Descargar</a>
                                    <?php } ?>

                                    <?php if (($role == 'is_admin' || $role == 'is_subadmin') || ($this->input->get('aprobacion') == 1)) { ?>
                                        <a href="<?php echo base_url(); ?>admin/listar_productos/?<?php if ($this->input->get('aprobacion') != null) { echo 'aprobacion=1&'; } ?>action=delete&product_id=<?php echo $producto->id; ?>" class="btn btn-danger btn-sm">Delete</a>
                                    <?php } ?>
                                </td>
                            </tr>
                        <? } ?>
                    <? } ?>
                <? } ?>
                </tbody>
            </table>
            <?php if ( isset($links) ) { ?>
                <?php echo $links ?>
            <?php } ?>
        </div><!-- table-wrapper -->
    </div><!-- card -->

</div><!-- sl-pagebody -->