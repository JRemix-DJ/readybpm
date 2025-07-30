<main class="doc-main">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="doc-post text-center">
                    <h2 class="text-uppercase">Restablecer Contraseña</h2>
                    <div class="post-meta">
                        <p>Hola de nuevo. Por favor, ingresa tu nueva contraseña a continuación.</p>
                    </div>

                    <form action="<?php echo site_url('login/process_new_password'); ?>" method="post" style="margin-top: 40px;">
                        <input type="hidden" name="token" value="<?php echo htmlspecialchars($token); ?>">

                        <div class="form-group">
                            <input type="password" name="password" class="form-control" placeholder="Nueva contraseña" required>
                        </div>

                        <div class="form-group">
                            <input type="password" name="passconf" class="form-control" placeholder="Confirmar nueva contraseña" required>
                        </div>

                        <button type="submit" class="btn btn-primary btn-lg">Guardar Contraseña</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>
