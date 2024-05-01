import './App.css';
import React from 'react';

// Imports Propios
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import AuthPage from './AuthPage';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home_user" element={<AuthPage />} />
        {/* Asegúrate de que el resto de tus rutas estén aquí, cada una con su propio componente */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
