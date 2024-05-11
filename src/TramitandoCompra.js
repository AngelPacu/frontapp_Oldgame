import React, { useEffect } from 'react';

const TramitandoCompra = () => {
  useEffect(() => {
    let montada = true; // Flag para controlar si el componente está montado

    const loginFetchConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Esto hace que se incluyan las cookies
    };

    const tramitarCompra = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/public/carrito/buy', loginFetchConfig);
        if (res.ok) {
          const { url } = await res.json();
          if (montada) {
            window.open(url, '_blank'); // Abre la URL en una nueva pestaña
            window.close(); // Cierra la pestaña actual
          }
        } else {
          const json = await res.json();
          throw new Error(json.error);
        }
      } catch (e) {
        console.error(e.message);
      }
    };

    if (montada) {
      tramitarCompra();
    }

    return () => {
      montada = false; // Desactivar el flag cuando el componente se desmonta
    };
  }, []); // El array vacío [] asegura que esto se ejecute solo una vez al montar el componente

      return (
        <div className="confirmacion-compra">
          <h1>Tramitando compra...</h1>
          <p>Ahora se reedirigirá a la página de compra</p>
        </div>
      );
    };


export default TramitandoCompra;