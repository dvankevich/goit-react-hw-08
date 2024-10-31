import './App.css';
import contactsInit from '../contacts.json';
import ContactList from './ContactList/ContactList';
import { useState } from 'react';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(contactsInit);
  const [searchStr, setSearchStr] = useState('');

  const deleteContact = id => {
    setContacts(prevContactList =>
      prevContactList.filter(contact => contact.id !== id)
    );
  };

  const addContact = contact => {
    setContacts(prevContactList => {
      return [...prevContactList, contact];
    });
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox search={searchStr} handleSearch={setSearchStr} />

      {searchStr === '' ? (
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      ) : (
        <ContactList
          contacts={contacts.filter(contact => {
            return contact.name.toLowerCase().includes(searchStr.toLowerCase());
          })}
          deleteContact={deleteContact}
        />
      )}
    </>
  );
}

export default App;
