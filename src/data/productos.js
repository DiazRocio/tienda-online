export const productos = [
  {
    id: "cel-01",
    nombre: "Smartphone Samsung Galaxy S26",
    categoria: "Celulares",
    marca: "Samsung",
    imagen: "/img/samsung-s26-negro.jpg",
    descripcion: "Pantalla Dynamic AMOLED 2X de alta tasa de refresco, funciones de IA avanzada y gran rendimiento fotográfico.",
    especificaciones: {
      pantalla: "6.2 pulgadas",
      camaraPrincipal: "200 MP",
      sistemaOperativo: "Android"
    },
    variantes: [
      { id: "cel-01-negro-256", color: "Negro Ónix", almacenamiento: "256GB", precio: 1250000, stock: 5, imagen: "/img/samsung-s26-negro.jpg" },
      { id: "cel-01-violeta-512", color: "Violeta Cobalto", almacenamiento: "512GB", precio: 1450000, stock: 3, imagen: "/img/samsung-s26-violeta.png" },
      { id: "cel-01-blanco-512", color: "Blanco", almacenamiento: "512GB", precio: 1450000, stock: 0, imagen: "/img/samsung-s26-blanco.jpg" }
    ]
  },
  {
    id: "cel-02",
    nombre: "iPhone 17 Pro Max Apple",
    categoria: "Celulares",
    marca: "Apple",
    imagen: "/img/iphone-17-naranja.jpg",
    descripcion: "Chip de última generación, isla dinámica optimizada y un sistema fotográfico profesional.",
    especificaciones: {
      pantalla: "6.1 pulgadas",
      camaraPrincipal: "48 MP",
      sistemaOperativo: "iOS"
    },
    variantes: [
      { id: "cel-02-naranja-256", color: "Cosmic Orange", almacenamiento: "256GB", precio: 1750000, stock: 4, imagen: "/img/iphone-17-naranja.jpg" },
      { id: "cel-02-azul-512", color: "Deep Blue", almacenamiento: "512GB", precio: 1980000, stock: 2, imagen: "/img/iphone-17-azul.jpg" }
    ]
  },
  {
    id: "pc-01",
    nombre: "Notebook Lenovo IdeaPad Pro 5",
    categoria: "Computación",
    marca: "Lenovo",
    imagen: "/img/lenovo-ideapad.jpg",
    descripcion: "Rendimiento superior con chasis metálico ultradelgado para creadores de contenido y productividad.",
    especificaciones: {
      procesador: "AMD Ryzen 7",
      memoriaRam: "16GB",
      almacenamiento: "512GB SSD NVMe"
    },
    variantes: [
      { id: "pc-01-gris-16gb", color: "Gris Tormenta", almacenamiento: "512GB SSD", precio: 1150000, stock: 6, imagen: "/img/lenovo-ideapad.jpg" }
    ]
  },
  {
    id: "pc-02",
    nombre: "Notebook HP Envy x360",
    categoria: "Computación",
    marca: "HP",
    imagen: "/img/hp-envy-360.jpg",
    descripcion: "Diseño convertible 2 en 1 con pantalla táctil OLED y lápiz inteligente incluido.",
    especificaciones: {
      procesador: "Intel Core Ultra 7",
      memoriaRam: "16GB",
      almacenamiento: "1TB SSD"
    },
    variantes: [
      { id: "pc-02-plata-1tb", color: "Plata Natural", almacenamiento: "1TB SSD", precio: 1550000, stock: 3, imagen: "/img/hp-envy-360.jpg" }
    ]
  },
  {
    id: "aud-01",
    nombre: "Auriculares Inalámbricos Sony WH-1000XM5",
    categoria: "Audio",
    marca: "Sony",
    imagen: "/img/auriculares-sony-rosa.jpg",
    descripcion: "Cancelación de ruido líder en la industria con múltiples micrófonos y audio espacial.",
    especificaciones: {
      conectividad: "Bluetooth 5.2",
      cancelacionRuido: "HD Noise Canceling QN1",
      autonomia: "Hasta 30 horas"
    },
    variantes: [
      { id: "aud-01-pink", color: "Rosa", almacenamiento: "N/A", precio: 580000, stock: 8, imagen: "/img/auriculares-sony-rosa.jpg" },
      { id: "aud-01-silver", color: "Blanco Humo", almacenamiento: "N/A", precio: 580000, stock: 0, imagen: "/img/auriculares-sony-blanco.jpg" }
    ]
  },
  {
    id: "aud-02",
    nombre: "Parlante Bluetooth JBL Charge 6",
    categoria: "Audio",
    marca: "JBL",
    imagen: "/img/parlante-jbl-azul.png",
    descripcion: "Sonido JBL Pro optimizado, graves profundos y certificación de resistencia total IP68.",
    especificaciones: {
      conectividad: "Bluetooth 5.3",
      resistenciaAgua: "IP68 (Sumergible)",
      autonomia: "Hasta 24 horas"
    },
    variantes: [
      { id: "aud-02-azul", color: "Azul Oscuro", almacenamiento: "N/A", precio: 320000, stock: 5, imagen: "/img/parlante-jbl-azul.png" },
      { id: "aud-02-negro", color: "Negro", almacenamiento: "N/A", precio: 320000, stock: 4, imagen: "/img/parlante-jbl-negro.png" }
    ]
  },
  {
    id: "watch-01",
    nombre: "Smartwatch Apple Watch Series 10",
    categoria: "Wearables",
    marca: "Apple",
    imagen: "/img/applewatch-azul.jpg",
    descripcion: "Diseño más delgado, pantalla gran angular OLED y sensores de salud de última generación.",
    especificaciones: {
      pantalla: "OLED LTPO Wide",
      resistenciaAgua: "50 metros",
      sensorSalud: "Detección de apnea del sueño y ECG"
    },
    variantes: [
      { id: "watch-01-azul", color: "Azul", almacenamiento: "64GB", precio: 950000, stock: 4, imagen: "/img/applewatch-azul.jpg" },
      { id: "watch-01-violeta", color: "Violeta", almacenamiento: "64GB", precio: 950000, stock: 0, imagen: "/img/applewatch-violeta.jpg" }
    ]
  },
  {
    id: "gam-01",
    nombre: "Consola Sony PlayStation 5 Pro",
    categoria: "Videojuegos",
    marca: "Sony",
    imagen: "/img/playstation-5.jpg",
    descripcion: "Arquitectura gráfica mejorada con renderizado avanzado y trazado de rayos acelerado por IA.",
    especificaciones: {
      almacenamiento: "2TB SSD Ultra Rápido",
      resolucion: "Gaming 4K a 120fps",
      tecnologia: "PlayStation Spectral Super Resolution (PSSR)"
    },
    variantes: [
      { id: "gam-01-pro", color: "Blanco Edición Pro", almacenamiento: "2TB", precio: 1950000, stock: 3, imagen: "/img/playstation-5.jpg" }
    ]
  },
  {
    id: "acc-01",
    nombre: "Teclado Mecánico Gamer Razer BlackWidow V4 Pro",
    categoria: "Accesorios",
    marca: "Razer",
    imagen: "/img/teclado.jpg",
    descripcion: "Dial de control mecánico, switches ópticos ultra sensibles e iluminación RGB por tecla.",
    especificaciones: {
      tipo: "Mecánico Óptico",
      retroiluminacion: "Razer Chroma RGB",
      conexion: "USB-C Desmontable"
    },
    variantes: [
      { id: "acc-01-rgb", color: "Negro", almacenamiento: "N/A", precio: 290000, stock: 7, imagen: "/img/teclado.jpg" }
    ]
  },
  {
    id: "acc-02",
    nombre: "Mouse Inalámbrico Logitech MX Master 4",
    categoria: "Accesorios",
    marca: "Logitech",
    imagen: "/img/mouse-negro.jpg",
    descripcion: "Sensor de alta precisión sobre cristal, rueda háptica inteligente y ergonomía avanzada.",
    especificaciones: {
      sensor: "10000 DPI Darkfield",
      conectividad: "Bluetooth y Logi Bolt USB",
      bateria: "Hasta 80 días"
    },
    variantes: [
      { id: "acc-02-gris", color: "Gris Espacial", almacenamiento: "N/A", precio: 210000, stock: 10, imagen: "/img/mouse-negro.jpg" },
      { id: "acc-02-blanco", color: "Blanco Platino", almacenamiento: "N/A", precio: 210000, stock: 0, imagen: "/img/mouse-blanco.jpg" }
    ]
  },
  {
    id: "mon-01",
    nombre: "Monitor Gamer LG UltraGear OLED 27\"",
    categoria: "Monitores",
    marca: "LG",
    imagen: "/img/monitor.jpeg",
    descripcion: "Panel OLED con negros puros, tiempo de respuesta de 0.03ms y 240Hz de tasa de refresco.",
    especificaciones: {
      tamano: "27 pulgadas QHD",
      resolucion: "2560 x 1440",
      tasaRefresco: "240Hz"
    },
    variantes: [
      { id: "mon-01-oled", color: "Negro", almacenamiento: "N/A", precio: 890000, stock: 5, imagen: "/img/monitor.jpeg" }
    ]
  },
  {
    id: "tab-01",
    nombre: "Tablet Samsung Galaxy Tab S11 Ultra",
    categoria: "Tablets",
    marca: "Samsung",
    imagen: "/img/tablet-gris.jpg",
    descripcion: "Pantalla AMOLED inmersiva, procesador de alta potencia y S Pen de baja latencia.",
    especificaciones: {
      pantalla: "12.4 pulgadas",
      memoriaRam: "12GB",
      almacenamiento: "256GB"
    },
    variantes: [
      { id: "tab-01-gris", color: "Gris Grafito", almacenamiento: "256GB", precio: 1350000, stock: 3, imagen: "/img/tablet-gris.jpg" },
      { id: "tab-01-plata", color: "Plata Lunar", almacenamiento: "512GB", precio: 1550000, stock: 0, imagen: "/img/tablet-plata.jpg" }
    ]
  }
];