import { FaUserSecret } from 'react-icons/fa6';
import { GiRotaryPhone } from 'react-icons/gi';
import { TiDelete } from 'react-icons/ti';

const Contact = ({ contact, deleteContact }) => {
  return (
    <li>
      <div>
        <FaUserSecret />
        <p>{contact.name}</p>
        <GiRotaryPhone />
        <p>{contact.number}</p>
      </div>
      <button type="button" onClick={() => deleteContact(contact.id)}>
        <TiDelete />
        Delete
      </button>
    </li>
  );
};

export default Contact;
