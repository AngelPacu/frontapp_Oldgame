import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: '',
      password: ''
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        loginUser();
    };


    const loginUser = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const data = await response.json();
                alert(`Inicio de sesión exitoso! Bienvenido, ${data.user}`);
                navigate('/'); // Redirige a la página de inicio
            } else {
                const errorData = await response.json();
                alert(`Error al iniciar sesión: ${errorData.message}`);
            }
        } catch (error) {
            alert('Error al conectar con el servidor');
            console.error('Error al iniciar sesión:', error);
        }
    };

  return (
    <div className="page-container">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
            <div className="form-control">
                <label>Usuario: </label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="form-control">
                <label>Contraseña:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">Iniciar sesión</button>
            </div>
        </form>
    </div>
);
}

export default LoginPage;