import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />

        <label htmlFor={numberFieldId}>Phone</label>
        <Field type="text" name="number" id={numberFieldId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
