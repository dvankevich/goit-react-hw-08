import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
//import css from './RegisterForm.module.css';
import { Button, TextField, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <Button variant="contained" type="submit">
    //     Register
    //   </Button>
    // </form>
    <Paper
      elevation={3}
      style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              name="name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
