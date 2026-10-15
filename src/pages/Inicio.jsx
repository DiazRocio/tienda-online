import { Link } from 'react-router-dom';
import { productos } from '../data/productos';

const categorias = [
  { nombre: 'Celulares', icono: '📱', detalle: 'Última generación' },
  { nombre: 'Computación', icono: '💻', detalle: 'Potencia para tus ideas' },
  { nombre: 'Audio', icono: '🎧', detalle: 'Escuchá cada detalle' },
  { nombre: 'Accesorios', icono: '⌨️', detalle: 'Tu setup, a tu manera' },
];

function Inicio() {
  const productoDestacado = productos.find((producto) => producto.id === 'cel-02') ?? productos[0];
  const productosDestacados = productos.slice(0, 3);

  return (
    <main className="page-container home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <span className="hero-eyebrow">✦ Tecnología que te conecta</span>
          <h1>Lo último en tecnología, más cerca tuyo.</h1>
          <p>
            Encontrá tus próximos favoritos entre celulares, computación y accesorios
            seleccionados para vos.
          </p>
          <Link to="/productos" className="btn btn-light btn-lg">
            Explorar catálogo <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="hero-product" aria-label={`Producto destacado: ${productoDestacado.nombre}`}>
          <img src={productoDestacado.imagen} alt={productoDestacado.nombre} />
          <div className="hero-product-label">
            <small>Destacado de la semana</small>
            <strong>{productoDestacado.nombre}</strong>
          </div>
        </div>
      </section>

      <section className="home-benefits" aria-label="Beneficios de comprar en TechStore">
        <div className="benefit-item">
          <span className="benefit-icon" aria-hidden="true">🚚</span>
          <div><strong>Envíos a todo el país</strong><span>Recibí tu compra donde estés</span></div>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon" aria-hidden="true">🛡️</span>
          <div><strong>Compra segura</strong><span>Atención en cada paso</span></div>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon" aria-hidden="true">✨</span>
          <div><strong>Marcas que elegís</strong><span>Calidad para todos los días</span></div>
        </div>
      </section>

      <section aria-labelledby="categorias-heading">
        <div className="home-section-heading">
          <div>
            <p className="text-primary fw-bold mb-2">ENCONTRÁ LO QUE BUSCÁS</p>
            <h2 id="categorias-heading">Explorá por categoría</h2>
          </div>
          <Link to="/productos" className="fw-bold text-decoration-none">Ver todo el catálogo →</Link>
        </div>
        <div className="home-category-grid">
          {categorias.map((categoria) => (
            <Link
              to={`/productos?categoria=${encodeURIComponent(categoria.nombre)}`}
              className="home-category-card"
              key={categoria.nombre}
            >
              <span className="category-icon" aria-hidden="true">{categoria.icono}</span>
              <strong>{categoria.nombre}</strong>
              <span>{categoria.detalle}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-featured-grid" aria-label="Productos destacados">
        <div className="home-section-heading">
          <div>
            <p className="text-primary fw-bold mb-2">SELECCIÓN TECHSTORE</p>
            <h2>Favoritos para descubrir</h2>
          </div>
        </div>
        {productosDestacados.map((producto) => (
          <Link
            to={`/producto/${producto.id}`}
            className="home-featured-card"
            key={producto.id}
          >
            <div className="home-featured-image">
              <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="home-featured-copy">
              <span>{producto.categoria}</span>
              <h3>{producto.nombre}</h3>
              <strong>${producto.variantes[0].precio.toLocaleString()}</strong>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Inicio;
