<div class="sl-pagebody">
    <div class="sl-page-title">
        <h5><?php echo $title; ?></h5>
        <p><?php echo $description; ?></p>
    </div>
    <div class="card pd-20 pd-sm-40">
        <h6 class="card-body-title">Resumen de Pagos para: <?php echo $dj_info->username; ?></h6>
        <div class="row text-center mg-t-20">
            <div class="col-sm-6 col-lg-6">
                <div class="card pd-20">
                    <h6 class="tx-12 tx-uppercase tx-inverse tx-bold mg-b-15">Total Descargas</h6>
                    <h3 class="tx-lato tx-inverse tx-bold"><?php echo count($downloads); ?></h3>
                </div>
            </div>
            <div class="col-sm-6 col-lg-6">
                <div class="card pd-20">
                    <h6 class="tx-12 tx-uppercase tx-inverse tx-bold mg-b-15">Monto Total a Pagar</h6>
                    <h3 class="tx-lato tx-success tx-bold">$<?php echo number_format($total_payment ,2); ?></h3>
                </div>
            </div>
        </div>
    </div>

    <div class="card pd-20 pd-sm-40 mg-t-20">
        <h6 class="card-body-title">Desglose de Descargas</h6>
        <p class="mg-b-20 mg-sm-b-30">Cada fila representa una descarga de un mix de este DJ.</p>

        <div class="table-wrapper">
            <table id="datatable1" class="table display responsive nowrap">
                <thead>
                <tr>
                    <th class="wd-25p">Fecha de Descarga</th>
                    <th class="wd-35p">Producto Descargado</th>
                    <th class="wd-25p">Cliente (Quién descargó)</th>
                    <th class="wd-15p">Pago por Descarga ($)</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($downloads as $download): ?>
                <tr>
                    <td><?php echo date('d/m/Y H:i:s' ,strtotime($download->download_date)); ?></td>
                    <td><?php echo $download->product_name; ?></td>
                    <td><?php echo $download->customer_name; ?></td>
                    <td><?php echo number_format($download->pago_unitario ,2); ?></td>
                </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>