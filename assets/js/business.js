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
            services: ["Pizzas artesanales italianas", "Pastas frescas y lasañas", "Entradas y antipastos", "Bebidas, vinos y postres"],
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
        }, 
        'chicbone': {
            name: "Chicbone",
            category: "Comida",
            longDescription: "En Chicbone 🍔🔥 encuentras arepas rellenas generosas, burgers jugosas al carbón 🍖 y combos que combinan sabor y rapidez 🚀. Todo preparado al instante, con ingredientes frescos y ese toque casero que se siente en cada bocado 🤤. ¡Prueba, repite y comparte! ✨",
            logo: "../../../../assets/images/categories/comida/chicbone/chicbone.webp",
            address: "Cll. 8 # 7 - 39",
            hours: "Viernes a Sábado: 6:00am - 9:00pm",
            services: ["Arepas rellenas al gusto", "Hamburguesas al carbón", "Bebidas frías y acompañamientos", "Comida rápida y combos"],
            phone: "+573213077368",
            whatsapp: "https://wa.me/573213077368",
            deliveryLink: "https://wa.me/573188489124?text=%C2%A1Hola!%20Quiero%20pedir%20un%20domicilio.%0A%0A%F0%9F%9B%8D%EF%B8%8F%20Negocio%3ARestaurante%20Chicbone%0A%F0%9F%8F%A0%20Direcci%C3%B3n%3A%20Cll.%208%20%23%207%20-%2039%0A%E2%9C%85%20Entregar%20En%3A%20(Escribe...)%0A%F0%9F%93%A6%20Pedido%3A%20(Escribe...)%0A%0AGracias.",
            mapLink: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7928.909286396728!2d-73.258149!3d6.463943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69e81e7022bb99%3A0xeeb43cd3620c0fa7!2sCl.%208%20%237-39%2C%20Socorro%2C%20Santander!5e0!3m2!1ses!2sco!4v1754950148737!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/profile.php?id=100075961761461&ref=embed_page",
            gallery: [
                "../../../../assets/images/categories/comida/chicbone/slide1.webp",
                "../../../../assets/images/categories/comida/chicbone/slide2.webp",
                "../../../../assets/images/categories/comida/chicbone/slide3.webp",
                "../../../../assets/images/categories/comida/chicbone/slide4.webp",
            ]
        }, 
        'empanadas': {
            name: "Empanadas de la Casa",
            category: "Comida",
            longDescription: "En Empanadas de la Casa 🥟🍟 encuentras empanadas crujientes, salsas caseras y antojos rápidos para calmar el hambre en cualquier momento 🌟. Tenemos variedad de rellenos, acompañamientos y combos para disfrutar solo o con amigos. ¡Prueba y vuelve siempre! 🤤✨",
            logo: "../../../../assets/images/categories/comida/empanadas/empanadas.webp",
            address: "Cra. 14 #06 - 35",
            hours: "Lunes a Domingo: 5:00pm - 11:00pm",
            services: ["Venta de empanadas frescas", "🍟 Comida rápida variada", "Perros, hamburguesas y snacks", "Bebidas frías y jugos naturales"],
            phone: "+573132270897",
            whatsapp: "https://wa.me/573132270897",
            deliveryLink: "https://wa.me/573188489124?text=%C2%A1Hola!%20Quiero%20pedir%20un%20domicilio.%0A%0A%F0%9F%9B%8D%EF%B8%8F%20Negocio%3A%20Empanadas%20de%20la%20Casa%0A%F0%9F%8F%A0%20Direcci%C3%B3n%3A%20Cll.%206%20%2315%20-%2005%0A%E2%9C%85%20Entregar%20En%3A%20(Escribe...)%0A%F0%9F%93%A6%20Pedido%3A%20(Escribe...)%0A%0AGracias.",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4527907106044!2d-73.2629457!3d6.4641793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69e81d13201a55%3A0x2abb2359797005af!2sEMPANADAS%20DE%20LA%20CASA!5e0!3m2!1ses!2sco!4v1746033514220!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/profile.php?id=100063474525984&ref=embed_page",
            gallery: [
                "../../../../assets/images/categories/comida/empanadas/slide1.webp",
                "../../../../assets/images/categories/comida/empanadas/slide2.webp",
                "../../../../assets/images/categories/comida/empanadas/slide3.webp",
                "../../../../assets/images/categories/comida/empanadas/slide4.webp",
                "../../../../assets/images/categories/comida/empanadas/slide5.webp",
                "../../../../assets/images/categories/comida/empanadas/slide6.webp",
                "../../../../assets/images/categories/comida/empanadas/slide7.webp",
                "../../../../assets/images/categories/comida/empanadas/slide8.webp",
                "../../../../assets/images/categories/comida/empanadas/slide9.webp",
                "../../../../assets/images/categories/comida/empanadas/slide10.webp",
                "../../../../assets/images/categories/comida/empanadas/slide11.webp",
                "../../../../assets/images/categories/comida/empanadas/slide12.webp",
                "../../../../assets/images/categories/comida/empanadas/slide13.webp",
                "../../../../assets/images/categories/comida/empanadas/slide14.webp",
                "../../../../assets/images/categories/comida/empanadas/slide15.webp",
            ]
        }, 
        'orale': {
            name: "Orale, que viva México",
            category: "Comida Mexicana",
            longDescription: "Auténtica comida mexicana con tacos 🌮, enchiladas y margaritas. ¡Siente el sabor de México en cada bocado! Ambiente festivo 🎊 y música en vivo 🎶. Perfecto para una noche divertida con amigos y familia 🎉.",
            logo: "../../../../assets/images/categories/comida/chicbone/slide1.webp",
            address: "Carrera 15 # 30-50, Cabecera",
            hours: "Martes a Sábado: 6:00pm - 12:00am",
            services: ["Comida para llevar", "Entrega a domicilio", "Reservaciones"],
            phone: "+573101234567",
            whatsapp: "https://wa.me/573101234567",
            deliveryLink: "https://wa.me/573101234567?text=%C2%A1Hola!%20Quiero%20pedir%20un%20domicilio.%0A%0A%F0%9F%9B%8D%EF%B8%8F%20Negocio%3A%20Orale%2C%20que%20viva%20M%C3%A9xico%0A%F0%9F%8F%A0%20Direcci%C3%B3n%3A%20(Escribe...)%0A%E2%9C%85%20Entregar%20En%3A%20(Escribe...)%0A%F0%9F%93%A6%20Pedido%3A%20(Escribe...)%0A%0AGracias.",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.41130414593!2d-73.26122459999999!3d6.469468999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c369826848f3%3A0xd1cb62e60108c5d!2sCafe%20Baldoria%20pizzeria!5e0!3m2!1ses!2sco!4v1746221616197!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/OraleQueVivaMexico",
            gallery: [
                "../../../../assets/images/categories/comida/chicbone/slide1.webp",
                "../../../../assets/images/categories/comida/chicbone/slide2.webp",
                "../../../../assets/images/categories/comida/chicbone/slide3.webp",
                "../../../../assets/images/categories/comida/chicbone/slide4.webp",
            ]
        }, 
        'orale': {
            name: "Orale, que viva México",
            category: "Comida Mexicana",
            longDescription: "Auténtica comida mexicana con tacos 🌮, enchiladas y margaritas. ¡Siente el sabor de México en cada bocado! Ambiente festivo 🎊 y música en vivo 🎶. Perfecto para una noche divertida con amigos y familia 🎉.",
            logo: "../../../../assets/images/categories/comida/chicbone/slide1.webp",
            address: "Carrera 15 # 30-50, Cabecera",
            hours: "Martes a Sábado: 6:00pm - 12:00am",
            services: ["Comida para llevar", "Entrega a domicilio", "Reservaciones"],
            phone: "+573101234567",
            whatsapp: "https://wa.me/573101234567",
            deliveryLink: "https://wa.me/573101234567?text=%C2%A1Hola!%20Quiero%20pedir%20un%20domicilio.%0A%0A%F0%9F%9B%8D%EF%B8%8F%20Negocio%3A%20Orale%2C%20que%20viva%20M%C3%A9xico%0A%F0%9F%8F%A0%20Direcci%C3%B3n%3A%20(Escribe...)%0A%E2%9C%85%20Entregar%20En%3A%20(Escribe...)%0A%F0%9F%93%A6%20Pedido%3A%20(Escribe...)%0A%0AGracias.",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.41130414593!2d-73.26122459999999!3d6.469468999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c369826848f3%3A0xd1cb62e60108c5d!2sCafe%20Baldoria%20pizzeria!5e0!3m2!1ses!2sco!4v1746221616197!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/OraleQueVivaMexico",
            gallery: [
                "../../../../assets/images/categories/comida/chicbone/slide1.webp",
                "../../../../assets/images/categories/comida/chicbone/slide2.webp",
                "../../../../assets/images/categories/comida/chicbone/slide3.webp",
                "../../../../assets/images/categories/comida/chicbone/slide4.webp",
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
                <iframe src="https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(data.socialLink)}&tabs=timeline&width=300&height=550&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                    width="300" height="550" 
                    style="border-radius:14px;border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </div>
        `;
    }
});

