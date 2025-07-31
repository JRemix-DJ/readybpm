<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$config['protocol']    = 'smtp';
$config['smtp_host']   = 'mail.readybpm.com';
$config['smtp_port']   = 465;
$config['smtp_crypto'] = 'ssl';
$config['smtp_user']   = 'noreply@readybpm.com';
$config['smtp_pass']   = 'q+.W0jYuR%J6';
$config['smtp_timeout'] = 30;

$config['charset']     = 'utf-8';
$config['mailtype']    = 'html';
$config['wordwrap']    = FALSE;
$config['newline']     = "\r\n"; // Necesario para algunos servidores SMTP

// Asegurarse de que el remitente que ve el usuario sea el correcto
$config['from_email']  = EMAIL_NOREPLY; // Usa la constante 'noreply@readybpm.com'
$config['from_name']   = 'ReadyBPM';