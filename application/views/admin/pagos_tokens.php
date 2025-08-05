<div class="sl-pagebody">
    <div class="sl-page-title">
        <h5><?php echo $title; ?></h5>
        <p><?php echo $description; ?></p>
    </div>
    <div class="card pd-20 pd-sm-40">
        <h6 class="card-body-title">Listado de DJs</h6>
        <p class="mg-b-20 mg-sm-b-30">A continuacion se muestra el total a pagar a cada DJ, calculado segun su
            porcentaje y el total de descargas de sus mixes.</p>

        <div class="table-wrapper">
            <table id="datatable1" class="table display responsive nowrap">
                <thead>
                <tr>
                    <th class="wd-30p">DJ</th>
                    <th class="wd-25p">Total Descargas</th>
                    <th class="wd-20p">Pago Correspondiente ($)</th>
                    <?php  ?>
                    <?php if ($this->session->userdata('role') == 'is_admin'): ?>
                        <th class="wd-15p">Acciones</th>
                    <?php endif; ?>
                    <?php  ?>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($djs_pagos as $dj): ?>
                    <tr>
                        <td><?php echo $dj->username; ?></td>
                        <td><?php echo $dj->total_downloads; ?></td>
                        <td><?php echo number_format($dj->pago_calculado, 2); ?></td>
                        <?php ?>
                        <?php if ($this->session->userdata('role') == 'is_admin'): ?>
                            <td>
                                <a href="<?php echo site_url('admin/detalles_pago_dj/' . $dj->id); ?>" class="btn btn-info btn-sm">Detalles</a>
                                <a href="<?php echo site_url('admin/siguiente_mes/' . $dj->id); ?>" class="btn btn-success btn-sm" onclick="return confirm('¿Estás seguro de que quieres archivar este pago y reiniciar el conteo de descargas para el siguiente mes? Esta acción no se puede deshacer.');">Siguiente Mes</a>
                            </td>
                        <?php endif; ?>
                        <?php  ?>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>