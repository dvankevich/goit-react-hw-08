import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectContactsFilteredByName } from '../../redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectContactsFilteredByName);

  return (
    <ul className={s.contactList}>
      {visibleContacts.map(contact => {
        return (
          //<li key={contact.id}>Contact {contact.name}</li>
          <Contact key={contact.id} contact={contact} />
        );
      })}
    </ul>
  );
};

export default ContactList;
