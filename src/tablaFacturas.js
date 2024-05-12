import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { HomeUserButton } from './Button';
import logo from './img/logo.jpeg';


const TablaMUI = () => {
  const [factura, setFacturas] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const cargarFacturas = async () => {
      const loginFetchConfig = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include', // Esto hace que se incluyan las cookies
      };
      try {
        const response = await fetch('http://localhost:4000/api/public/facturas', loginFetchConfig);
        const data = await response.json();
        if (response.status === 500) {
          return alert('No hay ninguna factura del usuario')
        } else {
          setFacturas(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    cargarFacturas();
  }, [navigate]);

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
              <TableCell>ID</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Numº Tarjeta</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {factura.map((facturaIndividual,index) => (
              <TableRow key={index}>
                <TableCell>{facturaIndividual.id}</TableCell>
                <TableCell>{facturaIndividual.fecha}</TableCell>
                <TableCell>{facturaIndividual.tarjeta}</TableCell>
                <TableCell>{facturaIndividual.total}</TableCell>
                <TableCell>{facturaIndividual.estado}</TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <HomeUserButton />
      </Box>
    </div>
  );
};

export default TablaMUI;
