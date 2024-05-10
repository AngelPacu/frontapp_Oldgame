import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { UserFacturasButton, UserCarritoButton } from './Button';

import './App.css';

const AuthPage = () => {
    const { user, logout } = useContext(AuthContext); // Usamos el contexto para acceder al usuario y la función de logout
    if (!user) {
      return (
        <div>
          <h1>Acceso Denegado</h1>
          <p>Debes iniciar sesión para acceder a esta página.</p>
        </div>
      );
  }

  return (
    <div>
      <h2>Hello, {user.username}</h2>
      <button>Añadir Productos</button>
      <UserCarritoButton />
      <UserFacturasButton />
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default AuthPage;