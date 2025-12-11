// src/main.jsx

// ¡Importa tus estilos personalizados antes que nada!
import './styles/custom.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);