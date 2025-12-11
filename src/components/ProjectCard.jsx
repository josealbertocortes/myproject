// src/components/ProjectCard.jsx
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Card className="shadow-lg border-0 h-100 bg-white" style={{ borderRadius: '0' }}>
      {/* Imagen del proyecto (debe estar en assets/) */}
      <Card.Img 
        variant="top" 
        src={`/assets/img/${project.slug}.jpg`} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold mb-2 h4 text-dark">{project.title}</Card.Title>
        <Card.Subtitle className="mb-3 text-primary small">{project.tech}</Card.Subtitle>
        <Card.Text className="text-secondary flex-grow-1">
          {project.excerpt}
        </Card.Text>
        <Link to={`/proyectos/${project.slug}`} className="mt-3">
          <Button variant="outline-primary" className="w-100 text-uppercase">
            **Ver Estudio de Caso**
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;