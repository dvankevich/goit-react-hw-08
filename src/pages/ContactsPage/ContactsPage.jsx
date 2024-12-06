import ContactList from '../../components/ContactList/ContactList';
import { useEffect } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
// Імпортуємо функції-селектори
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import { Box, CircularProgress, Typography } from '@mui/material';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Phonebook
      </Typography>
      <Box sx={{ marginBottom: '20px' }}>
        {isLoading && !error && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}
      </Box>
      <ContactForm />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <SearchBox />
      </Box>
      <ContactList />
    </Box>
  );
}

export default ContactsPage;
