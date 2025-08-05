<style>
    /* ---- Estilos para el nuevo buscador ---- */

    /* Contenedor principal de color púrpura */
    .search-hero-section {
        background-color: #5F47F3;
        text-align: center;
        color: #ffffff;
    }

    /* Título principal */
    .search-hero-section h2 {
        font-size: 2.5em; /* Tamaño de letra grande */
        font-weight: 700; /* Letra en negrita */
        margin-bottom: 30px; /* Espacio debajo del título */
    }

    /* Contenedor interno del formulario */
    .search-form-inner {
        display: flex; /* Usamos flexbox para alinear los elementos */
        justify-content: center; /* Centramos horizontalmente */
        align-items: center; /* Centramos verticalmente */
        gap: 15px; /* Espacio entre el input y el botón */
    }

    .form-control{
        height: 45px;
    }

    /* Wrapper que contiene el dropdown y el campo de texto */
    .form-control-wrapper {
        display: flex;
        background-color: #fff;
        border-radius: 50px; /* Bordes completamente redondeados */
        padding: 5px 20px 5px 20px; /* Espaciado interno */
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    /* Estilos para el SELECT (género) y el INPUT (texto) */
    .search-form-inner select,
    .search-form-inner input {
        border: none;
        background: transparent;
        outline: none; /* Quita el borde que aparece al hacer clic */
    }

    /* Estilo específico para el selector de género */
    .search-form-inner select {
        color: #555;
        font-weight: 500;
        border-right: 1px solid #e0e0e0; /* Línea divisoria */
        margin-right: 10px;
        padding-right: 10px;
    }

    /* Estilo para el campo de búsqueda de texto */
    .search-form-inner input#sname {
        width: 350px; /* Ancho del campo de búsqueda */
        padding: 10px;
        font-size: 16px;
        color: #333;
    }
    .search-form-inner input#sname::placeholder {
        color: #999;
    }

    /* Estilo para el botón de búsqueda */
    .search-form-inner button#buscar-ahora {
        display: flex;
        border-radius: 50px; /* Bordes completamente redondeados */
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        background-color: #FFDD00; /* Color de fondo amarillo */
        color: #ffffff; /* Color del ícono */
        border: none;
        width: 200px;
        height: 55px;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s ease; /* Transición suave */
    }

    .search-form-inner button#buscar-ahora:hover {
        background-color: #ffe432; /* Color al pasar el mouse */
        cursor: pointer;
    }
</style>
<div class="search-hero-section">
    <div class="container" style="background-color: #5F47F3;">
        <h2>Find your favourite song here</h2>

        <form class="search-form" method="get" action="<?php echo site_url('search'); ?>">
            <div class="search-form-inner">

                <div class="form-control-wrapper">
                    <select name="sgenero" id="sgenero" class="form-control" style="width: 200px;">
                        <option value="">Genre</option>
                        <?php foreach ($generos as $genero_) { ?>
                            <option value="<?php echo html_escape($genero_->id); ?>" <?php
                            if (isset($sgenero) && $sgenero == $genero_->id) {
                                echo 'selected';
                            }
                            ?>><?php echo html_escape($genero_->name); ?></option>
                        <?php } ?>
                    </select>
                    <input placeholder="Search by name" type="text" name="sname" id="sname" <?php if (isset($sname)) { echo 'value="'.$sname.'"'; } ?>/>
                </div>
                <button class="btn btn-default" id="buscar-ahora" type="submit">Search</button>
            </div>
        </form>
    </div>
</div>
