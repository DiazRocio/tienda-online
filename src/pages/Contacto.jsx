import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contacto() {
  // Estados para controlar los campos del formulario (patrón controlado visto en clase)
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  
  // Estados para la retroalimentación visual (érminos de feedback de UI)
  const [alerta, setAlerta] = useState(null);
  const [tipoAlerta, setTipoAlerta] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la recarga por defecto de la página

    // Validación básica de campos vacíos
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
      setTipoAlerta('danger');
      setAlerta('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Validación simple de formato de email
    if (!email.includes('@') || !email.includes('.')) {
      setTipoAlerta('danger');
      setAlerta('Por favor, ingresa una dirección de correo electrónico válida.');
      return;
    }

    // Si todo es correcto, simulamos el envío exitoso
    setTipoAlerta('success');
    setAlerta(`¡Gracias por contactarte, ${nombre}! Hemos recibido tu mensaje y te responderemos a la brevedad.`);
    
    // Limpiamos el formulario reseteando los estados
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 p-4 rounded-4">
            <h2 className="fw-bold mb-3 text-center">📬 Contactanos</h2>
            <p className="text-muted text-center mb-4 small">
              ¿Tenés alguna duda sobre nuestros productos o envíos? Escribinos y nos pondremos en contacto con vos.
            </p>

            {/* Alerta condicional basada en el estado */}
            {alerta && (
              <div className={`alert alert-${tipoAlerta} alert-dismissible fade show`} role="alert">
                {alerta}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Campo Nombre */}
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-semibold">Nombre y Apellido</label>
                <input 
                  type="text" 
                  id="nombre"
                  className="form-control" 
                  placeholder="Ej: Juan Pérez"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              {/* Campo Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email"
                  className="form-control" 
                  placeholder="Ej: juan@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Campo Mensaje */}
              <div className="mb-4">
                <label htmlFor="mensaje" className="form-label fw-semibold">Mensaje o Consulta</label>
                <textarea 
                  id="mensaje"
                  rows="4" 
                  className="form-control" 
                  placeholder="Escribe tu mensaje aquí..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </div>

              {/* Botón de envío */}
              <button type="submit" className="btn btn-primary w-100 fw-bold py-2 shadow-sm">
                Enviar Mensaje
              </button>
            </form>

            <div className="text-center mt-4">
              <Link to="/productos" className="text-decoration-none text-muted small">
                ← Volver al catálogo de productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;