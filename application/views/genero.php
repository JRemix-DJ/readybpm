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
    @media (max-width: 768px) {
        .text-uppercase{
            padding-top: 40px;
        }
    }
</style>
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
        <div class="container">
            <?php $this->load->view('table_videos'); ?>
        </div>
    </section>
</div>
