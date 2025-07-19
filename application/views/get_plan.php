<div id="ajaxArea">
    <section class="album-header">
        <figure class="album-cover-wrap">
            <div class="album-cover_overlay"></div>
        </figure>
        <div class="container">
            <div class="cover-content">
                <hr>
                <div class="clearfix text-uppercase">
                    <h1 style="padding-top: 30px">Checkout Plan</h1>
                    <cite class="album-author mb-20">ReadyBPM.COM</cite>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                <?php if($this->session->userdata('is_logued_in')){ ?>
                <div class="col-md-6">
                    <div class="title">
                        <h3>INFORMACIÓN DE FACTURACIÓN</h3>
                    </div>
                    <table class="table user_info">
                        <tr>
                            <td>CODIGO DE CLIENTE:</td>
                            <td><?php echo $this->session->userdata('id_usuario'); ?></td>
                        </tr>
                        <tr>
                            <td>Nombre:</td>
                            <td><?php echo $this->session->userdata('username'); ?></td>
                        </tr>
                        <tr>
                            <td>E-mail:</td>
                            <td><?php echo $this->session->userdata('email'); ?></td>
                        </tr>
                    </table>
                </div>
                <div class="col-md-6">
                    <section>
                        <div class="title"><h3>ORDEN</h3></div>
                        <div class="content">
                            <table class="table checkout">
                                <?php if(isset($plan)){ ?>
                                <tr>
                                    <td>
                                        <?php echo $plan->name; ?>
                                        - Duración <?php echo $plan->duration; ?> días
                                    </td>
                                    <td>$<?php echo $plan->price; ?> USD</td>
                                </tr>
                                <tr class="total">
                                    <td>Total de la Orden</td>
                                    <td><strong>$<?php echo $plan->price; ?> USD</strong></td>
                                </tr>
                                <?php } ?>
                            </table>
                        </div>
                    </section>
                    <section>
                        <div class="title">
                            <h3>MÉTODO DE PAGO</h3>
                        </div>
                        <div class="content">
                            <div class="payment_options" style="margin-bottom: 50px;">
                                <?php
                                // --- LÓGICA PARA CONSTRUIR EL ENLACE DE TUKUY ---
                                if(isset($plan)){
                                    // 1. Creamos una orden PENDIENTE en nuestra base de datos.
                                    $order_data = [
                                        'user_id' => $this->session->userdata('id_usuario'),
                                        'plan_id' => $plan->id,
                                        'total_price' => $plan->price,
                                        'status' => 0, // 0 = Pendiente
                                        'is_plan' => 1
                                    ];
                                    $this->db->insert('orders', $order_data);
                                    $order_id = $this->db->insert_id();

                                    // 2. Construimos la URL de pago para el Plan de Tukuy
                                    $tukuy_plan_url = "https://like.tukuy.club/plan/AVedKg"; // El link base de tu plan
                                    
                                    // 3. Añadimos los parámetros que Tukuy necesita
                                    $tukuy_params = http_build_query([
                                        'email' => $this->session->userdata('email'),
                                        'return_url' => base_url('payment/tukuy_finalizado'),
                                        // Usamos metadata para enviar nuestro ID de orden
                                        'metadata' => [
                                            'ext_order' => $order_id 
                                        ]
                                    ]);
                                ?>
                                <div class="item">
                                    <a href="<?php echo $tukuy_plan_url . '?' . $tukuy_params; ?>" class="button btn btn-default">
                                        PAGAR CON TARJETA DE CRÉDITO / DÉBITO
                                    </a>
                                    <div class="item-icons-card">
                                        <i class="fa fa-brands fa-cc-visa"></i>
                                        <i class="fa fa-brands fa-cc-mastercard"></i>
                                    </div>
                                </div>
                                <?php } else { ?>
                                <div class="item">
                                    NO HAY PLANES DISPONIBLES
                                </div>
                                <?php } ?>
                            </div>
                        </div>
                    </section>
                </div>
                <?php } else { ?>
                <div class="col-md-12" style="padding-top: 40px;padding-bottom: 40px">
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Necesitas estar registrado para finalizar la compra.
                </div>
                <?php } ?>
            </div>
        </div>
    </section>
</div>
