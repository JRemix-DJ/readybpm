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
    .btn-primary {
        color: #ffffff;
        background-color: rgb(95, 71, 243);
        border-radius: 20px;
    }
</style>
<div id="ajaxArea" style="margin-top: 40px">
    <main class="doc-main">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="doc-post text-center">
                        <h2 class="text-uppercase">Reset Password</h2>
                        <div class="post-meta">
                            <p>Hello again. Please enter your new password below.</p>
                        </div>

                        <form action="<?php echo site_url('login/process_new_password'); ?>" method="post" style="margin-top: 40px;">
                            <input type="hidden" name="token" value="<?php echo htmlspecialchars($token); ?>">

                            <div class="form-group">
                                <input type="password" name="password" class="form-control" placeholder="New password" required>
                            </div>

                            <div class="form-group">
                                <input type="password" name="passconf" class="form-control" placeholder="Confirm new password" required>
                            </div>

                            <button type="submit" class="btn btn-primary btn-lg">Save Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>

</div>
