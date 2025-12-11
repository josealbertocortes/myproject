// src/pages/Home.jsx
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // <--- IMPORTANTE
import { FaShieldAlt, FaHandshake, FaClock, FaLaptopCode } from 'react-icons/fa';
// Configuración de animación reutilizable (Fade Up Suave)
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Configuración para que los elementos aparezcan uno tras otro (Stagger)
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3 // Tiempo entre cada elemento
    }
  }
};

const Home = () => {
  return (
    <div className="bg-white">
      
  {/* --- SECCIÓN 1: HERO (IMPACTO Y CONFIANZA) --- */}
  <div className="bg-light min-vh-100 d-flex align-items-center position-relative overflow-hidden">
        {/* Fondo sutil */}
        <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, #e8e8e8 1px, transparent 1px)',
            backgroundSize: '30px 30px', opacity: 0.4, zIndex: 0
        }}></div>

        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row className="justify-content-center text-center">
            <Col md={10} lg={9}>
              
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {/* 1. TÍTULO PRINCIPAL */}
                <motion.h1 variants={fadeUp} className="display-3 fw-light mb-4 text-dark font-serif">
                  <span className="fw-bold">Desarrollo Web Exclusivo</span>
                </motion.h1>
                
                {/* 2. SUBTÍTULO PERSUASIVO */}
                <motion.p variants={fadeUp} className="lead text-secondary mb-5 px-md-5 mx-auto" style={{ maxWidth: '800px' }}>
                Desarrollo soluciones digitales que no solo funcionan, sino que venden. Arquitectura React estratégica para marcas que buscan dominar su mercado con velocidad y estética impecable.
                </motion.p>

                {/* 3. BOTÓN DE ACCIÓN */}
                <motion.div variants={fadeUp} className="d-flex justify-content-center gap-3 mb-5">
                  <Link to="/proyectos">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-gold text-uppercase fw-bold px-5 py-3 shadow-lg"
                      >
                          Ver Proyectos Privados
                      </motion.button>
                  </Link>
                </motion.div>

                {/* 4. NUEVO: BARRA DE CREDIBILIDAD (MICRO-CONFIANZA) */}
             {/* 4. BARRA DE CREDIBILIDAD (ACTUALIZADA: ALTO VALOR) */}
             <motion.div 
                    variants={fadeUp} 
                    className="row justify-content-center mt-5 pt-4 border-top border-secondary border-opacity-10"
                >
                    {/* CAMBIO AQUÍ: En lugar de años, vendemos ACCESO DIRECTO A TI */}
                    <Col xs={4} md={3} className="border-end border-secondary border-opacity-10">
                        <h5 className="fw-bold text-dark m-0">Atención 1:1</h5>
                        <small className="text-secondary text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '1px', fontWeight: 'bold' }}>
                            Sin Intermediarios
                        </small>
                    </Col>

                    {/* Mantenemos Puntualidad (Es vital para la confianza) */}
                    <Col xs={4} md={3} className="border-end border-secondary border-opacity-10">
                        <h5 className="fw-bold text-dark m-0">100%</h5>
                        <small className="text-secondary text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '1px', fontWeight: 'bold' }}>
                            Cumplimiento
                        </small>
                    </Col>

                    {/* Mantenemos Soporte (Elimina el riesgo de compra) */}
                    <Col xs={4} md={3}>
                        <h5 className="fw-bold text-dark m-0">Garantía</h5>
                        <small className="text-secondary text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '1px', fontWeight: 'bold' }}>
                            Post-Lanzamiento
                        </small>
                    </Col>
                </motion.div>

              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* --- SECCIÓN 2: EL PROCESO (ANIMADO AL HACER SCROLL) --- */}
      <div style={{ backgroundColor: '#0b0d10' }} className="py-5 text-white">
        <Container className="py-5">
          <Row className="align-items-start">
            
            {/* Columna Izquierda Sticky */}
            <Col lg={5} className="mb-5 mb-lg-0 sticky-lg-top" style={{ top: '100px' }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <h2 className="display-4 font-serif mb-4 text-white">
                  Un Proceso de <br />
                  <span style={{ color: '#C39B42', fontWeight: 'bold' }}>Precisión</span>
                </h2>
                <p className="lead text-white-50 mb-5" style={{ maxWidth: '400px' }}>
                La excelencia no es casualidad. Es el resultado de un rigor técnico obsesivo y una atención al detalle que garantiza estabilidad total.
                </p>
                <Link to="/contacto">
                  <Button 
                    variant="outline-light" 
                    size="lg" 
                    className="rounded-0 px-4 py-3 border-1 text-uppercase small ls-2"
                  >
                    Iniciar Conversación
                  </Button>
                </Link>
              </motion.div>
            </Col>

            {/* Columna Derecha: Pasos Animados */}
            <Col lg={6} className="offset-lg-1">
              <motion.ul 
                className="list-unstyled"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }} // Empieza a animar un poco antes de llegar
                variants={staggerContainer}
              >
                {/* Paso 1 */}
                <motion.li variants={fadeUp} className="d-flex mb-5 pb-5 border-bottom border-secondary border-opacity-25">
                  <div className="me-4">
                    <span className="display-4 fw-bold font-serif" style={{ color: '#C39B42' }}>01</span>
                  </div>
                  <div>
                    <h4 className="fw-bold text-white mb-3">Inmersión y Estrategia</h4>
                    <p className="fs-5 text-white-50 fw-light">
                      Análisis profundo de objetivos. No escribo una sola línea de código hasta entender perfectamente tu modelo de negocio.
                    </p>
                  </div>
                </motion.li>

                {/* Paso 2 */}
                <motion.li variants={fadeUp} className="d-flex mb-5 pb-5 border-bottom border-secondary border-opacity-25">
                  <div className="me-4">
                    <span className="display-4 fw-bold font-serif" style={{ color: '#C39B42' }}>02</span>
                  </div>
                  <div>
                    <h4 className="fw-bold text-white mb-3">Desarrollo Ágil</h4>
                    <p className="fs-5 text-white-50 fw-light">
                      Iteraciones rápidas utilizando React y arquitectura modular. Verás el progreso real semana a semana.
                    </p>
                  </div>
                </motion.li>

                {/* Paso 3 */}
                <motion.li variants={fadeUp} className="d-flex">
                  <div className="me-4">
                    <span className="display-4 fw-bold font-serif" style={{ color: '#C39B42' }}>03</span>
                  </div>
                  <div>
                    <h4 className="fw-bold text-white mb-3">Lanzamiento Global</h4>
                    <p className="fs-5 text-white-50 fw-light">
                      Auditoría exhaustiva de performance, optimización SEO técnica y despliegue seguro.
                    </p>
                  </div>
                </motion.li>

              </motion.ul>
            </Col>
          </Row>
        </Container>
      </div>
      {/* --- SECCIÓN 4: CONFIANZA Y GARANTÍA (NUEVO) --- */}
      <Container className="py-5 my-5">
        <Row className="justify-content-center text-center mb-5">
          <Col md={9}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="display-5 font-serif mb-3">
                Por qué los líderes eligen <span style={{ color: '#C39B42', fontWeight: 'bold' }}>Seguridad</span>
              </h2>
              <p className="lead text-secondary">
                En un mercado saturado de incertidumbre, ofrezco lo que pocos pueden: 
                <strong> fiabilidad absoluta</strong> y código diseñado para escalar.
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {/* Pilar 1: Comunicación */}
          <Col md={6} lg={4} className="mb-4">
            <motion.div 
              className="p-4 h-100 bg-light border-start border-3"
              style={{ borderColor: '#C39B42' }} // Borde dorado
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 h2" style={{ color: '#C39B42' }}><FaHandshake /></div>
              <h4 className="fw-bold font-serif h5">Socio, no Empleado</h4>
              <p className="small text-secondary mb-0">
                No desaparezco. Mantengo comunicación constante y transparente. Trato tu inversión con el mismo respeto que trato mi propio negocio.
              </p>
            </motion.div>
          </Col>

          {/* Pilar 2: Código Limpio */}
          <Col md={6} lg={4} className="mb-4">
            <motion.div 
              className="p-4 h-100 bg-light border-start border-3"
              style={{ borderColor: '#0A0A0A' }} // Borde negro
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 h2 text-dark"><FaLaptopCode /></div>
              <h4 className="fw-bold font-serif h5">Arquitectura Robusta</h4>
              <p className="small text-secondary mb-0">
                Código limpio, documentado y modular. Si en el futuro otro desarrollador se une a tu equipo, agradecerá la calidad de la estructura.
              </p>
            </motion.div>
          </Col>

          {/* Pilar 3: Puntualidad */}
          <Col md={6} lg={4} className="mb-4">
            <motion.div 
              className="p-4 h-100 bg-light border-start border-3"
              style={{ borderColor: '#C39B42' }} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 h2" style={{ color: '#C39B42' }}><FaClock /></div>
              <h4 className="fw-bold font-serif h5">Deadlines Sagrados</h4>
              <p className="small text-secondary mb-0">
                Tu tiempo es dinero. Mi proceso de estimación es conservador para garantizar entregas en la fecha acordada, sin excusas.
              </p>
            </motion.div>
          </Col>

        </Row>
      </Container>

    </div>
  );
};

export default Home;