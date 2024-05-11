import React, {useEffect} from 'react';
import { HomeUserButton } from './Button';

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
      <h1>¡Compra Realizada!</h1>
      <p>Gracias por tu compra. Tu pedido ha sido procesado correctamente.</p>
      <HomeUserButton />
    </div>
  );
};
export default ConfirmacionCompra;