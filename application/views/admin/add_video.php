<style>
    /* Estilos para la zona principal de videos */
    #drop-zone { border: 3px dashed #ccc; border-radius: 15px; padding: 60px; text-align: center; font-size: 1.2em; color: #777; transition: all 0.3s; cursor: pointer; }
    #drop-zone.dragover { border-color: #5f47f3; background-color: #f0f0f8; }
    #drop-zone i { font-size: 3em; margin-bottom: 15px; }
    #video-input { display: none; }

    /* --- NUEVOS ESTILOS PARA LA ZONA DE DEMO --- */
    .demo-drop-zone {
        border: 2px dashed #adb5bd;
        border-radius: 8px;
        padding: 25px;
        text-align: center;
        font-size: 1em;
        color: #6c757d;
        cursor: pointer;
        transition: all 0.3s;
        position: relative;
    }
    .demo-drop-zone.dragover {
        border-color: #007bff;
        background-color: #e9f5ff;
    }
    .demo-drop-zone.has-file {
        border-color: #28a745;
        background-color: #f0fff4;
        color: #155724;
    }
    .demo-drop-zone p {
        margin: 0;
    }
</style>

<div class="container-fluid">
    <h1 class="h3 mb-4 text-gray-800" style="margin-top: 25px"><?php echo html_escape($title); ?></h1>
    <small style="margin-bottom: 50px">Sugerencia de formato para autocompletar: Nombre de la Canción - Género - 128BPM</small>
    <div class="card shadow mb-4" style="margin-top: 20px">
        <div class="card-body">
            <div id="drop-zone">
                <i class="fa fa-video-camera"></i>
                <p>Arrastra y suelta tus videos aquí o haz clic para seleccionarlos</p>
            </div>
            <input type="file" id="video-input" accept="video/*" multiple>
            <hr>
            <div id="forms-container"></div>
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
    let videoQueue = [];

    document.addEventListener('DOMContentLoaded', () => {
        const dropZone = document.getElementById('drop-zone');
        const videoInput = document.getElementById('video-input');
        const formsContainer = document.getElementById('forms-container');
        const uploadAllContainer = document.getElementById('upload-all-container');
        const uploadAllBtn = document.getElementById('upload-all-btn');
        const fileCountSpan = document.getElementById('file-count');
        const progressBar = document.getElementById('progress-bar');
        const progressBarContainer = document.getElementById('progress-bar-container');

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
            [...files].filter(file => file.type.startsWith('video/')).forEach(file => {
                const fileId = `file-${Date.now()}-${Math.random()}`;
                videoQueue.push({ id: fileId, file: file });
                createFormForFile(file, fileId);
            });
            updateUploadButton();
        }

        function createFormForFile(file, fileId) {
            let displayName = (file.name.substring(0, file.name.lastIndexOf('.')) || file.name).trim();

            const formWrapper = document.createElement('div');
            formWrapper.id = fileId;
            formWrapper.className = 'card shadow-sm mb-3';

            // <<< PLANTILLA HTML CON LA ZONA DE DEMO DRAG & DROP >>>
            formWrapper.innerHTML = `
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3"><video src="${URL.createObjectURL(file)}" controls style="width: 100%; border-radius: 5px;"></video></div>
                        <div class="col-md-9">
                            <form class="video-upload-form">
                                <div class="form-group"><label>Nombre:</label><input type="text" class="form-control" name="name" required></div>
                                <div class="row">
                                    <div class="col-md-6 form-group"><label>Género:</label><select class="form-control" name="genre_id" required><option value="">-- Selecciona --</option>${genresList.map(g => `<option value="${g.id}">${g.name}</option>`).join('')}</select></div>
                                    <div class="col-md-6 form-group"><label>BPM:</label><input type="number" class="form-control" name="bpm"></div>
                                </div>
                                <div class="form-group">
                                    <label><strong>Demo Manual (Obligatorio):</strong></label>
                                    <div class="demo-drop-zone"><p>Arrastra y suelta el video DEMO aquí o haz clic</p></div>
                                    <input type="file" class="manual-demo-input" accept="video/*" required style="display: none;">
                                </div>
                                <button type="button" class="btn btn-sm btn-danger remove-btn mt-3">Quitar</button>
                            </form>
                        </div>
                    </div>
                </div>
            `;
            formsContainer.appendChild(formWrapper);

            // --- LÓGICA DE DRAG & DROP PARA EL DEMO ---
            const demoDropZone = formWrapper.querySelector('.demo-drop-zone');
            const demoInput = formWrapper.querySelector('.manual-demo-input');

            demoDropZone.addEventListener('click', () => demoInput.click());
            demoInput.addEventListener('change', (e) => handleDemoFile(e.target.files[0]));

            ['dragenter', 'dragover'].forEach(eventName => demoDropZone.addEventListener(eventName, () => demoDropZone.classList.add('dragover')));
            ['dragleave', 'drop'].forEach(eventName => demoDropZone.addEventListener(eventName, () => demoDropZone.classList.remove('dragover')));

            demoDropZone.addEventListener('drop', (e) => {
                const files = e.dataTransfer.files;
                if (files.length > 0 && files[0].type.startsWith('video/')) {
                    demoInput.files = files; // Asignamos el archivo al input oculto
                    handleDemoFile(files[0]);
                }
            });

            function handleDemoFile(demoFile) {
                if (!demoFile) return;
                demoDropZone.innerHTML = `<p><strong>Demo cargado:</strong><br>${demoFile.name}</p>`;
                demoDropZone.classList.add('has-file');
            }

            // Lógica de auto-rellenado (sin cambios)
            const form = formWrapper.querySelector('form');
            const bpmRegex = /(\b\d{2,3}\s?bpm\b|\[\d{2,3}\])/i;
            const bpmMatch = displayName.match(bpmRegex);
            if (bpmMatch) {
                form.bpm.value = bpmMatch[0].match(/\d{2,3}/)[0];
                displayName = displayName.replace(bpmMatch[0], '').trim();
            }
            for (const genre of genresList) {
                const genreRegex = new RegExp(`\\b${genre.name}\\b`, 'i');
                if (displayName.match(genreRegex)) {
                    form.genre_id.value = genre.id;
                    displayName = displayName.replace(genreRegex, '').trim();
                    break;
                }
            }
            form.name.value = displayName.replace(/[\s-_]+$/, '').trim();

            formWrapper.querySelector('.remove-btn').addEventListener('click', () => {
                videoQueue = videoQueue.filter(item => item.id !== fileId);
                formWrapper.remove();
                updateUploadButton();
            });
        }

        function updateUploadButton() {
            uploadAllContainer.style.display = videoQueue.length > 0 ? 'block' : 'none';
            fileCountSpan.textContent = videoQueue.length;
        }

        // --- Lógica de Subida al Servidor ACTUALIZADA ---
        uploadAllBtn.addEventListener('click', async () => {
            let allDemosProvided = true;
            for (const item of videoQueue) {
                const formWrapper = document.getElementById(item.id);
                const manualDemoInput = formWrapper.querySelector('.manual-demo-input');
                const demoDropZone = formWrapper.querySelector('.demo-drop-zone');
                if (manualDemoInput.files.length === 0) {
                    allDemosProvided = false;
                    demoDropZone.style.borderColor = 'red';
                    alert(`Error: Falta el archivo DEMO para el video "${item.file.name}".`);
                    break;
                } else {
                    demoDropZone.style.borderColor = '#28a745';
                }
            }
            if (!allDemosProvided) return;

            uploadAllBtn.disabled = true;
            uploadAllBtn.textContent = 'Procesando...';
            progressBarContainer.style.display = 'flex';
            progressBar.style.width = '0%';
            progressBar.textContent = '0%';

            for (let i = 0; i < videoQueue.length; i++) {
                const item = videoQueue[i];
                const formWrapper = document.getElementById(item.id);
                const formElement = formWrapper.querySelector('form');
                const manualDemoInput = formWrapper.querySelector('.manual-demo-input');

                const formData = new FormData(formElement);
                formData.append('video_file', item.file, item.file.name);
                formData.append('manual_demo_file', manualDemoInput.files[0], manualDemoInput.files[0].name);

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