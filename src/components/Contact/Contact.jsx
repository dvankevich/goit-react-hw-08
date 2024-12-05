import { FaUserSecret } from 'react-icons/fa6';
import { GiRotaryPhone } from 'react-icons/gi';

import { deleteContact, editContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
//import { confirmAlert } from 'react-confirm-alert';
//import 'react-confirm-alert/src/react-confirm-alert.css';
import s from './Contact.module.css';
//import './react-confirm-alert.css';

import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
//import { Delete, Edit } from '@mui/icons-material';
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog';
import ModalForm from '../ModalForm/ModalForm';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  const handleEdit = values => {
    dispatch(
      editContact({
        id: values.id,
        name: values.name,
        number: values.number,
      })
    );
  };

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
          title="Edit contact"
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
