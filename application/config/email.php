<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$config['protocol'] = 'mail'; // O 'smtp' si usarás un servidor externo
$config['charset'] = 'utf-8';
$config['mailtype'] = 'html';
$config['wordwrap'] = TRUE;
$config['from_email'] = EMAIL_NOREPLY; // Usamos la constante definida
$config['from_name'] = 'ReadyBPM';

/*
|--------------------------------------------------------------------------
| Configuración SMTP (Opcional)
|--------------------------------------------------------------------------
|
| Si cambias el protocolo a 'smtp', descomenta y rellena estas líneas
| con los datos de tu proveedor de correo (Gmail, SendGrid, etc.).
|
| $config['smtp_host'] = 'ssl://smtp.googlemail.com';
| $config['smtp_port'] = 465;
| $config['smtp_user'] = 'tu_correo@gmail.com';
| $config['smtp_pass'] = 'tu_contraseña_de_aplicacion';
| $config['smtp_timeout'] = 20;
| $config['newline'] = "\r\n";
|
*/