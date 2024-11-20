import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const getVisibleContacts = (contacts, nameFilter) => {
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(nameFilter.toLowerCase());
  });

  return filteredContacts;
};

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const nameFilter = useSelector(state => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, nameFilter);

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
