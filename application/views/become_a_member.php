<style>
    .form-control:focus {
        border-color: #5F47F3;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #5F47F3;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #5F47F3;
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
                    <h1 style="padding-top: 30px">BE A EDITOR</h1>
                    <cite class="album-author mb-20">ReadyBPM</cite>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container mt-30 mb-30">
            <div class="row">
                <form action="">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="">Name</label>
                            <input type="text" class="form-control" name="name" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="">Country</label>
                            <select name="country" class="form-control" id="country" required>
                                <option value="">Choose an option</option>
                                <? foreach($paises as $pais){ ?>
                                <option value="<? echo $pais->name; ?>"><? echo $pais->name; ?></option>
                                <? } ?>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="">Experience</label>
                            <select name="time" class="form-control" id="time" required>
                                <option value="">Choose an option</option>
                                <option value="1">Less a year</option>
                                <option value="2">1 or 2 years</option>
                                <option value="3">3 to 5 years</option>
                                <option value="4">6 or more years</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="">¿Work with another service like this?</label>
                            <select name="work" id="work" class="form-control" required>
                                <option value="">Choose an option</option>
                                <option value="Si">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="">Work you have done</label>
                            <input type="url" name="trabajos" id="trabajos" class="form-control"
                                   placeholder="It can be a link to soundcloud, google drive, etc." required>

                        </div>
                        <div class="form-group">
                            <label for="">E-mail</label>
                            <input type="text" id="email-become" name="email" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="">Tell us: Why would you like to be part of ReadyBPM?</label>
                            <textarea name="why" id="why" class="form-control" id="" cols="30" rows="10"
                                      required></textarea>
                        </div>
                        <a class="btn btn-danger" id="enviarBecome">Send</a>
                    </div>
                </form>
            </div>
        </div>
</div>
</div>