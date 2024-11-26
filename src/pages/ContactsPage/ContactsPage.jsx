import ContactList from '../../components/ContactList/ContactList';
import { useEffect } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
// Імпортуємо функції-селектори
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';

function ContactsPage() {
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

export default ContactsPage;
