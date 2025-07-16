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


document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;
    const totalItems = carouselItems.length;
    const animationDelay = 3000;
    let autoSlideInterval;

    // ==== Carrusel base ====
    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            const offset = (index - currentIndex + totalItems) % totalItems;
            item.style.transition = "transform 0.8s ease, z-index 0.8s ease";
            item.classList.remove("active");

            if (offset === 0) {
                item.style.transform = "translate(-50%, -50%) scale(1)";
                item.style.zIndex = "3";
                item.classList.add("active");
            } else if (offset === 1 || offset === totalItems - 1) {
                const direction = offset === 1 ? 50 : -150;
                item.style.transform = `translate(${direction}%, -50%) scale(0.8)`;
                item.style.zIndex = "2";
            } else if (offset === 2 || offset === totalItems - 2) {
                const direction = offset === 2 ? 150 : -250;
                item.style.transform = `translate(${direction}%, -50%) scale(0.8)`;
                item.style.zIndex = "1";
            } else {
                item.style.transform = "translate(0, -50%) scale(0)";
                item.style.zIndex = "0";
            }
        });
    }

    function moveLeft() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
        resetAutoSlide();
    }

    function moveRight() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
        resetAutoSlide();
    }

    document.getElementById("carousel-prev").addEventListener("click", moveLeft);
    document.getElementById("carousel-next").addEventListener("click", moveRight);

    function startAutoSlide() {
        autoSlideInterval = setInterval(moveRight, animationDelay);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    updateCarousel();
    startAutoSlide();

    // ==== Lightbox auto-inyectado ====

    // Crear elementos dinámicamente
    const lightboxOverlay = document.createElement("div");
    lightboxOverlay.id = "lightbox-overlay";
    lightboxOverlay.style.cssText = `
        display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center;
        z-index: 9999;
    `;

    const lightboxClose = document.createElement("span");
    lightboxClose.id = "lightbox-close";
    lightboxClose.innerHTML = "&times;";
    lightboxClose.style.cssText = `
        position: absolute; top: 20px; right: 40px; font-size: 50px;
        color: #fff; cursor: pointer; z-index: 10000;
    `;

    const lightboxImage = document.createElement("img");
    lightboxImage.id = "lightbox-image";
    lightboxImage.alt = "Imagen ampliada";
    lightboxImage.style.cssText = `
        max-width: 90%; max-height: 90%; box-shadow: 0 0 20px #000;
        transition: transform 0.3s ease;
    `;

    lightboxOverlay.appendChild(lightboxClose);
    lightboxOverlay.appendChild(lightboxImage);
    document.body.appendChild(lightboxOverlay);

    // Evento para abrir Lightbox
    carouselItems.forEach(item => {
        const img = item.querySelector("img");
        item.addEventListener("click", function (e) {
            e.stopPropagation();
            lightboxImage.src = img.src;
            lightboxOverlay.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    });

    // Eventos para cerrar
    lightboxClose.addEventListener("click", closeLightbox);
    lightboxOverlay.addEventListener("click", function (e) {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightboxOverlay.style.display = "none";
        lightboxImage.src = "";
        document.body.style.overflow = "auto";
    }

    // Navegación touch/mouse dentro del Lightbox
    let startX = 0;
    let isDragging = false;

    lightboxImage.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    lightboxImage.addEventListener("touchend", e => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) {
            nextLightboxImage();
        } else if (endX - startX > 50) {
            prevLightboxImage();
        }
    });

    lightboxImage.addEventListener("mousedown", e => {
        isDragging = true;
        startX = e.clientX;
    });

    lightboxImage.addEventListener("mouseup", e => {
        if (!isDragging) return;
        isDragging = false;
        const endX = e.clientX;
        if (startX - endX > 50) {
            nextLightboxImage();
        } else if (endX - startX > 50) {
            prevLightboxImage();
        }
    });

    function nextLightboxImage() {
        currentIndex = (currentIndex + 1) % totalItems;
        lightboxImage.src = carouselItems[currentIndex].querySelector("img").src;
    }

    function prevLightboxImage() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        lightboxImage.src = carouselItems[currentIndex].querySelector("img").src;
    }
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

