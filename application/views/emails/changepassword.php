<!DOCTYPE html>
<html lang="es" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <style type="text/css">
        body, table, td, a {
            padding: 35px;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        .botoncito {
            font-size: 16px;
            color: #ffffff !important;
            background-color: #5F47F3;
            border-radius: 8px;
            padding: 15px 30px;
            display: inline-block;
            font-weight: bold;
        }

        .logo-header{
            display: block;
            height: 35px;
        }

        table, td {
            margin-inline-end: 48px;
            margin-inline-start: 48px;
        }

        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        table {
            border-collapse: collapse !important;
            width: 550px;
        }

        body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif;
        }

        a {
            color: #3624a8;
            text-decoration: underline;
        }

        .foot{
            height: 100px;
            max-height: 100px;
        }

        .final-footer{
            color: #969AA1 !important;
            font-family: Arial, sans-serif;
            font-size: 14px;
            line-height: 20px;
            max-height: 100px;
        }
    </style>
</head>
<body style="margin: 0 !important; padding: 0 !important; background-color: #f7f7f7;">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td align="center" style="background-color: #f7f7f7;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                <tr>
                    <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#FFFFFF">
                        <a href="https://readybpm.com">
                            <img src="https://readybpm.com/images/logocorto.png" alt="ReadyBPM Logo" class="logo-header">
                        </a>
                    </td>
                </tr>
                <tr>
                    <td align="left" bgcolor="#ffffff" style="padding: 20px 30px 40px 30px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td style="color: #111111; font-family: 'Montserrat', sans-serif; font-size: 24px; font-weight: bold; text-align: center;">
                                    Reset Password
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 20px 0 30px 0; color: #555555; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                                    <p>Hi {username},</p>
                                    <p>We've received a request to reset your account password. Click the button below to choose a new one.</p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <a href="{reset_link}" target="_blank" class="botoncito">
                                        RESET PASSWORD</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px 0 0 0; color: #555555; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                                    <p>If you didn't request a password change, you can safely ignore this email.</p>
                                    <p>Thanks,<br>The ReadyBPM team</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#1F2225" style="padding: 30px 10px;" class="foot">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="center" style="padding-bottom: 20px;">
                                    <a href="https://www.facebook.com/profile.php?id=61576190996039"
                                       style="text-decoration: none; padding: 0 10px;">
                                        <img src="https://readybpm.com/images/icons/facebook.png" width="24"
                                             alt="Facebook" style="max-width: 24px;">
                                    </a>
                                    <a href="https://www.instagram.com/readybpm/"
                                       style="text-decoration: none; padding: 0 10px;">
                                        <img src="https://readybpm.com/images/instagram.png" width="24" alt="Instagram"
                                             style="max-width: 24px;">
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" class="final-footer">
                                    &copy; <?php echo date('Y'); ?> ReadyBPM. All rights reserved.<br>
                                    <a href="https://readybpm.com" style="color: #969AA1; text-decoration: none;">readybpm.com</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>