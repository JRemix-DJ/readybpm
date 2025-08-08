<?php

?>

<style>
    /* Estilos para la zona de arrastrar y soltar */
    #drop-zone {
        border: 3px dashed #ccc;
        border-radius: 15px;
        padding: 60px;
        text-align: center;
        font-size: 1.2em;
        color: #777;
        transition: border-color 0.3s, background-color 0.3s;
        cursor: pointer;
    }
    #drop-zone.dragover {
        border-color: #5f47f3;
        background-color: #f0f0f8;
    }
    #drop-zone i {
        font-size: 3em;
        margin-bottom: 15px;
    }
    /* Ocultamos el input de archivo tradicional */
    #video-input {
        display: none;
    }
    /* Estilos para la previsualización del video */
    #video-preview {
        max-width: 100%;
        margin-top: 20px;
        border-radius: 8px;
        border: 1px solid #ddd;
    }
</style>

<div class="container-fluid">
    <h1 class="h3 mb-4 text-gray-800" style="margin-top: 25px"><?php echo html_escape($title); ?></h1>

    <small style="margin-bottom: 50px">Sugerencia: Subir con este formato: Nombre - Género - BPM</small>

    <div class="card shadow mb-4" style="margin-top: 20px">
        <div class="card-body">

            <div id="drop-zone">
                <i class="fa fa-video-camera"></i>
                <p>Arrastra y suelta tus videos aquí o haz clic para seleccionarlos</p>
            </div>
            <input type="file" id="video-input" accept="video/*" multiple>

            <hr>

            <div id="forms-container">
            </div>

            <div id="upload-all-container" style="display: none;">
                <button id="upload-all-btn" class="btn btn-success btn-lg btn-block">
                    Procesar y Guardar <span id="file-count">0</span> Video(s)
                </button>
                <div id="progress-bar-container" class="progress mt-3" style="height: 20px; display: none;">
                    <div id="progress-bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                </div>
            </div>

        </div>
    </div>
</div>

<script>
    const genresList = <?php echo isset($generos) ? json_encode($generos) : '[]'; ?>;
    let videoQueue = []; // Cola para almacenar los archivos de video

    document.addEventListener('DOMContentLoaded', () => {
        const dropZone = document.getElementById('drop-zone');
        const videoInput = document.getElementById('video-input');
        const formsContainer = document.getElementById('forms-container');
        const uploadAllContainer = document.getElementById('upload-all-container');
        const uploadAllBtn = document.getElementById('upload-all-btn');
        const fileCountSpan = document.getElementById('file-count');
        const progressBar = document.getElementById('progress-bar');
        const progressBarContainer = document.getElementById('progress-bar-container');

        // --- Lógica de Arrastrar, Soltar y Seleccionar Archivos ---
        dropZone.addEventListener('click', () => videoInput.click());
        videoInput.addEventListener('change', (e) => handleFiles(e.target.files));

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, preventDefaults, false);
            document.body.addEventListener(eventName, preventDefaults, false);
        });
        function preventDefaults(e) { e.preventDefault(); e.stopPropagation(); }

        ['dragenter', 'dragover'].forEach(eventName => dropZone.addEventListener(eventName, () => dropZone.classList.add('dragover')));
        ['dragleave', 'drop'].forEach(eventName => dropZone.addEventListener(eventName, () => dropZone.classList.remove('dragover')));

        dropZone.addEventListener('drop', (e) => handleFiles(e.dataTransfer.files));

        function handleFiles(files) {
            const newFiles = [...files].filter(file => file.type.startsWith('video/'));
            if (newFiles.length === 0) return;

            newFiles.forEach(file => {
                const fileId = `file-${Date.now()}-${Math.random()}`;
                videoQueue.push({ id: fileId, file: file });
                createFormForFile(file, fileId);
            });

            updateUploadButton();
        }

        function createFormForFile(file, fileId) {
            // Variable para el nombre que se irá limpiando
            let displayName = (file.name.substring(0, file.name.lastIndexOf('.')) || file.name).trim();

            const formWrapper = document.createElement('div');
            formWrapper.id = fileId;
            formWrapper.className = 'card shadow-sm mb-3';

            formWrapper.innerHTML = `
        <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                    <video src="${URL.createObjectURL(file)}" controls style="width: 100%; border-radius: 5px;"></video>
                </div>
                <div class="col-md-9">
                    <form class="video-upload-form">
                        <div class="form-group">
                            <label>Nombre:</label>
                            <input type="text" class="form-control" name="name" value="" required>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label>Género:</label>
                                <select class="form-control" name="genre_id" required>
                                    <option value="">-- Selecciona --</option>
                                    ${genresList.map(g => `<option value="${g.id}">${g.name}</option>`).join('')}
                                </select>
                            </div>
                            <div class="col-md-6 form-group">
                                <label>BPM:</label>
                                <input type="number" class="form-control" name="bpm">
                            </div>
                        </div>

                        <div class="form-check mb-2">
                            <input class="form-check-input demo-checkbox" type="checkbox" id="auto-demo-${fileId}" checked>
                            <label class="form-check-label" for="auto-demo-${fileId}">
                                Generar Demo Automáticamente
                            </label>
                        </div>

                        <div class="manual-demo-container" style="display: none;">
                            <label>Subir Demo Manual:</label>
                            <input type="file" class="form-control-file manual-demo-input" accept="video/*">
                        </div>

                        <button type="button" class="btn btn-sm btn-danger remove-btn mt-3">Quitar</button>
                    </form>
                </div>
            </div>
        </div>
    `;
            formsContainer.appendChild(formWrapper);

            const form = formWrapper.querySelector('form');

            // 1. Auto-rellenar y limpiar BPM
            const bpmRegex = /(\b\d{2,3}\s?bpm\b|\[\d{2,3}\])/i;
            const bpmMatch = displayName.match(bpmRegex);
            if (bpmMatch) {
                const bpmValue = bpmMatch[0].match(/\d{2,3}/)[0];
                form.bpm.value = bpmValue;
                displayName = displayName.replace(bpmMatch[0], '').trim(); // Limpiar nombre
            }

            // 2. Auto-rellenar y limpiar Género
            for (const genre of genresList) {
                const genreRegex = new RegExp(`\\b${genre.name}\\b`, 'i');
                const genreMatch = displayName.match(genreRegex);
                if (genreMatch) {
                    form.genre_id.value = genre.id;
                    displayName = displayName.replace(genreMatch[0], '').trim(); // Limpiar nombre
                    break;
                }
            }

            // 3. Limpieza final y asignación del nombre limpio
            displayName = displayName.replace(/[\s-_]+$/, '').trim();
            form.name.value = displayName;

            const demoCheckbox = formWrapper.querySelector('.demo-checkbox');
            const manualDemoContainer = formWrapper.querySelector('.manual-demo-container');

            demoCheckbox.addEventListener('change', function() {
                // Muestra el contenedor de subida manual si el checkbox está desmarcado
                manualDemoContainer.style.display = this.checked ? 'none' : 'block';
            });

            // Lógica del botón para quitar de la cola
            formWrapper.querySelector('.remove-btn').addEventListener('click', () => {
                videoQueue = videoQueue.filter(item => item.id !== fileId);
                formWrapper.remove();
                updateUploadButton();
            });
        }

        function updateUploadButton() {
            const count = videoQueue.length;
            uploadAllContainer.style.display = count > 0 ? 'block' : 'none';
            fileCountSpan.textContent = count;
        }

        // --- Lógica de Subida al Servidor (sin cambios) ---
        uploadAllBtn.addEventListener('click', async () => {
            if (videoQueue.length === 0) return;

            uploadAllBtn.disabled = true;
            uploadAllBtn.textContent = 'Procesando...';
            progressBarContainer.style.display = 'flex';
            progressBar.style.width = '0%';
            progressBar.textContent = '0%';

            for (let i = 0; i < videoQueue.length; i++) {
                const item = videoQueue[i];
                const formWrapper = document.getElementById(item.id);
                const formElement = formWrapper.querySelector('form');
                const demoCheckbox = formWrapper.querySelector('.demo-checkbox');
                const manualDemoInput = formWrapper.querySelector('.manual-demo-input');

                const formData = new FormData(formElement);
                formData.append('video_file', item.file, item.file.name);

                // **NUEVA LÓGICA para decidir qué tipo de demo enviar**
                if (demoCheckbox.checked) {
                    // Si el checkbox está marcado, solicitamos demo automática
                    formData.append('create_demo', 'true');
                } else if (manualDemoInput.files.length > 0) {
                    // Si no, y hay un archivo manual, lo adjuntamos
                    const manualDemoFile = manualDemoInput.files[0];
                    formData.append('manual_demo_file', manualDemoFile, manualDemoFile.name);
                }

                try {
                    const response = await fetch('<?php echo site_url("admin/process_video"); ?>', {
                        method: 'POST',
                        body: formData
                    });
                    const result = await response.json();

                    if (!result.success) {
                        alert(`Error al subir ${item.file.name}: ${result.error}`);
                    }
                } catch (error) {
                    alert(`Error de red al subir ${item.file.name}.`);
                }

                const progress = Math.round(((i + 1) / videoQueue.length) * 100);
                progressBar.style.width = `${progress}%`;
                progressBar.textContent = `${progress}%`;
            }

            alert('Proceso de subida finalizado.');
            window.location.reload();
        });
    });
</script>