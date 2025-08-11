document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo para las novedades
    const novedadesData = [
        {
            titulo: "Expo Lechera IV Edición",
            descripcion: "Un evento que conjuga la magia de nuestra tierra, el esfuerzo de nuestros ganaderos y productos derivados de la leche con la mejor calidad.",
            tipo: "Evento",
            fecha: "Del 15 al 17 de agosto - Plaza de Ferias - 7:00 am",
            imagen: "../../assets/images/novedades/expo-lechera.webp", // Ruta a una imagen de evento
            link: "#" // Enlace a más detalles
        },
        {
            titulo: "2x1 en pasteles de chocolate",
            descripcion: "Aprovecha la promoción de la Pastelería 'El Buen Horno' hasta el domingo.",
            tipo: "Promoción",
            imagen: "../../assets/images/placeholder-promo.webp", // Ruta a una imagen de promoción
            link: "#"
        },
        {
            titulo: "El 'Corrientazo' del Día",
            descripcion: "Sopa de lentejas, pollo asado con arroz y ensalada. ¡Por solo $12,000 en 'Sabor Casero'!",
            tipo: "Menú del día",
            imagen: "../../assets/images/placeholder-menu.webp", // Ruta a una imagen de menú
            link: "#"
        },
        // Puedes añadir más novedades aquí...
    ];

    const novedadesListContainer = document.getElementById('novedades-list');

    // Función para crear una tarjeta de novedad
    function createNovedadCard(novedad) {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 mb-4'; // Clases de Bootstrap para la cuadrícula

        const card = document.createElement('div');
        card.className = 'card h-100 fade-in';

        // Determina el color del tag según el tipo de novedad
        let tagColor;
        if (novedad.tipo === 'Evento') {
            tagColor = '#48bb78'; // Verde
        } else if (novedad.tipo === 'Promoción') {
            tagColor = '#f6ad55'; // Naranja
        } else if (novedad.tipo === 'Menú del día') {
            tagColor = '#63b3ed'; // Azul
        } else {
            tagColor = '#e2e8f0'; // Gris por defecto
        }

        card.innerHTML = `
            <img src="${novedad.imagen}" class="card-img-top" alt="${novedad.titulo}">
            <div class="card-body">
                <span style="background-color: ${tagColor}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8em; font-weight: bold; position: absolute; top: 10px; right: 10px;">
                    ${novedad.tipo}
                </span>
                <h5 class="card-title mt-2">${novedad.titulo}</h5>
                <p class="card-text">${novedad.descripcion}</p>
                <p class="card-text">${novedad.fecha}</p>
                <a href="${novedad.link}" class="btn btn-primary mt-auto">Ver detalles</a>
            </div>
        `;
        col.appendChild(card);
        novedadesListContainer.appendChild(col);
    }

    // Renderiza todas las novedades
    novedadesData.forEach(novedad => {
        createNovedadCard(novedad);
    });
});