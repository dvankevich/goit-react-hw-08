import Contact from '../Contact/Contact';
import s from "./ContactList.module.css"

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.contactList}>
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
