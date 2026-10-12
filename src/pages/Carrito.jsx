import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioCompra from '../components/FormularioCompra';

function Carrito({ carrito, actualizarCantidad, eliminarDelCarrito, setCarrito }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [compraExitosa, setCompraExitosa] = useState(false);
  const [idPedido, setIdPedido] = useState('');
  const [datosComprador, setDatosComprador] = useState({});

  // Cálculos dinámicos con reduce
  const cantidadTotalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalGeneral = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  // Función que se ejecuta cuando el formulario se envía con éxito
  const handleCompraExitosa = (formData, numeroOrden) => {
    setDatosComprador(formData);
    setIdPedido(numeroOrden);
    setCompraExitosa(true);
    setCarrito([]); // Vaciamos el carrito
  };

  // Si la compra fue exitosa, mostramos la tarjeta de confirmación detallada
  if (compraExitosa) {
    return (
      <div className="container py-5 text-center">
        <div className="card shadow-sm border-0 p-5 rounded-4 bg-light mx-auto" style={{ maxWidth: '600px' }}>
          <h2 className="fw-bold text-success mb-3">¡Compra Confirmada con Éxito! 🎉</h2>
          <p className="lead mb-2">Muchas gracias por tu compra, <strong>{datosComprador.nombreApellido}</strong>.</p>
          <p className="text-muted mb-4">Tu número de orden es: <span className="fw-bold text-dark">#{idPedido}</span></p>
          <hr className="my-4" />
          <p className="small text-muted mb-4">
            Hemos enviado los detalles del comprobante a tu correo: <strong>{datosComprador.email}</strong>.
            {datosComprador.metodoEntrega === 'Envio a domicilio' 
              ? ` Tu pedido será despachado a la dirección: ${datosComprador.direccion}.` 
              : ' Te esperamos en nuestra sucursal para retirar tu pedido.'}
          </p>
          <Link to="/productos" className="btn btn-dark btn-lg fw-bold text-decoration-none">
            Volver al Catálogo
          </Link>
        </div>
      </div>
    );
  }

  if (carrito.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold mb-3">🛒 Tu Carrito de Compras está vacío</h2>
        <p className="text-muted mb-4">Aún no has agregado ningún producto.</p>
        <Link to="/productos" className="btn btn-primary px-4 py-2 fw-semibold">
          Explorar Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold">🛒 Carrito de Compras</h2>

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

        {/* Resumen de Compra y Formulario de Envío */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 p-4 bg-light mb-4">
            <h4 className="fw-bold mb-3 border-bottom pb-2">Resumen del Pedido</h4>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Cantidad total de productos:</span>
              <span className="fw-bold">{cantidadTotalItems} unidades</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span className="text-muted">Total general:</span>
              <span className="fw-bold fs-4 text-success">${totalGeneral.toLocaleString()}</span>
            </div>

            {!mostrarFormulario ? (
              <button 
                className="btn btn-success btn-lg w-100 fw-bold shadow-sm"
                onClick={() => setMostrarFormulario(true)}
              >
                Confirmar y Simular Compra
              </button>
            ) : (
              <button 
                className="btn btn-outline-secondary btn-sm w-100"
                onClick={() => setMostrarFormulario(false)}
              >
                Ocultar Formulario
              </button>
            )}
          </div>

          {/* Se muestra el Formulario de Compra pasándole la función de éxito */}
          {mostrarFormulario && (
            <FormularioCompra carrito={carrito} onCompraExitosa={handleCompraExitosa} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Carrito;