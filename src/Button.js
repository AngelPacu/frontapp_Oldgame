import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// Botón de Registro
export const RegistroButton = () => {
  const navigate = useNavigate(); // Hook para la navegación
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate('/register')}
      sx={{             // ini fondo negro, texto blanco
        backgroundColor: '#000',  
        color: '#fff',             
        '&:hover': {      // Al pasr el raton, fondo blanco texto negro
          backgroundColor: '#fff', 
          color: '#000',           
        },
        margin: '5px'              // Margen de los botones
      }}
    >
      Registro
    </Button>
  );
};

// Botón de Login
export const LoginButton = () => {
  const navigate = useNavigate(); // Hook para la navegación
  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={() => navigate('/login')}
      sx={{               //Inicialmente, texto blanco , fondo negro
        color: '#f0f0f0',             
        borderColor: '#000',       
        backgroundColor: '#000', 
        '&:hover': {                //Al pasar el mouse, fondo blanco, texto negro
          backgroundColor: '#fff', 
          color: '#000',           
          borderColor: '#fff'      
        },
        margin: '5px'              // Margen alrededor de los botones
      }}
    >
      Login
    </Button>
  );
};
