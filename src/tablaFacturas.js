import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { HomeUserButton } from './Button';

const TablaMUI = () => {
  const [factura, setFacturas] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    cargarFacturas();
  }, []);


  const loginFetchConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'include', // Esto hace que se incluyan las cookies
}

  const cargarFacturas = async () => {
// Hook para la navegación
    const response = await fetch('http://localhost:4000/api/public/facturas', loginFetchConfig);
    const data = await response.json();
    if (response.status  === 500) {
        return navigate('/home_user')
    }
     else setFacturas(data);
  };

  return (
    <div>
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
            {factura.map((facturaIndividual) => (
              <TableRow key={facturaIndividual.usersId}>
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
      <HomeUserButton />
    </div>
  );
};

export default TablaMUI;
