import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

// Botón de Registro
export const RegistroButton = () => {
    const navigate = useNavigate(); // Hook para la navegación
  
    return (
      <Button variant="contained" color="primary" onClick={() => navigate('/register')}>
        Registro
      </Button>
    );
  };

// Botón de Login
export const LoginButton = ({ onClick }) => (
  <Button variant="outlined" color="secondary" onClick={onClick}>
    Login
  </Button>
);