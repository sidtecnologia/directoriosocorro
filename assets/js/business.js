document.addEventListener('DOMContentLoaded', () => {
    // SIMULACIÓN DE LA BASE DE DATOS
    const businesses = {

        // Categoría Comida

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
        },

        // Categoría Vestuario
        'adn': {
            name: "ADN Couture",
            category: "Vestuario",
            longDescription: "👒✨ Acá encuentras ropa femenina diferente y con mucha actitud 💃. Tenemos blusas, vestidos, gorras 🧢, cinturones 🧷 y accesorios para elevar tu estilo al máximo 🌟. Renueva tu outfit y marca tu ADN con nosotros 💖",
            logo: "../../../../assets/images/categories/vestuario/adn/adn.webp",
            address: "Cll. 9 #15-25",
            hours: "Lunes a Domingo 9:00 am - 7:45 pm",
            services: ["Moda femenina casual y urbana", "Gorras y sombreros", "Cinturones y accesorios", "Bolsos y complementos"],
            phone: "+573134666736",
            whatsapp: "https://wa.me/573134666736",
            deliveryLink: "https://wa.me/573134666736?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4388952951103!2d-73.26325389999998!3d6.465951500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69e81d601cfae5%3A0x3491d50d38001f03!2sCl.%209%20%23%2015-25%2C%20Socorro%2C%20Santander!5e0!3m2!1ses!2sco!4v1745852169814!5m2!1ses!2sco",
            socialLink: "https://www.instagram.com/adncouture2025/",
            gallery: [
                "../../../../assets/images/categories/vestuario/adn/slide1.webp",
                "../../../../assets/images/categories/vestuario/adn/slide2.webp",
                "../../../../assets/images/categories/vestuario/adn/slide3.webp",
                "../../../../assets/images/categories/vestuario/adn/slide4.webp",
                "../../../../assets/images/categories/vestuario/adn/slide5.webp",
                "../../../../assets/images/categories/vestuario/adn/slide6.webp",
                "../../../../assets/images/categories/vestuario/adn/slide7.webp",
                "../../../../assets/images/categories/vestuario/adn/slide8.webp",
                "../../../../assets/images/categories/vestuario/adn/slide9.webp",
                "../../../../assets/images/categories/vestuario/adn/slide10.webp",
                "../../../../assets/images/categories/vestuario/adn/slide11.webp",
                "../../../../assets/images/categories/vestuario/adn/slide12.webp",
                "../../../../assets/images/categories/vestuario/adn/slide13.webp",
                "../../../../assets/images/categories/vestuario/adn/slide14.webp",
                "../../../../assets/images/categories/vestuario/adn/slide15.webp",
            ]
        }, 
        'angels': {
            name: "Angels",
            category: "Vestuario",
            longDescription: "En Angels 👡✨ encuentras zapatos femeninos 👠 de tendencia y accesorios que completan tu estilo 🌟. Desde sandalias y tacones hasta bolsos 👜 y detalles únicos 🎀. Compra fácil desde tu celular y recíbelo en tu puerta 🛵💖. ¡Camina con estilo, camina con Angels! 👼",
            logo: "../../../../assets/images/categories/vestuario/angels/angels.webp",
            address: "Cra. 14 #11-13",
            hours: "Lunes a Domingo 9:00 am - 7:45 pm",
            services: ["Venta de calzado femenino", "Sandalias, tacones y flats", "Accesorios de moda", "Pedidos y asesoría por WhatsApp"],
            phone: "+573164166287",
            whatsapp: "https://wa.me/573164166287",
            deliveryLink: "https://wa.me/573164166287?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.426914688645!2d-73.261902!3d6.467479099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a7a0c8ea8f%3A0x6e22999d4b43f098!2sCra.%2014%20%2311-13%2C%20Socorro%2C%20Santander!5e0!3m2!1ses!2sco!4v1745942909432!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/tienda.angelssocorro",
            gallery: [
                "../../../../assets/images/categories/vestuario/angels/slide1.webp",
                "../../../../assets/images/categories/vestuario/angels/slide2.webp",
                "../../../../assets/images/categories/vestuario/angels/slide3.webp",
                "../../../../assets/images/categories/vestuario/angels/slide4.webp",
                "../../../../assets/images/categories/vestuario/angels/slide5.webp",
                "../../../../assets/images/categories/vestuario/angels/slide6.webp",
                "../../../../assets/images/categories/vestuario/angels/slide7.webp",
                "../../../../assets/images/categories/vestuario/angels/slide8.webp",
                "../../../../assets/images/categories/vestuario/angels/slide9.webp",
                "../../../../assets/images/categories/vestuario/angels/slide10.webp",
                "../../../../assets/images/categories/vestuario/angels/slide11.webp",
            ]
        }, 
        'antoine': {
            name: "Antoine Confort Shoes",
            category: "Vestuario",
            longDescription: "En Antoine Confort 👞✨ fabricamos zapatos de cuero 100% originales 🧵, ideales para quienes buscan estilo y salud para sus pies 🦶. Contamos con modelos medicados 👟 que se ajustan a necesidades ortopédicas, brindando confort y soporte todo el día. Calidad, durabilidad y comodidad en cada par ✅🔝",
            logo: "../../../../assets/images/categories/vestuario/antoine/antoine.webp",
            address: "Cll. 19 #14-36",
            hours: "Lunes a Viernes 7:00am - 12:00m y 2:00pm - 6:00pm / Sabado 9:00am - 12:00m",
            services: ["Fabricación de calzado de cuero", "Zapatos medicados y ortopédicos", "Modelos personalizados", "Calzado para dama y caballero"],
            phone: "+573166461203",
            whatsapp: "https://wa.me/573166461203",
            deliveryLink: "https://wa.me/573166461203?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3820141298406!2d-73.26041900000004!3d6.473201000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a45ddd3b5b%3A0xe9f7d9e2e1ef9395!2sCl.%2019%20%23%2014-36%2C%20Socorro%2C%20Santander!5e0!3m2!1ses!2sco!4v1746027621480!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/antoineshoescol/",
            gallery: [
                "../../../../assets/images/categories/vestuario/antoine/slide1.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide2.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide3.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide4.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide5.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide6.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide7.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide8.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide9.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide10.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide11.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide12.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide13.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide14.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide15.webp",
                "../../../../assets/images/categories/vestuario/antoine/slide16.webp",
            ]
        }, 
        'lilipink': {
            name: "LiliPink",
            category: "Vestuario",
            longDescription: "👙💄 te ayudamos a sentirte única y segura 💕. Tenemos una variedad encantadora de ropa interior femenina 🩷, pantys, pijamas suaves 🛌 y productos faciales para que mimes tu piel 🌸. Ven y descubre lo mejor para ti o para regalar 🎁. ¡Te esperamos con la mejor atención! 🤗✨",
            logo: "../../../../assets/images/categories/vestuario/lilipink/lilipink.webp",
            address: "Cll. 14 #13-35",
            hours: "Lunes a Domingo 9:00 am - 7:45 pm",
            services: ["Venta de ropa interior femenina", "Productos de cuidado facial y corporal", "Pijamas y ropa cómoda", "Arreglos y detalles para regalar"],
            phone: "+573170777740",
            whatsapp: "https://wa.me/573170777740",
            deliveryLink: "https://wa.me/573170777740?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.409712149497!2d-73.26095049999999!3d6.4696719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c3b5d7bb78a9%3A0x4ef67a9214f24df!2sRopa%20Interior%20Lili%20Pink%20Socorro!5e0!3m2!1ses!2sco!4v1745774384150!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/lilipinksocorro/",
            gallery: [
                "../../../../assets/images/categories/vestuario/lilipink/slide1.webp",
                "../../../../assets/images/categories/vestuario/lilipink/slide2.webp",
                "../../../../assets/images/categories/vestuario/lilipink/slide3.webp",
                "../../../../assets/images/categories/vestuario/lilipink/slide4.webp",
                "../../../../assets/images/categories/vestuario/lilipink/slide5.webp",
                "../../../../assets/images/categories/vestuario/lilipink/slide6.webp",
                "../../../../assets/images/categories/vestuario/lilipink/slide7.webp",
                "../../../../assets/images/categories/vestuario/lilipink/slide8.webp",
            ]
        }, 
        'manitos': {
            name: "Manitos Creativas",
            category: "Vestuario",
            longDescription: "En Manitos Creativas 🧒👧 encontrarás ropa adorable 👕👗 y accesorios 🎀 para niños y niñas. Desde conjuntos, vestidos y camisetas hasta gorros, moños y más 🎉. ¡Todo para que tus peques luzcan creativos, cómodos y felices! ✨💖",
            logo: "../../../../assets/images/categories/vestuario/lilipink/lilipink.webp",
            address: "Cll. 10 #15-37",
            hours: "Lunes a Domingo 9:00 am - 7:45 pm",
            services: ["Ropa para niños y niñas", "Vestidos, conjuntos y camisetas", "Accesorios y moños", "Gorros y sombreros infantiles", "Regalos personalizados"],
            phone: "+573168103793",
            whatsapp: "https://wa.me/573168103793",
            deliveryLink: "https://wa.me/573168103793?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4329727918657!2d-73.2630787!3d6.466706700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a7925009a7%3A0x65303489cf6fb584!2sCl.%2010%20%2315-37%2C%20Socorro%2C%20Santander!5e0!3m2!1ses!2sco!4v1745937008120!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/profile.php?id=61556482394352",
            gallery: [
                "../../../../assets/images/categories/vestuario/manitos/slide1.webp",
                "../../../../assets/images/categories/vestuario/manitos/slide2.webp",
                "../../../../assets/images/categories/vestuario/manitos/slide3.webp",
                "../../../../assets/images/categories/vestuario/manitos/slide4.webp",
                "../../../../assets/images/categories/vestuario/manitos/slide5.webp",
                "../../../../assets/images/categories/vestuario/manitos/slide6.webp",
                "../../../../assets/images/categories/vestuario/manitos/slide7.webp",
                "../../../../assets/images/categories/vestuario/manitos/slide8.webp",
                "../../../../assets/images/categories/vestuario/manitos/slide9.webp",
                "../../../../assets/images/categories/vestuario/manitos/slide10.webp",
                "../../../../assets/images/categories/vestuario/manitos/slide11.webp",
                "../../../../assets/images/categories/vestuario/manitos/slide12.webp",
                "../../../../assets/images/categories/vestuario/manitos/slide13.webp",
            ]
        }, 
        'rich': {
            name: "Calzado Rich",
            category: "Vestuario",
            longDescription: "👟👜 Tenemos zapatos originales para dama, caballero y niños 👞, además de bolsos 👜, cinturones 🧷 y billeteras de excelente calidad. Renueva tu estilo con productos de marca sin pagar de más 💸✨. ¡Visítanos y lleva lo mejor al mejor precio! ✅🔥",
            logo: "../../../../assets/images/categories/vestuario/rich/rich.webp",
            address: "Cra. 14 #13-21",
            hours: "Lunes a Sábado 8:00am - 12:00mm y 2:00pm - 7:30pm / Domingo 9:00am - 1:00pm",
            services: ["Venta de calzado para toda la familia", "Zapatos de dama, caballero y niños", "Bolsos y mochilas", "Cinturones de cuero y sintéticos", "Billeteras para dama y caballero"],
            phone: "+573168700045",
            whatsapp: "https://wa.me/573168700045",
            deliveryLink: "https://wa.me/573168700045?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4137026390845!2d-73.2613264!3d6.4691633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c3a07b729649%3A0x6c2edfdbe17488e4!2sCALZADO%20RICH%20DSC%20SOCORRO!5e0!3m2!1ses!2sco!4v1745941282505!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/calzadorich?ref=hl",
            gallery: [
                "../../../../assets/images/categories/vestuario/rich/slide1.webp",
                "../../../../assets/images/categories/vestuario/rich/slide2.webp",
                "../../../../assets/images/categories/vestuario/rich/slide3.webp",
                "../../../../assets/images/categories/vestuario/rich/slide4.webp",
                "../../../../assets/images/categories/vestuario/rich/slide5.webp",
                "../../../../assets/images/categories/vestuario/rich/slide6.webp",
                "../../../../assets/images/categories/vestuario/rich/slide7.webp",
                "../../../../assets/images/categories/vestuario/rich/slide8.webp",
                "../../../../assets/images/categories/vestuario/rich/slide9.webp",
                "../../../../assets/images/categories/vestuario/rich/slide10.webp",
                "../../../../assets/images/categories/vestuario/rich/slide11.webp",
                "../../../../assets/images/categories/vestuario/rich/slide12.webp",
                "../../../../assets/images/categories/vestuario/rich/slide13.webp",
                "../../../../assets/images/categories/vestuario/rich/slide14.webp",
                "../../../../assets/images/categories/vestuario/rich/slide15.webp",
                "../../../../assets/images/categories/vestuario/rich/slide16.webp",
            ]
        }, 
        'veinte': {
            name: "Veinte Veinte",
            category: "Vestuario",
            longDescription: "n VeinteVeinte 👖👗 encuentras ropa de marca original ✨ para lucir increíble en cada ocasión. Tenemos camisas, jeans, vestidos, calzado y accesorios 👜 de alta calidad y últimas colecciones. Viste con estilo, viste VeinteVeinte 💯🔥",
            logo: "../../../../assets/images/categories/vestuario/veinte/veinte.webp",
            address: "Cll. 13 #14-09",
            hours: "Lunes a Jueves 9:00am - 8:00pm / Viernes a Sabado 8:00am - 8:00pm / Domingo 8:00am - 12:00m",
            services: ["Venta de ropa de marcas reconocidas", "Jeans, camisas, vestidos y calzado", "Accesorios de moda y de imagén", "Empaque de regalo", "Domicilios a toda la ciudad"],
            phone: "+573228932541",
            whatsapp: "https://wa.me/573228932541",
            deliveryLink: "https://wa.me/573228932541?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.414706881403!2d-73.26151870000001!3d6.4690353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a6f9c1d237%3A0x41fdcddd6b0df4e4!2sCl.%2013%20%2314-09%2C%20Socorro%2C%20Santander!5e0!3m2!1ses!2sco!4v1745849370859!5m2!1ses!2sco",
            socialLink: "https://www.facebook.com/VeinteVienteSocorro",
            gallery: [
                "../../../../assets/images/categories/vestuario/veinte/slide1.webp",
                "../../../../assets/images/categories/vestuario/veinte/slide2.webp",
                "../../../../assets/images/categories/vestuario/veinte/slide3.webp",
                "../../../../assets/images/categories/vestuario/veinte/slide4.webp",
                "../../../../assets/images/categories/vestuario/veinte/slide5.webp",
                "../../../../assets/images/categories/vestuario/veinte/slide6.webp",
                "../../../../assets/images/categories/vestuario/veinte/slide7.webp",
                "../../../../assets/images/categories/vestuario/veinte/slide8.webp",
                "../../../../assets/images/categories/vestuario/veinte/slide9.webp",
                "../../../../assets/images/categories/vestuario/veinte/slide10.webp",
                "../../../../assets/images/categories/vestuario/veinte/slide11.webp",
                "../../../../assets/images/categories/vestuario/veinte/slide12.webp",
            ]
        },

        // Categoría Belleza
        'cami': {
            name: "Cami Marin Accesorios",
            category: "Belleza - Estética",
            longDescription: "Distribuidora de Belleza cami se especializa en la venta al por mayor y al detal de productos de belleza, cuidado personal y estética profesional. Nos enfocamos en brindar insumos confiables y marcas reconocidas a peluquerías, manicuristas, maquilladores y usuarios finales que valoran la calidad.",
            logo: "../../../../assets/images/categories/belleza/cami/cami.webp",
            address: "Cra. 16 #11 - 75",
            hours: "Lunes a Sábado 8:00am - 8:00pm / Domingo 8:00am - 2:00pm",
            services: ["Venta al por mayor y al detal de productos de belleza.", "Distribución de insumos para peluquerías, salones y manicuristas.", "Línea completa de productos capilares, faciales y corporales", "Asesoría para emprendedores del sector belleza"],
            phone: "+573212223258",
            whatsapp: "https://wa.me/573212223258",
            deliveryLink: "https://wa.me/573212223258?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.420577380202!2d-73.26331989999998!3d6.468287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a7ca6d3edb%3A0xc4acd8c3848680a5!2sCra.%2016%20%23%2011-75%2C%20Socorro%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1750349389228!5m2!1ses-419!2sco",
            socialLink: "https://www.facebook.com/profile.php?id=100095053041256",
            gallery: [
                "../../../../assets/images/categories/belleza/cami/slide1.webp",
                "../../../../assets/images/categories/belleza/cami/slide2.webp",
                "../../../../assets/images/categories/belleza/cami/slide3.webp",
                "../../../../assets/images/categories/belleza/cami/slide4.webp",
                "../../../../assets/images/categories/belleza/cami/slide5.webp",
                "../../../../assets/images/categories/belleza/cami/slide6.webp",
                "../../../../assets/images/categories/belleza/cami/slide7.webp",
                "../../../../assets/images/categories/belleza/cami/slide8.webp",
                "../../../../assets/images/categories/belleza/cami/slide9.webp",
                "../../../../assets/images/categories/belleza/cami/slide10.webp",
                "../../../../assets/images/categories/belleza/cami/slide11.webp",
                "../../../../assets/images/categories/belleza/cami/slide12.webp",
                "../../../../assets/images/categories/belleza/cami/slide13.webp",
            ]
        },

        'july': {
            name: "July´s Beauty",
            category: "Belleza - Estética",
            longDescription: "Reunimos lo mejor del mundo de la belleza y el estilo en un solo lugar. Te ofrecemos productos de alta calidad para resaltar tu look y complementar tu personalidad con los accesorios ideales. 💋👜.",
            logo: "../../../../assets/images/categories/belleza/july/july.webp",
            address: "Cra. 15 #11 - 06",
            hours: "Lunes a Sábado 8:00am - 5:00pm",
            services: ["Maquillaje: bases, labiales, sombras, rubores, delineadores y más.", "Cuidado facial y corporal: cremas, sérums, mascarillas, exfoliantes.", "Accesorios de moda: aretes, collares, pulseras, gafas, scrunchies y bolsos", "Herramientas de belleza: brochas, espejos, pinzas, rizadores y más"],
            phone: "+573243907497",
            whatsapp: "https://wa.me/573243907497",
            deliveryLink: "https://wa.me/573243907497?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4047130046365!2d-73.25921800000005!3d6.470309000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a6b1ffe0c7%3A0x68326e183f850722!2sCl.%2016%20%23%2011-27%2C%20Socorro%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1750298302132!5m2!1ses-419!2sco",
            socialLink: "https://www.facebook.com/profile.php?id=61572758675161",
            gallery: [
                "../../../../assets/images/categories/belleza/july/slide1.webp",
                "../../../../assets/images/categories/belleza/july/slide2.webp",
                "../../../../assets/images/categories/belleza/july/slide3.webp",
                "../../../../assets/images/categories/belleza/july/slide4.webp",
                "../../../../assets/images/categories/belleza/july/slide5.webp",
                "../../../../assets/images/categories/belleza/july/slide6.webp",
                "../../../../assets/images/categories/belleza/july/slide7.webp",
                "../../../../assets/images/categories/belleza/july/slide8.webp",
                "../../../../assets/images/categories/belleza/july/slide9.webp",
                "../../../../assets/images/categories/belleza/july/slide10.webp",
                "../../../../assets/images/categories/belleza/july/slide11.webp",
                "../../../../assets/images/categories/belleza/july/slide12.webp",
                "../../../../assets/images/categories/belleza/july/slide13.webp",
                "../../../../assets/images/categories/belleza/july/slide14.webp",
                "../../../../assets/images/categories/belleza/july/slide15.webp",
                "../../../../assets/images/categories/belleza/july/slide16.webp",
                "../../../../assets/images/categories/belleza/july/slide17.webp",
                "../../../../assets/images/categories/belleza/july/slide18.webp",
            ]
        },

        'lexus': {
            name: "Centro de Belleza D'Lexus",
            category: "Belleza - Estética",
            longDescription: "Te ofrecemos una experiencia completa en belleza, donde cada detalle cuenta. Nuestro equipo de profesionales está listo para resaltar lo mejor de ti con técnicas actualizadas, productos de calidad y un ambiente cómodo y confiable.",
            logo: "../../../../assets/images/categories/belleza/lexus/lexus.webp",
            address: "Cll. 16 #11 - 27",
            hours: "Lunes a Sábado 8:00am - 5:00pm",
            services: ["Corte y diseño de cabello para damas, caballeros y niños.", "Alisados, keratinas y tratamientos capilares.", "Coloración, iluminaciones, balayage, mechas y más", "Peinados y maquillaje para ocasiones especiales"],
            phone: "+573245224040",
            whatsapp: "https://wa.me/573245224040",
            deliveryLink: "https://wa.me/573245224040?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.409899294247!2d-73.26141741139226!3d6.469648048722612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a6b1ffe0c7%3A0x68326e183f850722!2sCl.%2016%20%23%2011-27%2C%20Socorro%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1750296070786!5m2!1ses-419!2sco",
            socialLink: "https://www.facebook.com/dlexuscentrodebelleza",
            gallery: [
                "../../../../assets/images/categories/belleza/lexus/slide1.webp",
                "../../../../assets/images/categories/belleza/lexus/slide2.webp",
                "../../../../assets/images/categories/belleza/lexus/slide3.webp",
                "../../../../assets/images/categories/belleza/lexus/slide4.webp",
                "../../../../assets/images/categories/belleza/lexus/slide5.webp",
                "../../../../assets/images/categories/belleza/lexus/slide6.webp",
                "../../../../assets/images/categories/belleza/lexus/slide7.webp",
                "../../../../assets/images/categories/belleza/lexus/slide8.webp",
                "../../../../assets/images/categories/belleza/lexus/slide9.webp",
                "../../../../assets/images/categories/belleza/lexus/slide10.webp",
                "../../../../assets/images/categories/belleza/lexus/slide11.webp",
                "../../../../assets/images/categories/belleza/lexus/slide12.webp",
                "../../../../assets/images/categories/belleza/lexus/slide13.webp",
                "../../../../assets/images/categories/belleza/lexus/slide14.webp",
                "../../../../assets/images/categories/belleza/lexus/slide15.webp",
            ]
        },

        'luna': {
            name: "Sombra de Luna Tattoo",
            category: "Belleza - Estética",
            longDescription: "Convertimos tus ideas en arte sobre la piel. Somos un estudio profesional donde la creatividad, el detalle y la higiene son prioridad. Cada tatuaje es una obra única, pensada para reflejar tu esencia y acompañarte para siempre.",
            logo: "../../../../assets/images/categories/belleza/luna/luna.webp",
            address: "Cll. 16 #14 - 70 Local 1",
            hours: "Lunes a Sábado 8:00am - 5:00pm",
            services: ["Diseños personalizados.", "Realismo, blackwork, minimalismo, lettering, geométricos y más.", "Coberturas y retoques", "Microtatuajes y líneas finas"],
            phone: "+573175935767",
            whatsapp: "https://wa.me/573175935767",
            deliveryLink: "https://wa.me/573175935767?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3970065662556!2d-73.26138!3d6.471291000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a4295b36c1%3A0x9b21e66fc328d9a1!2sCl.%2016%20%23%2014-70%2C%20Socorro%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1750301460846!5m2!1ses-419!2sco",
            socialLink: "https://www.instagram.com/sombra_delunatattoo/",
            gallery: [
                "../../../../assets/images/categories/belleza/luna/slide1.webp",
                "../../../../assets/images/categories/belleza/luna/slide2.webp",
                "../../../../assets/images/categories/belleza/luna/slide3.webp",
                "../../../../assets/images/categories/belleza/luna/slide4.webp",
                "../../../../assets/images/categories/belleza/luna/slide5.webp",
                "../../../../assets/images/categories/belleza/luna/slide6.webp",
                "../../../../assets/images/categories/belleza/luna/slide7.webp",
                "../../../../assets/images/categories/belleza/luna/slide8.webp",
                "../../../../assets/images/categories/belleza/luna/slide9.webp",
                "../../../../assets/images/categories/belleza/luna/slide10.webp",
                "../../../../assets/images/categories/belleza/luna/slide11.webp",
                "../../../../assets/images/categories/belleza/luna/slide12.webp",
                "../../../../assets/images/categories/belleza/luna/slide13.webp",
            ]
        },

        'mara': {
            name: "Distribuidora de Belleza Mara",
            category: "Belleza - Estética",
            longDescription: "Distribuidora de Belleza Mara se especializa en la venta al por mayor y al detal de productos de belleza, cuidado personal y estética profesional. Nos enfocamos en brindar insumos confiables y marcas reconocidas a peluquerías, manicuristas, maquilladores y usuarios finales que valoran la calidad.",
            logo: "../../../../assets/images/categories/belleza/mara/mara.webp",
            address: "Cra. 15 #12 - 36",
            hours: "Lunes a Sábado 8:00am - 5:00pm",
            services: ["Venta al por mayor y al detal de productos de belleza.", "Distribución de insumos para peluquerías, salones y manicuristas.", "Línea completa de productos capilares, faciales y corporales", "Asesoría para emprendedores del sector belleza"],
            phone: "+573212223258",
            whatsapp: "https://wa.me/573212223258",
            deliveryLink: "https://wa.me/573212223258?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.418769937988!2d-73.26233130000003!3d6.46851740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a65331eded%3A0xfc0de9dba0b0a7bc!2sCra.%2015%20%23%2012-36%2C%20Socorro%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1750348609716!5m2!1ses-419!2sco",
            socialLink: "https://www.facebook.com/profile.php?id=100085418034060&ref=embed_page",
            gallery: [
                "../../../../assets/images/categories/belleza/mara/slide1.webp",
                "../../../../assets/images/categories/belleza/mara/slide2.webp",
                "../../../../assets/images/categories/belleza/mara/slide3.webp",
                "../../../../assets/images/categories/belleza/mara/slide4.webp",
                "../../../../assets/images/categories/belleza/mara/slide5.webp",
                "../../../../assets/images/categories/belleza/mara/slide6.webp",
                "../../../../assets/images/categories/belleza/mara/slide7.webp",
                "../../../../assets/images/categories/belleza/mara/slide8.webp",
                "../../../../assets/images/categories/belleza/mara/slide9.webp",
                "../../../../assets/images/categories/belleza/mara/slide10.webp",
                "../../../../assets/images/categories/belleza/mara/slide11.webp",
                "../../../../assets/images/categories/belleza/mara/slide12.webp",
            ]
        },

        'reina': {
            name: "Uñas de Reina SPA",
            category: "Belleza - Estética",
            longDescription: "Te ofrecemos una experiencia única en el cuidado de tus uñas. Trabajamos con productos de alta calidad y técnicas modernas para que luzcas unas manos impecables, elegantes y saludables.",
            logo: "../../../../assets/images/categories/belleza/reina/reina.webp",
            address: "Cll. 10 #15 - 68",
            hours: "Lunes a Sábado 9:00am - 8:00pm",
            services: ["Manicure y pedicure spa.", "Uñas acrílicas, en gel y semipermanentes.", "Decoración artística y diseños a la medida", "Tratamientos de cuidado y reparación"],
            phone: "+573168219098",
            whatsapp: "https://wa.me/573168219098",
            deliveryLink: "https://wa.me/573168219098?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.726256855274!2d-73.26902888148864!3d6.466886300000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a7eccc505b%3A0x69e22930fc3d2c21!2sU%C3%B1as%20de%20Reina%20Spa%20Socorro!5e0!3m2!1ses-419!2sco!4v1750287598165!5m2!1ses-419!2sco",
            socialLink: "https://www.facebook.com/spaunasdereinasocorro/?ref=embed_page",
            gallery: [
                "../../../../assets/images/categories/belleza/reina/slide1.webp",
                "../../../../assets/images/categories/belleza/reina/slide2.webp",
                "../../../../assets/images/categories/belleza/reina/slide3.webp",
                "../../../../assets/images/categories/belleza/reina/slide4.webp",
                "../../../../assets/images/categories/belleza/reina/slide5.webp",
                "../../../../assets/images/categories/belleza/reina/slide6.webp",
                "../../../../assets/images/categories/belleza/reina/slide7.webp",
                "../../../../assets/images/categories/belleza/reina/slide8.webp",
                "../../../../assets/images/categories/belleza/reina/slide9.webp",
                "../../../../assets/images/categories/belleza/reina/slide10.webp",
                "../../../../assets/images/categories/belleza/reina/slide11.webp",
                "../../../../assets/images/categories/belleza/reina/slide12.webp",
            ]
        },

        'susy': {
            name: "Cosmeticos Susy",
            category: "Belleza - Estética",
            longDescription: "Nos especializamos en ofrecerte los mejores productos de belleza y cuidado personal, pensados para realzar tu estilo, cuidar tu piel y ayudarte a sentirte bien por dentro y por fuera. ✨ Contamos con un catálogo amplio y actualizado de marcas reconocidas, ideales tanto para uso personal como para quienes se dedican a la belleza profesional.",
            logo: "../../../../assets/images/categories/belleza/susy/susy.webp",
            address: "Cll. 10 #15 - 68",
            hours: "Lunes a Sábado 8:00am - 7:00pm / Domingo 8:00am - 1:00pm",
            services: ["Maquillaje de alta calidad: bases, labiales, sombras, delineadores y más.", "Productos para el cuidado de la piel: sérums, cremas hidratantes, limpiadores y mascarillas.", "Fragancias para todos los gustos", "Accesorios de belleza, brochas, esponjas y más"],
            phone: "+573007976485",
            whatsapp: "https://wa.me/573007976485",
            deliveryLink: "https://wa.me/573007976485?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.420427546934!2d-73.26383858255618!3d6.468306099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c322e8a067d3%3A0xe98d4e22c441158b!2sCosm%C3%A9ticos%20susy!5e0!3m2!1ses-419!2sco!4v1750292158406!5m2!1ses-419!2sco",
            socialLink: "https://www.facebook.com/CosmeticosSusySocorro/?ref=embed_page",
            gallery: [
                "../../../../assets/images/categories/belleza/susy/slide1.webp",
                "../../../../assets/images/categories/belleza/susy/slide2.webp",
                "../../../../assets/images/categories/belleza/susy/slide3.webp",
                "../../../../assets/images/categories/belleza/susy/slide4.webp",
                "../../../../assets/images/categories/belleza/susy/slide5.webp",
                "../../../../assets/images/categories/belleza/susy/slide6.webp",
                "../../../../assets/images/categories/belleza/susy/slide7.webp",
                "../../../../assets/images/categories/belleza/susy/slide8.webp",
                "../../../../assets/images/categories/belleza/susy/slide9.webp",
                "../../../../assets/images/categories/belleza/susy/slide10.webp",
                "../../../../assets/images/categories/belleza/susy/slide11.webp",
                "../../../../assets/images/categories/belleza/susy/slide12.webp",
                "../../../../assets/images/categories/belleza/susy/slide13.webp",
            ]
        },

        'yeye': {
            name: "Centro de Belleza Yeye",
            category: "Belleza - Estética",
            longDescription: "Nuestro Centro de Belleza está pensado para mujeres que buscan verse y sentirse bien. Nos especializamos en el embellecimiento de uñas, el diseño de peinados para eventos o el día a día, y el maquillaje profesional para destacar tus rasgos con elegancia.",
            logo: "../../../../assets/images/categories/belleza/yeye/yeye.webp",
            address: "Cra. 14 #8 - 12",
            hours: "Lunes a Domingo: 8:00am - 2:00pm",
            services: ["Manicure y pedicure profesional (tradicional, semipermanente o acrílico).", "Diseño y decoración de uñas (con piedras, arte y técnicas personalizadas).", "Peinados para eventos, trenzas, recogidos y alisados", "Maquillaje profesional (social, de novia o para fotografía)"],
            phone: "+573105382110",
            whatsapp: "https://wa.me/573105382110",
            deliveryLink: "https://wa.me/573105382110?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.443791505669!2d-73.2624793!3d6.465327099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69e81d7b44a815%3A0x6169ab6e750dd83c!2sCra.%2014%20%238-12%2C%20Socorro%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1750345301653!5m2!1ses-419!2sco",
            socialLink: "https://www.facebook.com/profile.php?id=100054207473430&ref=embed_page",
            gallery: [
                "../../../../assets/images/categories/belleza/yeye/slide1.webp",
                "../../../../assets/images/categories/belleza/yeye/slide2.webp",
                "../../../../assets/images/categories/belleza/yeye/slide3.webp",
                "../../../../assets/images/categories/belleza/yeye/slide4.webp",
                "../../../../assets/images/categories/belleza/yeye/slide5.webp",
                "../../../../assets/images/categories/belleza/yeye/slide6.webp",
                "../../../../assets/images/categories/belleza/yeye/slide7.webp",
                "../../../../assets/images/categories/belleza/yeye/slide8.webp",
                "../../../../assets/images/categories/belleza/yeye/slide9.webp",
                "../../../../assets/images/categories/belleza/yeye/slide10.webp",
                "../../../../assets/images/categories/belleza/yeye/slide11.webp",
            ]
        },

        // Categoría Bebidas

        'alcala': {
            name: "Café Bar Alcalá",
            category: "Bebidas",
            longDescription: "Bar Alcalá se ha convertido en uno de los bares preferidos por quienes buscan un lugar para relajarse, compartir y vivir la noche al máximo. Contamos con un ambiente acogedor y dinámico, ideal para disfrutar entre amigos o celebrar momentos especiales. Ofrecemos una carta de bebidas variadas, desde cervezas bien frías hasta cocteles preparados con estilo.",
            logo: "../../../../assets/images/categories/bebida/alcala/alcala.webp",
            address: "Cra. 15 #3 - 12",
            hours: "Lunes a Miercoles 9:00am - 11:00pm / Jueves 7:00am - 11:00pm / Viernes a Sábado 7:00am - 2:00am / Domingo 2:00pm - 11:00pm",
            services: ["Venta de cervezas, licores y cocteles.", "Promociones en bebidas por días o temporadas.", "Ambientación con música crossover y noches temáticas", "Atención para grupos y celebraciones"],
            phone: "+",
            whatsapp: "https://wa.me/",
            deliveryLink: "https://wa.me/?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.462493768035!2d-73.2635409!3d6.4629415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69e81cdc5df1df%3A0x5d222a417a4656a4!2sCra.%2015%20%23%203-12%2C%20Socorro%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1750353950399!5m2!1ses-419!2sco",
            socialLink: "https://www.facebook.com/profile.php?id=61558486235469&ref=embed_page",
            gallery: [
                "../../../../assets/images/categories/bebida/alcala/slide1.webp",
                "../../../../assets/images/categories/bebida/alcala/slide2.webp",
                "../../../../assets/images/categories/bebida/alcala/slide3.webp",
                "../../../../assets/images/categories/bebida/alcala/slide4.webp",
                "../../../../assets/images/categories/bebida/alcala/slide5.webp",
                "../../../../assets/images/categories/bebida/alcala/slide6.webp",
            ]
        },

        'blas': {
            name: "San Blas Café Bar",
            category: "Bebidas",
            longDescription: "Tenemos un espacio pensado para quienes buscan pasarla bien en un ambiente relajado, divertido y con buena energía. Ofrecemos una variedad de bebidas, desde cervezas nacionales e importadas hasta cocteles y tragos preparados con calidad y estilo. Nuestro ambiente es ideal para compartir con amigos, celebrar ocasiones especiales o simplemente desconectarte del día con buena música y excelente atención.",
            logo: "../../../../assets/images/categories/bebida/alcala/alcala.webp",
            address: "Cra. 15 #9 - 36",
            hours: "Jueves - Domingo 5:30pm - 3:00am",
            services: ["Venta de cervezas nacionales e importadas", "Coctelería variada y tragos preparados", "Promociones y combos en bebidas seleccionadas", "Música ambiental o en vivo (según programación)", "Reservas para grupos y celebraciones especiales"],
            phone: "+573123069273",
            whatsapp: "https://wa.me/573123069273",
            deliveryLink: "https://wa.me/573123069273?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.437144965956!2d-73.2627308!3d6.466174700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a78f179b6b%3A0xf56e34312312718e!2sCra.%2015%20%239-36%2C%20Socorro%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1750351348289!5m2!1ses-419!2sco",
            socialLink: "https://www.facebook.com/profile.php?id=100067775179394&ref=embed_page",
            gallery: [
                "../../../../assets/images/categories/bebida/blas/slide1.webp",
                "../../../../assets/images/categories/bebida/blas/slide2.webp",
                "../../../../assets/images/categories/bebida/blas/slide3.webp",
            ]
        },

        'coco': {
            name: "Coco's Café Bar",
            category: "Bebidas",
            longDescription: "Coco's Café Bar fusiona lo mejor de dos mundos: la calidez de un café y la energía de un bar. Durante el día, es un lugar perfecto para relajarte, reunirte con amigos o disfrutar de una bebida con buena música de fondo. Y cuando cae la noche, el ambiente se transforma con cocteles, luces suaves y un espacio propicio para compartir, reír y celebrar.",
            logo: "../../../../assets/images/categories/bebida/coco/coco.webp",
            address: "Cra. 13 #14 - 32",
            hours: "Jueves - Domingo 5:30pm - 3:00am",
            services: ["Café especial, aromáticas y bebidas frías no alcohólicas", "Cocteles, cervezas y licores nacionales e importados", "Platos ligeros, snacks y picadas para compartir", "Atención personalizada para grupos, citas o reuniones sociales"],
            phone: "+573243970683",
            whatsapp: "https://wa.me/573243970683",
            deliveryLink: "https://wa.me/573243970683?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.413431176436!2d-73.261701!3d6.469197899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c2a6f7c077c7%3A0xe94345ea62999b71!2sCl.%2013%20%23%2014-32%2C%20Socorro%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1750356278096!5m2!1ses-419!2sco",
            socialLink: "https://www.facebook.com/Cocoscafebarsocorro/?ref=embed_page",
            gallery: [
                "../../../../assets/images/categories/bebida/coco/slide1.webp",
                "../../../../assets/images/categories/bebida/coco/slide2.webp",
                "../../../../assets/images/categories/bebida/coco/slide3.webp",
                "../../../../assets/images/categories/bebida/coco/slide4.webp",
                "../../../../assets/images/categories/bebida/coco/slide5.webp",
                "../../../../assets/images/categories/bebida/coco/slide6.webp",
                "../../../../assets/images/categories/bebida/coco/slide7.webp",
                "../../../../assets/images/categories/bebida/coco/slide8.webp",
                "../../../../assets/images/categories/bebida/coco/slide9.webp",
                "../../../../assets/images/categories/bebida/coco/slide10.webp",
                "../../../../assets/images/categories/bebida/coco/slide11.webp",
            ]
        },

        // Categoría Profesionales

        'alcala': {
            name: "Café Bar Alcalá",
            category: "Bebidas",
            longDescription: "Bar Alcalá se ha convertido en uno de los bares preferidos por quienes buscan un lugar para relajarse, compartir y vivir la noche al máximo. Contamos con un ambiente acogedor y dinámico, ideal para disfrutar entre amigos o celebrar momentos especiales. Ofrecemos una carta de bebidas variadas, desde cervezas bien frías hasta cocteles preparados con estilo.",
            logo: "../../../../assets/images/categories/bebida/alcala/alcala.webp",
            address: "Cra. 15 #3 - 12",
            hours: "Lunes a Miercoles 9:00am - 11:00pm / Jueves 7:00am - 11:00pm / Viernes a Sábado 7:00am - 2:00am / Domingo 2:00pm - 11:00pm",
            services: ["Venta de cervezas, licores y cocteles.", "Promociones en bebidas por días o temporadas.", "Ambientación con música crossover y noches temáticas", "Atención para grupos y celebraciones"],
            phone: "+",
            whatsapp: "https://wa.me/",
            deliveryLink: "https://wa.me/?text=Hola%20%F0%9F%99%8C%2C%20vi%20en%20el%20Directorio%20%F0%9F%94%8E%20que%20",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.462493768035!2d-73.2635409!3d6.4629415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69e81cdc5df1df%3A0x5d222a417a4656a4!2sCra.%2015%20%23%203-12%2C%20Socorro%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1750353950399!5m2!1ses-419!2sco",
            socialLink: "https://www.facebook.com/profile.php?id=61558486235469&ref=embed_page",
            gallery: [
                "../../../../assets/images/categories/bebida/alcala/slide1.webp",
                "../../../../assets/images/categories/bebida/alcala/slide2.webp",
                "../../../../assets/images/categories/bebida/alcala/slide3.webp",
                "../../../../assets/images/categories/bebida/alcala/slide4.webp",
                "../../../../assets/images/categories/bebida/alcala/slide5.webp",
                "../../../../assets/images/categories/bebida/alcala/slide6.webp",
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

        document.getElementById('business-map-container').innerHTML = `
            <h5 class="card-title"><i class="fas fa-map-marked-alt"></i> Como Llegar</h5>
            <div class="ratio ratio-16x9">
                <iframe src="${data.mapLink}" style="border-radius:14px; border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        `;
        
        const socialCard = document.getElementById('business-social-card');

socialCard.innerHTML = `
    <iframe 
        src="https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(data.socialLink)}&tabs=timeline&width=500&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        width="100%" 
        height="550" 
        style="border-radius:14px;border:none;overflow:hidden" 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
    </iframe>
`;

    }
});

