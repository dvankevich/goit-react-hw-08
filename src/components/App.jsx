import './App.css';
import contacts from '../contacts.json';
import Contact from './Contact/Contact';

console.log(contacts);
const contactItem = contacts[0];
console.log(contactItem);

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ul>
        <Contact
          contact={contactItem}
          deleteContact={() => {
            console.log('button pressed');
          }}
        />
      </ul>
    </>
  );
}

export default App;
