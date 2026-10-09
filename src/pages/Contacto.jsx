import React, { useState } from 'react';

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">Contacto / Soporte</h2>
      {enviado ? (
        <div className="alert alert-success text-center">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre y Apellido</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea className="form-control" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
        </form>
      )}
    </div>
  );
}

export default Contacto;