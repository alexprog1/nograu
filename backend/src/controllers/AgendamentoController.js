const { create } = require('@mui/material/styles/createTransitions');
const Agendamentos = require('../models/AgendamentosModel');

module.exports = {
  create(request, response) {
    const { data, cliente, veiculo } = request.body;

    console.log(data);
    console.log(cliente);
    console.log(veiculo);
  },
};
