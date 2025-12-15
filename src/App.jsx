// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layout/adminlayout';
import Dashboard from './pages/admin/dashboard';
import Properties from './pages/admin/properties';
import Users from './pages/admin/users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to admin dashboard */}
        <Route path="/" element={<Navigate to="/admin" replace />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="properties" element={<Properties />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;