import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import { Box } from '@mui/material';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <Box
      component="ul"
      sx={{
        padding: 0,
        margin: '8px 0 0 0',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      {visibleContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </Box>
  );
};

export default ContactList;
