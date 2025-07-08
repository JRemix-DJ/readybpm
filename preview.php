<?php
// preview.php

$title       = 'Video Remix Pool';
$description = 'Música para Djs y Vjs…';

// Cambia base_url para el server embebido en el puerto 8000
function base_url($path = '') {
    // El servidor embebido sirve desde la raíz de tu proyecto
    return 'http://localhost:8000/' . ltrim($path, '/');
}

$plans = [
    (object)[
        'name'             => 'Plan Básico',
        'description'      => 'Acceso limitado',
        'price'            => 5,
        'duration'         => 30,
        'ilimitado_activo' => 0,
        'tokens_video'     => 3,
    ]
];

include __DIR__ . '/application/views/home.php';
