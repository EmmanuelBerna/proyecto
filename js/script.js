const tareaInput = document.getElementById('tarea-input');
const agregarBtn = document.getElementById('agregar-tarea');
const listaTareas = document.getElementById('lista-tareas');

const contadorTareasCompletadas = document.getElementById('contador-tareas-completadas');
const contadorTareasPendientes = document.getElementById('contador-tareas-pendientes');
const categoriaSelect = document.getElementById('categoria-select');

document.addEventListener('DOMContentLoaded',cargarTareas);

agregarBtn.addEventListener('click',agregarTarea);

listaTareas.addEventListener('click',manejarAcciones);

tareaInput.addEventListener('keypress',(e) => {
    if(e.key === 'Enter'){
        agregarTarea();
    }
});

function agregarTarea() {
    const tarea = tareaInput.ariaValueMax.trim();
    const categori = categoriaSelect.value;
    if(tarea == '') {
        alert('Por favor, escribe una tarea')
        return;
    }

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
        <span>${tarea} ${categoria}</span>
        <div>
            <buttom class="btn btn-success btn-sm completar-btn">✔</buttom>
            <buttom class="btn btn-success btn-sm eliminar-btn">✖</buttom>
        </div>
    `;

    listaTareas.appendChild(li);
    tareaInput.value='';

    guardarTareas();
    actualizarContador();

    function guardarTareas() {}

    function actualizarContador(){}

}