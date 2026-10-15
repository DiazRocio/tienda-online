import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productos } from '../data/productos';

function DetalleProducto({ carrito = [], agregarAlCarrito }) {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === id);

  const [varianteSeleccionada, setVarianteSeleccionada] = useState(producto ? producto.variantes[0] : null);
  const [cantidad, setCantidad] = useState(1);
  const [mensajeLocal, setMensajeLocal] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState('success');

  if (!producto) {
    return (
      <div className="container py-5 text-center">
        <h3>Producto no encontrado</h3>
        <Link to="/productos" className="btn btn-secondary mt-3">Volver al catálogo</Link>
      </div>
    );
  }

  // Buscar cuánto de esta variante ya hay en el carrito
  const itemEnCarrito = carrito.find((item) => item.varianteId === varianteSeleccionada.id);
  const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
  
  // Stock real disponible para agregar
  const stockRestante = varianteSeleccionada.stock - cantidadEnCarrito;

  const handleCambiarVariante = (v) => {
    setVarianteSeleccionada(v);
    setCantidad(1);
    setMensajeLocal(null);
  };

  const handleAgregar = () => {
    if (stockRestante <= 0) return;

    if (cantidad > stockRestante) {
      setTipoMensaje('danger');
      setMensajeLocal(`Solo te quedan ${stockRestante} unidades disponibles para sumar.`);
      return;
    }

    agregarAlCarrito(producto, varianteSeleccionada, cantidad);
    setCantidad(1);

    setTipoMensaje('success');
    setMensajeLocal('¡Producto agregado al carrito con éxito!');
    
    setTimeout(() => {
      setMensajeLocal(null);
    }, 3500);
  };

  return (
    <main className="page-container">
      <Link to="/productos" className="btn btn-outline-secondary mb-4">← Volver al catálogo</Link>
      
      {mensajeLocal && (
        <div className={`alert ${tipoMensaje === 'success' ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`} role="alert">
          {mensajeLocal}
        </div>
      )}

      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          {/* Contenedor con fondo claro y object-fit-contain para evitar recortes */}
          <div className="detail-image-panel bg-light p-4 text-center d-flex align-items-center justify-content-center">
            <img 
              src={varianteSeleccionada.imagen} 
              alt={producto.nombre} 
              className="img-fluid rounded" 
              style={{ maxHeight: '380px', objectFit: 'contain', width: '100%' }} 
            />
          </div>
        </div>
        <div className="col-md-6">
          <span className="badge bg-info text-dark mb-2">{producto.categoria} | Marca: {producto.marca}</span>
          <h2 className="fw-bold mb-3">{producto.nombre}</h2>
          <p className="text-muted mb-4">{producto.descripcion}</p>

          {/* Precio limpio sin barra diagonal */}
          <h3 className="detail-price fw-bold mb-4">${varianteSeleccionada.precio.toLocaleString()}</h3>

          {/* Selector de Variantes */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Seleccionar Versión / Color:</label>
            <div className="d-flex flex-wrap gap-2">
              {producto.variantes.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  className={`btn btn-sm ${varianteSeleccionada.id === v.id ? 'btn-dark' : 'btn-outline-dark'}`}
                  onClick={() => handleCambiarVariante(v)}
                >
                  {v.color !== "N/A" ? v.color : ""} {v.almacenamiento !== "N/A" ? `- ${v.almacenamiento}` : ""}
                </button>
              ))}
            </div>
          </div>

          {/* Sección de Stock Ordenada y Clara */}
          <div className="card bg-light border-0 p-3 mb-4">
            <div className="d-flex justify-content-between small mb-1">
              <span className="text-muted">Stock total de fábrica:</span>
              <span className="fw-bold">{varianteSeleccionada.stock} unidades</span>
            </div>
            {cantidadEnCarrito > 0 && (
              <div className="d-flex justify-content-between small mb-1 text-primary">
                <span>Ya en tu carrito:</span>
                <span className="fw-bold">{cantidadEnCarrito} unidades</span>
              </div>
            )}
            <div className="d-flex justify-content-between small">
              <span className="text-muted">Disponible para agregar:</span>
              <span className={stockRestante > 0 ? "fw-bold text-success" : "fw-bold text-danger"}>
                {stockRestante > 0 ? `${stockRestante} unidades` : "Límite alcanzado"}
              </span>
            </div>
          </div>

          {/* Botón e Input de Cantidad */}
          <div className="d-flex align-items-center gap-3">
            <input 
              type="number" 
              min="1" 
              max={stockRestante > 0 ? stockRestante : 1} 
              value={stockRestante > 0 ? cantidad : cantidadEnCarrito} 
              onChange={(e) => {
                const val = parseInt(e.target.value) || 1;
                if (val <= stockRestante) {
                  setCantidad(val);
                } else {
                  setCantidad(stockRestante);
                }
              }}
              className="form-control text-center fw-bold" 
              style={{ width: '80px' }}
              disabled={stockRestante === 0}
            />
            <button 
              className="btn btn-primary btn-lg flex-fill"
              onClick={handleAgregar}
              disabled={stockRestante === 0}
            >
              {stockRestante > 0 ? 'Agregar al Carrito' : 'Stock Máximo en Carrito'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetalleProducto;