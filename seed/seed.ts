export const categories = [
  {
    name: "Balanzas",
    slug: "balanzas",
  },
  {
    name: "Accesorios y componentes",
    slug: "accesorios_y_componentes",
  },
  {
    name: "Equipos de calibración",
    slug: "equipos_de_calibracion",
  },
];

interface ProductsI {
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  stock: number;
  availability: boolean;
  whatsappUrl: string;
  featured?: boolean;
  images: Array<string>;
}

interface ServicesI {
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  availability: boolean;
  images: Array<string>;
  featured?: boolean;
  whatsappUrl: string;
}

interface TestimonialI {
  name: string;
  image: string;
  comment: string;
}

export const products: ProductsI[] = [
  {
    name: "Balanza de Calibración",
    slug: "balanza_de_calibracion",
    shortDescription: "esta es una descripción corta de las balanzas",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    stock: 20,
    availability: true,
    whatsappUrl: "url:whatsapp",
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
    featured: true,
  },
  {
    name: "Baterías",
    slug: "baterias",
    shortDescription: "esta es una descripción corta de las balanzas",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    stock: 20,
    availability: true,
    whatsappUrl: "url:whatsapp",
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
  },
  {
    name: "Pesas patrón",
    slug: "pesas_patron",
    shortDescription: "esta es una descripción corta de las balanzas",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    stock: 20,
    availability: true,
    whatsappUrl: "url:whatsapp",
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
    featured: true,
  },
  {
    name: "Indicador",
    slug: "indicador",
    shortDescription: "esta es una descripción corta de las balanzas",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    stock: 20,
    availability: true,
    whatsappUrl: "url:whatsapp",
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
    featured: true,
  },
  {
    name: "Celdas",
    slug: "celdas",
    shortDescription: "esta es una descripción corta de las balanzas",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    stock: 20,
    availability: true,
    whatsappUrl: "url:whatsapp",
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
  },
  {
    name: "Indicadores",
    slug: "indicadores",
    shortDescription: "esta es una descripción corta de las balanzas",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    stock: 20,
    availability: true,
    whatsappUrl: "url:whatsapp",
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
  },
  {
    name: "Balanzas de camiones",
    slug: "balanzas_de_camiones",
    shortDescription: "esta es una descripción corta de las balanzas",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    stock: 20,
    availability: true,
    whatsappUrl: "url:whatsapp",
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
  },
  {
    name: "Balanzas de laboratorio",
    slug: "balanzas_de_laboratorio",
    shortDescription: "esta es una descripción corta de las balanzas",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    stock: 20,
    availability: true,
    whatsappUrl: "url:whatsapp",
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
  },
  {
    name: "Balanzas industriales",
    slug: "balanzas_industriales",
    shortDescription: "esta es una descripción corta de las balanzas",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    stock: 20,
    availability: true,
    whatsappUrl: "url:whatsapp",
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
  },
  {
    name: "Balanzas Comerciales",
    slug: "balanzas_comerciales",
    shortDescription: "esta es una descripción corta de las balanzas",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    stock: 20,
    availability: true,
    whatsappUrl: "url:whatsapp",
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
  },
];

export const services: Array<ServicesI> = [
  {
    name: "Mantenimiento Preventivo",
    slug: "mantenimiento_preventivo",
    shortDescription:
      "Servicio de mantenimiento preventivo para instrumentos de medición, enfocado en evitar fallos y reducir costos de reparación.",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    availability: true,
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
    whatsappUrl: "url:whatsapp",
  },
  {
    name: "Mantenimiento Correctivo",
    slug: "mantenimiento_correctivo",
    shortDescription:
      "Servicio de mantenimiento correctivo de emergencia para balanzas y básculas, enfocado en reparaciones efectivas.",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    availability: true,
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
    whatsappUrl: "url:whatsapp",
    featured: true,
  },
  {
    name: "Servicio de Calibración",
    slug: "servicio_de_calibracion",
    shortDescription:
      "Servicio de calibración para garantizar instrumentos confiables y disminuir diferencias de peso en las mediciones.",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    availability: true,
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
    whatsappUrl: "url:whatsapp",
    featured: true,
  },
  {
    name: "Automatización",
    slug: "automatizacion",
    shortDescription:
      "Servicio de automatización con sistemas ultrarrápidos conectados a PLC, mejorando productividad y tiempo de actividad.",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    availability: true,
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
    whatsappUrl: "url:whatsapp",
    featured: true,
  },
  {
    name: "Instalación en planta",
    slug: "instalacion_en_planta",
    shortDescription:
      "Instalación profesional de equipos para asegurar que estén listos y funcionen correctamente desde el primer día.",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    availability: true,
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
    whatsappUrl: "url:whatsapp",
  },
  {
    name: "Servicio post-venta",
    slug: "servicio_postventa",
    shortDescription:
      "Seguimiento post-venta que evalúa el funcionamiento de sistemas de pesaje y ajusta parámetros con altos estándares de seguridad.",
    fullDescription:
      "esta es una descripcion larga de las balanzas de calibración para poder saber como son las medidas y entre otras cosas ",
    availability: true,
    images: [
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741180078/imase/lgfet809q9wrepywvhr1.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/sql0hvlpo7mdashdzson.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
      "https://res.cloudinary.com/ds8mx2zom/image/upload/v1741179393/imase/weimlnx683lik3uvgqjm.jpg",
    ],
    whatsappUrl: "url:whatsapp",
  },
];

export const testimonials = [
  {
    name: "María Rodríguez",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    comment:
      "El servicio de mantenimiento preventivo de IMASE nos ha ahorrado miles en costos de reparación. Su equipo es profesional, conocedor y siempre puntual.",
  },
  {
    name: "Roberto Silva",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
    comment:
      "Compramos varias balanzas industriales a IMASE y la calidad es excepcional. El soporte posventa y la asistencia técnica han sido excelentes.",
  },
  {
    name: "Carlos Mendoza",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    comment:
      "IMASE ha sido nuestro socio de confianza para la calibración de balanzas durante más de 10 años. Su experiencia técnica y servicio rápido son excepcionales. ¡Altamente recomendado!",
  },
];
