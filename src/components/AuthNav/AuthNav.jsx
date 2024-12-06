import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: '16px' }}>
      <NavLink to="/register" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="secondary">
          Register
        </Button>
      </NavLink>
      <NavLink to="/login" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="secondary">
          Log In
        </Button>
      </NavLink>
    </Box>
  );
};
