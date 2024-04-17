import React from 'react';
import { RegistroButton, LoginButton } from './Button';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Bienvenido a tu confianza OldGame.</h1>
      <RegistroButton />
      <LoginButton />
      {/* Cualquier otro contenido de la página de inicio */}
    </div>
  );
}

export default HomePage;