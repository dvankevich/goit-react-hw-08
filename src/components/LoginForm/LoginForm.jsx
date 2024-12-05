import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
//import css from './LoginForm.module.css';
import { Box, Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('login success');
        //console.log('login success');
      })
      .catch(() => {
        toast.error('login error');
        //console.log('login error');
      });

    form.reset();
  };

  return (
    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   {/* <button type="submit">Log In</button> */}
    //   <Button type="submit" variant="contained">
    //     Log In
    //   </Button>
    // </form>
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
      }}
    >
      <TextField
        label="Email"
        type="email"
        name="email"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Log In
      </Button>
    </Box>
  );
};
