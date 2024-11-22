import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
// 1. Імпортуємо хук
import { useDispatch } from 'react-redux';
// 2. Імпортуємо фабрику екшену
import { addContact } from '../../redux/contactsOps';

const initialValues = {
  name: '',
  number: '',
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too Short!')
    .max(50, 'Name is too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^(?:\+38)?(\(0\d{2}\)\d{3}-\d{4}|\(0\d{2}\)\d{3}-\d{2}-\d{2}|0\d{9}|\d{3}-\d{2}-\d{2})$/,
      'Incorrect phone number format'
    ) // Регулярний вираз для валідації from https://poe.com/s/e3yJBmpLrsdnOqOGdjrQ
    .required('Required!')
    .typeError('Enter phone-number!'),
});

const ContactForm = () => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // id: - це має встановлювати API
    // name: "zxczxc"
    // number: "222-22-22"

    // 4. Викликаємо фабрику екшену та передаємо дані для payload
    // 5. Відправляємо результат – екшен створення завдання
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field className={s.field} type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" className={s.error} />

        <label htmlFor={numberFieldId}>Number</label>
        <Field
          className={s.field}
          type="text"
          name="number"
          id={numberFieldId}
          placeholder="XXX-XX-XX"
        />
        <ErrorMessage name="number" component="span" className={s.error} />

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
