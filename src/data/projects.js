// src/data/projects.js

const projectData = [
    // --- PROYECTO 1: BBVA ---
    {
        id: 1,
        slug: 'bbva-banca-movil',
        title: 'BBVA Móvil: Arquitectura Financiera',
        category: 'FinTech / Mobile Banking',
        client: 'BBVA Bancomer',
        img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', // Imagen Azul Tecnológica
        tagline: 'Redefiniendo la experiencia de solicitud de préstamos para millones de usuarios móviles.',
        scope: 'Desarrollo Frontend, Integración de API Segura, Optimización de UX.',
        technologies: ['JavaScript Core', 'React Native (Bridge)', 'Secure Storage', 'Biometric Auth'],
        challenge: 'El cliente enfrentaba una alta tasa de abandono en el flujo de solicitud de préstamos móviles debido a una interfaz lenta y procesos de validación complejos que frustraban al usuario.',
        solution: 'Implementé una nueva arquitectura de frontend modular que permite la validación de datos en tiempo real sin comprometer la seguridad. Se rediseñó el flujo de usuario para reducir los pasos de 12 a 5, integrando validación biométrica para agilizar la firma.',
        results: 'Incremento del 25% en la colocación de préstamos digitales en el primer trimestre. Reducción de tiempos de carga en un 40% dentro del módulo de créditos.'
    },

    // --- PROYECTO 2: UPNIFY ---
    {
        id: 2,
        slug: 'upnify-crm',
        title: 'Upnify: Motor de Inteligencia de Ventas',
        category: 'SaaS / CRM',
        client: 'Upnify',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', // Imagen Dashboard
        tagline: 'Automatización masiva para la gestión de prospectos y seguimiento comercial.',
        scope: 'Ingeniería Backend/Frontend, Algoritmos de Asignación, Dashboard en Tiempo Real.',
        technologies: ['JavaScript', 'Python', 'WebSocket', 'PostgreSQL'],
        challenge: 'El sistema anterior no podía manejar la carga masiva de prospectos (Bulk Upload) sin congelar la interfaz, y el seguimiento de clientes dependía de procesos manuales propensos al error humano.',
        solution: 'Desarrollé un módulo de ingesta asíncrona utilizando Python para procesar miles de registros en segundos. En el frontend, creé un sistema de "Smart Follow-up" que sugiere automáticamente acciones al vendedor basado en la inactividad del cliente.',
        results: 'Capacidad de procesamiento aumentada en un 300%. Los equipos de ventas reportaron un ahorro de 15 horas mensuales en tareas administrativas gracias a la automatización.'
    },

    // --- PROYECTO 3: FARMACIAS ESPECIALIZADAS ---
    {
        id: 3,
        slug: 'farmacias-especializadas',
        title: 'Farmacias Esp.: Logística HealthTech',
        category: 'E-commerce / Pharma',
        client: 'Farmacias Especializadas',
        img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', // Imagen Médica Limpia
        tagline: 'Trazabilidad crítica para la entrega de medicamentos de alta especialidad.',
        scope: 'Desarrollo E-commerce, Integración Logística, Aplicación de Rastreo.',
        technologies: ['JavaScript', 'Python', 'Google Maps API', 'Payment Gateway'],
        challenge: 'La venta de medicamentos especializados requiere una cadena de frío y tiempos de entrega exactos. La plataforma anterior carecía de visibilidad en tiempo real, generando incertidumbre en pacientes críticos.',
        solution: 'Construí una plataforma de E-commerce robusta conectada a una app de logística personalizada. Implementé un sistema de rastreo en tiempo real que permite al paciente ver la ubicación exacta y la temperatura de su medicamento durante el trayecto.',
        results: 'Reducción del 90% en llamadas de soporte preguntando "¿dónde está mi pedido?". Aumento de la confianza del paciente y cumplimiento estricto de normativas de salud.'
    }
];

export default projectData;