import { React } from 'react';
import { Link } from 'react-router-dom';

// Material ui Caixa
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

// Material ui Tabelas
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Material ui Formulário
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function createData(cod, cliente, veiculo, telefone) {
  return { cod, cliente, veiculo, telefone };
}

const rows = [
  createData('1', 'Alex', 'Corola Branco', '99999999'),
  createData('2', 'aLAN', 'Jeep', '99999999'),
  createData('3', 'Alice', 'HB20 Sedan', '99999999'),
  createData('4', 'Alexsandro', 'Hilux', '99999999'),
];

export default function Cliente() {
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
              Clientes
            </Typography>
          </Tabs>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Buscar Cliente…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </TableRow>
            </TableHead>
          </Table>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Cod</TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Veículo</TableCell>
                  <TableCell>Telefone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.cod}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.cod}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.cliente}
                    </TableCell>
                    <TableCell>{row.veiculo}</TableCell>
                    <TableCell>{row.telefone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography component="h1" variant="h5">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Novo Cliente +
            </Button>
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}
