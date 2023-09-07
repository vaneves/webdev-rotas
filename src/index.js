import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaSobre from './paginas/PaginaSobre';
import PaginaContato from './paginas/PaginaContato';
import PaginaComId from './paginas/PaginaComId';

const roteador = createBrowserRouter([
  { path: '/', element: <PaginaInicial /> },
  { path: '/sobre', element: <PaginaSobre /> },
  { path: '/contato', element: <PaginaContato /> },
  { path: '/link-com-id/:id', element: <PaginaComId />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={roteador} /> 
  </React.StrictMode>
);

reportWebVitals();
