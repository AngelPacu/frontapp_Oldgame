import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

// Botón de Acceso a Registro page
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

// Botón de New registerRegistro
export const RegistroNuevoButton = () => {
  const navigate = useNavigate(); // Hook para la navegación
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      sx={{             // ini fondo negro, texto blanco
        margin: 1,
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



// Botón de HomePage
export const MakeLogInButton = () => {
  const navigate = useNavigate(); // Hook para la navegación
  return (
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
  );
};


// Botón de HomePage
export const HomePageButton = () => {
  const navigate = useNavigate(); // Hook para la navegación
  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={() => navigate('/')}
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
      Home
    </Button>
  );
};

// Botón de Ver el catalogo de videojuegos disponibles
export const VerCatalogoButton = () => {
  const navigate = useNavigate(); // Hook para la navegación
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate('/catalogo')}
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
      Catalogo de videojuegos
    </Button>
  );
};



// Botón de tramitar una compra
export const TramitarCompraButton = () => {
  const navigate = useNavigate(); // Hook para la navegación
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate('/home_user/carrito/tramitando')}
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
      Tramitar una compra
    </Button>
  );
};

// Botón de Historial de compras
export const UserFacturasButton = () => {
  const navigate = useNavigate(); // Hook para la navegación
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate('/home_user/facturas')}
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
      Historial de Compras
    </Button>
  );
};

// Botón de Historial de compras
export const CerrarSesionButton = () => {
  const navigate = useNavigate(); // Hook para la navegación
  const { logout } = useContext(AuthContext);
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={logout}
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
      Cerrar Sesión
    </Button>
  );
};

//Botón de UserCarrito
export const UserCarritoButton = () => {
  const navigate = useNavigate(); // Hook para la navegación
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={() => navigate('/home_user/carrito')}
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
      Carrito
    </Button>
  );
};

// Botón de volver a Home_User
export const HomeUserButton = () => {
  const navigate = useNavigate(); // Hook para la navegación
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate('/home_user')}
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
      Volver
    </Button>
  );
};
