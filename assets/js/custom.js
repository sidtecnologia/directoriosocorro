// File: scripts.js

// 1. Fade-in effect on scroll
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeInElements.forEach(element => observer.observe(element));
});

// ✅ Obtener elementos del DOM
const searchButton = document.getElementById('searchButton');
const closeSearchModal = document.getElementById('closeSearchModal');
const searchModal = document.getElementById('searchModal');
const startSearchBtn = document.getElementById('startSearchBtn');
const searchInput = document.getElementById('searchInput');

// ✅ Ocultar modal al cargar
if (searchModal) {
  searchModal.style.display = 'none';
}

// ✅ Abrir modal
if (searchButton && searchModal) {
  searchButton.addEventListener('click', () => {
    searchModal.style.display = 'flex';
  });

  closeSearchModal.addEventListener('click', () => {
    searchModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchModal.style.display = 'none';
    }
  });
}

// ✅ Función para cerrar modal
function closeSearchModalFunction() {
  if (searchModal) {
    searchModal.style.display = 'none';
  }
}

if (startSearchBtn && searchInput) {
  startSearchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      // Calcula la carpeta base de tu proyecto
      const base = window.location.origin + '/' + window.location.pathname.split('/')[1];
      window.location.href = `/resultados.html?q=${encodeURIComponent(query)}`;
    } else {
      alert('Por favor, ingresa un término de búsqueda.');
    }
  });
}

  const params = new URLSearchParams(window.location.search);
  const searchTerm = params.get('q');

  if (searchTerm) {
    const normalized = searchTerm.toLowerCase().trim();

    // Busca todos los elementos de texto del body
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

    let found = false;
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeValue.toLowerCase().includes(normalized)) {
        const span = document.createElement('span');
        span.style.background = 'yellow';
        span.textContent = node.nodeValue;

        const highlight = span.textContent.replace(new RegExp(normalized, 'gi'), `<mark>$&</mark>`);
        const wrapper = document.createElement('span');
        wrapper.innerHTML = highlight;
        node.parentNode.replaceChild(wrapper, node);

        wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
        found = true;
        break;
      }
    }

    if (!found) {
      console.log('No se encontró la palabra:', searchTerm);
    }
  }





  function mostrarBoton() {
    const select = document.getElementById('selector-cuadrantes');
    const boton = document.getElementById('boton-llamar');
    const contenedor = document.getElementById('btn-cuadrante');

    if (select.value) {
      boton.href = 'tel:' + select.value;
      boton.innerText = '📞 Llamar al ' + select.options[select.selectedIndex].text;
      contenedor.style.display = 'block';
    } else {
      contenedor.style.display = 'none';
    }
  }


// 1Carousel
document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentIndex = 0; // Índice de la tarjeta central
    const totalItems = carouselItems.length;
    const animationDelay = 3000; // Tiempo entre movimientos automáticos (en milisegundos)
    let autoSlideInterval;

    // Función para actualizar posiciones del carrusel
    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            const offset = (index - currentIndex + totalItems) % totalItems; // Desplazamiento circular
            item.style.transition = "transform 0.8s ease, z-index 0.8s ease"; // Animación
            item.classList.remove("active"); // Quitar clase activa de todas las tarjetas

            if (offset === 0) {
                // Tarjeta central
                item.style.transform = "translate(-50%, -50%) scale(1)";
                item.style.zIndex = "3";
                item.classList.add("active"); // Agregar clase activa a la tarjeta central
            } else if (offset === 1 || offset === totalItems - 1) {
                // Laterales visibles
                const direction = offset === 1 ? 50 : -150;
                item.style.transform = `translate(${direction}%, -50%) scale(0.8)`;
                item.style.zIndex = "2";
            } else if (offset === 2 || offset === totalItems - 2) {
                // Laterales ocultas
                const direction = offset === 2 ? 150 : -250;
                item.style.transform = `translate(${direction}%, -50%) scale(0.8)`;
                item.style.zIndex = "1";
            } else {
                // Ocultar tarjetas fuera del rango
                item.style.transform = "translate(0, -50%) scale(0)";
                item.style.zIndex = "0";
            }
        });
    }

    // Navegar hacia la izquierda
    function moveLeft() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
        resetAutoSlide(); // Reinicia el temporizador automático
    }

    // Navegar hacia la derecha
    function moveRight() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
        resetAutoSlide(); // Reinicia el temporizador automático
    }

    // Configurar botones
    document.getElementById("carousel-prev").addEventListener("click", moveLeft);
    document.getElementById("carousel-next").addEventListener("click", moveRight);

    // Movimiento automático del carrusel
    function startAutoSlide() {
        autoSlideInterval = setInterval(moveRight, animationDelay);
    }

    // Reiniciar el movimiento automático después de interacción manual
    function resetAutoSlide() {
        clearInterval(autoSlideInterval); // Detener temporizador existente
        startAutoSlide(); // Iniciar nuevo temporizador
    }

    // Inicializar carrusel y movimiento automático
    updateCarousel();
    startAutoSlide();
});

// Toggle the visibility of the navbar
function toggleNavbar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Toggle the visibility of the navbar and overlay
function toggleNavbar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    sidebar.classList.toggle('active'); // Activa/desactiva el navbar
    overlay.classList.toggle('active'); // Activa/desactiva el fondo
}

// Close the navbar when clicking on the overlay
function closeNavbar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    sidebar.classList.remove('active'); // Oculta el navbar
    overlay.classList.remove('active'); // Oculta el fondo
}

let deferredPrompt;

// Selecciona el botón que activará la instalación manualmente
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installBtn.style.display = 'block'; // Muestra el botón si es posible instalar
});

// Evento al hacer clic en el botón de instalación
installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();

        const result = await deferredPrompt.userChoice;
        if (result.outcome === 'accepted') {
            console.log('Usuario instaló la PWA');
        } else {
            console.log('Usuario canceló la instalación');
        }

        deferredPrompt = null; // Reinicia la variable
    }
});





function setupModals() {
    console.log("Modales listos");
}
// Initialize all functions
smoothScroll();
setupModals();
