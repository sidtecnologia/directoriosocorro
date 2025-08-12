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
        'fogon': {
            name: "Fogón Socorrano",
            category: "Comida",
            longDescription: "En El Fogón Socorrano 🍲🌽 disfrutas platos típicos santandereanos, carnes a la brasa, sopas y guarniciones llenas de tradición 🫓🔥. Cada bocado te conecta con los sabores de casa y la sazón de la abuela 👵✨. Perfecto para compartir en familia y revivir costumbres gastronómicas locales.",
            logo: "../../../../assets/images/categories/comida/fogon/fogon.webp",
            address: "Cra. 14 Con 4 Atrás de Hospital",
            hours: "Lunes a Domingo: 6:00 am - 5:00 pm",
            services: ["Desayunos y Almuerzos", "Platos típicos santandereanos", "Carnes a la brasa y asados", "Sopas tradicionales"],
            phone: "+573153395330",
            whatsapp: "https://wa.me/573153395330",
            deliveryLink: "https://wa.me/573188489124?text=%C2%A1Hola!%20Quiero%20pedir%20un%20domicilio.%0A%0A%F0%9F%9B%8D%EF%B8%8F%20Negocio%3AFog%C3%B3n%20Socorrano%0A%F0%9F%8F%A0%20Direcci%C3%B3n%3A%20Cra.%2014%20%23Cll.%20-%2004%0A%E2%9C%85%20Entregar%20En%3A%20(Escribe...)%0A%F0%9F%93%A6%20Pedido%3A%20(Escribe...)%0A%0AGracias.",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.457432386201!2d-73.26312279999999!3d6.463587200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69e97fe9909d9f%3A0xe872025ead8b8e01!2sFog%C3%B3n%20socorrano!5e0!3m2!1ses!2sco!4v1745948546673!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/p/Restaurante-El-Fog%C3%B3n-Socorrano-100063656529462/",
            gallery: [
                "../../../../assets/images/categories/comida/fogon/slide1.webp",
                "../../../../assets/images/categories/comida/fogon/slide2.webp",
                "../../../../assets/images/categories/comida/fogon/slide3.webp",
                "../../../../assets/images/categories/comida/fogon/slide4.webp",
                "../../../../assets/images/categories/comida/fogon/slide5.webp",
                "../../../../assets/images/categories/comida/fogon/slide6.webp",
                "../../../../assets/images/categories/comida/fogon/slide7.webp",
                "../../../../assets/images/categories/comida/fogon/slide8.webp",
                "../../../../assets/images/categories/comida/fogon/slide9.webp",
                "../../../../assets/images/categories/comida/fogon/slide10.webp",
                "../../../../assets/images/categories/comida/fogon/slide11.webp",
                "../../../../assets/images/categories/comida/fogon/slide12.webp",
                "../../../../assets/images/categories/comida/fogon/slide13.webp",
            ]
        }, 
        'masterpizza': {
            name: "MasterPizza",
            category: "Comida",
            longDescription: "En Master Pizza 🍕🔥 encuentras pizzas generosas, masa fresca y combinaciones que encantan a todos 🍅🧀. Disfruta sabores clásicos, promociones para grupos y un ambiente ideal para compartir con amigos y familia 👨‍👩‍👧‍👦. ¡La pizza como debe ser! 🍽️✨",
            logo: "../../../../assets/images/categories/comida/masterpizza/masterpizza.webp",
            address: "Cra. 11A # 7 - 45 kiosco B. Virrey",
            hours: "Martes a Domingo: 6:00pm - 10:00pm",
            services: ["Pizzas artesanales italianas tradicionales", "Combos familiares", "Acompañamientos y bebidas", "Bebidas, vinos y postres"],
            phone: "+573185425868",
            whatsapp: "https://wa.me/573185425868",
            deliveryLink: "https://wa.me/573188489124?text=%C2%A1Hola!%20Quiero%20pedir%20un%20domicilio.%0A%0A%F0%9F%9B%8D%EF%B8%8F%20Negocio%3AMasterPizza%0A%F0%9F%8F%A0%20Direcci%C3%B3n%3A%20Cra.%2011A%20%23%207%20-%2045%20kiosco%20B.%20Virrey%0A%E2%9C%85%20Entregar%20En%3A%20(Escribe...)%0A%F0%9F%93%A6%20Pedido%3A%20(Escribe...)%0A%0AGracias.",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5062528842677!2d-73.2645762!3d6.4573563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69e916670ec20f%3A0x5c7a49936a7c39ac!2sMasterpizza%20Socorro!5e0!3m2!1ses!2sco!4v1746228359639!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/masterpizzasocorro",
            gallery: [
                "../../../../assets/images/categories/comida/masterpizza/slide1.webp",
                "../../../../assets/images/categories/comida/masterpizza/slide2.webp",
                "../../../../assets/images/categories/comida/masterpizza/slide3.webp",
                "../../../../assets/images/categories/comida/masterpizza/slide4.webp",
                "../../../../assets/images/categories/comida/masterpizza/slide5.webp",
                "../../../../assets/images/categories/comida/masterpizza/slide6.webp",
                "../../../../assets/images/categories/comida/masterpizza/slide7.webp",
                "../../../../assets/images/categories/comida/masterpizza/slide8.webp",
                "../../../../assets/images/categories/comida/masterpizza/slide9.webp",
                "../../../../assets/images/categories/comida/masterpizza/slide10.webp",
                "../../../../assets/images/categories/comida/masterpizza/slide11.webp",
                "../../../../assets/images/categories/comida/masterpizza/slide12.webp",
                "../../../../assets/images/categories/comida/masterpizza/slide13.webp",
            ]
        }, 
        'orale': {
            name: "Órale, que Viva México",
            category: "Comida",
            longDescription: "En Órale, Que Viva México 🌮🌯 encuentras tacos, burritos, nachos y antojitos mexicanos llenos de sabor 🌶️. Cada bocado es una explosión de colores y especias 🌈🔥. Disfruta platos caseros, bebidas refrescantes y un ambiente alegre para compartir con familia y amigos. ¡Viva México! 🇲🇽✨",
            logo: "../../../../assets/images/categories/comida/orale/orale.webp",
            address: "Cra. 14 #9 - 44",
            hours: "Lunes a Domingo: 5:00am - 10:00pm",
            services: ["Tacos auténticos y variados", "Burritos y quesadillas", "Nachos y antojitos mexicanos", "Bebidas típicas mexicanas"],
            phone: "+576012800386",
            whatsapp: "https://wa.me/573188489124",
            deliveryLink: "https://wa.me/573188489124?text=%C2%A1Hola!%20Quiero%20pedir%20un%20domicilio.%0A%0A%F0%9F%9B%8D%EF%B8%8F%20Negocio%3ARestaurante%20Orale%2C%20Mexicano%0A%F0%9F%8F%A0%20Direcci%C3%B3n%3A%20Cra.%2014%20%239%20-%2044%0A%E2%9C%85%20Entregar%20En%3A%20(Escribe...)%0A%F0%9F%93%A6%20Pedido%3A%20(Escribe...)%0A%0AGracias.",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4363748648066!2d-73.2621099!3d6.466272899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c30cff4a2b5b%3A0x12adf96b8288a2e2!2zw5NyYWxlLCBRdWUgdml2YSBNw6l4aWNv!5e0!3m2!1ses!2sco!4v1746059158620!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/GREENPARADISEDK",
            gallery: [
                "../../../../assets/images/categories/comida/orale/slide1.webp",
                "../../../../assets/images/categories/comida/orale/slide2.webp",
                "../../../../assets/images/categories/comida/orale/slide3.webp",
                "../../../../assets/images/categories/comida/orale/slide4.webp",
                "../../../../assets/images/categories/comida/orale/slide5.webp",
                "../../../../assets/images/categories/comida/orale/slide6.webp",
            ]
        }, 
        'patio': {
            name: "El Patio Restaurante Parrilla",
            category: "Comida",
            longDescription: "En El Patio Restaurante Parrilla 🥩🍽️ encuentras cortes jugosos a la parrilla 🔥, platos típicos 🍛 y especialidades para todos los gustos. Disfruta un ambiente cálido 🌿, atención de calidad y sabores que te harán volver. Perfecto para almuerzos familiares 👨‍👩‍👧‍👦 o cenas con amigos. ¡El sabor se vive aquí! ✨",
            logo: "../../../../assets/images/categories/comida/patio/patio.webp",
            address: "Cll. 12 #12 - 25",
            hours: "Viernes Y Sábado: 12:00mm - 3:30pm",
            services: ["Carnes y asados a la parrilla", "Platos típicos y almuerzos ejecutivos", "Bebidas frías y acompañamientos", "Espacios familiares y eventos privados"],
            phone: "+576012800386",
            whatsapp: "https://wa.me/573163307677",
            deliveryLink: "https://wa.me/573188489124?text=%C2%A1Hola!%20Quiero%20pedir%20un%20domicilio.%0A%0A%F0%9F%9B%8D%EF%B8%8F%20Negocio%3A%20Restaurante%20El%20Patio%0A%F0%9F%8F%A0%20Direcci%C3%B3n%3A%20Cll.%2012%20%2312%20-%2025%0A%E2%9C%85%20Entregar%20En%3A%20(Escribe...)%0A%F0%9F%93%A6%20Pedido%3A%20(Escribe...)%0A%0AGracias.",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4249623576657!2d-73.260756!3d6.467728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a00afdb1c5%3A0xddc5cf3f50892f6a!2sEL%20PATIO%20RESTAURANTE%20PARRILLA!5e0!3m2!1ses!2sco!4v1746029099489!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/elpatiorestauranteparrilla/?locale=es_LA",
            gallery: [
                "../../../../assets/images/categories/comida/patio/slide1.webp",
                "../../../../assets/images/categories/comida/patio/slide2.webp",
                "../../../../assets/images/categories/comida/patio/slide3.webp",
                "../../../../assets/images/categories/comida/patio/slide4.webp",
                "../../../../assets/images/categories/comida/patio/slide5.webp",
                "../../../../assets/images/categories/comida/patio/slide6.webp",
                "../../../../assets/images/categories/comida/patio/slide7.webp",
                "../../../../assets/images/categories/comida/patio/slide8.webp",
                "../../../../assets/images/categories/comida/patio/slide9.webp",
                "../../../../assets/images/categories/comida/patio/slide10.webp",
                "../../../../assets/images/categories/comida/patio/slide11.webp",
                "../../../../assets/images/categories/comida/patio/slide12.webp",
                "../../../../assets/images/categories/comida/patio/slide13.webp",
                "../../../../assets/images/categories/comida/patio/slide14.webp",
                "../../../../assets/images/categories/comida/patio/slide15.webp",
                "../../../../assets/images/categories/comida/patio/slide16.webp",
            ]
        }, 
        'saloon': {
            name: "Saloon1822",
            category: "Comida",
            longDescription: "En Saloon1822 🍔🔥 encuentras hamburguesas jugosas, perros calientes, salchipapas y combos irresistibles 🍟🌭. Todo preparado con recetas propias y un toque especial que hace la diferencia. Perfecto para calmar antojos y compartir con amigos 🤩✨.",
            logo: "../../../../assets/images/categories/comida/saloon/saloon.webp",
            address: "Cra. 12 # 13 - 14",
            hours: "Lunes a Domingo: 5:00pm - 11:00pm",
            services: ["Hamburguesas especiales", "Perros calientes gourmet", "Salchipapas y snacks", "Bebidas frías y combos"],
            phone: "+573186789977",
            whatsapp: "https://wa.me/573186789977",
            deliveryLink: "https://wa.me/573188489124?text=%C2%A1Hola!%20Quiero%20pedir%20un%20domicilio.%0A%0A%F0%9F%9B%8D%EF%B8%8F%20Negocio%3A%20Saloon1822%0A%F0%9F%8F%A0%20Direcci%C3%B3n%3A%20Cra.%2012%20%23%2013%20-%2014%0A%E2%9C%85%20Entregar%20En%3A%20(Escribe...)%0A%F0%9F%93%A6%20Pedido%3A%20(Escribe...)%0A%0AGracias.",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4161465224!2d-73.26002059999999!3d6.4688517999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c39329e5fd21%3A0xfd754bc554b36f99!2sSaloon%201822%20Hamburgueser%C3%ADa!5e0!3m2!1ses!2sco!4v1746244884926!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/saloon1822",
            gallery: [
                "../../../../assets/images/categories/comida/saloon/slide1.webp",
                "../../../../assets/images/categories/comida/saloon/slide2.webp",
                "../../../../assets/images/categories/comida/saloon/slide3.webp",
                "../../../../assets/images/categories/comida/saloon/slide4.webp",
                "../../../../assets/images/categories/comida/saloon/slide5.webp",
                "../../../../assets/images/categories/comida/saloon/slide6.webp",
                "../../../../assets/images/categories/comida/saloon/slide7.webp",
                "../../../../assets/images/categories/comida/saloon/slide8.webp",
                "../../../../assets/images/categories/comida/saloon/slide9.webp",
                "../../../../assets/images/categories/comida/saloon/slide10.webp",
                "../../../../assets/images/categories/comida/saloon/slide11.webp",
                "../../../../assets/images/categories/comida/saloon/slide12.webp",
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

