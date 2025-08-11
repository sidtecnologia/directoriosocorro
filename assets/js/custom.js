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

const businesses = [
    {
        id: 'baldoria',
        name: 'Baldoria Pizzería',
        category: 'Comida',
        logo: '../../../../assets/images/categories/comida/baldoria/baldoria.webp',
        address: 'Calle 10 # 20-30, Centro',
        keywords: ['pizza', 'pizzas', 'comida italiana', 'restaurante', 'pasta']
    },
    {
        id: 'chicbone',
        name: 'Chicbone',
        category: 'Comida',
        logo: '../../../../assets/images/categories/comida/chicbone/chicbone.webp',
        address: 'Carrera 15 # 30-50, Cabecera',
        keywords: ['hamburguesas', 'malteadas', 'comida rápida', 'restaurante', 'postres']
    },
    {
        id: 'empanadas',
        name: 'Empanadas de la Casa',
        category: 'Comida',
        logo: '../../../../assets/images/categories/comida/empanadas/empanadas.webp',
        address: 'Cra. 14 #06 - 35',
        keywords: ['empanadas', 'empanada', 'hamburguesas', 'arepa', 'perro', 'bebidas']
    },
    {
        id: 'coco',
        name: 'Coco\'s Bar',
        category: 'Bebida',
        logo: '../../../../assets/images/principal/carousel/slide5.webp',
        address: 'Avenida 20 # 45-12, Zona Rosa',
        keywords: ['bar', 'cocteles', 'cerveza', 'tragos', 'discoteca', 'bebidas']
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Lógica del modal de búsqueda
    const searchButton = document.getElementById('searchButton');
    const closeSearchModal = document.getElementById('closeSearchModal');
    const searchModal = document.getElementById('searchModal');
    const startSearchBtn = document.getElementById('startSearchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchModal) {
        searchModal.style.display = 'none';
    }

    if (searchButton && searchModal) {
        searchButton.addEventListener('click', () => {
            searchModal.style.display = 'flex'; // Usar 'flex' para activar el centrado CSS
            searchInput.focus();
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

    if (startSearchBtn && searchInput) {
        startSearchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `/resultados.html?q=${encodeURIComponent(query)}`;
            } else {
                // Reemplazado 'alert()' con un mensaje en la consola para evitar problemas con la interfaz
                console.log('Por favor, ingresa un término de búsqueda.');
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `/resultados.html?q=${encodeURIComponent(query)}`;
                }
            }
        });
    }

    // Lógica de la página de resultados
    const resultsContainer = document.getElementById('resultsContainer');
    const searchStatus = document.getElementById('searchStatus');
    const newSearchInput = document.getElementById('newSearchInput');
    const newSearchBtn = document.getElementById('newSearchBtn');

    function renderResults(query) {
        if (!resultsContainer) return;

        resultsContainer.innerHTML = '';
        searchStatus.textContent = `🔍 Buscando "${query}"...`;

        const normalizedQuery = query.toLowerCase().trim();
        const foundBusinesses = businesses.filter(business =>
            business.name.toLowerCase().includes(normalizedQuery) ||
            business.category.toLowerCase().includes(normalizedQuery) ||
            business.address.toLowerCase().includes(normalizedQuery) ||
            (business.keywords && business.keywords.some(keyword => keyword.toLowerCase().includes(normalizedQuery)))
        );

        if (foundBusinesses.length > 0) {
            foundBusinesses.forEach(business => {
                const cardHTML = `
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <a href="../../../../../business/categories/negocio/?id=${business.id}" class="card-link">
                            <div class="card result-card h-100 shadow-sm">
                                <img src="${business.logo}" class="result-img card-img-top" alt="Logo de ${business.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${business.name}</h5>
                                    <p class="card-text text-muted">${business.category}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                `;
                resultsContainer.insertAdjacentHTML('beforeend', cardHTML);
            });
            searchStatus.textContent = `✅ ${foundBusinesses.length} resultado${foundBusinesses.length !== 1 ? 's' : ''} encontrado${foundBusinesses.length !== 1 ? 's' : ''} para "${query}"`;
        } else {
            searchStatus.textContent = `❌ No se encontraron resultados para "${query}".`;
        }
    }

    const params = new URLSearchParams(window.location.search);
    const queryFromUrl = params.get('q');

    if (queryFromUrl) {
        if (newSearchInput) {
            newSearchInput.value = queryFromUrl;
        }
        renderResults(queryFromUrl);
    } else {
        if (searchStatus) {
            searchStatus.textContent = 'Ingresa un término para comenzar la búsqueda.';
        }
    }

    if (newSearchBtn && newSearchInput) {
        newSearchBtn.addEventListener('click', () => {
            const newQuery = newSearchInput.value.trim();
            if (newQuery) {
                window.location.href = `/resultados.html?q=${encodeURIComponent(newQuery)}`;
            }
        });

        newSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const newQuery = newSearchInput.value.trim();
                if (newQuery) {
                    window.location.href = `/resultados.html?q=${encodeURIComponent(newQuery)}`;
                }
            }
        });
    }
});


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
  let currentIndex = 0;            // Índice solo para el carrusel
  let lightboxIndex = 0;           // Índice solo para el Lightbox
  const totalItems = carouselItems.length;
  const animationDelay = 3000;
  let autoSlideInterval;

  // === Carrusel base ===
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

  // === Lightbox dinámico con ID único ===
  const lightboxOverlay = document.createElement("div");
  lightboxOverlay.id = "custom-lightbox-overlay";
  lightboxOverlay.style.cssText = `
    display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.8); justify-content: center; align-items: center;
    z-index: 9999;
  `;

  const lightboxClose = document.createElement("span");
  lightboxClose.innerHTML = "&times;";
  lightboxClose.style.cssText = `
    position: absolute; top: 20px; right: 40px; font-size: 50px;
    color: #fff; cursor: pointer; z-index: 10000;
  `;

  const lightboxImage = document.createElement("img");
  lightboxImage.alt = "Imagen ampliada";
  lightboxImage.style.cssText = `
    max-width: 90%; max-height: 90%; box-shadow: 0 0 20px #000;
    transition: transform 0.3s ease;
  `;

  lightboxOverlay.appendChild(lightboxClose);
  lightboxOverlay.appendChild(lightboxImage);
  document.body.appendChild(lightboxOverlay);

  let openedManually = false;

  carouselItems.forEach((item, index) => {
    const img = item.querySelector("img");
    item.addEventListener("click", function (e) {
      openedManually = true;
      e.preventDefault();
      e.stopImmediatePropagation();
      lightboxIndex = index;
      lightboxImage.src = img.src;
      lightboxOverlay.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

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
    openedManually = false;
  }

  // === Vigilancia para evitar apertura accidental ===
  const observer = new MutationObserver(() => {
    if (lightboxOverlay.style.display === "flex" && !openedManually) {
      console.warn("🚫 Lightbox abierto sin clic real → cerrando forzado");
      closeLightbox();
    }
  });
  observer.observe(lightboxOverlay, { attributes: true, attributeFilter: ["style"] });

  // === Swipe y drag con índice independiente ===
  let startX = 0;
  let isDragging = false;

  lightboxImage.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  lightboxImage.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    handleSwipe(endX - startX);
  });

  lightboxImage.addEventListener("mousedown", e => {
    isDragging = true;
    startX = e.clientX;
  });

  lightboxImage.addEventListener("mouseup", e => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.clientX;
    handleSwipe(endX - startX);
  });

  function handleSwipe(deltaX) {
    if (deltaX < -50) {
      nextLightboxImage();
    } else if (deltaX > 50) {
      prevLightboxImage();
    }
  }

  function nextLightboxImage() {
    lightboxIndex = (lightboxIndex + 1) % totalItems;
    lightboxImage.src = carouselItems[lightboxIndex].querySelector("img").src;
  }

  function prevLightboxImage() {
    lightboxIndex = (lightboxIndex - 1 + totalItems) % totalItems;
    lightboxImage.src = carouselItems[lightboxIndex].querySelector("img").src;
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

