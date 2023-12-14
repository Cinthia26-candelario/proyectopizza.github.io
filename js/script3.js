window.onscroll = function() {
    mostrarBoton();
  };

  function mostrarBoton() {
    var botonScrollToTop = document.getElementById('btnScrollToTop');

    // Obtener la altura total de la página
    var alturaPagina = document.body.scrollHeight || document.documentElement.scrollHeight;

    // Obtener la altura visible en la ventana del navegador
    var alturaVentana = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Obtener la posición actual de desplazamiento
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Definir la distancia antes del final de la página para mostrar el botón
    var distanciaAntesDelFinal = 200; // Ajusta este valor según tus preferencias

    // Verificar si estamos cerca del final de la página
    if (alturaPagina - (scrollTop + alturaVentana) < distanciaAntesDelFinal) {
      // Mostrar el botón si estamos cerca del final
      botonScrollToTop.style.display = 'block';
    } else {
      // Ocultar el botón en otras posiciones
      botonScrollToTop.style.display = 'none';
    }
  }

  // Función para realizar el scroll hacia arriba suavemente
  function scrollToTop() {
    // Obtener la posición actual de desplazamiento
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    function animarScroll() {
      // Calcular la nueva posición de desplazamiento
      scrollTop -= Math.min(scrollTop, 80);
      
      // Aplicar la nueva posición de desplazamiento
      document.documentElement.scrollTop = scrollTop;
      document.body.scrollTop = scrollTop;

      // Continuar la animación si no hemos alcanzado la parte superior
      if (scrollTop > 0) {
        requestAnimationFrame(animarScroll);
      }
    }

    // Iniciar la animación
    animarScroll();
  }