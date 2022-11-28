import { React, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// Imagens
import Seta from './../assets/agendamento/voltar.png';

function Agendamento() {
  const now = new Date();

  const [dataRegistro, setDataRegistro] = useState(
    now.toLocaleDateString() + ' ' + now.getHours() + ':' + now.getMinutes(),
  );
  const [cliente, setCliente] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [km, setKm] = useState('');
  const [endereco, setEndereco] = useState('');
  const [values, setValues] = useState('');
  const [type, setType] = useState('deposit');

  function handleClickButton(event) {
    event.preventDefault();
    console.log({ dataRegistro, cliente, veiculo, telefone, km, endereco });
  }

  return (
    <Container component="main" maxWidth="xl">
      <Container
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 200,
        }}
      >
        <Box
          sx={{
            margin: 1,
            textAlign: 'center',
            bgcolor: 'background.paper',
            mt: 1,
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 200,
            maxWidth: 400,
          }}
        >
          <Tabs aria-label="icon tabs example">
            <Typography component="h1" variant="h5">
              <Link to="/dashboard" className="links">
                <Tab icon={<ArrowBackIosNewIcon />} aria-label="phone" />
              </Link>
              Novo Agendamento
            </Typography>
          </Tabs>

          <Box
            component="form"
            noValidate
            onSubmit={handleClickButton}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Cliente"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="veiculo"
                  label="Veículo"
                  name="veiculo"
                  autoComplete="veiculo"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="telefone"
                  label="Telefone"
                  name="telefone"
                  autoComplete="telefone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="km"
                  label="Km"
                  name="km"
                  autoComplete="km"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="endereco"
                  label="Endereço"
                  name="endereco"
                  autoComplete="endereco"
                />
              </Grid>
            </Grid>
            <Link to="/dashboard" className="links">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Ir para serviços
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

export default Agendamento;
