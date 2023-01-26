import * as React from 'react';
import { Link } from 'react-router-dom';

import { CssBaseline, Box, Typography, Container } from '@mui/material';

// Images
import logo from './../assets/images/nograu.png';
import add from './../assets/images/add.png';
import consultar from './../assets/images/consultar.png';
import clientes from './../assets/images/clientes.png';
import caixa from './../assets/images/caixa.png';
import servicos from './../assets/images/servicos.png';
import configuracao from './../assets/images/configuracao.png';

function Dashboard() {
  const subject = 'Usuario';

  return (
    <Container component="main" maxWidth="false">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 200,
        }}
      >
        <img src={logo} className="logo" alt="logo" width={150} />
        <br />
        <Typography component="h2" variant="h5">
          Olá, {subject}!
        </Typography>

        <p>Acesse uma das opções abaixo.</p>
        <Container
          sx={{
            marginTop: 1,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              margin: 1,
              textAlign: 'center',
              bgcolor: 'background.paper',
              mt: 1,
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: 320,
              minWidth: 190,
              maxWidth: 320,
            }}
          >
            <Link to="/agendamento" className="links">
              <img src={add} className="add" alt="add" width={50} />
              <br />
              Agendamento
            </Link>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              margin: 1,
              textAlign: 'center',
              bgcolor: 'background.paper',
              mt: 1,
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: 320,
              minWidth: 190,
              maxWidth: 320,
            }}
          >
            <Link to="/consultar" className="links">
              <img
                src={consultar}
                className="consultar"
                alt="consultar"
                width={50}
              />
              <br />
              Consultar
            </Link>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              margin: 1,
              textAlign: 'center',
              bgcolor: 'background.paper',
              mt: 1,
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: 320,
              minWidth: 190,
              maxWidth: 320,
            }}
          >
            <Link to="/clientes" className="links">
              <img
                src={clientes}
                className="clientes"
                alt="clientes"
                width={50}
              />
              <br />
              Clientes
            </Link>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              margin: 1,
              textAlign: 'center',
              bgcolor: 'background.paper',
              mt: 1,
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: 320,
              minWidth: 190,
              maxWidth: 320,
            }}
          >
            <Link to="/caixa" className="links">
              <img src={caixa} className="caixa" alt="caixa" width={50} />
              <br />
              Caixa
            </Link>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              margin: 1,
              textAlign: 'center',
              bgcolor: 'background.paper',
              mt: 1,
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: 320,
              minWidth: 190,
              maxWidth: 320,
            }}
          >
            <Link to="/servicos" className="links">
              <img
                src={servicos}
                className="servicos"
                alt="servicos"
                width={50}
              />
              <br />
              Serviços / Produtos
            </Link>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              margin: 1,
              textAlign: 'center',
              bgcolor: 'background.paper',
              mt: 1,
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: 320,
              minWidth: 190,
              maxWidth: 320,
            }}
          >
            <Link to="/configuracao" className="links">
              <img
                src={configuracao}
                className="configuracao"
                alt="configuracao"
                width={50}
              />
              <br />
              Configuração
            </Link>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

export default Dashboard;
