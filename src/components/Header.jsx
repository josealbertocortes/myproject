// src/components/Header.jsx
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/logo-jc-code-transparent.png'; 

const Header = () => {
  const location = useLocation(); 

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-2 shadow-sm border-bottom border-secondary border-opacity-25">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex align-items-center">
            <img
              src={logo}
              alt="J.C. Code Logo"
              // 🔥 CAMBIO CLAVE AQUÍ: De 50 a 85
              height="85" 
              className="d-inline-block align-top"
              style={{ objectFit: 'contain' }} 
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className={`mx-2 text-uppercase small fw-bold px-3 py-2 rounded-1 transition-all ${isActive('/') ? 'text-gold active-link' : 'text-light hover-gold'}`}>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/proyectos" className={`mx-2 text-uppercase small fw-bold px-3 py-2 rounded-1 transition-all ${isActive('/proyectos') ? 'text-gold active-link' : 'text-light hover-gold'}`}>
              Proyectos Exclusivos
            </Nav.Link>
            
            <LinkContainer to="/contacto">
                <button className="btn btn-gold text-dark text-uppercase small fw-bold ms-lg-3 px-4 py-2 rounded-0" style={{ letterSpacing: '1px' }}>
                    Solicitar Consultoría
                </button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;