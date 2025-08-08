<div class="sl-pagebody">
    <div class="card pd-20 pd-sm-40">
        <h6 class="card-body-title">Resumen de Pagos para: <?php echo html_escape($dj_info->username); ?></h6>

        <div class="row text-center mg-t-20">
            <div class="col-sm-6 col-lg-3">
                <div class="card pd-20">
                    <h6 class="tx-12 tx-uppercase tx-inverse tx-bold mg-b-15">Descargas Audio</h6>
                    <h3 class="tx-lato tx-inverse tx-bold"><?php echo $total_downloads_audio; ?></h3>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card pd-20">
                    <h6 class="tx-12 tx-uppercase tx-inverse tx-bold mg-b-15">Monto Audios</h6>
                    <h3 class="tx-lato tx-inverse tx-bold">$<?php echo number_format($total_payment_audio, 2); ?></h3>
                </div>
            </div>

            <div class="col-sm-6 col-lg-3 mg-t-20 mg-sm-t-0">
                <div class="card pd-20">
                    <h6 class="tx-12 tx-uppercase tx-inverse tx-bold mg-b-15">Descargas Video</h6>
                    <h3 class="tx-lato tx-inverse tx-bold"><?php echo $total_downloads_video; ?></h3>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 mg-t-20 mg-sm-t-0">
                <div class="card pd-20">
                    <h6 class="tx-12 tx-uppercase tx-inverse tx-bold mg-b-15">Monto Videos</h6>
                    <h3 class="tx-lato tx-inverse tx-bold">$<?php echo number_format($total_payment_video, 2); ?></h3>
                </div>
            </div>
        </div>

        <div class="row text-center mg-t-20">
            <div class="col-12">
                <div class="card pd-20 bg-success">
                    <h6 class="tx-12 tx-uppercase tx-white tx-bold mg-b-15">Monto Total a Pagar</h6>
                    <h3 class="tx-lato tx-white tx-bold">$<?php echo number_format($total_payment, 2); ?></h3>
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