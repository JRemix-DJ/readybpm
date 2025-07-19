<table class="table clearfix canciones">
    <thead>
    <tr>
        <th class="">Fecha</th>
        <th class="">Preview</th>
        <th>Canción</th>
        <th class="">Artista</th>
        <th class="">Version</th>
        <th class="">BPM</th>
        <?php if(isset($this->session->userdata['is_logued_in'])){ ?>
            <?php if($this->session->userdata('is_user_unlimited')){ ?>
                <th class="tcenter">Descargar</th>
            <?php } else { ?>
                <?php if(MONEY_PAYMENTS){ ?>
                    <?php if($this->session->userdata('is_user_tokens') == false || $this->session->userdata('tokens') == 0){ ?>
                        <th class="tcenter">Comprar</th>
                    <?php } else { ?>
                        <th class="tcenter">Descargar</th>
                    <?php } ?>
                <?php } else { ?>
                    <th class="tcenter">Descargar</th>
                <?php } ?>
            <?php } ?>
        <?php } else { ?>
            <?php if(MONEY_PAYMENTS){ ?>
                <?php if($this->session->userdata('is_user_tokens') == false || $this->session->userdata('tokens') == 0){ ?>
                    <th class="tcenter">Comprar</th>
                <?php } else { ?>
                    <th class="tcenter">Descargar</th>
                <?php } ?>
            <?php } else { ?>
                <th class="tcenter">Descargar</th>
            <?php } ?>
        <?php } ?>
    </tr>
    </thead>
    <tbody>
    <?php
    $i = 0;
    if(!empty($products)){
        foreach($products as $producto){
            $i++;
            ?>
            <tr id="singleSongPlayer-<?php echo $i; ?>" data-product="<?php echo $producto->id; ?>"
                class="song-unit singleSongPlayer player-<?php echo $producto->id; ?>" data-before="<?php echo $i; ?>">
                <td class=""><?php
                    $fecha = date_format(date_create($producto->time_approved) , 'm/d/Y');
                    echo $fecha;
                    ?></td>
                <td class="">
                    <!-- ================================================================= -->
                    <!-- CORRECCIÓN AQUÍ: Se añade un timestamp a la URL para evitar el caché -->
                    <!-- ================================================================= -->
                    <span id="singleSong-jplayer-<?php echo $i; ?>" class="singleSong-jplayer"
                          data-title="<?php echo htmlspecialchars($producto->name, ENT_QUOTES, 'UTF-8'); ?>"
                          data-mp3="<?php echo base_url(); ?>assets/products/demos/<?php echo $producto->demo; ?>?v=<?php echo time(); ?>">
                <i class="fa fa-play-circle-o boton-play" aria-hidden="true"></i>
            </span>
                </td>
                <td class="song-title jp-title"><?php echo $producto->name; ?></td>

                <td class="">
                    <?php echo $producto->artist; ?>
                </td>
                <td class="">
                    <?php if($producto->version != null){ ?>
                        <?php echo $producto->version; ?>
                    <?php } ?>
                </td>
                <td class="song-bpm ">
                    <?php
                    echo $producto->bpm;
                    ?>
                </td>
                <?php if($producto->gender_id != 45){ ?>
                    <?php if(isset($product_type_id)){ if($product_type_id != 5){ ?>
                        <td class="song-genero jp-genero ">
                            <?php
                            $key = array_search($producto->gender_id, array_column($generos, 'id'));
                            if ($key !== false) {
                                echo '<a href="'.base_url().'genero/'.$generos[$key]->id.'">'.$generos[$key]->name.'</a>';
                            }
                            ?>
                        </td>
                    <?php } } } ?>

                <?php if($producto->gender_id == 45 || (isset($product_type_id) && $product_type_id == 5)){ ?>
                    <td>
                        <button class="song-btn addToCart btn btn-orange" data-id="<?php echo $producto->id; ?>">
                            $<?php echo $producto->price; ?></button>
                        <button class="btn btn-green anadido"><i class="fa fa-check"></i>Añadido - Ver Carrito</button>
                    </td>
                <?php }else{ ?>
                    <?php if(MONEY_PAYMENTS){ ?>
                        <?php if($this->session->userdata('is_user_tokens') == false){ ?>
                            <td class="tcenter">
                                <button class="song-btn addToCart btn btn-orange" data-id="<?php echo $producto->id; ?>">
                                    $<?php echo $producto->price; ?></button>
                                <button class="btn btn-green anadido"><i class="fa fa-check"></i>Añadido</button>
                            </td>
                        <?php }else{ ?>
                            <td class="tcenter">
                                <button class="song-btn downloadButton btn btn-orange" data-id="<?php echo $producto->id; ?>"><i
                                            class="fa fa-download"></i></button>
                            </td>
                        <?php } ?>
                    <?php }else{ ?>
                        <td class="tcenter">
                            <button class="song-btn downloadButton btn btn-orange" data-id="<?php echo $producto->id; ?>"><i
                                        class="fa fa-download"></i></button>
                        </td>
                    <?php } ?>
                <?php } ?>
            </tr>
            <?php
        }
    }else {
        echo '<tr><td colspan="8">No hemos encontrado productos.</td></tr>';
    }
    ?>
    </tbody>
</table>
