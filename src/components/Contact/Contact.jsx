const Contact = ({ contact, deleteContact }) => {
  return (
    <li>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
