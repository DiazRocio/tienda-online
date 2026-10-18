import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { productos } from '../data/productos';

function Productos({ agregarAlCarrito }) {
  const [busqueda, setBusqueda] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  // Obtener categorías únicas para los filtros
  const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))];
  const categoriaParam = searchParams.get('categoria');
  const categoriaSeleccionada = categorias.includes(categoriaParam) ? categoriaParam : 'Todas';

  const cambiarCategoria = (categoria) => {
    const nuevosParametros = new URLSearchParams(searchParams);
    if (categoria === 'Todas') {
      nuevosParametros.delete('categoria');
    } else {
      nuevosParametros.set('categoria', categoria);
    }
    setSearchParams(nuevosParametros);
  };

  // Filtrar productos por nombre y categoría
  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaSeleccionada === 'Todas' || producto.categoria === categoriaSeleccionada;
    return coincideNombre && coincideCategoria;
  });

  return (
    <main className="page-container catalog-page">
      <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
        <div>
          <p className="text-primary fw-bold mb-2">TECNOLOGÍA PARA VOS</p>
          <h1 className="page-heading mb-2">Nuestro catálogo</h1>
          <p className="page-intro mb-0">Explorá productos seleccionados y encontrá tu próximo favorito.</p>
        </div>
      </div>

      {/* Barra de Búsqueda y Filtros */}
      <div className="catalog-toolbar">
        <div>
          <input 
            type="text" 
            className="form-control" 
            aria-label="Buscar productos"
            placeholder="⌕  Buscar por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div>
          <select 
            className="form-select" 
            aria-label="Filtrar por categoría"
            value={categoriaSeleccionada}
            onChange={(e) => cambiarCategoria(e.target.value)}
          >
            {categorias.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Listado de Productos */}
      <p className="catalog-result-count">
        {productosFiltrados.length} {productosFiltrados.length === 1 ? 'producto encontrado' : 'productos encontrados'}
      </p>
      {productosFiltrados.length === 0 ? (
        <div className="card text-center py-5 px-3">
          <span className="fs-1 mb-2" aria-hidden="true">🔎</span>
          <h2 className="h5 fw-bold">No encontramos resultados</h2>
          <p className="text-muted fs-5">No se encontraron productos que coincidan con la búsqueda.</p>
        </div>
      ) : (
        <div className="row g-4">
          {productosFiltrados.map((prod) => {
            // Tomamos la primera variante por defecto para mostrar precio y stock rápido
            const primeraVariante = prod.variantes[0];
            const hayStockGeneral = prod.variantes.some((v) => v.stock > 0);

            return (
              <div className="col-sm-6 col-lg-4" key={prod.id}>
                <div className="card product-card">
                  <div className="product-card-image">
                    <img 
                      src={prod.imagen} 
                      className="card-img-top"
                      alt={prod.nombre} 
                    />
                    {!hayStockGeneral && (
                      <span className="position-absolute top-0 end-0 bg-danger text-white m-2 px-2 py-1 rounded small fw-bold">
                        Sin Stock
                      </span>
                    )}
                  </div>
                  <div className="card-body d-flex flex-column">
                    <span className="badge mb-2 align-self-start">{prod.categoria}</span>
                    <h5 className="card-title fw-bold">{prod.nombre}</h5>
                    <p className="card-text text-muted small flex-grow-1">{prod.descripcion}</p>
                    
                    <div className="mt-auto">
                      <p className="fw-bold product-card-price">${primeraVariante.precio.toLocaleString()}</p>
                      
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
    </main>
  );
}

export default Productos;