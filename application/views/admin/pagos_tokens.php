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
                    <th>DJ</th>
                    <th>Descargas Audio</th>
                    <th>Pago Audios</th>
                    <th>Descargas Video</th>
                    <th>Pago Videos</th>
                    <th>Pago Total Pendiente</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                <?php foreach ($djs_pagos as $dj): ?>
                    <tr>
                        <td><?php echo html_escape($dj->username); ?></td>
                        <td><?php echo $dj->total_audio_downloads; ?></td>
                        <td>$<?php echo number_format($dj->pago_audios, 2); ?></td>
                        <td><?php echo $dj->total_video_downloads; ?></td>
                        <td>$<?php echo number_format($dj->pago_videos, 2); ?></td>
                        <td><strong>$<?php echo number_format($dj->pago_total, 2); ?></strong></td>
                        <td class="actions">
                            <a href="<?php echo site_url('admin/detalles_pago_dj/' . $dj->id); ?>" class="btn btn-info btn-sm">
                                Ver Detalles
                            </a>

                            <?php if ($dj->pago_total > 0): // Solo mostrar si hay un monto a pagar ?>
                                <a href="<?php echo site_url('admin/siguiente_mes/' . $dj->id); ?>"
                                   class="btn btn-success btn-sm"
                                   onclick="return confirm('¿Estás seguro de que quieres archivar este pago y reiniciar el conteo de descargas para <?php echo html_escape($dj->username); ?>? Esta acción no se puede deshacer.');">
                                    Siguiente mes
                                </a>
                            <?php endif; ?>
                        </td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>