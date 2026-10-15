import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ carrito = [], totalItems = 0 }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light site-navbar sticky-top">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">T</span>
          TechStore
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <div className="navbar-nav ms-auto align-items-center">
            <NavLink to="/" end className="nav-link" onClick={closeMenu}>Inicio</NavLink>
            <NavLink to="/productos" className="nav-link" onClick={closeMenu}>Catálogo</NavLink>
            <NavLink to="/contacto" className="nav-link" onClick={closeMenu}>Contacto</NavLink>
          </div>

          <div className="position-relative ms-lg-3 cart-area">
            <button
              type="button"
              onClick={toggleCart}
              className="btn btn-outline-secondary cart-trigger"
              aria-expanded={isCartOpen}
              aria-label={`Carrito, ${totalItems} productos`}
            >
              <span aria-hidden="true">🛒</span> Carrito
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </button>

            {isCartOpen && (
              <div className="position-absolute end-0 mt-2 bg-white text-dark p-3 cart-popover">
                <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                  <h6 className="m-0 fw-bold">Tu carrito</h6>
                  <button
                    type="button"
                    onClick={toggleCart}
                    className="btn-close"
                    aria-label="Cerrar carrito"
                  />
                </div>

                {carrito.length === 0 ? (
                  <p className="text-muted text-center m-0 py-3">Todavía no agregaste productos.</p>
                ) : (
                  <>
                    <div style={{ maxHeight: '220px', overflowY: 'auto' }} className="mb-2">
                      {carrito.map((item) => (
                        <div
                          key={item.varianteId}
                          className="d-flex justify-content-between align-items-center small border-bottom py-2 gap-3"
                        >
                          <div>
                            <span className="fw-semibold">{item.nombre}</span>
                            <div className="text-muted">{item.color} · {item.cantidad} u.</div>
                          </div>
                          <span className="fw-bold text-nowrap">
                            ${(item.precio * item.cantidad).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/carrito"
                      onClick={() => {
                        setIsCartOpen(false);
                        closeMenu();
                      }}
                      className="btn btn-primary btn-sm w-100 mt-2"
                    >
                      Ver carrito completo
                    </Link>
                  </>
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
