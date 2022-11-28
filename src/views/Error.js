import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Error() {
  return (
    <Container
      sx={{
        marginTop: 5,
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
        <Typography component="h4" variant="h4">
          Error404: Página não encontrada :/
        </Typography>
      </Box>
    </Container>
  );
}

export default Error;
