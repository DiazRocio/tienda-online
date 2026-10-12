import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [alertaVisual, setAlertaVisual] = useState(null); // Estado para el mensaje flotante

  // Función auxiliar para mostrar notificaciones flotantes temporales
  const mostrarAlerta = (mensaje) => {
    setAlertaVisual(mensaje);
    setTimeout(() => {
      setAlertaVisual(null);
    }, 3500); // Se oculta sola a los 3.5 segundos
  };

  // Suma total de unidades para el badge del Navbar
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

const agregarAlCarrito = (producto, varianteSeleccionada, cantidad = 1) => {
    const varianteId = varianteSeleccionada.id;
    
    setCarrito((prevCarrito) => {
      const indexExistente = prevCarrito.findIndex((item) => item.varianteId === varianteId);
      
      if (indexExistente !== -1) {
        const itemExistente = prevCarrito[indexExistente];
        const nuevaCantidadTotal = itemExistente.cantidad + cantidad;

        // Validar que no supere el stock de fábrica
        if (nuevaCantidadTotal > varianteSeleccionada.stock) {
          mostrarAlerta(`No puedes superar el stock máximo de ${varianteSeleccionada.stock} unidades.`);
          return prevCarrito;
        }

        const nuevoCarrito = [...prevCarrito];
        // Asignamos directamente la suma exacta en lugar de operadores acumulativos compuestos
        nuevoCarrito[indexExistente] = {
          ...itemExistente,
          cantidad: nuevaCantidadTotal
        };
        return nuevoCarrito;
      } else {
        if (cantidad > varianteSeleccionada.stock) {
          mostrarAlerta(`Stock insuficiente. Solo hay ${varianteSeleccionada.stock} unidades.`);
          return prevCarrito;
        }

        return [
          ...prevCarrito,
          {
            id: producto.id,
            nombre: producto.nombre,
            imagen: varianteSeleccionada.imagen,
            varianteId: varianteId,
            color: varianteSeleccionada.color,
            almacenamiento: varianteSeleccionada.almacenamiento,
            precio: varianteSeleccionada.precio,
            stock: varianteSeleccionada.stock,
            cantidad: cantidad,
          },
        ];
      }
    });
  };

  const eliminarDelCarrito = (varianteId) => {
    setCarrito(carrito.filter((item) => item.varianteId !== varianteId));
  };

  const actualizarCantidad = (varianteId, nuevaCantidad) => {
    const itemActual = carrito.find((item) => item.varianteId === varianteId);

    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(varianteId);
      return;
    }

    if (itemActual && nuevaCantidad > itemActual.stock) {
      mostrarAlerta(`Solo hay ${itemActual.stock} unidades disponibles de esta variante.`);
      return;
    }

    setCarrito(
      carrito.map((item) =>
        item.varianteId === varianteId ? { ...item, cantidad: nuevaCantidad } : item
      )
    );
  };

  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      <Navbar carrito={carrito} totalItems={totalItems} />
      
      {/* Alerta flotante tipo Toast dentro de la página */}
      {alertaVisual && (
        <div 
          className="position-fixed bottom-0 end-0 m-4 p-3 bg-dark text-white rounded shadow-lg border border-secondary d-flex align-items-center gap-2" 
          style={{ zIndex: 2000, maxWidth: '350px' }}
        >
          <span>⚠️</span>
          <span className="small">{alertaVisual}</span>
        </div>
      )}

      <div className="flex-fill">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route 
            path="/productos" 
            element={<Productos agregarAlCarrito={agregarAlCarrito} />} 
          />
          <Route 
            path="/producto/:id"
            element={<DetalleProducto carrito={carrito} agregarAlCarrito={agregarAlCarrito} />}
          />
          <Route 
            path="/carrito" 
            element={
              <Carrito 
                carrito={carrito} 
                actualizarCantidad={actualizarCantidad} 
                eliminarDelCarrito={eliminarDelCarrito} 
                setCarrito={setCarrito}
              />
            } 
          />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;