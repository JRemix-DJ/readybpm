<div class="sl-pagebody">
    <div class="sl-page-title">
        <h5><?php echo $title; ?></h5>
        <p><?php echo $description; ?></p>
    </div>
    <div class="card pd-20 pd-sm-40">
        <h6 class="card-body-title">Listado de DJs</h6>
        <p class="mg-b-20 mg-sm-b-30">A continuación se muestra el total a pagar a cada DJ, calculado según su
            porcentaje y el total de descargas de sus mixes.</p>

        <div class="table-wrapper">
            <table id="datatable1" class="table display responsive nowrap">
                <thead>
                <tr>
                    <th class="wd-30p">DJ</th>
                    <th class="wd-25p">Total Descargas</th>
                    <th class="wd-25p">Porcentaje</th>
                    <th class="wd-20p">Pago Correspondiente ($)</th>
                    <th class="wd-15p">Acciones</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($djs_pagos as $dj): ?>
                    <tr>
                        <td><?php echo $dj->username; ?></td>
                        <td><?php echo $dj->total_downloads; ?></td>
                        <td><?php echo $dj->percentage; ?>%</td>
                        <td><?php echo number_format($dj->pago_calculado ,2); ?></td>
                        <td>
                            <a href="<?php echo site_url('admin/detalles_pago_dj/'.$dj->id); ?>"
                               class="btn btn-info btn-sm">Detalles</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>