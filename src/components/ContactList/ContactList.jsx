import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const getVisibleContacts = (contacts, nameFilter) => {
  console.log('nameFilter from getVisibleContacts function: ', nameFilter);

  return contacts;
};

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts);
  const nameFilter = useSelector(state => state.filters.name);
  console.log(nameFilter);
  const visibleContacts = getVisibleContacts(contacts, nameFilter);
  console.log(visibleContacts);

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
