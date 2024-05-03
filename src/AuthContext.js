import React, { createContext, useState, useEffect } from 'react';
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

    // Verificamos si el usuario está autenticado
    useEffect(() => {
      const verifyUser = async () => {
          try {
              const response = await fetch('http://localhost:4000/api/verify', {
                  method: 'GET',
                  credentials: 'include'
              });
              // Si la respuesta es correcta, asignamos el usuario
              if (response.ok) {
                  const userData = await response.json();
                  setUser(userData);
              } else {
                  setUser(null);
              }
          } catch (error) {
              console.error('Error al verificar el usuario:', error);
          }
      };
      verifyUser();
  }, [navigate]);

    // Función de login y asignadmos el usuario
    const login = (user) => {
    setUser(user);
  };

  // Configuración de la petición
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
  
  // Devolvemos el contexto con el usuario y las funciones de login y logout
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
