import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Typography, Container } from '@mui/material';

import NotFound from '../../assets/images/not-found.svg';
import { PATH_HOME } from '../../routes/paths';

const Page404 = () => (
  <Container>
    <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
      <Typography sx={{ color: 'text.secondary' }} mt={5} variant="h4">
        Ups! Parece que te perdiste
      </Typography>

      <Box
        alt="404"
        component="img"
        src={NotFound}
        sx={{ width: '100%', maxHeight: 240, my: { xs: 5, sm: 10 } }}
      />

      <Button to={PATH_HOME.root} variant="contained" component={RouterLink}>
        Ir a la página inicial
      </Button>
    </Box>
  </Container>
);

export default Page404;
