import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 font-bold mb-3">¡Bienvenidos a TechStore! 🚀</h1>
      <p className="lead text-muted mb-4">
        Tu tienda online de confianza para encontrar celulares, notebooks y accesorios tecnológicos.
      </p>
      <Link to="/productos" className="btn btn-dark btn-lg">
        Ver Catálogo de Productos
      </Link>
    </div>
  );
}

export default Inicio;