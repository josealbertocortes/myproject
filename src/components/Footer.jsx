// src/components/Footer.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Nota: Para usar iconos (como los de redes sociales), se recomienda instalar
// una librería como 'react-icons' o usar SVG simples. Aquí usamos texto plano.

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Fondo oscuro con padding vertical considerable (py-5) para un look premium
    <footer className="bg-dark text-light py-5 mt-auto">
      <Container>
        <Row>
          {/* Columna 1: Branding y Copyright */}
          <Col md={4} className="mb-4 mb-md-0">
            {/* Logo/Nombre con acento de lujo (el color #C39B42) */}
            <h5 className="fw-bold fs-4 mb-3" style={{ color: '#C39B42' }}>
              J.C. Desarrollo Exclusivo
            </h5>
            <p className="text-secondary small">
            Arquitectura digital a la medida. Ingeniería de precisión para marcas que exigen exclusividad y rendimiento absoluto.
            </p>
            <p className="text-secondary small mt-3 mb-0">
              &copy; {currentYear} Todos los derechos reservados.
            </p>
          </Col>

          {/* Columna 2: Navegación Rápida */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Navegación</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-light hover-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/proyectos" className="text-decoration-none text-light hover-primary transition-colors">
                  Proyectos Exclusivos
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contacto" className="text-decoration-none text-light hover-primary transition-colors">
                  Contacto y Presupuesto
                </Link>
              </li>
            </ul>
          </Col>

          {/* Columna 3: Redes Profesionales y Contacto */}
          <Col md={4}>
            <h5 className="fw-bold mb-3">Conexión Profesional</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                {/* 🔗 Enlace a LinkedIn o X (Twitter) */}
                <a 
                  href="https://www.linkedin.com/in/jose-alberto-cortes-ayala/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-decoration-none text-light hover-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      
    </footer>
  );
};

export default Footer;