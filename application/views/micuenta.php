<style>
    html{
        height: 100%;
    }
    body{
        min-height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0;
    }
    #ajaxArea{
        flex: 1 0 auto;
    }
</style>

<div id="ajaxArea" style="margin-top: 40px">
 	<section>
 		<header>
 			<div class="container">
 				<div class="row">
 					<div class="col-md-12">
 						<h1>Hola <? echo $this->session->userdata('username'); ?></h1>
						 <? //print_r($_SESSION); ?>
 					</div>
 				</div>
				<div class="row">
					<div class="col-md-6">
						<h3>MIS ULTIMAS COMPRAS</h3>
						<table class="table">
							<tr>
								<th>Fecha</th>
								<th>Orden ID</th>
								<th>Precio Total</th>
							</tr>
							<? foreach($orders as $orden){ ?>
							<tr>
								<td>
									<? 
										$fecha = date_format(date_create($orden->date_order), 'd/m/Y');
                                		echo $fecha; 
									?>
								</td>
								<td>
                                    <? echo $orden->id; ?>
									</td>
								<td>
										$<? echo $orden->total_price; ?>
								</td>
							</tr>
							<? } ?>
						</table>
					</div>
				</div>
 			</div>
 		</header>
 	</section>
 </div>

<?php
// --- INICIO DEL CÓDIGO PARA EL BOTÓN DE ADMIN ---

// Obtener datos de la sesión actual
$role = $this->session->userdata('role');
$admin_token = $this->session->userdata('admin_token');
$allowed_roles = ['is_admin', 'is_subadmin', 'is_editor'];

// Comprobar si el rol del usuario está en la lista de permitidos y si el token existe
if (in_array($role, $allowed_roles) && !empty($admin_token)) :
    ?>

    <div style="text-align: center; margin: 40px 0; padding: 30px; border-top: 1px solid #e9ecef; border-bottom: 1px solid #e9ecef;">
        <h3>Panel de Administración</h3>
        <p>Utiliza el siguiente botón para acceder al panel de administración de forma segura.</p>
        <a href="<?php echo site_url('admin/access/' . $admin_token); ?>" class="btn btn-primary" style="padding: 10px 25px; font-size: 16px;">
            Ir a Panel Admin
        </a>
    </div>

<?php endif; ?>
<?php // --- FIN DEL CÓDIGO PARA EL BOTÓN DE ADMIN --- ?>