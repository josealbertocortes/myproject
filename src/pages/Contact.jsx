// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Tu número de teléfono (con código de país, sin signos +)
    // Ejemplo México: 521 + 10 dígitos. Ejemplo general: 5215512345678
    const myPhone = "5215541173826"; // <--- ¡PON TU NÚMERO AQUÍ!

    // 2. Extraemos los datos
    const { name, email, budget, message } = formData;

    // 3. Construimos el mensaje con formato profesional
    // Usamos %0A para saltos de línea
    const text = `
*Hola J.C., quiero solicitar una consultoría.*%0A%0A
👤 *Nombre:* ${name}%0A
📧 *Email:* ${email}%0A
🚀 *Interés:* ${budget || 'No especificado'}%0A
📝 *Detalles:* ${message}
    `.trim();

    // 4. Creamos la URL de WhatsApp
    const whatsappURL = `https://wa.me/${myPhone}?text=${text}`;

    // 5. Abrimos en una nueva pestaña
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="bg-white min-vh-100 d-flex align-items-center py-5">
      <Container>
        {/* Eliminamos la caja contenedora con sombras fuertes para un look más "abierto" */}
        <Row className="justify-content-between align-items-start">
          
          {/* --- COLUMNA IZQUIERDA: VISIÓN Y SOLUCIONES (NUEVO DISEÑO) --- */}
          <Col lg={5} className="mb-5 mb-lg-0 pe-lg-5 pt-lg-4">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-uppercase letter-spacing-2 mb-4 fw-bold" style={{ color: '#C39B42', fontSize: '0.75rem', letterSpacing: '2px' }}>
                Contacto Directo
              </h5>
              
              {/* TÍTULO LIMPIO Y DIRECTO */}
              <h1 className="display-4 font-serif fw-bold mb-4 text-dark">
                Transformemos tu visión en una <span style={{ color: '#C39B42' }} className="fst-italic">Solución Real.</span>
              </h1>
              
              {/* NUEVO TEXTO: ENFOQUE EN SOLUCIONES, NO EN CÓDIGO */}
              <p className="text-secondary mb-5 fs-5 fw-light" style={{ lineHeight: '1.8', maxWidth: '450px' }}>
                No solo escribo código; diseño estrategias digitales para empresas que buscan escalar. 
                <br /><br />
                Si tienes un reto complejo o un objetivo de negocio ambicioso, hablemos de cómo lograrlo con la arquitectura correcta.
              </p>

  
            </motion.div>
          </Col>

          {/* --- COLUMNA DERECHA: FORMULARIO LIMPIO --- */}
          <Col lg={6} className="ps-lg-5">
            <motion.div 
              className="bg-light p-5" // Fondo gris muy suave solo en el formulario
              style={{ borderRadius: '0' }}
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-dark font-serif mb-4">Solicitar Consultoría</h3>
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-4">
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-bold text-uppercase" style={{ fontSize: '0.7rem' }}>Tu Nombre</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-transparent border-0 border-bottom border-secondary rounded-0 px-0 py-2 shadow-none"
                        style={{ borderBottomColor: '#b0b0b0' }}
                        placeholder="Nombre completo"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-4">
                    <Form.Group>
                      <Form.Label className="small text-secondary fw-bold text-uppercase" style={{ fontSize: '0.7rem' }}>Email Corporativo</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-transparent border-0 border-bottom border-secondary rounded-0 px-0 py-2 shadow-none"
                        placeholder="nombre@empresa.com"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  {/* CAMBIO: De 'Inversión Estimada' a 'Alcance del Proyecto' */}
                  <Form.Label className="small text-secondary fw-bold text-uppercase" style={{ fontSize: '0.7rem' }}>
                    Alcance del Proyecto
                  </Form.Label>
                  
                  <Form.Select 
                    name="budget" // Puedes mantener el nombre interno o cambiarlo a 'scope'
                    value={formData.budget}
                    onChange={handleChange}
                    className="bg-transparent border-0 border-bottom border-secondary rounded-0 px-0 py-2 shadow-none text-dark cursor-pointer"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="consulting">Consultoría Estratégica (Asesoría)</option>
                    <option value="mvp">Desarrollo de MVP / Producto Nuevo</option>
                    <option value="enterprise">Solución Enterprise / Escalamiento</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-5">
                  <Form.Label className="small text-secondary fw-bold text-uppercase" style={{ fontSize: '0.7rem' }}>¿Qué quieres lograr?</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-transparent border-0 border-bottom border-secondary rounded-0 px-0 py-2 shadow-none"
                    placeholder="Cuéntame sobre el problema de negocio que necesitas resolver..."
                  />
                </Form.Group>

                <div className="d-grid">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="btn btn-dark py-3 text-uppercase fw-bold"
                    style={{ letterSpacing: '2px', backgroundColor: '#0b0d10' }}
                  >
                    Iniciar Conversación
                  </motion.button>
                </div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;