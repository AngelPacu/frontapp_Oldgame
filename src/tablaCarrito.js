import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { HomeUserButton } from './Button';

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
        console.log(data);
        // Si el servidor responde con un error, redirigimos a la página de inicio
        if (response.status === 500) {
          return navigate('/home_user');
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


  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre del juego</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Descuento</TableCell>
              <TableCell>Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carrito.map((carrito, index) => (
              <TableRow key={index}>
                <TableCell>{carrito.games.nombre}</TableCell>
                <TableCell>{carrito.cantidad}</TableCell>
                <TableCell>{carrito.descuento}</TableCell>
                <TableCell>{carrito.games.precio} €</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="left"><strong>TOTAL</strong></TableCell>
              <TableCell colSpan={4} align="left"><strong>{total} €</strong></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <HomeUserButton />
    </div>
  );
};

export default TablaCarrito;
