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

// Obtener elementos del DOM
const searchButton = document.getElementById('searchButton');
const closeSearchModal = document.getElementById('closeSearchModal');
const searchModal = document.getElementById('searchModal');
const startSearchBtn = document.getElementById('startSearchBtn');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Asegurar que el modal esté oculto al cargar la página
if (searchModal) {
  searchModal.style.display = 'none';
}

// ✅ Lista de páginas organizada por categorías (carpetas con index)
const pagesToSearch = [
    // 🗂️ Categoría: Vestuario
    '../../../business/categories/vestuario/',
    '../../../../business/categories/vestuario/adn/',
    '../../../../business/categories/vestuario/angels/',
    '../../../../business/categories/vestuario/antoine/',
    '../../../../business/categories/vestuario/lilipink/',
    '../../../../business/categories/vestuario/manitos/',
    '../../../../business/categories/vestuario/rich/',
    '../../../../business/categories/vestuario/veinte/',
    
    // 🗂️ Categoría: Comida
    '../../../business/categories/comida/',
    '../../../../business/categories/comida/baldoria/',
    '../../../../business/categories/comida/chicbone/',
    '../../../../business/categories/comida/empanada/',
    '../../../../business/categories/comida/fogon/',
    '../../../../business/categories/comida/masterpizza/',
    '../../../../business/categories/comida/orale/',
    '../../../../business/categories/comida/patio/',
    '../../../../business/categories/comida/saloon/',
    
    // 🗂️ Categoría: Belleza
    '../../../business/categories/belleza/',
    '../../../../business/categories/belleza/cami/',
    '../../../../business/categories/belleza/july/',
    '../../../../business/categories/belleza/lexus/',
    '../../../../business/categories/belleza/luna/',
    '../../../../business/categories/belleza/mara/',
    '../../../../business/categories/belleza/reina/',
    '../../../../business/categories/belleza/susy/',
    '../../../../business/categories/belleza/yeye/',
    
    // 🗂️ Categoría: Bebidas
    '../../../business/categories/bebida/',
    '../../../../business/categories/bebida/alcala/',
    '../../../../business/categories/bebida/blas/',
    '../../../../business/categories/bebida/coco/',
    
    // 🗂️ Categoría: Gimnasio
    '../../../business/categories/gimnasio/',
    
    // 🗂️ Categoría: Droguería
    '../../../business/categories/drogueria/',
    '../../../../business/categories/drogueria/cruz-verde/',
    
    // 🗂️ Categoría: Entretenimiento
    '../../../business/categories/entretenimiento/',
    
    // 🗂️ Categoría: Mascotas
    '../../../business/categories/mascotas/',
    
    // 🗂️ Categoría: Mecánica
    '../../../business/categories/mecanica/',
    
    // 🗂️ Categoría: Inmobiliaria
    '../../../business/categories/inmobiliaria/',
    
    // 🗂️ Categoría: Hotel
    '../../../business/categories/hotel/',
    
    // 🗂️ Categoría: Tecnología
    '../../../business/categories/tecnologia/',
    
    // 🗂️ Categoría: Transporte
    '../../../business/categories/transporte/',
    
    // 🗂️ Categoría: Deportes
    '../../../business/categories/deportes/',
    
    // 🗂️ Categoría: Ferretería
    '../../../business/categories/ferreteria/',
    
    // 🗂️ Categoría: Profesionales
    '../../../business/categories/profesionales/',
    
    // 🗂️ Categoría: Públicos
    '../../../business/categories/publicos/',
    
    // 🗂️ Categoría General
    '../../business/categories/',
];

// Agregar la página actual al array
pagesToSearch.push(window.location.pathname);

// Verificar si los elementos existen antes de añadir eventos
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

// Normalizar para comparar sin espacios ni mayúsculas
function normalizeText(text) {
  return text ? text.toLowerCase().replace(/\s+/g, '') : '';
}

// Buscar CLASES en páginas
async function searchClassInPages(query) {
  if (!searchResults) return;

  searchResults.innerHTML = "<p>🔍 Buscando...</p>";
  const normalizedQuery = normalizeText(query);
  let results = [];

  console.log("🔎 Iniciando búsqueda de:", normalizedQuery);

  for (const page of pagesToSearch) {
    try {
      console.log(`📄 Buscando en: ${page}...`);
      const response = await fetch(page);
      if (!response.ok) {
        console.warn(`⚠️ No se pudo cargar ${page}`);
        continue;
      }

      const htmlText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');

      const allElements = doc.querySelectorAll('[class]');
      console.log(`🔍 Encontrados ${allElements.length} elementos con clases`);

      allElements.forEach(el => {
        const classList = el.className.split(/\s+/);
        classList.forEach(cl => {
          if (normalizeText(cl).includes(normalizedQuery)) {
            console.log(`✅ Coincidencia encontrada: ${cl}`);

            // 📂 Obtener nombre de carpeta como fileName
            const parts = page.split('/');
            let fileName = parts[parts.length - 2] || 'Inicio';

            results.push(`
              <div class="result-item">
                <a href="${page}" class="result-link" onclick="closeSearchModalFunction()">
                  <strong>${cl.toUpperCase()}</strong> en ${fileName.toUpperCase()}
                </a>
              </div>
            `);
          }
        });
      });

    } catch (error) {
      console.error(`❌ Error al cargar ${page}:`, error);
    }
  }

  searchResults.innerHTML = results.length > 0
    ? results.join('')
    : "<p>❌ No se encontró ningún resultado.</p>";
}

// Función para cerrar el modal
function closeSearchModalFunction() {
  if (searchModal) {
    searchModal.style.display = 'none';
  }
}

// Evento para iniciar búsqueda
if (startSearchBtn && searchInput) {
  startSearchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      searchClassInPages(query);
    } else {
      alert('Por favor, ingresa un término de búsqueda.');
    }
  });
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
