<script>
    document.addEventListener('DOMContentLoaded',function () {
        // Busca todos los elementos con la clase 'precio'
        const priceElements = document.querySelectorAll('.precio');

        priceElements.forEach(function (el) {
            // Obtiene el texto completo, ej: "19.90 $/month"
            const fullText = el.textContent.trim();

            // Divide el texto en partes: ["19.90", "$/month"]
            const textParts = fullText.split(' ');
            const priceString = textParts[0];
            const unitString = textParts.slice(1).join(' '); // Une el resto por si acaso

            // Divide el precio en entero y decimal: ["19", "90"]
            const priceParts = priceString.split('.');
            const integerPart = priceParts[0];
            const fractionPart = priceParts[1] ? '.' + priceParts[1] : '';

            // Reemplaza el HTML interno con la nueva estructura
            el.innerHTML = `
            <span class="int">${integerPart}</span>
            <span class="frac-unit">
                <span class="frac">${fractionPart}</span>
                <span class="unit">${unitString}</span>
            </span>
        `;
        });
    });
</script>
<style>
    .bg-success {
        background-color: #20222d;
        color: white;
        padding: 10px 15px;
        border-radius: 4px;
        display: inline-block;
        margin-bottom: 20px;
    }

    .planeshome .contenedor {
        display: flex;
        flex-wrap: wrap;
        justify-content: center; /* Centra los planes horizontalmente */
        align-items: stretch; /* Asegura que todos los planes en una fila tengan la misma altura */
        gap: 30px; /* Espacio entre los planes */
        padding: 20px 0;
    }

    .planeshome .tabla {
        max-width: 350px; /* Límite de ancho para cada plan */
        display: flex;
        flex-direction: column; /* Organiza el contenido del plan verticalmente */
        border: 1px solid #ddd;
        border-radius: 10px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        width: 340px;
    }

    .planeshome .tabla:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    .planeshome .tabla .btn-default {
        margin-top: auto; /* Empuja el botón al final del plan */
    }

    .why-us-title-wrapper h2 {
        color: #fff; /* Color del texto del título */
        margin: 0;
        font-weight: 700;
        text-transform: uppercase;
    }

    .feature-item .icon {
        font-size: 5em; /* Tamaño grande para los iconos */
        color: #ef91ac; /* Color rosado para los iconos */
        margin-bottom: 25px; /* Espacio debajo del icono */
        display: block;
    }

    .feature-item h3 {
        color: #fff; /* Color del texto de las características */
        text-transform: uppercase; /* Texto en mayúsculas */
        font-size: 1.3em;
        font-weight: 600;
        letter-spacing: 1px;
    }

    .section_plan {
        display: flex; /* Activa Flexbox para alinear elementos */
        align-items: center; /* Centra verticalmente el check con el texto */
        text-align: left;
        padding-right: 20px;
        margin: 0px !important; /* Ajusta el margen vertical */
        font-size: 18px;
    }

    .section_plan span, .section_plan h6 {
        font-weight: bold; /* Pone el texto en negrita */
    }

    .fa-check-circle-o {
        color: #04ae05;
        padding-right: 5px;
    }

    .btn-default {
        margin-top: 30px !important;
        margin-bottom: 30px;
        font-size: 16px;
        max-height: 37px;
        max-width: 280px;
    }

    .precio {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
    }

    .precio .int {
        font-size: 100px;
        font-weight: 700;
    }

    .precio .frac-unit {
        display: flex;
        flex-direction: column;
        margin-left: 5px;
    }

    /* Estilo para la parte decimal (ej. ".90") */
    .precio .frac {
        font-size: 50px;
        font-weight: 700;
    }

    /* Estilo para la unidad (ej. "$/month") */
    .precio .unit {
        font-size: 40px;
        font-weight: 400;
    }

    /* --- Estilos para destacar el segundo plan --- */

    /* Selecciona la segunda tarjeta de plan */
    .planeshome .contenedor .tabla:nth-child(2) {
        border: 2px solid #5F47F3; /* Añade el borde de color solicitado */
        position: relative; /* Necesario para posicionar el banner */
        overflow: hidden; /* Evita que el banner se salga de las esquinas redondeadas */
    }

    /* Crea el banner superior usando un pseudo-elemento ::before */
    .planeshome .contenedor .tabla:nth-child(2)::before {
        content: 'Best deal - Limited time only'; /* El texto del banner */
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: #5F47F3; /* Color de fondo del banner */
        color: #fff; /* Color del texto */
        padding: 10px;
        text-align: center;
        font-weight: bold;
        font-size: 1em;
        margin-bottom: 20px;
    }

    .planeshome .contenedor .tabla:nth-child(2) .section_plan:first-child {
        padding-top: 60px !important; /* Aumenta el padding-top del primer elemento */
    }

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
</style>
<div id="ajaxArea" style="margin-top: 60px">
    <div class="pageArea">
        <section id="cuerpo">
            <div class="container planeshome">
                <div class="row">
                    <div class="col-xs-12">
                        <section id="cuerpo" class="planespage">
                            <header class="style4 confirmacion">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="contenedor">
                                            <? if(isset($plans)){  ?>
                                            <? foreach($plans as $plan){ ?>
                                            <div class="tabla tabla hover ">
                                                <div class="section_plan" style="padding-top: 50px;">
                                                    <h2 style="text-transform: capitalize !important;"><?= $plan->name; ?></h2>
                                                </div>
                                                <div class="section_plan">
                                                    <p><? echo $plan->description;  ?></p>
                                                </div>
                                                <div class="section_plan">
                                                    <span class="precio"><? echo $plan->price; ?> $/month</span>
                                                </div>
                                                <a class="btn btn-default"
                                                   href="<? echo base_url(); ?>getplan/?plan_id=<? echo $plan->id; ?>&currency=USD"><b>Choose
                                                    Plan</b>
                                                </a>
                                                <div class="section_plan"><i class="fa fa-check-circle-o"
                                                                             aria-hidden="true"></i>
                                                    <span class=""><? echo $plan->duration; ?></span>
                                                    <span> &nbsp; days of access </span>
                                                </div>

                                                <? if ($plan->ilimitado_activo == 1) { ?>

                                                <div class="section_plan"><i class="fa fa-check-circle-o"
                                                                             aria-hidden="true"></i>
                                                    <span>Descargas Ilimitadas de Audios.</span>
                                                </div>
                                                <? }else{ ?>
                                                <div class="section_plan"><i class="fa fa-check-circle-o"
                                                                             aria-hidden="true"></i>
                                                    <span class="table-tokens-video"><? if ( $plan->tokens_video != 0 && $plan->tokens_video != NULL ) {
                                                        echo $plan->tokens_video;
                                                    } else {
                                                        echo '0';
                                                    } ?></span>
                                                    <span> &nbsp; Audios Downloads </span>
                                                </div>
                                                <? } ?>
                                                <div class="section_plan">
                                                    <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                                    <span> Automatic Renewal </span>
                                                </div>
                                                <div class="section_plan"><i class="fa fa-check-circle-o"
                                                                             aria-hidden="true"></i>
                                                    <span> Advanced Search </span>
                                                </div>
                                                <div class="section_plan"><i class="fa fa-check-circle-o"
                                                                             aria-hidden="true"></i>
                                                    <span> New Products Daily </span>
                                                </div>
                                                <div class="section_plan"><i class="fa fa-check-circle-o"
                                                                             aria-hidden="true"></i>
                                                    <span> 1-Click Downloads </span>
                                                </div>
                                            </div>
                                            <? } ?>
                                            <? } ?>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    </header>
                </div>
        </section>
    </div>
</div>