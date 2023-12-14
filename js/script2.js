function mostrarAlerta(mensaje, exito =false) {
  var alerta = document.getElementById('custom-alert');
  var mensajeElement = document.getElementById('custom-alert-message');
  
  mensajeElement.innerText = mensaje;
  alerta.style.display = 'block';
  alerta.classList.remove('exito', 'error');
  

  // Agregar clase de éxito o error según sea necesario
  if (exito) {
    alerta.classList.add('exito');
  } else {
    alerta.classList.add('error');
  }
  setTimeout(function() {
    alerta.style.display = 'none';
  }, 3000);
}

function validarFormulario() {
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;

  if (nombre === '' || email === '' || mensaje === '') {
    mostrarAlerta('Error: Campos de entrada vacíos.');

  } else {
    mostrarAlerta('¡Formulario enviado con éxito!', true);
  }
}