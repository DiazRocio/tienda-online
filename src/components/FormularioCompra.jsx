import React, { useState } from 'react';

function FormularioCompra({ carrito, onCompraExitosa }) {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    email: '',
    telefono: '',
    direccion: '',
    metodoEntrega: 'Envio a domicilio',
    mensaje: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (carrito.length === 0) {
      setError('No puedes confirmar la compra porque tu carrito está vacío.');
      return;
    }

    if (
      !formData.nombreApellido.trim() ||
      !formData.email.trim() ||
      !formData.telefono.trim() ||
      !formData.direccion.trim()
    ) {
      setError('Por favor, completa todos los campos obligatorios (*).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    const numeroOrden = Math.floor(100000 + Math.random() * 900000);
    
    // Llamamos a la función de éxito que viene del componente padre
    onCompraExitosa(formData, numeroOrden);
  };

  return (
    <div className="card shadow-sm border-0 p-4 bg-light">
      <h4 className="fw-bold mb-3 border-bottom pb-2">Finalizar Compra</h4>
      
      {error && (
        <div className="alert alert-danger py-2 small" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label small fw-semibold">Nombre y Apellido *</label>
          <input 
            type="text" 
            name="nombreApellido"
            className="form-control form-control-sm" 
            placeholder="Ej: Juan Pérez"
            value={formData.nombreApellido}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label small fw-semibold">Correo Electrónico *</label>
          <input 
            type="email" 
            name="email"
            className="form-control form-control-sm" 
            placeholder="Ej: juan@email.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label small fw-semibold">Teléfono / Celular *</label>
          <input 
            type="tel" 
            name="telefono"
            className="form-control form-control-sm" 
            placeholder="Ej: 1123456789"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label small fw-semibold">Dirección o Localidad *</label>
          <input 
            type="text" 
            name="direccion"
            className="form-control form-control-sm" 
            placeholder="Ej: Av. Vergara 2222, Hurlingham"
            value={formData.direccion}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label small fw-semibold">Método de Entrega *</label>
          <select 
            name="metodoEntrega"
            className="form-select form-select-sm"
            value={formData.metodoEntrega}
            onChange={handleChange}
          >
            <option value="Envio a domicilio">Envío a domicilio</option>
            <option value="Retiro en sucursal">Retiro en sucursal</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label small fw-semibold">Aclaración o mensaje (Opcional)</label>
          <textarea 
            name="mensaje"
            rows="2" 
            className="form-control form-control-sm" 
            placeholder="Ej: Tocar timbre rojo..."
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="btn btn-success btn-lg w-100 fw-bold shadow-sm"
          disabled={carrito.length === 0}
        >
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
}

export default FormularioCompra;