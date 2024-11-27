import { FaUserSecret } from 'react-icons/fa6';
import { GiRotaryPhone } from 'react-icons/gi';
import { TiDelete } from 'react-icons/ti';
import { TiEdit } from 'react-icons/ti';

import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import s from './Contact.module.css';
import './react-confirm-alert.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  const deleteDialog = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDelete(),
        },
        {
          label: 'No',
          // https://quickref.me/create-an-empty-function.html
          onClick: () => {},
        },
      ],
    });
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
        <button className={s.btn} type="button" onClick={() => deleteDialog()}>
          <TiEdit className={s.icon} />
          Edit
        </button>
        <button className={s.btn} type="button" onClick={() => deleteDialog()}>
          <TiDelete className={s.icon} />
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
