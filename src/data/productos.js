export const productos = [
  {
    id: "cel-01",
    nombre: "Smartphone Samsung Galaxy S23",
    categoria: "Celulares",
    marca: "Samsung",
    imagen: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    descripcion: "Pantalla Dynamic AMOLED 2X, potente procesador y gran rendimiento fotográfico.",
    especificaciones: {
      pantalla: "6.1 pulgadas",
      camaraPrincipal: "50 MP",
      sistemaOperativo: "Android"
    },
    variantes: [
      { id: "cel-01-negro-128", color: "Negro", almacenamiento: "128GB", precio: 750000, stock: 5 },
      { id: "cel-01-blanco-256", color: "Blanco", almacenamiento: "256GB", precio: 820000, stock: 3 },
      { id: "cel-01-verde-256", color: "Verde", almacenamiento: "256GB", precio: 820000, stock: 0 }
    ]
  },
  {
    id: "cel-02",
    nombre: "iPhone 14 Apple",
    categoria: "Celulares",
    marca: "Apple",
    imagen: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    descripcion: "Sistema de cámara avanzado para mejores fotos con poca luz y modo Cine.",
    especificaciones: {
      pantalla: "6.1 pulgadas",
      camaraPrincipal: "12 MP",
      sistemaOperativo: "iOS"
    },
    variantes: [
      { id: "cel-02-azul-128", color: "Azul", almacenamiento: "128GB", precio: 1100000, stock: 4 },
      { id: "cel-02-rojo-256", color: "Rojo", almacenamiento: "256GB", precio: 1250000, stock: 2 }
    ]
  },
  {
    id: "pc-01",
    nombre: "Notebook Lenovo IdeaPad 3",
    categoria: "Computación",
    marca: "Lenovo",
    imagen: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    descripcion: "Ideal para productividad diaria, estudio y multitarea fluida.",
    especificaciones: {
      procesador: "AMD Ryzen 5",
      memoriaRam: "8GB",
      almacenamiento: "256GB SSD"
    },
    variantes: [
      { id: "pc-01-gris-8gb", color: "Gris", almacenamiento: "256GB SSD", precio: 680000, stock: 6 }
    ]
  },
  {
    id: "pc-02",
    nombre: "Notebook HP Pavilion x360",
    categoria: "Computación",
    marca: "HP",
    imagen: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    descripcion: "Diseño convertible 2 en 1 con pantalla táctil para mayor versatilidad.",
    especificaciones: {
      procesador: "Intel Core i5",
      memoriaRam: "16GB",
      almacenamiento: "512GB SSD"
    },
    variantes: [
      { id: "pc-02-plata-16gb", color: "Plata", almacenamiento: "512GB SSD", precio: 990000, stock: 3 }
    ]
  },
  {
    id: "aud-01",
    nombre: "Auriculares Inalámbricos Sony WH-1000XM4",
    categoria: "Audio",
    marca: "Sony",
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    descripcion: "Cancelación de ruido líder en la industria y sonido de alta fidelidad.",
    especificaciones: {
      conectividad: "Bluetooth / Inalámbrico",
      cancelacionRuido: "Sí (ANC)",
      autonomia: "Hasta 30 horas"
    },
    variantes: [
      { id: "aud-01-negro", color: "Negro", almacenamiento: "N/A", precio: 350000, stock: 8 },
      { id: "aud-01-silver", color: "Plateado", almacenamiento: "N/A", precio: 350000, stock: 0 }
    ]
  },
  {
    id: "aud-02",
    nombre: "Parlante Bluetooth JBL Charge 5",
    categoria: "Audio",
    marca: "JBL",
    imagen: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    descripcion: "Sonido potente y resistente al agua con powerbank incorporado.",
    especificaciones: {
      conectividad: "Bluetooth 5.1",
      resistenciaAgua: "IP67",
      autonomia: "Hasta 20 horas"
    },
    variantes: [
      { id: "aud-02-azul", color: "Azul", almacenamiento: "N/A", precio: 210000, stock: 5 },
      { id: "aud-02-camu", color: "Camuflado", almacenamiento: "N/A", precio: 210000, stock: 4 }
    ]
  },
  {
    id: "watch-01",
    nombre: "Smartwatch Apple Watch Series 9",
    categoria: "Wearables",
    marca: "Apple",
    imagen: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=600&q=80",
    descripcion: "Potente procesador, pantalla más brillante y gestos avanzados.",
    especificaciones: {
      pantalla: "Retina OLED",
      resistenciaAgua: "50 metros",
      sensorSalud: "Oxígeno en sangre y ECG"
    },
    variantes: [
      { id: "watch-01-aluminio-midnight", color: "Midnight", almacenamiento: "64GB", precio: 720000, stock: 4 },
      { id: "watch-01-aluminio-starlight", color: "Starlight", almacenamiento: "64GB", precio: 720000, stock: 0 }
    ]
  },
  {
    id: "gam-01",
    nombre: "Consola Sony PlayStation 5",
    categoria: "Videojuegos",
    marca: "Sony",
    imagen: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
    descripcion: "Experimenta una velocidad asombrosa con una SSD de ultra alta velocidad.",
    especificaciones: {
      almacenamiento: "825GB SSD",
      resolucion: "Hasta 4K a 120Hz",
      tecnologia: "Ray Tracing"
    },
    variantes: [
      { id: "gam-01-standard", color: "Blanco", almacenamiento: "825GB", precio: 1350000, stock: 3 }
    ]
  },
  {
    id: "acc-01",
    nombre: "Teclado Mecánico Gamer Razer BlackWidow",
    categoria: "Accesorios",
    marca: "Razer",
    imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    descripcion: "Switches mecánicos de alta precisión e iluminación RGB personalizable.",
    especificaciones: {
      tipo: "Mecánico",
      retroiluminacion: "RGB Chroma",
      conexion: "USB Inalámbrico / Cable"
    },
    variantes: [
      { id: "acc-01-rgb", color: "Negro", almacenamiento: "N/A", precio: 180000, stock: 7 }
    ]
  },
  {
    id: "acc-02",
    nombre: "Mouse Inalámbrico Logitech MX Master 3S",
    categoria: "Accesorios",
    marca: "Logitech",
    imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    descripcion: "Desplazamiento electromagnético MagSpeed y seguimiento sobre cualquier superficie.",
    especificaciones: {
      sensor: "8000 DPI Darkfield",
      conectividad: "Bluetooth / Logi Bolt",
      bateria: "Hasta 70 días"
    },
    variantes: [
      { id: "acc-02-gris", color: "Gris Grafito", almacenamiento: "N/A", precio: 145000, stock: 10 },
      { id: "acc-02-blanco", color: "Blanco Hueso", almacenamiento: "N/A", precio: 145000, stock: 0 }
    ]
  },
  {
    id: "mon-01",
    nombre: "Monitor Gamer LG UltraGear 27\"",
    categoria: "Monitores",
    marca: "LG",
    imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    descripcion: "Pantalla IPS con tasa de refresco ultra rápida de 165Hz para gaming competitivo.",
    especificaciones: {
      tamano: "27 pulgadas",
      resolucion: "Full HD (1920x1080)",
      tasaRefresco: "165Hz"
    },
    variantes: [
      { id: "mon-01-negro", color: "Negro", almacenamiento: "N/A", precio: 430000, stock: 5 }
    ]
  },
  {
    id: "tab-01",
    nombre: "Tablet Samsung Galaxy Tab S9",
    categoria: "Tablets",
    marca: "Samsung",
    imagen: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    descripcion: "Pantalla Dynamic AMOLED 2X con S Pen incluido resistente al agua.",
    especificaciones: {
      pantalla: "11 pulgadas",
      memoriaRam: "8GB",
      almacenamiento: "128GB"
    },
    variantes: [
      { id: "tab-01-gris", color: "Gris Grafito", almacenamiento: "128GB", precio: 890000, stock: 3 },
      { id: "tab-01-beige", color: "Beige", almacenamiento: "256GB", precio: 980000, stock: 0 }
    ]
  }
];