import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Card, CardContent, CardActions } from '@mui/material/';
import Typography from '@mui/material/Typography';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Material ui Icones e Textos
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

function Agendamento() {
  /*const now = new Date();

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
*/
  function handleClickButton(event) {
    event.preventDefault();
    // console.log({ dataRegistro, cliente, veiculo, telefone, km, endereco });
  }

  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{
        marginTop: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 200,
      }}
    >
      <Card
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
        <CardActions>
          <Link to="/dashboard" className="links">
            <ArrowBackIosOutlinedIcon sx={{ fontSize: 40 }} />
          </Link>
          <Typography component="h1" variant="h5" p={2}>
            Novo Agendamento
          </Typography>
        </CardActions>
        <CardContent
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
                id="cliente"
                label="Cliente"
                name="cliente"
                autoComplete="cliente"
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
        </CardContent>
      </Card>
    </Container>
  );
}

export default Agendamento;
