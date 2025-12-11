// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail'; // <--- Asegúrate de importar esto

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
          
          {/* 👇 ESTA ES LA LÍNEA MÁGICA QUE HACE QUE LOS DETALLES FUNCIONEN */}
          <Route path="/proyectos/:slug" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;