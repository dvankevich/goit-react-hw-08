import { FaUserSecret } from 'react-icons/fa6';
import { GiRotaryPhone } from 'react-icons/gi';
import { TiDelete } from 'react-icons/ti';
import s from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li className={s.contactCard}>
      <div className={s.nameNumber}>
        <div className={s.contactField}>
          <FaUserSecret className={s.icon} />
          <p>
            {contact.name} {contact.id}
          </p>
        </div>
        <div className={s.contactField}>
          <GiRotaryPhone className={s.icon} />
          <p>{contact.number}</p>
        </div>
      </div>
      <button className={s.btn} type="button" onClick={() => handleDelete()}>
        <TiDelete className={s.icon} />
        Delete
      </button>
    </li>
  );
};

export default Contact;
