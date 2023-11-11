import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';

import HomePage from './pages/HomePage';
import ProfilPage from './pages/ProfilPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App: React.FC = () => {
  const location = useLocation();

  // Tentukan apakah NavbarComponent harus ditampilkan berdasarkan rute aktif
  const isNavbarVisible = location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <div>
      {isNavbarVisible && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes> 
    </div>
  );
}

export default App;
