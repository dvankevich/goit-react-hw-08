import './App.css';

import ContactList from './ContactList/ContactList';
import { useEffect, useState } from 'react';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';

function App() {
  const [searchStr, setSearchStr] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <div>
        {isLoading && !error && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
      </div>
      <ContactForm />
      <SearchBox search={searchStr} handleSearch={setSearchStr} />
      <ContactList />
    </>
  );
}

export default App;
