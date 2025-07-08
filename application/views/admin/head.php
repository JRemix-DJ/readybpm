<? $this->load->helper('url'); ?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    

    <!-- Twitter -->
    <meta name="twitter:site" content="">
    <meta name="twitter:creator" content="">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<? echo $title; ?>">
    <meta name="twitter:description" content="<? echo $description; ?>">
    <meta name="twitter:image" content="">

    <!-- Facebook -->
    <meta property="og:url" content="<? echo base_url(); ?>">
    <meta property="og:title" content="<? echo $title; ?>">
    <meta property="og:description" content="<? echo $description; ?>">

    <meta property="og:image" content="">
    <meta property="og:image:secure_url" content="">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="600">

    <!-- Meta -->
    <meta name="description" content="<? echo $description; ?>">
    <meta name="author" content="<? echo $title; ?>">

    <title><? echo $title; ?></title>
    <link rel="shortcut icon" href="<? echo base_url(); ?>images/icons/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href="<? echo base_url(); ?>images/icons/apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="57x57" href="<? echo base_url(); ?>images/icons/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="72x72" href="<? echo base_url(); ?>images/icons/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="<? echo base_url(); ?>images/icons/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="<? echo base_url(); ?>images/icons/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="<? echo base_url(); ?>images/icons/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="<? echo base_url(); ?>images/icons/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="<? echo base_url(); ?>images/icons/apple-touch-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="180x180" href="<? echo base_url(); ?>images/icons/apple-touch-icon-180x180.png" />

    <link rel="shortcut icon" sizes="196x196" href="<? echo site_url(); ?>images/favicon.png">
    <!-- vendor css -->
    <link href="<? echo site_url(); ?>admin_assets/lib/font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="<? echo site_url(); ?>admin_assets/lib/Ionicons/css/ionicons.css" rel="stylesheet">
    <link href="<? echo site_url(); ?>admin_assets/lib/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet">
    <link href="<? echo site_url(); ?>admin_assets/lib/rickshaw/rickshaw.min.css" rel="stylesheet">
    
    <link href="<? echo site_url(); ?>admin_assets/lib/select2/css/select2.min.css" rel="stylesheet">
    <link rel="stylesheet" href="<? echo site_url(); ?>css/font-awesome.min.css">
    <!-- aditional css -->
    <? if(isset($aditional_stylesheets)){ ?>
        <? echo $aditional_stylesheets; ?>
    <? } ?>

    <? if(isset($stylesheets)){
        foreach($stylesheets as $style){
            echo '<link href="'.$style.'" rel="stylesheet">';
        }
     } ?>

    <!-- Starlight CSS -->
    <link rel="stylesheet" href="<? echo site_url(); ?>admin_assets/css/starlight.css">
  </head>

  <body>