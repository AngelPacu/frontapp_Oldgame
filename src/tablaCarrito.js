import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material';
import { HomeUserButton, TramitarCompraButton } from './Button';
import logo from './img/logo.jpeg';

const TablaCarrito = () => {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let montada = true; // Flag para controlar si el componente está montado
    const cargarDetallesFacturas = async () => {
      const loginFetchConfig = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include', // Esto hace que se incluyan las cookies
      };
      try {
        const response = await fetch('http://localhost:4000/api/public/carrito', loginFetchConfig);
        const data = await response.json();
        // Si el servidor responde con un error, redirigimos a la página de inicio
        if (response.status === 500) {
          return alert('No hay ningún carrito creado para el usuario'); 
        } else {
          if (montada) {
            setCarrito(data);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    cargarDetallesFacturas();

    return () => {
      montada = false; // Desactivar el flag cuando el componente se desmonta
    };
  }, [navigate]); // Solo se ejecuta una vez, cuando el componente se monta
   
  // Calcular el total
   const total = carrito.reduce((sum, detalle) => {
    return sum + (detalle.cantidad * detalle.games.precio);
  }, 0);

  const deleteGame = async (id) => {
    const loginFetchConfig = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // Esto hace que se incluyan las cookies
    };
    try {
      const response = await fetch(`http://localhost:4000/api/public/carrito/modify/delete/${id}`, loginFetchConfig);
      if (response.status === 200) {
        const newCarrito = carrito.filter((detalle) => detalle.games.id !== id);
        setCarrito(newCarrito);
      } else {
        alert('Error al eliminar el juego del carrito');
      }
    } catch (error) {
      console.error('Error al eliminar el juego del carrito:', error);
    }
  }


  return (
    <div style={{ backgroundColor: '#BFBEBF', minHeight: '100vh', paddingTop: '64px' }}>
    <AppBar position="fixed" sx={{ backgroundColor: '#000' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <img src={logo} alt="GameLand Logo" style={{ height: 50, marginRight: 10 }} />
        <Typography variant="h6" color="inherit">
          GameLand
        </Typography>
      </Toolbar>
    </AppBar>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Nombre del juego</b></TableCell>
              <TableCell><b>Cantidad</b></TableCell>
              <TableCell><b>Descuento</b></TableCell>
              <TableCell><b>Precio</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carrito.map((carrito, index) => (
              <TableRow key={index}>
                <TableCell>{carrito.games.nombre}</TableCell>
                <TableCell>{carrito.cantidad}</TableCell>
                <TableCell>{carrito.descuento}</TableCell>
                <TableCell>{carrito.games.precio} €</TableCell>
                <Button onClick={() => deleteGame(carrito.games.id)}>ELIMINAR</Button>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="left"><strong>TOTAL</strong></TableCell>
              <TableCell colSpan={4} align="left"><strong>{total} €</strong></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <HomeUserButton />
        <TramitarCompraButton align ='right'/>
      </Box>
    </div>
  );
};

export default TablaCarrito;
