import './App.css';
import React, {useContext} from 'react';

// Imports Propios
import { Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import AuthPage from './AuthPage';
import { AuthProvider, AuthContext } from './AuthContext';
import UserFacturas from './UserFacturas';
import UserCarrito from './UserCarrito';
import TramitandoCompra from './TramitandoCompra';
import ConfirmacionCompra from './ConfirmacionCompra';
import CancelacionCompra from './CancelacionCompra';

// Ruta pública que redirige a /home_user si el usuario está autenticado
const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
      return <Navigate to="/home_user" />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
        <Route path="/home_user" element={<AuthPage />} />
        <Route path="/home_user/facturas" element={<UserFacturas />} />
        <Route path="/home_user/carrito" element={<UserCarrito />} />
        <Route path="/home_user/carrito/tramitando" element={<TramitandoCompra />} />
        <Route path="/home_user/success" element={<ConfirmacionCompra />} />
        <Route path="/home_user/cancel" element={<CancelacionCompra />} />

        {/* Asegúrate de que el resto de tus rutas estén aquí, cada una con su propio componente */}
      </Routes>
    </AuthProvider>
  );
}
export default App;
