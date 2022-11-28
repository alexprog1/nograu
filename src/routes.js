import React from 'react';

const routes = [
  { path: '/', exact: true, name: 'dashboard' },
  { path: '/dashboard', name: 'dashboard', element: Dashboard },
  { path: '/agendamento', name: 'dashboard', element: Agendamento },
  { path: '/consultar', name: 'dashboard', element: Consultar },
  { path: '/clientes', name: 'dashboard', element: Clientes },
  { path: '/caixa', name: 'dashboard', element: Caixa },
  { path: '/servicos', name: 'dashboard', element: Servicos },
];

export default routes;
