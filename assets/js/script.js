
        // Inicialización de iconos Lucide
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            initApp();
        });

        // ====================================================================
        // GESTIÓN DE VISTAS Y ESTADO GLOBAL
        // ====================================================================
        let currentView = 'home';
        let currentBusinessId = null;

        const views = {
            'home': document.getElementById('home-view'),
            'profile': document.getElementById('profile-view'),
            'categories': document.getElementById('categories-view')
        };

        function changeView(viewName, businessId = null) {
            if (viewName === 'profile' && !businessId) return;

            // Ocultar todas las vistas
            Object.values(views).forEach(v => v.classList.add('hidden-view'));

            // Mostrar la vista solicitada
            views[viewName].classList.remove('hidden-view');

            currentView = viewName;
            currentBusinessId = businessId;

            // Renderizar el contenido específico
            if (viewName === 'home') {
                renderHome();
            } else if (viewName === 'profile') {
                renderProfile(businessId);
            } else if (viewName === 'categories') {
                renderCategories();
            }

            // Nota: Se ha eliminado la lógica para ocultar/mostrar manualmente el navbar superior.
            // Ahora, solo el título es visible en móvil (gracias a las clases responsivas en el HTML).

            // Cerrar el modal de búsqueda si está abierto
            closeSearchModal();
            
            // Re-evaluar si se necesita recrear iconos
            lucide.createIcons();
        }

        // ====================================================================
        // FUNCIONES DE NAVEGACIÓN
        // ====================================================================
        
        function openCategories() {
            changeView('categories');
        }

        function openSearchModal() {
            const modalContainer = document.getElementById('modal-container');
            modalContainer.innerHTML = `
                <div id="search-modal" class="fixed inset-0 bg-white z-50 p-4 transition-transform duration-300 ease-in-out transform translate-y-full lg:translate-y-0 lg:hidden">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-2xl font-bold text-gray-800">Buscar Negocios</h2>
                        <button onclick="closeSearchModal()" class="text-gray-500 hover:text-red-500 p-2 rounded-full bg-gray-100">
                            <i data-lucide="x" class="w-6 h-6"></i>
                        </button>
                    </div>
                    
                    <div class="relative mb-6">
                        <input type="text" id="mobile-search-input" placeholder="Escribe el nombre o servicio..." class="w-full p-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg">
                        <i data-lucide="search" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6"></i>
                    </div>
                    
                    <!-- Resultados de la búsqueda -->
                    <div id="mobile-search-results" class="space-y-4 max-h-[80vh] overflow-y-auto">
                        <p class="text-center text-gray-500">Ingresa un término para empezar a buscar.</p>
                    </div>

                </div>
            `;
            
            // Animación para mostrar el modal
            setTimeout(() => {
                document.getElementById('search-modal').classList.remove('translate-y-full');
            }, 50);

            // Re-evaluar si se necesita recrear iconos
            lucide.createIcons();

            // Configurar el listener de búsqueda móvil
            document.getElementById('mobile-search-input').addEventListener('input', handleSearch);
        }

        function closeSearchModal() {
            const modal = document.getElementById('search-modal');
            if (modal) {
                // Animación para ocultar el modal
                modal.classList.add('translate-y-full');
                setTimeout(() => {
                    document.getElementById('modal-container').innerHTML = '';
                }, 300);
            }
        }


        // ====================================================================
        // LÓGICA DE BÚSQUEDA INTELIGENTE
        // ====================================================================

        function handleSearch(event) {
            const query = event.target.value.toLowerCase().trim();
            const isDesktop = event.target.id === 'desktop-search-input';
            const resultsContainer = isDesktop ? 
                document.getElementById('desktop-search-results') : 
                document.getElementById('mobile-search-results');

            if (!resultsContainer) return;

            if (query.length < 3) {
                resultsContainer.innerHTML = isDesktop ? '' : '<p class="text-center text-gray-500">Ingresa un término para empezar a buscar.</p>';
                if (isDesktop) resultsContainer.classList.add('hidden');
                return;
            }

            const filteredBusinesses = BUSINESS_DATA.filter(b => 
                b.name.toLowerCase().includes(query) ||
                b.services.toLowerCase().includes(query) ||
                b.category.toLowerCase().includes(query)
            );

            let resultsHtml = '';

            if (filteredBusinesses.length > 0) {
                resultsHtml = filteredBusinesses.map(b => `
                    <button onclick="changeView('profile', '${b.id}'); ${isDesktop ? 'document.getElementById(\'desktop-search-results\').classList.add(\'hidden\')' : 'closeSearchModal()'} " class="w-full text-left p-3 hover:bg-gray-50 flex items-center rounded-lg transition-colors">
                        <img src="${b.logoUrl}" alt="${b.name}" class="w-8 h-8 rounded-full object-cover mr-3">
                        <div>
                            <p class="font-semibold text-gray-800">${b.name}</p>
                            <p class="text-sm text-gray-500">${b.category}</p>
                        </div>
                    </button>
                `).join('');
            } else {
                resultsHtml = `<p class="p-4 text-center text-gray-500">No se encontraron resultados para "${query}".</p>`;
            }

            resultsContainer.innerHTML = resultsHtml;
            if (isDesktop) resultsContainer.classList.remove('hidden');
        }
        
        // Listener para la búsqueda de escritorio
        document.addEventListener('DOMContentLoaded', () => {
            const desktopSearchInput = document.getElementById('desktop-search-input');
            if (desktopSearchInput) {
                desktopSearchInput.addEventListener('input', handleSearch);
                desktopSearchInput.addEventListener('blur', () => {
                    // Pequeño retraso para permitir la interacción con los resultados
                    setTimeout(() => {
                        document.getElementById('desktop-search-results').classList.add('hidden');
                    }, 200);
                });
                desktopSearchInput.addEventListener('focus', () => {
                     // Solo mostrar si hay contenido
                    const results = document.getElementById('desktop-search-results');
                    if (results.innerHTML.trim() !== '' && desktopSearchInput.value.length >= 3) {
                        results.classList.remove('hidden');
                    }
                });
            }
        });

        // ====================================================================
        // LÓGICA DEL CARRUSEL
        // ====================================================================

        const carousels = {};

        function initCarousel(id, speed = 4000) {
            const container = document.getElementById(id);
            if (!container) return;

            let currentIndex = 0;
            const items = container.querySelectorAll('.carousel-item');
            const totalItems = items.length;

            if (carousels[id]) {
                clearInterval(carousels[id]);
            }

            const moveCarousel = () => {
                currentIndex = (currentIndex + 1) % totalItems;
                container.scrollTo({
                    left: currentIndex * container.offsetWidth,
                    behavior: 'smooth'
                });
            };

            // Inicia la transición automática
            carousels[id] = setInterval(moveCarousel, speed);
        }

        // ====================================================================
        // RENDERIZADO DE VISTAS
        // ====================================================================
        
        function renderHome() {
            const featuredBusinesses = BUSINESS_DATA.filter(b => b.featured).slice(0, 10);
            const bannerBusinesses = BUSINESS_DATA.slice(0, 4);
            const bannerBusinesses2 = BUSINESS_DATA.slice(6,12);
            
            const homeView = views['home'];
            homeView.innerHTML = `
                <h2 class="text-3xl font-extrabold text-gray-900 mb-6 lg:text-4xl">Guía Comercial</h2>

                <!-- Carrusel Principal de Imágenes -->
                <section class="mb-8">
                    <div id="main-carousel" class="carousel-container flex w-full rounded-xl overflow-hidden shadow-lg h-48 sm:h-64 lg:h-80">
                        <div class="carousel-item">
                            <img src="assets/images/carousel/baner1.webp" alt="Banner 1">
                            <!-- Overlay oscuro para mejor lectura del texto -->
                            <p class="text-white text-xl font-bold">¡Bienvenido a tu Directorio PWA!</p>
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/carousel/baner2.webp" alt="Banner 2">
                            <!-- Overlay oscuro para mejor lectura del texto -->
                            <p class="text-white text-xl font-bold">¡Bienvenido a tu Directorio PWA!</p>
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/carousel/baner3.webp" alt="Banner 3">
                            <!-- Overlay oscuro para mejor lectura del texto -->
                            <p class="text-white text-xl font-bold">¡Bienvenido a tu Directorio PWA!</p>
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/carousel/baner4.webp" alt="Banner 4">
                            <!-- Overlay oscuro para mejor lectura del texto -->
                            <p class="text-white text-xl font-bold">¡Bienvenido a tu Directorio PWA!</p>
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/carousel/baner5.webp" alt="Banner 5">
                            <!-- Overlay oscuro para mejor lectura del texto -->
                            <p class="text-white text-xl font-bold">¡Bienvenido a tu Directorio PWA!</p>
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/carousel/baner6.webp" alt="Banner 6">
                            <!-- Overlay oscuro para mejor lectura del texto -->
                            <p class="text-white text-xl font-bold">¡Bienvenido a tu Directorio PWA!</p>
                        </div>
                    </div>
                </section>

                <!-- Negocios Destacados -->
                <section class="mb-8">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Negocios Destacados</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${featuredBusinesses.map(b => `
                            <div onclick="changeView('profile', '${b.id}')" class="bg-white p-4 rounded-xl card-shadow transition-all duration-300 hover:shadow-xl cursor-pointer">
                                <div class="flex items-center">
                                    <img src="${b.logoUrl}" alt="${b.name}" class="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-500">
                                    <div>
                                        <p class="font-semibold text-lg text-gray-900">${b.name}</p>
                                        <p class="text-sm text-blue-600">${b.category}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- 4 Banners Promocionales Cuadrados -->
                <section class="mb-8">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Promociones</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        ${bannerBusinesses.map((b, index) => `
                            <a href="#" onclick="changeView('profile', '${b.id}')" class="aspect-square bg-gray-200 rounded-xl overflow-hidden relative group transition-transform duration-300 hover:scale-[1.02]">
                                <img src="${b.images[0]}" alt="Promo ${index + 1}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
                                <div class="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-40 text-white text-sm font-semibold text-center">
                                    ${b.name}
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </section>

                <!-- Sección de Plugin de Facebook -->
                <section class="mb-8">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Síguenos en Facebook</h3>
                    <p class="text-sm text-gray-400 mt-1"><iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02WDhtWRS8HWokNpPgncv7LxyDCMLsu6kdzb2QzXztHCrLkLW1jTfcY8yeT7hk8SR5l%26id%3D100063474525984&width=350&show_text=true&height=573&appId" width="350" height="573" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></p>
                </section>

                <!-- Banners Destacados Cuadrados #2 -->
                <div class="carousel-item">
                <section class="mb-8">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Más Destacados</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        ${bannerBusinesses2.map((b, index) => `
                            <a href="#" onclick="changeView('profile', '${b.id}')" class="aspect-square bg-gray-200 rounded-xl overflow-hidden relative group transition-transform duration-300 hover:scale-[1.02]">
                                <img src="${b.images[0]}" alt="Promo ${index + 1}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
                                <div class="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-40 text-white text-sm font-semibold text-center">
                                    ${b.name}
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </section>

                <!-- Sección de Plugin de Facebook #2-->
                <section class="mb-8">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Te Puede Gustar</h3>
                    <p class="text-sm text-gray-400 mt-1"><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FVeinteVienteSocorro%2Fvideos%2F1492663198534052%2F&width=350&show_text=false&height=630&appId" width="350" height="630" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe></p>
                </section>

            `;
            
            // Inicializar el carrusel principal
            initCarousel('main-carousel', 3500);
            lucide.createIcons();
        }

        function renderCategories() {
            const categoriesView = views['categories'];
            categoriesView.innerHTML = `
                <h2 class="text-3xl font-extrabold text-gray-900 mb-6 lg:text-4xl">Categorías</h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
                    ${CATEGORY_DATA.map(cat => `
                        <button onclick="filterByCategory('${cat.name}')" class="category-card bg-white p-4 rounded-xl card-shadow transition-all duration-300 hover:shadow-xl hover:border-blue-500 border border-transparent">
                            <div class="flex flex-col items-center">
                                <i data-lucide="${cat.icon}" class="w-8 h-8 text-blue-600 mb-2"></i>
                                <p class="text-sm font-semibold text-gray-800 text-center">${cat.name}</p>
                                <p class="text-xs text-gray-500">${BUSINESS_DATA.filter(b => b.category === cat.name).length} negocios</p>
                            </div>
                        </button>
                    `).join('')}
                </div>
            `;
            lucide.createIcons();
        }

        function filterByCategory(categoryName) {
            const businesses = BUSINESS_DATA.filter(b => b.category === categoryName);
            const resultsContainer = document.getElementById('home-view');

            let resultsHtml = `
                <button onclick="changeView('home')" class="mb-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                    <i data-lucide="arrow-left" class="w-5 h-5 mr-1"></i> Volver a la página principal
                </button>
                <h2 class="text-3xl font-extrabold text-gray-900 mb-6 lg:text-4xl">${categoryName}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            `;
            
            if (businesses.length > 0) {
                resultsHtml += businesses.map(b => `
                    <div onclick="changeView('profile', '${b.id}')" class="bg-white p-4 rounded-xl card-shadow transition-all duration-300 hover:shadow-xl cursor-pointer">
                        <div class="flex items-center">
                            <img src="${b.logoUrl}" alt="${b.name}" class="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-500">
                            <div>
                                <p class="font-semibold text-lg text-gray-900">${b.name}</p>
                                <p class="text-sm text-gray-500">${b.address}</p>
                            </div>
                        </div>
                    </div>
                `).join('');
            } else {
                resultsHtml += `<p class="p-8 text-center text-gray-500 bg-white rounded-xl shadow">No hay negocios registrados en esta categoría.</p>`;
            }

            resultsHtml += `</div>`;
            
            // Forzar la vista a 'home-view' para mostrar los resultados de la categoría
            views['categories'].classList.add('hidden-view');
            views['home'].classList.remove('hidden-view');
            views['home'].innerHTML = resultsHtml;
            currentView = 'home'; // Aunque sea una lista de resultados, se muestra en la vista de inicio
            lucide.createIcons();
        }


        function renderProfile(id) {
            const business = BUSINESS_DATA.find(b => b.id === id);
            if (!business) {
                alert("Negocio no encontrado.");
                changeView('home');
                return;
            }

            const profileView = views['profile'];
            const contactButtons = [
                { icon: 'phone', label: 'Llamar', href: `tel:${business.phone}` },
                { icon: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/${business.whatsapp.replace(/\D/g,'')}`, target: '_blank' },
                ...(business.delivery ? [{ icon: 'truck', label: 'Domicilio', href: business.delivery, target: '_blank' }] : []),
                ...(business.storeLink ? [{ icon: 'store', label: 'Catálogo', href: business.storeLink, target: '_blank' }] : []),
            ];

            profileView.innerHTML = `
                <button onclick="changeView('home')" class="mb-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition">
                    <i data-lucide="arrow-left" class="w-5 h-5 mr-1"></i> Volver
                </button>

                <!-- Sección de Cabecera y Logo con Background Image -->
                <div class="relative overflow-hidden rounded-xl shadow-xl bg-white mb-6">
                    <!-- Background Image Area -->
                    <div 
                        class="h-40 sm:h-56 bg-cover bg-center" 
                        style="background-image: url('${business.bgImageUrl}')"
                    >
                        <div class="absolute inset-0 bg-black opacity-30"></div>
                    </div>
                    
                    <!-- Logo y Nombre Content -->
                    <div class="relative z-10 p-4 -mt-16 sm:-mt-20 flex flex-col items-center">
                        <div class="w-24 h-24 sm:w-32 sm:h-32 rounded-full p-1 bg-white shadow-lg ring-4 ring-blue-500 transform transition-transform duration-300 hover:scale-105">
                            <img src="${business.logoUrl}" alt="${business.name}" class="w-full h-full object-cover rounded-full" onerror="this.onerror=null; this.src='https://placehold.co/100x100/1e40af/ffffff?text=Logo'">
                        </div>

                        <!-- Text Content -->
                        <div class="mt-3 text-center">
                            <h2 class="text-3xl font-extrabold text-gray-900">${business.name}</h2>
                            <p class="text-lg font-medium text-blue-600 mb-2">${business.category}</p>
                            <p class="text-gray-600 max-w-xl mx-auto text-sm">${business.description}</p>
                        </div>
                    </div>
                </div>

                <!-- Tarjetas de Información Importante -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="bg-white p-4 rounded-xl shadow-md">
                        <i data-lucide="map-pin" class="w-6 h-6 text-blue-600 mb-1"></i>
                        <p class="font-semibold text-gray-800">Dirección</p>
                        <p class="text-gray-600 text-sm">${business.address}</p>
                    </div>
                    <div class="bg-white p-4 rounded-xl shadow-md">
                        <i data-lucide="clock" class="w-6 h-6 text-blue-600 mb-1"></i>
                        <p class="font-semibold text-gray-800">Horario de Atención</p>
                        <p class="text-gray-600 text-sm">${business.hours}</p>
                    </div>
                    <div class="bg-white p-4 rounded-xl shadow-md">
                        <i data-lucide="gem" class="w-6 h-6 text-blue-600 mb-1"></i>
                        <p class="font-semibold text-gray-800">Servicios</p>
                        <p class="text-gray-600 text-sm">${business.services}</p>
                    </div>
                </div>

                <!-- Botones de Contacto -->
                <section class="mb-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Contacto Rápido</h3>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        ${contactButtons.map(btn => `
                            <a href="${btn.href}" ${btn.target ? `target="${btn.target}"` : ''} class="flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-colors">
                                <i data-lucide="${btn.icon}" class="w-5 h-5 mr-2"></i>
                                ${btn.label}
                            </a>
                        `).join('')}
                    </div>
                </section>

                <!-- Carrusel de Imágenes del Negocio -->
                <section class="mb-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Galería</h3>
                    <div id="profile-carousel" class="carousel-container flex w-full rounded-xl overflow-hidden shadow-lg h-56 sm:h-72 lg:h-96">
                        ${business.images.map(img => `
                            <div class="carousel-item bg-gray-100 flex items-center justify-center">
                                <img src="${img}" alt="Imagen de ${business.name}" class="w-full h-full object-cover">
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- Google Maps Iframe -->
                <section class="mb-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Ubicación</h3>
                    <div class="map-container card-shadow">
                        <iframe 
                            src="${business.mapIframeUrl}" 
                            width="600" 
                            height="450" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </section>

                <!-- Facebook Page Iframe -->
                <section class="mb-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Página de Facebook</h3>
                    <div class="bg-white p-4 rounded-xl card-shadow">
                         <!-- Placeholder para el widget de FB del negocio -->
                        <div class="text-center p-8 bg-gray-100 rounded-lg">
                            <i data-lucide="facebook" class="w-10 h-10 mx-auto mb-2 text-blue-600"></i>
                            <p class="text-gray-600">Placeholder para el Iframe de la página de Facebook del negocio.</p>
                            <p class="text-sm text-gray-400 mt-1">URL: ${business.facebookIframeUrl}</p>
                        </div>
                    </div>
                </section>
            `;
            
            // Inicializar el carrusel del perfil
            initCarousel('profile-carousel', 4500);
            lucide.createIcons();
        }

        function initApp() {
            // Limpia la barra de búsqueda de escritorio al inicio
            const desktopSearchInput = document.getElementById('desktop-search-input');
            if(desktopSearchInput) desktopSearchInput.value = '';
            
            // Inicia la aplicación en la vista de inicio
            changeView('home');
        }