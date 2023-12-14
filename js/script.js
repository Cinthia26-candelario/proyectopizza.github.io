document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".slider__track");
  const slides = document.querySelectorAll(".slider__slide");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let currentIndex = 0;

  function updateSlider() {
    const newTransformValue = -currentIndex * 100 + "%";
    track.style.transform = "translateX(" + newTransformValue + ")";
    nextBtn.disabled = currentIndex === slides.length - 1;
    prevBtn.disabled = currentIndex === 0;
  }

  function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
      currentIndex = index;
      updateSlider();
    }
  }

  document.getElementById("prevBtn").addEventListener("click", function () {
    goToSlide(currentIndex - 1);
  });

  document.getElementById("nextBtn").addEventListener("click", function () {
    goToSlide(currentIndex + 1);
  });

  // Deshabilitar el botón "Anterior" al inicio
  prevBtn.disabled = true;

  // Actualizar el slider después de cargar la página
  updateSlider();

  // Verificar eventos en la consola
  nextBtn.addEventListener("click", function () {
    console.log("Botón Siguiente clickeado");
  });

  prevBtn.addEventListener("click", function () {
    console.log("Botón Anterior clickeado");
  });
});