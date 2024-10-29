import './App.css';
import contactsInit from '../contacts.json';
import ContactList from './ContactList/ContactList';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contactsInit);
  const deleteContact = id => {
    setContacts(prevContactList =>
      prevContactList.filter(contact => contact.id !== id)
    );
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
