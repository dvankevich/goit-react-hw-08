import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
//import css from './UserMenu.module.css';
import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Typography variant="body1">Welcome, {user.name}</Typography>
      <Button
        variant="contained"
        color="secondary"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
    // <div className={css.wrapper}>
    //   <p className={css.username}>Welcome, {user.name}</p>
    //   <Button
    //     variant="contained"
    //     type="button"
    //     onClick={() => dispatch(logOut())}
    //   >
    //     Logout
    //   </Button>
    // </div>
  );
};
