// 1. Імпортуємо хук
import { useDispatch } from 'react-redux';
// 2. Імпортуємо фабрику екшену
import { addContact } from '../../redux/contacts/operations';
import ModalForm from '../ModalForm/ModalForm';

const ContactForm = () => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleSubmit = values => {
    // id: - це має встановлювати API
    // name: "zxczxc"
    // number: "222-22-22"
    // 4. Викликаємо фабрику екшену та передаємо дані для payload
    // 5. Відправляємо результат – екшен створення завдання
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
  };

  return (
    <ModalForm
      title="Add contact"
      initialValues={{
        //id: contact.id,
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      openBtnLabel="Add contact"
      submitBtnLabel="Submit"
    />
  );
};

export default ContactForm;
