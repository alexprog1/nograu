import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Material ui Caixa
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

// Material ui Tabelas
import {
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function createData(os, cliente, veiculo, telefone, total) {
  return { os, cliente, veiculo, telefone, total };
}

const rows = [
  createData('1', 'Alex', 'Corola Branco', '99999999', '100,00'),
  createData('2', 'aLAN', 'Jeep', '99999999', '100,00'),
  createData('3', 'Alice', 'HB20 Sedan', '99999999', '100,00'),
  createData('4', 'Alexsandro', 'Hilux', '99999999', '100,00'),
];

export default function Consultar() {
  const options = {
    url: 'http://localhost:7777/consultar',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: {
      a: 10,
      b: 20,
    },
  };
  axios(options).then((response) => {
    console.log(response.status);
  });
  return (
    <Container component="main">
      <Container
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          width: '100%',
          minWidth: 200,
        }}
      >
        <Box
          sx={{
            marginTop: 1,
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            height: 500,
            width: '100%',
          }}
        >
          <Tabs aria-label="icon tabs example">
            <Typography component="h1" variant="h5">
              <Link to="/dashboard" className="links">
                <Tab
                  icon={<ArrowBackIosOutlinedIcon sx={{ fontSize: 40 }} />}
                  aria-label="phone"
                />
              </Link>
              Agendamentos de Hoje
            </Typography>
          </Tabs>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>OS</TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Veículo</TableCell>
                  <TableCell>Telefone</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.os}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.os}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.cliente}
                    </TableCell>
                    <TableCell>{row.veiculo}</TableCell>
                    <TableCell>{row.telefone}</TableCell>
                    <TableCell>{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Container>
  );
}
