import React, {useEffect} from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { HomeUserButton } from './Button';
import logo from './img/logo.jpeg';
import './ConfirmacionCompra.css';
import chestgf from './img/chest.gif';

const ConfirmacionCompra = () => {

  useEffect(() => {
    let montada = true; // Flag para controlar si el componente está montado

    const modifyCarrito = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/public/carrito/modify', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Esto hace que se incluyan las cookies
        });

        if (!response.ok) {
          throw new Error('Error al modificar el carrito');
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    if (montada) {
      modifyCarrito();
    }

    return () => {
      montada = false; // Desactivar el flag cuando el componente se desmonta
    };
  }, []); // El array vacío [] asegura que esto se ejecute solo una vez al montar el componente

  return (


      <div className="confirmacion-compra">
        <img src={chestgf} alt="Exito"/>
        <h1>¡Compra Realizada!</h1>
        <p>Gracias por tu compra. Tu pedido ha sido procesado correctamente.</p>
        <HomeUserButton />
      </div>

  );
};
export default ConfirmacionCompra;