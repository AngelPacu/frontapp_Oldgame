import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      nombre: '',
      apellidos: '',
      email: '',
      telefono: ''
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        // Procesa el registro...
        // Si el registro es exitoso, redirige al usuario
        navigate('/');
    };
  
    return (
      <div className="page-container">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
            <label>Usuario* </label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="form-control">
            <label>Contraseña:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-control">
            <label>Nombre:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div className="form-control">
            <label>Apellidos:</label>
            <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} />
        </div>
        <div className="form-control">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-control">
            <label>Teléfono:</label>
            <input type="tel" name="telefono" pattern="[0-9]*" value={formData.telefono} onChange={handleChange} />
        </div>
        <div>
            <button type="submit">Registrar</button>
        </div>
        </form>
    </div>
    );
  }
  
  export default RegisterPage;