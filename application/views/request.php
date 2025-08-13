<style>
    .form-control:focus {
        border-color: #5F47F3;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px #5F47F3;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px #5F47F3;
    }

    .form-container {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 40px 0; /* Añade un poco de espacio vertical */
    }

    .form-container .col-sm-6 {
        float: none; /* Anula el float de Bootstrap */
    }

    .btn-send{
        color: #ffffff;
        background-color: #5F47F3;
    }
    .btn-send:hover{
        color: #ffffff;
        background-color: #5F47F3;
    }
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

    .a {
        color: #5f47f3 !important;
    }

    .label {
        font-size: 12px;
        color: rgb(209, 209, 209) !important;
        margin-bottom: 10px;
    }

</style>
<div id="ajaxArea">
    <section class="album-header">
        <figure class="album-cover-wrap"><div class="album-cover_overlay"></div></figure>
        <div class="container">
            <div class="cover-content">
                <hr>
                <div class="clearfix text-uppercase"><h1 style="padding-top: 30px">REQUEST YOUR REMIX</h1></div>
            </div>
        </div>
    </section>

    <section>
        <div class="form-container">
            <div class="col-sm-6">
                <?php if (!$this->session->userdata('is_logued_in')): ?>
                    <div class="alert alert-info login-prompt">
                        Please <a href="#" data-toggle="modal" data-target="#myModal" class="a"><strong>log in</strong></a> to send a remix request.
                    </div>
                <?php endif; ?>

                <form id="request-form" method="POST" action="<?php echo base_url('pages/send_request'); ?>">
                    <div class="form-group">
                        <label for="reference" class="label">Youtube Link</label>
                        <input type="url" name="reference" id="reference" class="form-control" placeholder="Here your reference" required <?php if (!$this->session->userdata('is_logued_in')) echo 'disabled'; ?>>
                    </div>
                    <div class="form-group">
                        <label for="message" class="label">Message</label>
                        <textarea name="message" id="message" class="form-control" cols="30" rows="10" placeholder="Give us details about the remix you want..." required <?php if (!$this->session->userdata('is_logued_in')) echo 'disabled'; ?>></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary-custom btn-send" id="enviarRequest" <?php if (!$this->session->userdata('is_logued_in')) echo 'disabled'; ?>>
                        Send Request
                    </button>
                    <div id="request-feedback"></div>
                </form>
            </div>
        </div>
    </section>
</div>
