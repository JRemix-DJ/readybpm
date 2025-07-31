<!DOCTYPE html>
<html lang="es">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <style type="text/css">
        /* --- ESTILOS GENERALES --- */
        body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
            font-family: 'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', 'Roboto', Helvetica, Arial, sans-serif;
            background-color: #EEEEEE;
        }

        table {
            border-collapse: collapse !important;
            width: 100%;
        }

        a { text-decoration: none; }
        img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }

        /* --- ESTRUCTURA PRINCIPAL --- */
        .wrapper {
            background-color: #EEEEEE;
            width: 100%;
        }
        .container {
            width: 700px;
            margin: 0 auto;
            background-color: #FFFFFF;
        }

        /* --- SECCIONES --- */
        .header { padding: 40px 30px; }
        .intro { background-color: #F8F8F8; padding: 40px 30px; }
        .details { padding: 40px 30px; }
        .items { padding: 0 30px; }
        .total { padding: 20px 30px 40px 30px; }
        .footer { background-color: #1F2225; padding: 40px 30px; }

        /* --- TEXTOS Y TÍTULOS --- */
        .title {
            font-family: 'Montserrat', Arial, sans-serif;
            font-size: 28px;
            font-weight: 700;
            color: #1F2225;
            margin: 0;
        }
        .subtitle {
            font-size: 18px;
            font-weight: 400;
            color: #969AA1;
            margin: 15px 0 0 0;
        }
        .billing-title {
            font-size: 17px;
            color: #1F2225;
            margin-bottom: 15px;
        }
        .billing-info {
            font-size: 14px;
            color: #969AA1;
            line-height: 1.5;
        }

        /* --- TABLA DE ITEMS --- */
        .item-table {
            width: 100%;
            text-align: left;
        }
        .item-table th, .item-table td {
            padding: 15px 0;
            border-bottom: 1px solid #EEEEEE;
            vertical-align: top;
        }
        .item-table .item-name {
            font-size: 16px;
            font-weight: 700;
            color: #1F2225;
        }
        .item-table .item-description {
            font-size: 14px;
            color: #969AA1;
        }
        .total-label {
            font-size: 16px;
            font-weight: 700;
            color: #1F2225;
            text-align: left;
        }
        .total-value {
            font-size: 16px;
            font-weight: 700;
            color: #1F2225;
            text-align: right;
        }

        /* --- FOOTER --- */
        .footer-logo {
            width: 38px;
            max-width: 38px;
        }
        .social-icons a {
            display: inline-block;
            padding: 0 10px;
        }
        .footer-links {
            text-align: right;
        }
        .footer-links a {
            font-size: 14px;
            color: #969AA1;
            display: block;
            margin-bottom: 10px;
        }
        .copyright {
            color: #969AA1;
            font-size: 14px;
            padding-top: 30px;
            border-top: 1px solid #2B2E32;
            margin-top: 30px;
            text-align: left;
        }
        .copyright a {
            color: #969AA1;
        }

        /* --- RESPONSIVE --- */
        @media screen and (max-width: 699px) {
            .container { width: 100% !important; }
            .header, .intro, .details, .items, .total, .footer { padding: 20px !important; }
            .billing-column { display: block !important; width: 100% !important; margin-bottom: 20px; }
            .footer-logo-col, .footer-links-col { display: block !important; width: 100% !important; text-align: center !important; }
            .footer-links { text-align: center !important; padding-top: 20px; }
        }
    </style>
</head>
<body>
<table class="wrapper" border="0" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
        <td align="center">
            <table class="container" border="0" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                    <td class="header">
                        <a href="https://readybpm.com">
                            <img src="https://readybpm.com/images/logocorto.png" width="105" alt="ReadyBPM Logo">
                        </a>
                    </td>
                </tr>
                <tr>
                    <td class="intro">
                        <h1 class="title">Hola <?php echo $user->username; ?>,</h1>
                        <p class="subtitle">Gracias por tu pago. Aquí tienes un resumen de tu pedido:</p>
                    </td>
                </tr>
                <tr>
                    <td class="details">
                        <h2 class="billing-title">Facturado a:</h2>
                        <p class="billing-info">
                            <?php echo $user->email; ?><br>
                            <strong><?php echo ($renovacion == 1) ? 'Renovación' : 'Orden'; ?> No:</strong> <?php echo $orden->id; ?>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td class="items">
                        <table class="item-table" border="0" cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th style="padding-bottom: 10px;">Descripción</th>
                                <th style="padding-bottom: 10px; text-align: right;">Precio</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php foreach($items as $item): ?>
                                <tr>
                                    <td>
                                        <div class="item-name"><?php echo $item->name; ?></div>
                                        <div class="item-description"><?php echo ($is_plan) ? 'Plan de ' . $item->duration . ' días' : 'Producto individual'; ?></div>
                                    </td>
                                    <td style="text-align: right;">$<?php echo number_format($item->price, 2); ?></td>
                                </tr>
                            <?php endforeach; ?>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="total">
                        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                            <?php if(isset($cupon)): ?>
                                <tr>
                                    <td class="total-label" style="padding-bottom: 10px;">Descuento</td>
                                    <td class="total-value" style="padding-bottom: 10px;">-$<?php echo number_format($orden->total_discount, 2); ?></td>
                                </tr>
                            <?php endif; ?>
                            <tr style="border-top: 2px solid #EEEEEE; ">
                                <td class="total-label" style="padding-top: 15px;">Total</td>
                                <td class="total-value" style="padding-top: 15px;">$<?php echo number_format($orden->total_price, 2); ?></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="footer-logo-col" style="width: 50%; text-align: left; vertical-align: top;">
                                    <a href="https://readybpm.com/">
                                        <img src="https://readybpm.com/images/icon-white.png" alt="ReadyBPM" class="footer-logo">
                                    </a>
                                </td>
                                <td class="footer-links-col" style="width: 50%; vertical-align: top;">
                                    <div class="footer-links">
                                        <a href="https://readybpm.com/faq/">FAQ</a>
                                        <a href="https://readybpm.com/pages/terms_conditions/">Terminos & Condiciones</a>
                                        <a href="https://readybpm.com">Visitar Sitio Web</a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="copyright">
                                    &copy; <?php echo date('Y'); ?> ReadyBPM. Todos los derechos reservados.
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