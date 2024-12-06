import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Box, Typography } from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ display: 'flex', gap: '16px' }}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <Typography variant="h6">Home</Typography>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={{ textDecoration: 'none' }}>
          <Typography variant="h6">Contacts</Typography>
        </NavLink>
      )}
    </Box>
  );
};
