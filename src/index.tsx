import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import reportWebVitals from './reportWebVitals';

// Cria uma raiz para o React no elemento com id 'root'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Renderiza o componente <App /> dentro do <React.StrictMode>
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mede o desempenho da aplicação e envia para um endpoint (opcional)
reportWebVitals();
