import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './LoginPage.css';
import logo from './img/logo.jpeg';
import bgli from './img/BGlogin.jpg';

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
    <div className="page-container" style={{ backgroundImage: `url(${bgli})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw' }}>
        <AppBar position="static" sx={{ backgroundColor: '#000' }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
                <img src={logo} alt="GameLand Logo" style={{ height: 50, marginRight: 10 }} />
                <Typography variant="h6" color="inherit">
                    GameLand
                </Typography>
            </Toolbar>
        </AppBar>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
            <div className="form-control">
                <label>Usuario: </label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="form-control">
                <label>Contraseña:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="submit" variant="contained" sx={{
                    backgroundColor: '#000', 
                    color: '#fff', 
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: '#000'
                    },
                    margin: 1
                }}>
                    Iniciar sesión
                </Button>
                <Button variant="contained" sx={{
                    backgroundColor: '#000', 
                    color: '#fff', 
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: '#000'
                    },
                    margin: 1
                }} onClick={() => navigate('/')}>
                    Home
                </Button>
                <Button variant="contained" sx={{
                    backgroundColor: '#000', 
                    color: '#fff', 
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: '#000'
                    },
                    margin: 1
                }} onClick={() => navigate('/register')}>
                    Registrarse
                </Button>
            </div>
        </form>
    </div>
  );
}

export default LoginPage;
