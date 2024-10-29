import Contact from '../Contact/Contact';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
