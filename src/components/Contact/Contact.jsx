import { FaUserSecret } from 'react-icons/fa6';
import { GiRotaryPhone } from 'react-icons/gi';

import { deleteContact, editContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
//import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import s from './Contact.module.css';
import './react-confirm-alert.css';

//import { ErrorMessage, Field, Form, Formik } from 'formik';
//import { nanoid } from 'nanoid';
//import * as Yup from 'yup';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
//import { Delete, Edit } from '@mui/icons-material';
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog';
import ModalForm from '../ModalForm/ModalForm';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  // const handleEdit = (values, actions) => {
  //   dispatch(
  //     editContact({
  //       id: values.id,
  //       name: values.name,
  //       number: values.number,
  //     })
  //   );
  //   actions.resetForm({
  //     values: {
  //       id: values.id,
  //       name: values.name,
  //       number: values.number,
  //     },
  //   });
  // };
  const handleEdit = values => {
    dispatch(
      editContact({
        id: values.id,
        name: values.name,
        number: values.number,
      })
    );
  };
  // const updateDialog = () => {
  //   const initialValues = {
  //     id: contact.id,
  //     name: contact.name,
  //     number: contact.number,
  //   };

  //   const FeedbackSchema = Yup.object().shape({
  //     name: Yup.string()
  //       .min(2, 'Name is too Short!')
  //       .max(50, 'Name is too Long!')
  //       .required('Required'),
  //     number: Yup.string()
  //       .matches(
  //         /^(?:\+38)?(\(0\d{2}\)\d{3}-\d{4}|\(0\d{2}\)\d{3}-\d{2}-\d{2}|0\d{9}|\d{3}-\d{2}-\d{2})$/,
  //         'Incorrect phone number format'
  //       ) // Регулярний вираз для валідації from https://poe.com/s/e3yJBmpLrsdnOqOGdjrQ
  //       .required('Required!')
  //       .typeError('Enter phone-number!'),
  //   });
  //   const nameFieldId = nanoid();
  //   const numberFieldId = nanoid();

  //   confirmAlert({
  //     title: 'Confirm to update',
  //     message: 'Are you sure to do this?',
  //     childrenElement: () => {
  //       return (
  //         <div>
  //           <p>Custom UI</p>
  //           <Formik
  //             initialValues={initialValues}
  //             onSubmit={handleEdit}
  //             validationSchema={FeedbackSchema}
  //             // resetForm
  //           >
  //             <Form className={s.form}>
  //               <label htmlFor={nameFieldId}>Name</label>
  //               <Field
  //                 className={s.field}
  //                 type="text"
  //                 name="name"
  //                 id={nameFieldId}
  //               />
  //               <ErrorMessage
  //                 name="name"
  //                 component="span"
  //                 className={s.error}
  //               />

  //               <label htmlFor={numberFieldId}>Number</label>
  //               <Field
  //                 className={s.field}
  //                 type="text"
  //                 name="number"
  //                 id={numberFieldId}
  //                 placeholder="XXX-XX-XX"
  //               />
  //               <ErrorMessage
  //                 name="number"
  //                 component="span"
  //                 className={s.error}
  //               />

  //               <button className={s.btn} type="submit">
  //                 Update contact
  //               </button>
  //             </Form>
  //           </Formik>
  //         </div>
  //       );
  //     },
  //     buttons: [
  //       // {
  //       //   label: 'Yes',
  //       //   onClick: () => handleDelete(),
  //       // },
  //       {
  //         label: 'Close',
  //         // https://quickref.me/create-an-empty-function.html
  //         onClick: () => {},
  //       },
  //     ],
  //   });
  // };

  return (
    <li className={s.contactCard}>
      <div className={s.nameNumber}>
        <div className={s.contactField}>
          <FaUserSecret className={s.icon} />
          <p>{contact.name}</p>
        </div>
        <div className={s.contactField}>
          <GiRotaryPhone className={s.icon} />
          <p>{contact.number}</p>
        </div>
      </div>
      <div className={s.buttons}>
        {/* <Button
          variant="contained"
          type="button"
          onClick={updateDialog}
          startIcon={<Edit />}
        >
          Edit
        </Button> */}

        <ModalForm
          title="My Custom Modal Form"
          initialValues={{
            id: contact.id,
            name: contact.name,
            number: contact.number,
          }}
          // onSubmit={handleSubmit}
          onSubmit={handleEdit}
          openBtnLabel="Edit"
          submitBtnLabel="Update"
        />

        <ConfirmationDialog
          title="Contact delete"
          description="Are you sure you want to proceed?"
          response={handleDelete}
        >
          {showDialog => (
            <Button
              variant="contained"
              type="button"
              onClick={showDialog}
              startIcon={<Delete />}
            >
              Delete
            </Button>
          )}
        </ConfirmationDialog>
      </div>
    </li>
  );
};

export default Contact;
