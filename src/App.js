import './App.css';
import React from 'react';

// Imports Propios
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* Asegúrate de que el resto de tus rutas estén aquí, cada una con su propio componente */}
    </Routes>
  );
}

export default App;
