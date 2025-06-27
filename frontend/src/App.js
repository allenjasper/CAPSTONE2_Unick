import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import InventoryPage from './pages/Admin/Inventory';
import OrdersPage from './pages/Admin/Orders';
import ProductionPage from './pages/Admin/Production';
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

// Simple authentication state (for demo purposes)
function RequireAuth({ children, isAuthenticated }) {
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handle login success
  const handleLogin = () => setIsAuthenticated(true);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            isAuthenticated
              ? <Navigate to="/admin/dashboard" />
              : <Navigate to="/login" />
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <RequireAuth isAuthenticated={isAuthenticated}>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/inventory"
          element={
            <RequireAuth isAuthenticated={isAuthenticated}>
              <InventoryPage />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <RequireAuth isAuthenticated={isAuthenticated}>
              <OrdersPage />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/production"
          element={
            <RequireAuth isAuthenticated={isAuthenticated}>
              <ProductionPage />
            </RequireAuth>
          }
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;