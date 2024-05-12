import React from 'react';
import { HomeUserButton } from './Button';
import './ConfirmacionCompra.css';
import gamesgf from './img/games.gif';

const CancelacionCompra = () => {
  return (
    <div className="confirmacion-compra">
      <img src={gamesgf} alt="Exito"/>
      <h1>¡Compra Cancelada!</h1>
      <p>Por favor, revisa el pedido en tu carrito personalizable.</p>
      <HomeUserButton />
    </div>
  );
};

export default CancelacionCompra;