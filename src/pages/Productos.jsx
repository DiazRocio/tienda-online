import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../data/productos';

function Productos({ agregarAlCarrito }) {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // Obtener categorías únicas para los filtros
  const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))];

  // Filtrar productos por nombre y categoría
  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaSeleccionada === 'Todas' || producto.categoria === categoriaSeleccionada;
    return coincideNombre && coincideCategoria;
  });

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center fw-bold">Catálogo de Productos 🛍️</h2>

      {/* Barra de Búsqueda y Filtros */}
      <div className="row mb-4 g-3">
        <div className="col-md-6">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Buscar producto por nombre..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select 
            className="form-select" 
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            {categorias.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Listado de Productos */}
      {productosFiltrados.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted fs-5">No se encontraron productos que coincidan con la búsqueda.</p>
        </div>
      ) : (
        <div className="row">
          {productosFiltrados.map((prod) => {
            // Tomamos la primera variante por defecto para mostrar precio y stock rápido
            const primeraVariante = prod.variantes[0];
            const hayStockGeneral = prod.variantes.some((v) => v.stock > 0);

            return (
              <div className="col-md-4 mb-4" key={prod.id}>
                <div className="card h-100 shadow-sm border-0">
                  <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={prod.imagen} 
                      className="card-img-top w-100 h-100 object-fit-cover" 
                      alt={prod.nombre} 
                    />
                    {!hayStockGeneral && (
                      <span className="position-absolute top-0 end-0 bg-danger text-white m-2 px-2 py-1 rounded small fw-bold">
                        Sin Stock
                      </span>
                    )}
                  </div>
                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-secondary mb-2 align-self-start">{prod.categoria}</span>
                    <h5 className="card-title fw-bold">{prod.nombre}</h5>
                    <p className="card-text text-muted small flex-grow-1">{prod.descripcion}</p>
                    
                    <div className="mt-auto">
                      <p className="fw-bold fs-5 text-success mb-3">${primeraVariante.precio.toLocaleString()}</p>
                      
                      <div className="d-flex gap-2">
                        <Link 
                          to={`/producto/${prod.id}`} 
                          className="btn btn-outline-dark btn-sm flex-fill"
                        >
                          Ver Detalle
                        </Link>
                        <button 
                          className="btn btn-primary btn-sm flex-fill"
                          onClick={() => agregarAlCarrito(prod, primeraVariante, 1)}
                          disabled={!hayStockGeneral}
                        >
                          {hayStockGeneral ? 'Comprar' : 'Agotado'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Productos;