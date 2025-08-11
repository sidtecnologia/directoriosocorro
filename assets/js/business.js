document.addEventListener('DOMContentLoaded', () => {
    // 1. SIMULACIÓN DE LA BASE DE DATOS
    const businesses = {
        'baldoria': {
            name: "Baldoria Pizzería",
            category: "Comida",
            longDescription: "Somos Baldoria, la pizzería que lleva el auténtico sabor de Italia a cada rincón de nuestra comunidad. Con ingredientes frescos y de la más alta calidad, nuestras pizzas son un viaje culinario que no querrás que termine. Desde la clásica Margherita hasta nuestras creaciones de autor, cada pizza es hecha con pasión y dedicación. ¡Ven y vive una experiencia inolvidable con tu familia y amigos!",
            logo: "../../../../assets/images/categories/comida/baldoria/baldoria.webp",
            address: "Calle 10 # 20-30, Centro",
            hours: "Lunes a Sábado: 11:00 AM - 10:00 PM, Domingo: Cerrado",
            services: ["Comida para llevar", "Entrega a domicilio", "Menú para niños"],
            phone: "+573123456789",
            whatsapp: "https://wa.me/573123456789",
            deliveryLink: "#",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.620612457997!2d-73.12345678901!3d7.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMjQuNCJOIDczwrAwNyc1Ni41Ilc!5e0!3m2!1ses!2sco!4v1625078123456!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/PizzeriaBaldoria",
            gallery: [
                "../../../../assets/images/categories/comida/baldoria/slide1.webp",
                "../../../../assets/images/categories/comida/baldoria/slide2.webp",
                "../../../../assets/images/categories/comida/baldoria/slide3.webp",
                "../../../../assets/images/categories/comida/baldoria/slide4.webp",
                "../../../../assets/images/categories/comida/baldoria/slide5.webp",
                "../../../../assets/images/categories/comida/baldoria/slide6.webp",
                "../../../../assets/images/categories/comida/baldoria/slide7.webp",
                "../../../../assets/images/categories/comida/baldoria/slide8.webp",
                "../../../../assets/images/categories/comida/baldoria/slide9.webp",
            ]
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const businessId = urlParams.get('id');

    const business = businesses[businessId];
    if (business) {
        renderBusinessPage(business);
    } else {
        document.getElementById('business-name').textContent = "Negocio no encontrado";
        document.getElementById('business-category').textContent = "Lo sentimos, el perfil de este negocio no existe.";
        document.querySelector('main').style.display = 'none';
    }

    function renderBusinessPage(data) {
        document.getElementById('business-title').textContent = `${data.name} | Perfil de Negocio`;
        document.getElementById('business-name').textContent = data.name;
        document.getElementById('business-category').textContent = data.category;

        const infoCardBody = document.getElementById('business-info-card').querySelector('.card-body');
        infoCardBody.innerHTML = `
            <div class="text-center mb-3">
                <img src="${data.logo}" alt="Logo de ${data.name}" class="img-fluid">
            </div>
            <p>${data.longDescription}</p>
        `;

        document.getElementById('business-address').textContent = data.address;
        document.getElementById('business-hours').textContent = data.hours;

        const servicesList = document.getElementById('business-services');
        servicesList.innerHTML = '';
        data.services.forEach(service => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = service;
            servicesList.appendChild(li);
        });

        document.getElementById('btn-call').href = `tel:${data.phone}`;
        document.getElementById('btn-whatsapp').href = data.whatsapp;
        document.getElementById('btn-delivery').href = data.deliveryLink;
        
        // Lógica del carrusel personalizado para el perfil de negocio
        const carouselEl = document.getElementById('profile-carousel');
        const carouselItemsHTML = data.gallery.map((img, index) => `
            <div class="carousel-item">
                <img src="${img}" alt="${data.name} - Imagen ${index + 1}">
            </div>
        `).join('');

        carouselEl.innerHTML = `
            <button id="carousel-prev" class="carousel-nav"><</button>
            ${carouselItemsHTML}
            <button id="carousel-next" class="carousel-nav">></button>
        `;

        const carouselItems = carouselEl.querySelectorAll(".carousel-item");
        if (carouselItems.length > 0) {
            let currentIndex = 0;
            const totalItems = carouselItems.length;
            const animationDelay = 3000;
            let autoSlideInterval;
            
            function updateCarousel() {
                carouselItems.forEach((item, index) => {
                    const offset = (index - currentIndex + totalItems) % totalItems;
                    item.style.transition = "transform 0.5s ease, z-index 0.5s ease";
                    
                    if (offset === 0) {
                        item.style.transform = "translate(-50%, -50%) scale(1)";
                        item.style.zIndex = "3";
                    } else if (offset === 1) {
                        item.style.transform = "translate(50%, -50%) scale(0.8)";
                        item.style.zIndex = "2";
                    } else if (offset === totalItems - 1) {
                        item.style.transform = "translate(-150%, -50%) scale(0.8)";
                        item.style.zIndex = "2";
                    } else {
                        item.style.transform = "translate(-50%, -50%) scale(0)";
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

            const prevButton = document.getElementById("carousel-prev");
            const nextButton = document.getElementById("carousel-next");
            if (prevButton && nextButton) {
                prevButton.addEventListener("click", moveLeft);
                nextButton.addEventListener("click", moveRight);
            }

            function startAutoSlide() {
                autoSlideInterval = setInterval(moveRight, animationDelay);
            }

            function resetAutoSlide() {
                clearInterval(autoSlideInterval);
                startAutoSlide();
            }
            
            updateCarousel();
            startAutoSlide();
        }

        const mapContainer = document.getElementById('business-map-container');
        mapContainer.innerHTML = `
            <h5 class="card-title"><i class="fas fa-map-marked-alt"></i> Ubicación</h5>
            <div class="ratio ratio-16x9">
                <iframe src="${data.mapLink}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        `;
        
        const socialCard = document.getElementById('business-social-card');
        const socialCardBody = socialCard.querySelector('.card-body');
        socialCardBody.innerHTML = `
            <h5 class="card-title"><i class="fab fa-facebook"></i> Redes Sociales</h5>
            <div class="ratio ratio-16x9">
                <iframe src="https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(data.socialLink)}&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true" 
                        style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
        `;
    }
});