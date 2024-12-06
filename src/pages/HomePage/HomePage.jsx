import { Box, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SlickSlider from '../../components/SlickSlider/SlickSlider';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', 
        //backgroundColor: '#f5f5f5', // Світло-сірий фон
        padding: '20px',
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: '20px' }}>
        Simple Phonebook App
      </Typography>
      <Typography
        variant="h5"
        sx={{ marginBottom: '20px', textAlign: 'center' }}
      >
        Your go-to solution for managing contacts effortlessly. Enjoy the
        benefits of fast contact search and a spacious, user-friendly interface.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NavLink to="/register" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Register
          </Button>
        </NavLink>
        <Typography variant="body1">or</Typography>
        <NavLink to="/login" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Log In
          </Button>
        </NavLink>
      </Box>
      <Box sx={{ width: '50%', marginTop: '20px' }}>
        <SlickSlider />
      </Box>
    </Box>
  );
};

export default HomePage;

