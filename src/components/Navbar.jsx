import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ carrito = [], totalItems = 0 }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        {/* Logo / Marca */}
        <Link to="/" className="navbar-brand fw-bold text-info">
          TechStore 🚀
        </Link>

        {/* Enlaces de navegación */}
        <div className="navbar-nav ms-auto flex-row gap-3 align-items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link text-info active" : "nav-link text-white"}>
            Inicio
          </NavLink>
          <NavLink to="/productos" className={({ isActive }) => isActive ? "nav-link text-info active" : "nav-link text-white"}>
            Catálogo
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => isActive ? "nav-link text-info active" : "nav-link text-white"}>
            Contacto
          </NavLink>

          {/* Botón de Carrito con Badge */}
          <div className="position-relative ms-2">
            <button 
              onClick={toggleCart}
              className="btn btn-outline-light btn-sm position-relative"
            >
              🛒 Carrito
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-dark fw-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Dropdown del Carrito Flotante */}
            {isCartOpen && (
              <div className="position-absolute end-0 mt-2 bg-white text-dark rounded shadow p-3 border" style={{ width: '280px', zIndex: 1050 }}>
                <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                  <h6 className="m-0 fw-bold">Tu Carrito</h6>
                  <button onClick={toggleCart} className="btn-close btn-close-sm" aria-label="Cerrar"></button>
                </div>

                {carrito.length === 0 ? (
                  <p className="text-muted text-center m-0 py-3">El carrito está vacío</p>
                ) : (
                  <div>
                    <div style={{ maxHeight: '200px', overflowY: 'auto' }} className="mb-2">
                      {carrito.map((item) => (
                        <div key={item.varianteId} className="d-flex justify-content-between align-items-center small border-bottom py-1">
                          <div>
                            <span className="fw-semibold">{item.nombre}</span>
                            <div className="text-muted" style={{ fontSize: '11px' }}>
                              {item.color} (x{item.cantidad})
                            </div>
                          </div>
                          <span className="fw-bold">${item.precio * item.cantidad}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to="/carrito" 
                      onClick={() => setIsCartOpen(false)}
                      className="btn btn-dark btn-sm w-100 mt-2"
                    >
                      Ver Carrito Completo
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;