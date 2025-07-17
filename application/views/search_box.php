<div class="container search-container mt-30 mb-30 hidden-xs">
    <div class="row">
        <div class="col-xs-12">
            <form action="<? echo base_url('search/'); ?>" method="GET">
                <div class="multiSearchWrapper">
                    <div class="multiSearchWrapper-inner">
                        <div class="custome-select clearfix">
                            <b class="fa fa-angle-down"></b>
                            <span>Generos</span>
                            <select name="sgenero" id="sgenero">
                                <option value="">Seleccionar</option>
                                <?php foreach($generos as $genero_) { ?>
                                    <option value="<?php echo html_escape($genero_->id); ?>" <?php
                                    if (isset($sgenero) && $sgenero == $genero_->id) {
                                        echo 'selected';
                                    }
                                    ?>><?php echo html_escape($genero_->name); ?></option>
                                <?php } ?>
                            </select>
                        </div>

                        <input placeholder="Buscar por nombre" type="text" name="sname"
                               id="sname" <? if (isset($sname)) {
                            echo 'value="'.$sname.'"';
                        } ?>/>
                    </div><!--inner-->
                    <button class="btn btn-default" id="buscar-ahora" type="submit"><i class="fa fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div><!--container-->

<? if(isset($_GET['sname'])){ ?>
<div class="container">
    <div class="search-filters text-uppercase text-bold">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-5">
                <div class="searched-for" data-before="Resultados para: ">
                    <span class="s-keyword"><? echo $_GET['sname']; ?></span>
                </div>
            </div>

        </div>
    </div><!--row-->
</div><!--container-->
    <? } ?>