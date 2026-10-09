import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Carrito({ carrito, actualizarCantidad, eliminarDelCarrito, setCarrito }) {
  const [compraRealizada, setCompraRealizada] = useState(false);

  // Cálculos dinámicos con reduce
  const cantidadTotalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalGeneral = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  const handleSimularCompra = () => {
    if (carrito.length === 0) return;
    setCompraRealizada(true);
    setCarrito([]); // Vaciamos el carrito tras la compra simulada
  };

  if (compraRealizada) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-success p-5 shadow-sm rounded-4">
          <h2 className="fw-bold mb-3">¡Compra realizada con éxito! 🎉</h2>
          <p className="lead mb-4">Tu pedido ha sido procesado de manera simulada correctamente.</p>
          <Link to="/productos" className="btn btn-dark btn-lg">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold">🛒 Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <div className="text-center py-5 bg-light rounded-4 shadow-sm">
          <h4 className="text-muted mb-3">Tu carrito está vacío</h4>
          <p className="text-muted small mb-4">¿Aún no sabes qué llevar? Explora nuestro catálogo y descubre productos increíbles.</p>
          <Link to="/productos" className="btn btn-primary btn-lg">
            Ir al Catálogo
          </Link>
        </div>
      ) : (
        <div className="row">
          {/* Listado de Productos en el Carrito */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="card shadow-sm border-0 p-3">
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Producto</th>
                      <th>Precio Unit.</th>
                      <th className="text-center">Cantidad</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito.map((item) => (
                      <tr key={item.varianteId}>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <img 
                              src={item.imagen} 
                              alt={item.nombre} 
                              style={{ width: '60px', height: '60px', objectFit: 'cover' }} 
                              className="rounded"
                            />
                            <div>
                              <h6 className="fw-bold mb-0">{item.nombre}</h6>
                              <small className="text-muted">
                                {item.color !== "N/A" ? `Color: ${item.color}` : ""} 
                                {item.almacenamiento !== "N/A" ? ` | ${item.almacenamiento}` : ""}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="fw-semibold">${item.precio.toLocaleString()}</td>
                        <td className="text-center" style={{ width: '130px' }}>
                          <div className="input-group input-group-sm">
                            <button 
                              className="btn btn-outline-secondary"
                              onClick={() => actualizarCantidad(item.varianteId, item.cantidad - 1)}
                            >
                              -
                            </button>
                            <span className="form-control text-center bg-white fw-bold d-flex align-items-center justify-content-center">
                              {item.cantidad}
                            </span>
                            <button 
                              className="btn btn-outline-secondary"
                              onClick={() => actualizarCantidad(item.varianteId, item.cantidad + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="fw-bold text-success">${(item.precio * item.cantidad).toLocaleString()}</td>
                        <td>
                          <button 
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => eliminarDelCarrito(item.varianteId)}
                            title="Eliminar producto"
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Resumen de Compra */}
          <div className="col-lg-4">
            <div className="card shadow-sm border-0 p-4 bg-light">
              <h4 className="fw-bold mb-3 border-bottom pb-2">Resumen del Pedido</h4>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Cantidad total de productos:</span>
                <span className="fw-bold">{cantidadTotalItems} unidades</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span className="text-muted">Total general:</span>
                <span className="fw-bold fs-4 text-success">${totalGeneral.toLocaleString()}</span>
              </div>

              <button 
                className="btn btn-success btn-lg w-100 fw-bold shadow-sm"
                onClick={handleSimularCompra}
              >
                Confirmar y Simular Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrito;