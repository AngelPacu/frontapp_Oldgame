import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Creamos usuario y funciones de login y logout
export const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {}
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    // Función de login y asignadmos el usuario
    const login = (user) => {
    setUser(user);
  };

  const fetchConfig = {
    method: 'POST',
    credentials: 'include',  // Esto asegura que se envíen cookies
  };

  // Función de logout y eliminamos el usuario
  const logout = () => {
    fetch('http://localhost:4000/api/public/logout', fetchConfig)
      .then(response => {
        if (!response.ok) throw new Error('Falló el logout');
        setUser(null); // Limpia el usuario del contexto
        navigate('/'); // Navega al inicio
      })
      .catch(error => console.error('Error al cerrar sesión:', error)); // Maneja errores
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
