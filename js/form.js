
// Función para validar el formulario
document.getElementById('formularioContacto').addEventListener('submit', function (event) {
    event.preventDefault();
    let valid = true;

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    if (nombre === '') {
        valid = false;
        document.getElementById('errorNombre').textContent = 'Este campo es obligatorio.';
    } else {
        document.getElementById('errorNombre').textContent = '';
    }

    if (apellido === '') {
        valid = false;
        document.getElementById('errorApellido').textContent = 'Este campo es obligatorio.';
    } else {
        document.getElementById('errorApellido').textContent = '';
    }

    if (email === '') {
        valid = false;
        document.getElementById('errorEmail').textContent = 'Este campo es obligatorio.';
    } else {
        document.getElementById('errorEmail').textContent = '';
    }

    if (telefono === '') {
        valid = false;
        document.getElementById('errorTelefono').textContent = 'Este campo es obligatorio.';
    } else {
        document.getElementById('errorTelefono').textContent = '';
    }


    const curso = document.getElementById('curso').value;
    if (curso === '') {
        valid = false;
        document.getElementById('errorCurso').textContent = 'Debes seleccionar un curso.';
    } else {
        document.getElementById('errorCurso').textContent = '';
    }


    if (!valid) {
        event.preventDefault(); // Evitar el envío del formulario si hay errores
    } else {
        // Los datos son válidos, se puede mostrar el mensaje de agradecimiento

        // Ocultar el formulario
        document.getElementById('formularioContacto').style.display = 'none';

        // Mostrar el mensaje de agradecimiento
        document.getElementById('agradecimiento').style.display = 'block';
    }




    const formData = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        mensaje: document.getElementById('mensaje').value,
        curso: curso,
    };

    // Guarda los datos en el localStorage
    localStorage.setItem('formData', JSON.stringify(formData));


});