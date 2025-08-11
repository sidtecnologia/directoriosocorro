document.addEventListener('DOMContentLoaded', () => {
    // 1. SIMULACIÓN DE LA BASE DE DATOS
    const businesses = {
        'baldoria': {
            name: "Baldoria Pizzería",
            category: "Comida",
            longDescription: "En Baldoria 🍕🇮🇹 saborea pizzas artesanales recién horneadas, pastas deliciosas 🍝 y entradas clásicas italianas 🧀. Disfruta una experiencia que te transporta a Italia con cada bocado. Perfecto para cenas, celebraciones y momentos especiales en buena compañía 🍷✨.",
            logo: "../../../../assets/images/categories/comida/baldoria/baldoria.webp",
            address: "Calle 10 # 20-30, Centro",
            hours: "Lunes a Domingo: 5:00pm - 10:00pm",
            services: ["Comida para llevar", "Entrega a domicilio", "Menú para niños"],
            phone: "+573143157157",
            whatsapp: "https://wa.me/573143157157",
            deliveryLink: "https://wa.me/573188489124?text=%C2%A1Hola!%20Quiero%20pedir%20un%20domicilio.%0A%0A%F0%9F%9B%8D%EF%B8%8F%20Negocio%3ARestaurante%20Baldoria%0A%F0%9F%8F%A0%20Direcci%C3%B3n%3A%20Cra.%2014%20%23%2013-44%0A%E2%9C%85%20Entregar%20En%3A%20(Escribe...)%0A%F0%9F%93%A6%20Pedido%3A%20(Escribe...)%0A%0AGracias.",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.41130414593!2d-73.26122459999999!3d6.469468999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c369826848f3%3A0xd1cb62e60108c5d!2sCafe%20Baldoria%20pizzeria!5e0!3m2!1ses!2sco!4v1746221616197!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/profile.php?id=61557079590244",
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
            <h5 class="card-title"><i class="fas fa-map-marked-alt"></i> Como Llegar</h5>
            <div class="ratio ratio-16x9">
                <iframe src="${data.mapLink}" style="border-radius:14px; border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        `;
        
        const socialCard = document.getElementById('business-social-card');
        const socialCardBody = socialCard.querySelector('.card-body');

            socialCardBody.innerHTML = `
            <h5 class="card-title"><i class="fab fa-facebook"></i> Facebook</h5>
            <div class="ratio ratio-16x9">
                <iframe src="https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(data.socialLink)}&tabs=timeline&width=400&height=550&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                    width="100%" height="550" 
                    style="border-radius:14px;border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </div>
        `;
    }
});

