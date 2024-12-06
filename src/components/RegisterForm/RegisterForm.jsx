import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Button, TextField, Paper } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = v => {
    dispatch(register({ name: v.name, email: v.email, password: v.password }));
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(7, 'The password must contain at least 7 characters.')
      .required('Password is required'),
  });

  return (
    <Paper
      elevation={3}
      style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <Form>
            <Field
              name="name"
              as={TextField}
              fullWidth
              label="Username"
              variant="outlined"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={touched.name && Boolean(errors.name)}
              helperText={<ErrorMessage name="name" />}
              style={{ marginBottom: '16px' }}
            />
            <Field
              name="email"
              as={TextField}
              fullWidth
              label="Email"
              variant="outlined"
              required
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={<ErrorMessage name="email" />}
              style={{ marginBottom: '16px' }}
            />
            <Field
              name="password"
              as={TextField}
              fullWidth
              label="Password"
              variant="outlined"
              required
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && Boolean(errors.password)}
              helperText={<ErrorMessage name="password" />}
              style={{ marginBottom: '16px' }}
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
