document.addEventListener('DOMContentLoaded', () => {
    const hamburguesa = document.querySelector('.hamburguesa');
    const navegacion = document.querySelector('.navegacion');
    const enlacesMenu = document.querySelectorAll('.navegacion a');
    const fecha = document.querySelector('.fecha');
    const botonCurioso = document.querySelector('.mostrarCurioso');
    const curioso = document.querySelector('.curioso');
  
    // Año actual en el footer
    if (fecha) {
      const year = new Date().getFullYear();
      fecha.textContent = year;
    }
  
    // Menú hamburguesa
    if (hamburguesa && navegacion) {
      hamburguesa.addEventListener('click', () => {
        navegacion.classList.toggle('ocultar');
      });
    }
  
    // Scroll suave
    enlacesMenu.forEach((enlace) => {
      enlace.addEventListener('click', (e) => {
        e.preventDefault();
        const seccion = document.querySelector(enlace.getAttribute('href'));
        if (seccion) {
          seccion.scrollIntoView({ behavior: 'smooth' });
          if (window.innerWidth <= 768) {
            navegacion.classList.add('ocultar');
          }
        }
      });
    });
  
    // Mostrar/ocultar dato curioso
    if (botonCurioso && curioso) {
      botonCurioso.addEventListener('click', () => {
        curioso.classList.toggle('ocultar');
        const audio = curioso.querySelector('audio');
        if (audio) {
          if (!curioso.classList.contains('ocultar')) {
            audio.play();
          } else {
            audio.pause();
            audio.currentTime = 0;
          }
        }
      });
    }
  });
  

  //Botones de aplicaciones
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Eliminar clases activas
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(tab => tab.classList.remove('active'));

      // Activar el seleccionado
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });




  // ... (tu código anterior)

// ——— Código del carrusel ———
const images = document.getElementById("carouselImages");
// Renombramos aquí la variable para evitar el choque con los tabs
const carouselButtons = document.querySelectorAll("#carouselButtons button");
const totalSlides = carouselButtons.length;
let currentIndex = 0;
let interval = setInterval(nextSlide, 3000);

// Llamada inicial para posicionar la primera imagen y activar el primer botón
updateCarousel();

function updateCarousel() {
  images.style.transform = `translateX(-${currentIndex * 100}%)`;
  carouselButtons.forEach((btn, i) => btn.classList.toggle("active", i === currentIndex));
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
  resetInterval();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

// No olvides exponer goToSlide si lo usas inline en el HTML
window.goToSlide = goToSlide;
