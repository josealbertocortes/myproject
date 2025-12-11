// src/pages/Projects.jsx
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PROJECTS = [
  { 
    id: 1, 
    slug: 'bbva-banca-movil', 
    title: 'BBVA Móvil: Módulos Financieros', 
    category: 'FinTech / Banking',
    // Imagen abstracta azul/tecnológica que evoca seguridad bancaria
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    tech: ['JavaScript Core', 'Secure API', 'Mobile Architecture'], 
    excerpt: 'Desarrollo de componentes críticos para la banca móvil líder en México. Implementación de nuevos flujos de aprobación de préstamos con énfasis en seguridad transaccional y UX bancaria.' 
  },
  { 
    id: 2, 
    slug: 'upnify-crm', 
    title: 'Upnify: Inteligencia de Ventas', 
    category: 'SaaS / CRM',
    // Imagen de dashboard/datos para evocar software empresarial
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['JavaScript', 'Python', 'Data Processing'], 
    excerpt: 'Optimización del ecosistema CRM. Ingeniería de backend para la ingesta masiva de prospectos y algoritmos de seguimiento automatizado, mejorando la eficiencia de equipos comerciales.' 
  },
  { 
    id: 3, 
    slug: 'farmacias-especializadas', 
    title: 'Farmacias Esp.: Logística HealthTech', 
    category: 'E-commerce / Health',
    // Imagen limpia y médica/farmacéutica
    img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['JavaScript', 'Python', 'Real-time Tracking'], 
    excerpt: 'Solución integral de E-commerce farmacéutico. Arquitectura para el seguimiento en tiempo real de pedidos de alta especialidad, garantizando la cadena de suministro crítica.' 
  }
];

const Projects = () => {
  return (
    <div className="bg-light min-vh-100 py-5">
      <Container>
        {/* Encabezado de Sección con Autoridad */}
        <div className="text-center mb-5">
            <h2 className="display-4 font-serif mb-3 text-dark">
                Trayectoria y <span style={{ color: '#C39B42', fontWeight: 'bold' }}>Resultados</span>
            </h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '700px' }}>
                He colaborado en la arquitectura digital de corporativos líderes, entregando soluciones robustas en sectores críticos como <strong>Fintech</strong>, <strong>HealthTech</strong> y <strong>SaaS</strong>.
            </p>
        </div>

        <Row>
          {PROJECTS.map((project, index) => (
            <Col lg={4} md={6} className="mb-5" key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 border-0 shadow-sm bg-white overflow-hidden project-card" style={{ borderRadius: '0' }}>
                  
                  {/* Imagen con Overlay sutil */}
                  <div className="overflow-hidden position-relative" style={{ height: '220px' }}>
                    <Card.Img 
                        variant="top" 
                        src={project.img} 
                        className="h-100 w-100 object-fit-cover"
                        style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                        <Badge bg="white" text="dark" className="shadow-sm fw-normal px-3 py-2 text-uppercase tracking-wider">
                            {project.category}
                        </Badge>
                    </div>
                  </div>

                  <Card.Body className="p-4 d-flex flex-column">
                    <h3 className="h4 font-serif fw-bold mb-2 text-dark">
                        {project.title}
                    </h3>
                    
                    {/* Tecnologías estilizadas */}
                    <div className="mb-3 border-bottom pb-3">
                        {project.tech.map((t, i) => (
                            <span key={i} className="text-muted me-2 small text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '0.5px' }}>
                                {t} {i < project.tech.length - 1 ? '•' : ''}
                            </span>
                        ))}
                    </div>

                    <Card.Text className="text-secondary flex-grow-1 small mb-4" style={{ lineHeight: '1.7' }}>
                      {project.excerpt}
                    </Card.Text>

                    <Link to={`/proyectos/${project.slug}`} className="mt-auto">
                      <Button 
                        variant="outline-dark" 
                        className="w-100 rounded-0 text-uppercase fw-bold py-2 border-opacity-25"
                        style={{ fontSize: '0.75rem', letterSpacing: '2px' }}
                      >
                        Ver Caso de Estudio
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;