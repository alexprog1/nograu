import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importando reduce
// import contadorReducer from './reducers/contadorReducer.js';
// import { Provider } from 'react-redux';

// Rota Privada de Autenticação
//import PrivateRoute from './PrivateRoute.js';

// Importando Locais das Rotas
import Login from './views/Login.js';
import Dashboard from './views/Dashboard.js';
import Agendamento from './views/Agendamento.js';
import Consultar from './views/Consultar.js';
import Clientes from './views/Clientes.js';
import Caixa from './views/Caixa.js';
import Servicos from './views/Servicos.js';
import Error from './views/Error.js';

function App() {
  return (
    // Rotas
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/agendamento" element={<Agendamento />} />
        <Route exact path="/consultar" element={<Consultar />} />
        <Route exact path="/clientes" element={<Clientes />} />
        <Route exact path="/caixa" element={<Caixa />} />
        <Route exact path="/servicos" element={<Servicos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
