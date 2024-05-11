import React from 'react';
import { HomeUserButton } from './Button';

const CancelacionCompra = () => {
  return (
    <div className="confirmacion-compra">
      <h1>¡Compra Cancelada!</h1>
      <p>Por favor, revisa el pedido en tu carrito personalizable.</p>
      <HomeUserButton />
    </div>
  );
};

export default CancelacionCompra;