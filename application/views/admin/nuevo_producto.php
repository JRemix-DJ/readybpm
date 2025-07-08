<? 
	if(!$this->session->userdata('is_logued_in')){ exit(); }
	ini_set('auto_detect_line_endings',TRUE);
?>	
			<div class="sl-pagebody">
				<div class="sl-page-title">
					<h2><? echo $title; ?></h2>
					<p><? echo $description; ?></p>
				</div><!-- sl-page-title -->
				<div class="row">
					<div class="col-xl-6">
						<div class="card pd-20 pd-sm-40">
							<div class="form-layout">
								<h3 class="card-body-title">COMPLETE EL FORMULARIO Y AÑADA A LA COLA</h3>
								<div class="form">
									<p>
										<strong>Paso 1:</strong> Complete el siguiente formulario y agregue la información del archivo para cada archivo que cargará presionando "AGREGAR A LA COLA". Después de hacer clic en "AGREGAR A LA COLA", se agregará un nuevo formulario a la lista de la derecha.
									</p>
									<p>
										<strong>Paso 2:</strong> haga un clic sobre el archivo, desde la lista, para cargar sus archivos (Portada, Archivo y Vista previa). No son vistas previas de carga obligatorias. Si no carga la vista previa, el sistema generará una versión demo de 30 segundos desde el primer archivo. Tampoco son obligatorios, si ve una imagen cerca de "Usar la portada predeterminada" será el archivo de portada.
									</p>
									<p>
										<strong>Paso 3:</strong> Después de completar los pasos recientes y seleccionar los archivos para cada archivo, presione el botón "INICIAR CARGAR ARCHIVOS" (Arriba a la Derecha).
									</p>
									<p>
										<strong>Paso 4:</strong> una vez completada la carga, el archivo cambiará el color de fondo a Verde y estará en la lista para aprobación del administrador.
									</p>
									<div class="alert alert-danger">¡Acerca de los paquetes!: Es necesario cargar una vista previa al cargar paquetes.
									</div>
									<div class="row">
										<div class="col-sm-4 form-control-label">
											Nombre
										</div>
										<div class="col-sm-8 mg-t-10 mg-sm-t-0">
											<input type="text" class="form-control" name="name" id="video_name" value="" tabindex="1"/>
										</div>
									</div>
									<div class="row mg-t-20">
										<div class="col-sm-4 form-control-label">
											Artista
										</div>
										<div class="col-sm-8 mg-t-10 mg-sm-t-0">
											<input type="text" class="form-control" name="artist" id="video_artist" value="" tabindex="1"/>
										</div>
									</div>
									<div class="row mg-t-20">
										<div class="col-sm-4 form-control-label">
											BPM
										</div>
										<div class="col-sm-8 mg-t-10 mg-sm-t-0">
											<input type="text" class="form-control" name="bpm" id="bpm" value=""/>
										</div>
									</div>
									<div class="row mg-t-20">
										<div class="col-sm-4 form-control-label">
											Version
										</div>
										<div class="col-sm-8 mg-t-10 mg-sm-t-0">
											<input type="text" class="form-control" name="version" id="version" value=""/>
										</div>
									</div>
									<div class="row mg-t-20">
										<div class="col-sm-4 form-control-label">
											Precio
										</div>
										<div class="col-sm-8 mg-t-10 mg-sm-t-0">
											<select class="form-control" name="price" id="precio">
							                    <option>Seleccione un precio</option>
							                    <? foreach($precios as $precio){ ?>
							                      <option value="<? echo $precio->price; ?>"><? echo $precio->price; ?></option>
							                    <? } ?>
							                  </select>
										</div>
									</div>
									<div class=" mg-t-20 hidden">
										<div class="col-sm-4 form-control-label">
											Description
										</div>
										<div class="col-sm-8 mg-t-10 mg-sm-t-0">
											<textarea type="text" class="form-control" name="description" id="description"/></textarea>
										</div>
									</div>
									<div class="row mg-t-20">
										<div class="col-sm-4 form-control-label">
											Tipo de archivo:
										</div>
										<div class="col-sm-8 mg-t-10 mg-sm-t-0">
											<select id="setPack" class="form-control" name="type">
												<option value="1">Audio Normal</option>
												<option value="2">Audio Pack (ZIP)</option>
												<option value="3">Video Normal</option>
												<option value="4">Video Pack (ZIP)</option>
												<option value="5">Drops</option>
											</select>
										</div>
									</div>
									<div class="hidden">
										<h3 class="card-body-title">SERVERS</h3>
										<div class="margin" id="servers">
											#server data load
										 </div>
									</div>	
										
									<h3 class="card-body-title">GENEROS</h3>
									<div class="margin row" id="format">
									<? 
									$i=0;
									foreach($generos as $genero){
										?>
										<div class="col-xl-3">
											<div class="form-check">
												<input type="checkbox" class="genre_chbox form-check-input" data-id="<? echo $i;?>" id="check<? echo $i;?>" value="<? echo $genero->id;?>">
												<label for="" id="label<? echo $i;?>" class="form-check-label">
													<? echo $genero->name;?>
												</label>
											</div>
										</div>
									<?
										$i++;
									 } ?>
									</div>
									<input type="button" class="submit btn btn-danger btn-block mg-b-10" onClick="queue(<? echo count($generos);?>);" value="AÑADIR A LA COLA"/>
								</div><!-- form -->
							</div><!-- form layout -->
						</div><!-- card -->
					</div>
					<div class=" col-xl-6">
						<div class="card pd-20 pd-sm-40">
							<h3 class="card-body-title">TUS ARCHIVOS SE AÑADEN A ESTA COLA </h3>
							<input type="button" value="INICIAR LA CARGA DE ARCHIVOS" onClick="startUpload();" class="btn btn-success btn-block mg-b-10" />
							<div class="content_upload"></div>
						</div>
					</div>
						<?php echo validation_errors(); ?>
						<? if(isset($mensaje)){ ?>
							<div class="alert alert-success" role="alert"><? echo $mensaje; ?></div>
						<? } ?>
				</div><!-- row -->

			</div><!-- sl-pagebody -->
	