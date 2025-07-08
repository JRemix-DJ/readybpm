                <table class="table clearfix canciones">
                    <thead> 
                        <tr>
                            <th class="">Fecha</th>
                            <th class="">Escuchar</th>
                            <th>Canción</th>
                            <th class="">Artista</th>
                            <th class="">Version</th>
                            <th class="">BPM</th>
                            <? if(isset($product_type_id)){ if($product_type_id!=5){ ?>
                            <? if(isset($genero)){ ?>
                             <? if($genero->id!=45){ ?>
                                <th class="">Genero</th>
                            <? } }else{ ?> 
                                <th class="">Genero</th>
                            <? } } } ?>

                            <? if(isset($genero)){ ?>
                                <? if($genero->id==45){ ?>
                                    <th class="tcenter">Precio</th>
                                <? }else{ ?>
                                    <? if(MONEY_PAYMENTS){ ?>
                                        <? if($this->session->userdata('is_user_tokens')==false||$this->session->userdata('tokens')==0){ ?>
                                            <th class="tcenter">Comprar</th>
                                        <? }else{ ?>
                                            <th class="tcenter">Descargar</th>
                                        <? } ?>
                                    <? }else{ ?>
                                        <th class="tcenter">Descargar</th>
                                    <? } ?>
                                <? } ?>
                            <?  }else{ ?>
                                <? if(MONEY_PAYMENTS){ ?>
                                    <? if($this->session->userdata('is_user_tokens')==false||$this->session->userdata('tokens')==0){ ?>
                                            <th class="tcenter">Comprar</th>
                                        <? }else{ ?>
                                            <th class="tcenter">Descargar</th>
                                        <? } ?>
                                <? }else{ ?>
                                    <th class="tcenter">Descargar</th>
                                <? } ?>
                            <? } ?>
                        </tr>
                    </thead>
                    <tbody>
                         <?
                        $i=0;
                        if(!empty($products)){
                        foreach($products as $producto){
                            $i++;
                            ?>
                            <tr id="singleSongPlayer-<? echo $i; ?>" data-product="<? echo $producto->id; ?>"class="song-unit singleSongPlayer player-<? echo $producto->id; ?>" data-before="<? echo $i; ?>">
                                <td class=""><? 
                                $fecha = date_format(date_create($producto->time_approved), 'm/d/Y');
                                echo $fecha; 
                                ?></td>
                                <td class="">
                                    <span id="singleSong-jplayer-<? echo $i; ?>" class="singleSong-jplayer" data-title="<? echo $producto->name; ?>" data-mp3="<? echo base_url(); ?>assets/products/demos/<? echo $producto->demo; ?>"><i class="fa fa-play-circle-o boton-play" aria-hidden="true"></i></span>
                                </td>
                                <td class="song-title jp-title"><? echo $producto->name; ?></td>

                                <td class="">
                                    <? echo $producto->artist; ?>
                                </td>
                                <td class="">
                                    <? if($producto->version!=null){ ?>
                                        <? echo $producto->version; ?>
                                    <? } ?>
                                </td>
                                <td class="song-bpm ">
                                    <? 
                                       echo $producto->bpm;
                                    ?>

                                </td>
                                <? if($producto->gender_id!=45){ ?>
                                    <? if(isset($product_type_id)){ if($product_type_id!=5){ ?>  
                                <td class="song-genero jp-genero ">
                                     <? 
                                        $key = array_search($producto->gender_id, array_column($generos, 'id'));
                                        echo '<a href="'.base_url().'genero/'.$generos[$key]->id.'">'.$generos[$key]->name.'</a>';
                                    
                                    ?>
                                </td>
                                <? } } } ?>
                                <? 
                                    // if(isset($this->session->userdata('is_user_tokens')==false)){   
                                    //     $userdata=array(
                                    //         'is_user_tokens'=>false,
                                    //     );      
                                    //     $this->session->set_userdata($userdata);
                                    // }    
                                ?>
                                <? //if($this->session->userdata('is_user_tokens')==false&&$this->session->userdata('role')!='is_admin'){ ?>
                                <? if($producto->gender_id==45 || (isset($product_type_id) && $product_type_id==5)){ ?>
                                   
                                    <td>
                                    <button class="song-btn addToCart btn btn-orange" data-id="<? echo $producto->id; ?>"> $<? echo $producto->price; ?></button>
                                                <button class="btn btn-green anadido"><i class="fa fa-check"></i>Añadido - Ver Carrito</button>
                                    </td>
                                <? }else{ ?>
                                    <? if(MONEY_PAYMENTS){ ?>
                                        <? if($this->session->userdata('is_user_tokens')==false){ ?>
                                            <td class="tcenter">    
                                                <button class="song-btn addToCart btn btn-orange" data-id="<? echo $producto->id; ?>">$<? echo $producto->price; ?></button>
                                                <button class="btn btn-green anadido"><i class="fa fa-check"></i>Añadido</button>
                                            </td>
                                        <? }else{ ?>
                                            <td class="tcenter">    
                                                <button class="song-btn downloadButton btn btn-orange" data-id="<? echo $producto->id; ?>"><i class="fa fa-download"></i></button>
                                            </td>
                                        <? } ?>
                                    <? }else{ ?>
                                        <td class="tcenter">    
                                            <button class="song-btn downloadButton btn btn-orange" data-id="<? echo $producto->id; ?>"><i class="fa fa-download"></i></button>
                                        </td>
                                    <? } ?>
                                <? } ?>
                            </tr> 
                            <?
                            }
                        }else{
                            echo '<tr><td colspan="8">No hemos encontrado productos.</td></tr>';
                        }
                    ?>
                    </tbody>
                </table>