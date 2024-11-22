import './App.css';

import ContactList from './ContactList/ContactList';
import { useEffect } from 'react';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
// Імпортуємо функції-селектори
import { selectIsLoading, selectError } from '../redux/selectors';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
