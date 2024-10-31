import { FaUserSecret } from 'react-icons/fa6';
import { GiRotaryPhone } from 'react-icons/gi';
import { TiDelete } from 'react-icons/ti';
import s from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => {
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
      <button
        className={s.btn}
        type="button"
        onClick={() => deleteContact(contact.id)}
      >
        <TiDelete className={s.icon} />
        Delete
      </button>
    </li>
  );
};

export default Contact;
