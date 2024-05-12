import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { RegistroButton, LoginButton, VerCatalogo, VerCatalogoButton, TramitarCompraButton, CerrarSesionButton } from './Button';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { AuthContext } from './AuthContext';
import { UserFacturasButton } from './Button';
import './AuthPage.css';
import './App.css';
import bgnolog from './img/bgnolog.jpg';
import bghomeuser from './img/bghomeuser.png';
import logo from './img/logo.jpeg';


const AuthPage = () => {
  /*        /////////DESCOMENTAR LUEGOOOOOOOOOOO!!!!!!!!!!!!!!!!!!!
    const { user, logout } = useContext(AuthContext);

    if (!user) {
      return (
        <div className="auth-page" style={{ backgroundImage: `url(${bgnolog})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
              <img src={logo} alt="GameLand Logo" style={{ height: 100 }} />
            </Toolbar>
          </AppBar>
          <div className="auth-content">
            <h1>Acceso Denegado</h1>
            <p>Debes iniciar sesión para acceder a esta página.</p>
            <RegistroButton />
            <LoginButton />
          </div>
        </div>
      );
    }
*/
    return (
      <div className="auth-page" style={{ backgroundImage: `url(${bghomeuser})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <AppBar position="static" sx={{
            backgroundColor: '#000',
            top: 0, // NO TOCAR SIG LINEAS PARA APPBAR ARRIBA
            position: 'fixed', // Esta hace que este arriba
            boxShadow: 'none', // 
            margin: 0, // Elim margens
            padding: 0 // no padding
        }}>
    <Toolbar sx={{ justifyContent: 'center' }}>
        <img src={logo} alt="GameLand Logo" style={{ height: 50, marginRight: 10 }} />
        <Typography variant="h6" color="inherit" sx={{ fontFamily: 'MyCustomFont' }}>
            GameLand
        </Typography>
    </Toolbar>
</AppBar>
        <div>
          {/*<h2>Hello, {user.username}</h2>[DESCOMENTAR LUEGO!!!!!!!!!!!]*/}
          <h2>Hello, Josh</h2>
          <VerCatalogoButton />
          <TramitarCompraButton />
          <UserFacturasButton />
          <CerrarSesionButton />
        </div>
      </div>
    );
};

export default AuthPage;