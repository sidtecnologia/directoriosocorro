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

// ELEMENTOS BUSCADOR

const businesses = [
    {

// NEGOCIOS
// Categoría Comida

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
        id: 'fogon',
        name: 'Fogón Socorrano',
        category: 'Comida',
        logo: '../../../../assets/images/categories/comida/fogon/fogon.webp',
        address: 'Cra. 14 Con 4 Atrás de Hospital',
        keywords: ['fogon', 'almuerzos', 'desayunos', 'caseros', 'comida santandereana', 'platos tipicos']
    },
    {
        id: 'masterpizza',
        name: 'Masterpizza',
        category: 'Comida',
        logo: '../../../../assets/images/categories/comida/masterpizza/masterpizza.webp',
        address: 'Cra. 14 #9 - 44',
        keywords: ['Pizza', 'lasagña', 'pasta', 'ensalada', 'panzerotti', 'bebidas']
    },
    {
        id: 'orale',
        name: 'Órale, que Viva México',
        category: 'Comida',
        logo: '../../../../assets/images/categories/comida/orale/orale.webp',
        address: 'Cra. 14 Con 4 Atrás de Hospital',
        keywords: ['orale', 'Comida Mexicana', 'tacos', 'quesadillas', 'burritos', 'bebidas', 'platos tipicos de mexico', 'nachos']
    },
    {
        id: 'patio',
        name: 'El Patio Restaurante Parrilla',
        category: 'Comida',
        logo: '../../../../assets/images/categories/comida/patio/patio.webp',
        address: 'Cll. 12 #12 - 25',
        keywords: ['carne asada', 'asados', 'parrilla', 'platos tipicos', 'almuerzos', 'espacios familiares', 'bebidas', 'eventos privados']
    },
    {
        id: 'saloon',
        name: 'Saloon1822',
        category: 'Comida',
        logo: '../../../../assets/images/categories/comida/saloon/saloon.webp',
        address: 'Cra. 12 # 13 - 14',
        keywords: ['comida rápida', 'rapida', 'hamburguesa', 'perro caliente', 'salchipapa', 'picadas', 'choripapa', 'jugos', 'micheladas', 'frappes']
    },

    // Categoría Vestuario

    
    {
        id: 'adn',
        name: 'ADN Couture',
        category: 'Vestuario',
        logo: '../../../../assets/images/categories/vestuario/adn/adn.webp',
        address: 'Cll. 9 #15-25',
        keywords: ['tienda ropa femenina', 'moda accesorios', 'gorras', 'vestidos', 'blusas']
    },
    {
        id: 'angels',
        name: 'Angels',
        category: 'Vestuario',
        logo: '../../../../assets/images/categories/vestuario/angels/angels.webp',
        address: 'Cra. 14 #11-13',
        keywords: ['tienda virtual', 'calzado-femenino', 'sandalias', 'tacones', 'bolsos', 'carteras']
    },
    {
        id: 'antoine',
        name: 'Antoine Confort Shoes',
        category: 'Vestuario',
        logo: '../../../../assets/images/categories/vestuario/antoine/antoine.webp',
        address: 'Cll. 19 #14-36',
        keywords: ['fabrica calzado', 'cuero zapatos', 'medicados', 'ortopedicos', 'confort', 'plantillas']
    },
    {
        id: 'lilipink',
        name: 'LiliPink',
        category: 'Vestuario',
        logo: '../../../../assets/images/categories/vestuario/lilipink/lilipink.webp',
        address: 'Cra. 14 #9 - 44',
        keywords: ['ropa interior', 'Tangas', 'Cremas Faciales', 'Ropa Mujer', 'Brasier', 'Ropa Sexy']
    },
    {
        id: 'manitos',
        name: 'Manitos Creativas',
        category: 'Vestuario',
        logo: '../../../../assets/images/categories/vestuario/manitos/manitos.webp',
        address: 'Cll. 10 #15-37',
        keywords: ['tienda ropa infantil', 'ropa niños', 'accesorios infantiles', 'vestidos', 'moños', 'gorros']
    },
    {
        id: 'rich',
        name: 'Calzado Rich',
        category: 'Vestuario',
        logo: '../../../../assets/images/categories/vestuario/rich/rich.webp',
        address: 'Cra. 14 #13-21',
        keywords: ['tienda calzado', 'bolsos', 'cinturones', 'billeteras', 'zapatos dama', 'calzado caballero', 'calzado niños']
    },
    {
        id: 'veinte',
        name: 'Veinte Veinte',
        category: 'Vestuario',
        logo: '../../../../assets/images/categories/vestuario/veinte/veinte.webp',
        address: 'Cll. 13 #14-09',
        keywords: ['moda', 'jeans', 'vestidos', 'calzado', 'gorras', 'correas', 'cinturones', 'chevignon', 'boss', 'under armour', 'levis']
    },

    // Categoría Belleza

    
    {
        id: 'cami',
        name: 'Cami Marin Accesorios',
        category: 'Belleza - Estética',
        logo: '../../../../assets/images/categories/belleza/cami/cami.webp',
        address: 'Cra. 16 #11 - 75',
        keywords: ['distribuidora belleza', 'productos belleza', 'cuidado personal', 'estetica', 'insumos peluqueria', 'manicuristas', 'maquillaje', 'bolsos']
    },
    {
        id: 'july',
        name: 'July´s Beauty',
        category: 'Belleza - Estética',
        logo: '../../../../assets/images/categories/belleza/july/july.webp',
        address: 'Cra. 15 #11 - 06',
        keywords: ['estetica belleza', 'productos belleza', 'cuidado personal', 'estetica', 'insumos peluqueria', 'manicuristas', 'maquilladores', 'maquillaje']
    },
    {
        id: 'lexus',
        name: 'Centro de Belleza DLexus',
        category: 'Belleza - Estética',
        logo: '../../../../assets/images/categories/belleza/lexus/lexus.webp',
        address: 'Cll. 16 #11 - 27',
        keywords: ['centro belleza', 'salón de belleza', 'spa', 'peluqueria', 'manicure pedicure', 'tratamientos capilares']
    },
    {
        id: 'luna',
        name: 'Sombra de Luna Tattoo',
        category: 'Belleza - Estética',
        logo: '../../../../assets/images/categories/belleza/luna/luna.webp',
        address: 'Cll. 16 #14 - 70 Local 1',
        keywords: ['estudio tatuajes', 'arte tatuaje', 'tatuajes personalizados', 'diseño piel']
    },
    {
        id: 'mara',
        name: 'Distribuidora de Belleza Mara',
        category: 'Belleza - Estética',
        logo: '../../../../assets/images/categories/belleza/mara/mara.webp',
        address: 'Cra. 15 #12 - 36',
        keywords: ['distribuidora belleza', 'productos belleza', 'cuidado personal', 'insumos peluqueria', 'manicuristas', 'cosmeticos']
    },
    {
        id: 'reina',
        name: 'Uñas de Reina SPA',
        category: 'Belleza - Estética',
        logo: '../../../../assets/images/categories/belleza/reina/reina.webp',
        address: 'Cll. 10 #15 - 68',
        keywords: ['uñas acrilicas gel', 'productos belleza', 'manicura nail', 'manos pies', 'manicuristas']
    },
    {
        id: 'susy',
        name: 'Cosmeticos Susy',
        category: 'Belleza - Estética',
        logo: '../../../../assets/images/categories/belleza/susy/susy.webp',
        address: 'Cll. 10 #15 - 68',
        keywords: ['productos belleza', 'cuidado personal', 'maquillaje', 'productos belleza', 'cuidado personal', 'insumos peluqueria', 'manicuristas', 'cosmeticos']
    },
    {
        id: 'yeye',
        name: 'Centro de Belleza Yeye',
        category: 'Belleza - Estética',
        logo: '../../../../assets/images/categories/belleza/yeye/yeye.webp',
        address: 'Cll. 10 #15 - 68',
        keywords: ['peinados', 'cuidado personal', 'maquillaje', 'productos belleza', 'cuidado personal', 'peluqueria', 'manicuristas', 'cosmeticos']
    },

    // Categoría Bebidas

    {
        id: 'alcala',
        name: 'Café Bar Alcalá',
        category: 'Bebidas',
        logo: '../../../../assets/images/categories/bebida/alcala/alcala.webp',
        address: 'Cra. 15 #3 - 12',
        keywords: ['cocteles', 'noche', 'cervezas', 'fiesta', 'entretenimiento', 'alcala']
    },
    {
        id: 'blas',
        name: 'San Blas Café Bar',
        category: 'Bebidas',
        logo: '../../../../assets/images/categories/bebida/blas/blas.webp',
        address: 'Cra. 15 #9 - 36',
        keywords: ['bebidas', 'cocteles', 'cervezas', 'tragos', 'musica', 'celebraciones', 'noche']
    },
    {
        id: 'coco',
        name: 'Coco´s Café Bar',
        category: 'Bebidas',
        logo: '../../../../assets/images/categories/bebida/coco/coco.webp',
        address: 'Cra. 13 #14 - 32',
        keywords: ['cafe', 'cocteles', 'cervezas', 'tragos', 'musica', 'celebraciones', 'noche', 'reuniones']
    },

    // Categoría Veterinaria

    {
        id: 'rancho',
        name: 'El Rancho',
        category: 'Agro - Veterinaria',
        logo: '../../../../assets/images/categories/veterinaria/rancho/rancho.webp',
        address: 'Cra. 16 #12 - 26',
        keywords: ['Medicamentos veterinarios', 'Alimentos concentrados', 'Vacunas y desparasitantes', 'mascotas', 'agropecuarios', 'Fertilizantes']
    },

    // Categoría Profesionales

    {
        id: 'fabio',
        name: 'Abogado Fabio Garrido',
        category: 'Servicios Profesionales',
        logo: '../../../../assets/images/categories/profesionales/fabio/fabio.webp',
        address: 'Carrera 12 # 14 – 14',
        keywords: ['derecho civil', 'abogados', 'derecho penal', 'derecho comercial', 'cartera', 'asesoría jurídica', 'asesoria juridica']
    },
    {
        id: 'liliana',
        name: 'Abogada Liliana Becerra',
        category: 'Servicios Profesionales',
        logo: '../../../../assets/images/categories/profesionales/liliana/liliana.webp',
        address: 'Cra. 15 #3 - 12',
        keywords: ['derecho civil', 'abogados', 'derecho penal', 'derecho comercial', 'cartera', 'asesoría jurídica', 'asesoria juridica']
    },

    // Categoría Transporte

    {
        id: 'cootrasaravita',
        name: 'Cootrasaravita',
        category: 'Transporte',
        logo: '../../../../assets/images/categories/transporte/cootrasaravita/cootrasaravita.webp',
        address: 'Cra. 17 # 14-32',
        keywords: ['viaje', 'buseta', 'taxi', 'bus', 'viajar']
    },
];

const products = [
    {


    // PRODUCTOS    
    // Alimento

        id: 'dog-chow-adultos',
        name: 'Dog Chow Adultos - Extra Life',
        category: 'Perro - Comida',
        image: '../../../../../assets/images/categories/veterinaria/rancho/tienda/productos/perro/comida/dogchow/dogchow-adultos-extra-life.webp',
        keywords: ['dog chow', 'comida para perros', 'alimento perros', 'extra life']
    },
    {
        id: 'agility-gold',
        name: 'Agility Gold ',
        category: 'Perro - Comida',
        image: '../../../../../assets/images/categories/veterinaria/rancho/tienda/productos/perro/comida/agility/agility-adultos-raza-peq-piel.webp',
        keywords: ['comida perros', 'agility', 'raza pequeña']
    },
    {
        id: 'pomada-alfa',
        name: 'Pomada Alfa',
        category: 'Agro - Medicamento',
        image: '../../../../../assets/images/categories/veterinaria/rancho/tienda/productos/agro/medicamento/pomada-alfa.webp',
        businessId: 'pomada-alfa',
        pagePath: '../../../../../business/categories/veterinaria/rancho/tienda/',
        keywords: ['pomada', 'medicamento', 'alfa']
    },
    {
        id: 'donkan-adultos',
        name: 'Donkan Adultos - Carne y Cereales',
        category: 'Perro - Comida',
        image: '../../../../../assets/images/categories/veterinaria/rancho/tienda/productos/perro/comida/donkan/donkan-adultos-carne.webp',
        keywords: ['donkan', 'comida para perros', 'carne', 'cereales']
    },
    {
        id: 'canapet',
        name: 'Canapet',
        category: 'Agro - Medicamento',
        image: '../../../../../assets/images/categories/veterinaria/rancho/tienda/productos/agro/medicamento/canapet.webp',
        keywords: ['canapet', 'medicamento']
    },

    // Accesorios

    {
        id: 'cortauña-perro-gato',
        name: 'Cortauña para Perro y Gato',
        category: 'Perro - Accesorios',
        image: '../../../../../assets/images/categories/veterinaria/rancho/tienda/productos/perro/accesorios/cortauña.webp',
        businessId: 'el-rancho',
        pagePath: '../../../../../business/categories/veterinaria/rancho/tienda/',
        keywords: ['cortauña', 'accesorios para perros', 'accesorios para gatos', 'corta uñas']
    },
    {
        id: 'monello-premium',
        name: 'Monello Premium Adultos Especial Tradicional',
        category: 'Perro - Comida',
        image: '../../../../../assets/images/categories/veterinaria/rancho/tienda/productos/perro/comida/monello/monello-adulto-raza-grande.webp',
        keywords: ['monello', 'comida para perros', 'premium', 'tradicional']
    },
    {
        id: 'nutrecan-adultos',
        name: 'Nutre Can Adultos - Raza Pequeña',
        category: 'Perro - Comida',
        image: '../../../../../assets/images/categories/veterinaria/rancho/tienda/productos/perro/comida/nutrecan/nutrecan-adultos-raza-peq.webp',
        keywords: ['nutre can', 'comida para perros', 'raza pequeña']
    },
    {
        id: 'juguete-erizo',
        name: 'Juguete para Perro Erizo',
        category: 'Perro - Juguetes',
        image: '../../../../../assets/images/categories/veterinaria/rancho/tienda/productos/perro/juguetes/pelota-erizo.webp',
        keywords: ['juguete para perros', 'erizo', 'pelota']
    },

    // Juguetes

    {
        id: 'cama-gloopet',
        name: 'Cama Gloopet Premium Gris',
        category: 'Gatos - Accesorios',
        image: '../../../../../assets/images/categories/veterinaria/rancho/tienda/productos/perro/accesorios/cama-gato.webp',
        businessId: 'el-rancho',
        pagePath: '../../../../../business/categories/veterinaria/rancho/tienda/',
        keywords: ['cama', 'accesorios para perros', 'gloopet']
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Lógica del modal de búsqueda (sin cambios)
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
            searchModal.style.display = 'flex';
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

        // Buscar en el array de negocios
        const foundBusinesses = businesses.filter(business =>
            business.name.toLowerCase().includes(normalizedQuery) ||
            business.category.toLowerCase().includes(normalizedQuery) ||
            business.address.toLowerCase().includes(normalizedQuery) ||
            (business.keywords && business.keywords.some(keyword => keyword.toLowerCase().includes(normalizedQuery)))
        );

        // Buscar en el nuevo array de productos
        const foundProducts = products.filter(product =>
            product.name.toLowerCase().includes(normalizedQuery) ||
            product.category.toLowerCase().includes(normalizedQuery) ||
            (product.keywords && product.keywords.some(keyword => keyword.toLowerCase().includes(normalizedQuery)))
        );

        const totalResults = [...foundBusinesses, ...foundProducts];

        if (totalResults.length > 0) {
            totalResults.forEach(item => {
                let cardHTML = '';
                if (item.address) { // Negocios
                    cardHTML = `
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card result-card h-100 shadow-sm">
                                <a href="../../../../../business/categories/negocio/?id=${item.id}" class="card-link">
                                    <img src="${item.logo}" class="result-img card-img-top" alt="Logo de ${item.name}">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.name}</h5>
                                        <p class="card-text text-muted">${item.category}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    `;
                } else { // Productos

                    const parentBusiness = businesses.find(b => b.id === item.businessId);
                    const locationUrl = parentBusiness ? parentBusiness.locationUrl : '#';
                    
                    // El enlace de la tarjeta ahora lleva a la página correcta del producto y se desplaza al ID
                    cardHTML = `
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card product-card h-100 shadow-sm">
                                <a href="${item.pagePath}#${item.id}" class="card-link">
                                    <img src="${item.image}" class-img-top" alt="Imagen de ${item.name}">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.name}</h5>
                                        <p class="card-text text-muted">${item.category}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    `;
                }
                resultsContainer.insertAdjacentHTML('beforeend', cardHTML);
            });
            searchStatus.textContent = `✅ ${totalResults.length} resultado${totalResults.length !== 1 ? 's' : ''} encontrado${totalResults.length !== 1 ? 's' : ''} para "${query}"`;
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
})

;document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false; // Asegura que se detiene la acción por completo
}, false);

function setupModals() {
    console.log("Modales listos");
}
// Initialize all functions
smoothScroll();
setupModals();

