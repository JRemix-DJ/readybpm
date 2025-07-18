<div id="ajaxArea">
    <pre style="display:none;"><?php print_r($products) ?></pre>
    <section class="album-header">
        <figure class="album-cover-wrap">
            <div class="album-cover_overlay"></div>
        </figure>
        <div class="container">
            <div class="cover-content">
                <hr>
                <div class="clearfix text-uppercase">
                    <!-- CORRECCIÓN AQUÍ: Se cambió $generos por $genero -->
                    <h1 style="padding-top: 30px"><?php echo $genero->name; ?></h1>

                    <cite class="album-author mb-20"></cite>
                </div>
            </div>
        </div>
    </section>
    <!--=================================
    Albums
    =================================-->
    <section <?php if($this->session->userdata('content_type') == 'audios'){ ?>id="cuerpo"<?php } ?>>
        <?php $this->load->view('search_box'); ?>

        <div class="container">

            <?php $this->load->view('table_products'); ?>

        </div>
    </section>
</div>
