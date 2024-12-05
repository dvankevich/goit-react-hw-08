import { useState } from 'react';
import { Modal, Button, TextField, Box } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Edit } from '@mui/icons-material';

// Валідація за допомогою Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required'),
});

const ModalForm = ({
  title,
  initialValues,
  onSubmit,
  openBtnLabel,
  submitBtnLabel,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen} startIcon={<Edit />}>
        {openBtnLabel}
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 400,
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <h2>{title}</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => {
              onSubmit(values);
              handleClose();
            }}
          >
            {({ handleChange, errors, touched }) => (
              <Form>
                <Field
                  as={TextField}
                  label="Name"
                  name="name"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  helperText={<ErrorMessage name="name" />}
                  error={touched.name && Boolean(errors.name)}
                />
                <Field
                  as={TextField}
                  label="Number"
                  name="number"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  helperText={<ErrorMessage name="number" />}
                  error={touched.number && Boolean(errors.number)}
                />
                <Button type="submit" variant="contained" color="primary">
                  {submitBtnLabel}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default ModalForm;
