<!DOCTYPE html>
<html lang="es">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <style type="text/css">
        /* --- Estilos Generales --- */
        body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table {
            border-collapse: collapse !important;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            border: 0;
            height: auto;
            max-height: 40px;
            max-width: 200px;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }
        a {
            text-decoration: none;
        }

        /* --- Estructura Principal --- */
        .wrapper {
            background-color: #f7f7f7;
            width: 100%;
        }
        .container {
            max-width: 600px;
            width: 100%;
            background-color: #FFFFFF;
            border-radius: 8px;
        }

        /* --- Secciones --- */
        .header {
            max-height: 40px;
            padding: 30px 30px 20px 30px;
        }
        .content {
            padding: 20px 30px 40px 30px;
        }
        .footer {
            padding: 30px 10px;
            background-color: #1F2225;
            border-radius: 0 0 8px 8px;
        }

        /* --- Textos y Títulos --- */
        .title {
            color: #111111;
            font-family: Arial, sans-serif;
            font-size: 24px;
            font-weight: bold;
        }
        .greeting {
            padding: 20px 0 30px 0;
            color: #555555;
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 24px;
        }
        .greeting p {
            margin: 0;
        }

        .ReadyBPM {
            max-height: 40px;
            max-width: 200px;
            height: 35px;
        }

        /* --- Tabla de Items y Totales --- */
        .items-table {
            width: 100%;
        }
        .item-row-main {
            padding-bottom: 15px;
        }
        .item-name {
            margin: 0;
            color: #333;
            font-size: 16px;
            font-weight: bold;
        }
        .item-description {
            margin: 5px 0 0 0;
            color: #777;
            font-size: 14px;
        }
        .item-price {
            text-align: right;
            padding-bottom: 15px;
            font-weight: bold;
            color: #333;
        }
        .totals-row {
            border-top: 2px solid #eeeeee;
        }
        .totals-cell {
            padding-top: 20px;
            text-align: right;
        }
        .totals-text {
            margin: 0;
            font-size: 18px;
            font-weight: bold;
            color: #111111;
        }

        /* --- Footer --- */
        .footer{
            width: 580px;
        }
        .footer p, .footer a {
            color: #969AA1;
            font-family: Arial, sans-serif;
            font-size: 14px;
            line-height: 20px;
            text-decoration: none;
            text-align: center;
        }
        .social-icons {
            padding-bottom: 20px;
            text-align: center;
        }
        .social-icons a {
            display: inline-block;
            padding: 0 10px;
        }

        /* --- Media Query para Móviles --- */
        @media screen and (max-width: 600px) {
            .container {
                width: 100% !important;
            }
        }
    </style>
</head>
<body>
<table class="wrapper">
    <tr>
        <td>
            <table class="container">
                <tr>
                    <td class="header">
                        <a href="https://readybpm.com">
                            <img src="https://readybpm.com/images/logocorto.png" class="ReadyBPM Logo">
                        </a>
                    </td>
                </tr>
                <tr>
                    <td class="content">
                        <table>
                            <tr>
                                <td class="title">
                                    Hi <?php echo htmlspecialchars($user->username); ?>,
                                </td>
                            </tr>
                            <tr>
                                <td class="greeting">
                                    <p>Thank you for your purchase. Here's a summary of your order:</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table class="items-table">
                                        <?php foreach($items as $item): ?>
                                            <tr>
                                                <td class="item-row-main">
                                                    <p class="item-name"><?php echo htmlspecialchars($item->name); ?></p>
                                                    <p class="item-description"><?php echo ($is_plan) ? 'Plan de ' . $item->duration . ' days' : 'Individual Product'; ?></p>
                                                </td>
                                                <td class="item-price">$<?php echo number_format($item->price, 2); ?></td>
                                            </tr>
                                        <?php endforeach; ?>
                                    </table>
                                </td>
                            </tr>
                            <tr class="totals-row">
                                <td class="totals-cell">
                                    <p class="totals-text">Total: $<?php echo number_format($orden->total_price, 2); ?></p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="footer">
                        <div class="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=61576190996039">
                                <img src="https://readybpm.com/images/icons/facebook.png" width="24" alt="Facebook">
                            </a>
                            <a href="https://www.instagram.com/readybpm/">
                                <img src="https://readybpm.com/images/instagram.png" width="24" alt="Instagram">
                            </a>
                        </div>
                        <p>&copy; <?php echo date('Y'); ?> ReadyBPM. All rights reserved.</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>