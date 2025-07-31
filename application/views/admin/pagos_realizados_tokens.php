<div class="sl-pagebody">
    <div class="sl-page-title">
        <h5><?php echo $title; ?></h5>
        <p><?php echo $description; ?></p>
    </div>

    <div class="card pd-20 pd-sm-40">
        <h6 class="card-body-title">Historial de Pagos</h6>
        <div class="table-wrapper">
            <table id="datatable1" class="table display responsive nowrap">
                <thead>
                <tr>
                    <th>DJ</th>
                    <th>Monto Pagado ($)</th>
                    <th>Fecha de Pago</th>
                    <th>Total Descargas (en ese período)</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($pagos as $pago): ?>
                    <tr>
                        <td><?php echo $pago->username; ?></td>
                        <td><?php echo number_format($pago->monto, 2); ?></td>
                        <td><?php echo date('d/m/Y H:i:s', strtotime($pago->fecha_pago)); ?></td>
                        <td><?php echo $pago->total_descargas; ?></td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
