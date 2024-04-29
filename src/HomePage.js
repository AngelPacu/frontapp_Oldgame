import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { RegistroButton, LoginButton } from './Button';
import bg1 from './img/bg1.jpg';
import bg2 from './img/bg2.jpg';
import bg3 from './img/bg3.jpg';
import bg4 from './img/bg4.jpg';
import logo from './img/logo.jpeg';
import './App.css';


//  CSS botones con efectos de hover (pasar raton por encima)
const buttonStyle = {
  backgroundColor: '#000',  // Fondo negro
  color: '#fff',             // Texto blanco
  transition: 'background-color 0.3s ease-out, color 0.3s ease-out', 
  '&:hover': {
    backgroundColor: '#fff', // Fondo blanco al pasar el ratón
    color: '#000'            // Texto negro al pasar el ratón
  },
  margin: '5px'              // Margen reducido alrededor de los botones
};

function HomePage() {
  const backgrounds = [bg1, bg2, bg3, bg4];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Cambia la imagen cada 5000 ms (5 segundos)
    return () => clearInterval(intervalId); // NO TOCAR (Evita errores al cambiar el BG)
  }, []);

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${backgrounds[bgIndex]})`,    // Utiliza la lista de fondos
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'background-image 1s ease-in-out',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <AppBar position="static" sx={{ backgroundColor: '#000', width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <img src={logo} alt="GameLand Logo" style={{ height: 50, marginRight: 10 }} />
          <Typography variant="h6" color="inherit" sx={{ fontFamily: 'MyCustomFont' }}>
            GameLand
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', pt: 4 }}>
        <Typography variant="h2" color="white" gutterBottom sx={{ fontFamily: 'MyCustomFont', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', textAlign: 'center' }}>
          Bienvenido a GameLand
        </Typography>
        <RegistroButton style={buttonStyle} />
        <LoginButton style={buttonStyle} />
        <Box sx={{ width: '50%', maxWidth: 400, mt: 16 }}>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/PBFlQtq3LDk?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
