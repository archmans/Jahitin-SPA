import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';

import SubsManagePage from './pages/SubsManagePage';
import ProfilPage from './pages/ProfilPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddImagePage from './pages/AddImagePage';
import EditImagePage from './pages/EditImagePage';
import GalleryManagePage from './pages/GalleryManagePage';

const App: React.FC = () => {
  const location = useLocation();

  // Tentukan apakah NavbarComponent harus ditampilkan berdasarkan rute aktif
  const isNavbarVisible = location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <div>
      {isNavbarVisible && <NavbarComponent />}
      <Routes>
        <Route path="/subscription" element={<SubsManagePage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add" element={<AddImagePage />} />
        {/* <Route path="/edit/:id" element={<EditImagePage />} /> */}
        <Route path="/edit" element={<EditImagePage />} />

        <Route path="/manage" element={<GalleryManagePage />} />
      </Routes> 
    </div>
  );
}

export default App;
