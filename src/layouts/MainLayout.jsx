// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        {/* Outlet renderizará el componente de la página actual (Home, Projects, etc.) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;