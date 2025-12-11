// src/pages/ProjectDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import projectData from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = projectData.find(p => p.slug === slug);
    setProject(found);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <div className="py-5 text-center">Cargando estudio de caso...</div>;

  return (
    <div className="bg-white min-vh-100 pb-5">
      
      {/* --- 1. HEADER DE IMAGEN CON OVERLAY DE LUJO (SOLUCIÓN) --- */}
      <div className="position-relative" style={{ height: '70vh', overflow: 'hidden' }}>
        
        {/* Imagen de fondo (sin filtro) */}
        <img 
            src={project.img} 
            alt={project.title} 
            className="w-100 h-100 object-fit-cover"
            style={{ objectFit: 'cover' }}
        />

        {/* SOLUCIÓN: Capa de Degradado Oscuro (Overlay) */}
        {/* Esto crea un fondo oscuro detrás del texto para garantizar la lectura */}
        <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
                background: 'linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.9) 100%)'
            }}
        ></div>

        {/* Contenedor del Texto (Ahora sobre el fondo oscuro) */}
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end justify-content-center pb-5">
            <Container className="text-center text-white mb-5">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
                    
                    <Badge bg="warning" text="dark" className="mb-4 text-uppercase tracking-wider px-3 py-2 fw-bold" style={{ backgroundColor: '#C39B42 !important', letterSpacing: '2px' }}>
                        {project.category}
                    </Badge>
                    
                    {/* Título blanco grande y claro */}
                    <h1 className="display-3 fw-bold font-serif mb-3 text-white text-shadow-sm">
                        {project.title}
                    </h1>
                    
                    {/* Subtítulo blanco */}
                    <p className="lead opacity-90 mx-auto text-white fw-light" style={{ maxWidth: '750px', fontSize: '1.4rem' }}>
                        {project.tagline}
                    </p>
                </motion.div>
            </Container>
        </div>
      </div>

      {/* --- 2. CONTENIDO DEL ESTUDIO DE CASO (Se mantiene igual) --- */}
      <Container className="py-5" style={{ marginTop: '-100px', position: 'relative', zIndex: 2 }}>
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white p-5 shadow-lg rounded-0"
        >
            <Row>
                {/* Columna Lateral */}
                <Col lg={4} className="border-end border-light pe-lg-5 mb-5 mb-lg-0">
                    <div className="mb-5">
                        <h6 className="fw-bold text-dark text-uppercase small ls-2 mb-3" style={{ letterSpacing: '2px', color: '#C39B42' }}>Cliente</h6>
                        <p className="fs-5 text-dark fw-bold font-serif">{project.client}</p>
                    </div>
                    <div className="mb-5">
                        <h6 className="fw-bold text-dark text-uppercase small ls-2 mb-3" style={{ letterSpacing: '2px', color: '#C39B42' }}>Alcance</h6>
                        <p className="text-secondary lh-lg">{project.scope}</p>
                    </div>
                    <div className="mb-4">
                        <h6 className="fw-bold text-dark text-uppercase small ls-2 mb-3" style={{ letterSpacing: '2px', color: '#C39B42' }}>Tecnología</h6>
                        <div className="d-flex flex-wrap gap-2">
                            {project.technologies.map(tech => (
                                <Badge key={tech} bg="light" text="dark" className="border rounded-0 fw-normal px-3 py-2 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </Col>

                {/* Columna Principal */}
                <Col lg={8} className="ps-lg-5">
                    <div className="mb-5 pb-4 border-bottom">
                        <h3 className="font-serif fw-bold mb-4 text-dark display-6">El Desafío</h3>
                        <p className="text-secondary fs-5" style={{ lineHeight: '1.9', fontWeight: '300' }}>
                            {project.challenge}
                        </p>
                    </div>
                    
                    <div className="mb-5">
                        <h3 className="font-serif fw-bold mb-4 text-dark display-6">La Solución</h3>
                        <p className="text-secondary fs-5 mb-5" style={{ lineHeight: '1.9', fontWeight: '300' }}>
                            {project.solution}
                        </p>
                        
                        {/* Bloque de Resultados Destacado */}
                        <div className="bg-dark p-5 text-white position-relative overflow-hidden">
                            {/* Acento dorado de fondo */}
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '5px', height: '100%', backgroundColor: '#C39B42' }}></div>
                            <h4 className="fw-bold mb-4 font-serif text-white h3">Impacto de Negocio</h4>
                            <p className="mb-0 fs-4 fst-italic fw-light opacity-90" style={{ lineHeight: '1.6' }}>
                                "{project.results}"
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <div className="text-center mt-5 pt-5">
                <Link to="/proyectos">
                    <Button variant="outline-dark" size="lg" className="rounded-0 text-uppercase px-5 py-3 fw-bold" style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>
                        ← Volver al Portafolio
                    </Button>
                </Link>
            </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ProjectDetail;