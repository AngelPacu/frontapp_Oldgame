import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './LoginPage.css';
import logo from './img/logo.jpeg';
import bgli from './img/BGlogin.jpg';


function LoginPage() {
    const { user, login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: '',
      password: ''
    });

    const loginFetchConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include', // Esto hace que se incluyan las cookies
        body: JSON.stringify(formData)
    }

    useEffect(() => {
        const checkUser = async () => {
          await login();
          if (user) {
            navigate('/');
          }
        };
        checkUser();
      }, [user, navigate, login]);
    
  
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
            const response = await fetch('http://localhost:4000/api/public/login', loginFetchConfig);
            if (response.ok) {
                const data = await response.json();
                alert(`Inicio de sesión exitoso! Bienvenido, ${data.user}`);
                // Guardamos el usuario en el contexto
                login({ username: data.user });
                navigate('/home_user'); // Redirige a la página del usuario
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
