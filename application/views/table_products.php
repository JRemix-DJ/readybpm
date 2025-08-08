<table class="table clearfix canciones">
    <thead>
    <tr>
        <th style="height: 40px;"></th>
        <th class="">Preview</th>
        <th>Song</th>
        <th class="">BPM</th>
        <th class="">Genre</th>
        <?php if(isset($this->session->userdata['is_logued_in'])){ ?>
            <?php if($this->session->userdata('is_user_unlimited')){ ?>
                <th class="tcenter">Download</th>
            <?php } else { ?>
                <?php if(MONEY_PAYMENTS){ ?>
                    <?php if($this->session->userdata('is_user_tokens') == false || $this->session->userdata('tokens') == 0){ ?>
                        <th class="tcenter">Comprar</th>
                    <?php } else { ?>
                        <th class="tcenter">Download</th>
                    <?php } ?>
                <?php } else { ?>
                    <th class="tcenter">Download</th>
                <?php } ?>
            <?php } ?>
        <?php } else { ?>
            <?php if(MONEY_PAYMENTS){ ?>
                <?php if($this->session->userdata('is_user_tokens') == false || $this->session->userdata('tokens') == 0){ ?>
                    <th class="tcenter">Comprar</th>
                <?php } else { ?>
                    <th class="tcenter">Download</th>
                <?php } ?>
            <?php } else { ?>
                <th class="tcenter">Download</th>
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
            $key = array_search($producto->gender_id, array_column($generos, 'id'));

            if ($key !== false) {
                $genero = $generos[$key];

                // --- INICIO DE LA CORRECCIÓN (Lógica de la vista de géneros) ---
                $image_path = base_url() . 'images/generos/default.jpg'; // Ruta de la imagen por defecto
                if (!empty($genero->img) && file_exists('./images/generos/' . $genero->img)) {
                    // Si el género tiene una imagen y el archivo existe, usamos esa imagen
                    $image_path = base_url() . 'images/generos/' . $genero->img;
                }
                // --- FIN DE LA CORRECCIÓN ---
                ?>
                <tr id="singleSongPlayer-<?php echo $i; ?>" data-product="<?php echo $producto->id; ?>"
                    class="song-unit singleSongPlayer player-<?php echo $producto->id; ?>" data-before="<?php echo $i; ?>">

                    <td class="song-genero-icon">
                        <a href="<?php echo base_url('genero/' . $genero->id); ?>" title="Ver más de <?php echo htmlspecialchars($genero->name); ?>">
                            <img src="<?php echo $image_path; ?>" alt="<?php echo htmlspecialchars($genero->name); ?>" width="40" style="border-radius: 4px;">
                        </a>
                    </td>

                    <td class="">
                    <span id="singleSong-jplayer-<?php echo $i; ?>" class="singleSong-jplayer"
                          data-title="<?php echo htmlspecialchars($producto->name, ENT_QUOTES, 'UTF-8'); ?>"
                          data-mp3="<?php echo base_url(); ?>assets/products/demos/<?php echo $producto->demo; ?>?v=<?php echo time(); ?>">
                        <i class="fa fa-play-circle-o boton-play" aria-hidden="true"></i>
                    </span>
                    </td>
                    <td class="song-title jp-title"><?php echo $producto->name; ?></td>
                    <td class="song-bpm "><?php echo $producto->bpm; ?></td>
                    <td class="song-genero jp-genero "><a href="<?php echo base_url('genero/' . $genero->id); ?>"><?php echo $genero->name; ?></a></td>

                    <?php if($producto->gender_id == 45 || (isset($product_type_id) && $product_type_id == 5)){ ?>
                        <td>
                            <button class="song-btn addToCart btn btn-orange" data-id="<?php echo $producto->id; ?>">$<?php echo $producto->price; ?></button>
                            <button class="btn btn-green anadido"><i class="fa fa-check"></i>Añadido - Ver Carrito</button>
                        </td>
                    <?php }else{ ?>
                        <?php if(MONEY_PAYMENTS){ ?>
                            <?php if($this->session->userdata('is_user_tokens') == false){ ?>
                                <td class="tcenter">
                                    <button class="song-btn addToCart btn btn-orange" data-id="<?php echo $producto->id; ?>">$<?php echo $producto->price; ?></button>
                                    <button class="btn btn-green anadido"><i class="fa fa-check"></i>Añadido</button>
                                </td>
                            <?php }else{ ?>
                                <td class="tcenter">
                                    <button class="song-btn downloadButton btn btn-orange" data-id="<?php echo $producto->id; ?>"><i class="fa fa-download"></i></button>
                                </td>
                            <?php } ?>
                        <?php }else{ ?>
                            <td class="tcenter">
                                <button class="song-btn downloadButton btn btn-orange" style="background-color: #0ba1b5; border-radius: 50px;" data-id="<?php echo $producto->id; ?>">Download</button>
                            </td>
                        <?php } ?>
                    <?php } ?>
                </tr>
                <?php
            }
        }
    }else {
        echo '<tr><td colspan="8">No hemos encontrado productos.</td></tr>';
    }
    ?>
    </tbody>
</table>
