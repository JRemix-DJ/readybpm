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

    .btn{
        color: #ffffff;
        background-color: #5F47F3;
    }
    .btn:hover{
        color: #ffffff;
        background-color: #5F47F3;
    }

</style>
<div id="ajaxArea">
    <section class="album-header">
        <figure class="album-cover-wrap">
            <div class="album-cover_overlay"></div>
        </figure>
        <div class="container">
            <div class="cover-content">
                <hr>
                <div class="clearfix text-uppercase">
                    <h1 style="padding-top: 30px">REQUEST YOUR REMIX</h1>
                    <cite class="album-author mb-20">ReadyBPM</cite>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="form-container">
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="">Youtube Link</label>
                    <input type="url" name="reference" id="reference" class="form-control"
                           placeholder="Here your reference" required>
                </div>
                <div class="form-group">
                    <label for="">Message</label>
                    <textarea name="message" id="message" class="form-control" cols="30" rows="10"
                              required></textarea>
                </div>
                <a class="btn btn" id="enviarRequest">Send</a>
            </div>
        </div>
    </section>
</div>
