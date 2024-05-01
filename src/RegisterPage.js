import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './RegisterPage.css';
import logo from './img/logo.jpeg';
import BG from './img/BGreg.png';

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

    const registerUser = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/public/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const data = await response.json();
                alert(`Registro exitoso! Bienvenido, ${data.user}`);
                navigate('/'); // Redirige a la página de inicio
            } else {
                const errorData = await response.json();
                alert(`Error al registrar: ${errorData.message}`);
            }
        } catch (error) {
            alert('Error al conectar con el servidor');
            console.error('Error al registrar el usuario:', error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        registerUser();
    };

    return (
        <div className="page-container" style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <AppBar position="static" sx={{ backgroundColor: '#000' }}>
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <img src={logo} alt="GameLand Logo" style={{ height: 50, marginRight: 10 }} />
                    <Typography variant="h6" color="inherit" sx={{ fontFamily: 'MyCustomFont' }}>
                        GameLand
                    </Typography>
                </Toolbar>
            </AppBar>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Usuario: </label>
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
                    <Button type="submit" variant="contained" color="primary" sx={{ margin: 1, backgroundColor: '#000', color: '#fff' }}>
                        Registrar
                    </Button>
                    <Button onClick={() => navigate('/')} variant="contained" color="primary" sx={{ margin: 1, backgroundColor: '#000', color: '#fff' }}>
                        Home
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;