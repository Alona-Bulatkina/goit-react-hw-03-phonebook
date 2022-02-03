import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { Contact } from './ContactList.styled';

// Принимает все контакты и пробрасывает дальше метод для удаления контакта
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Contact>
      {contacts.map(contact => (
        <ContactItem
          contact={contact}
          onDeleteContact={onDeleteContact}
          key={contact.id}
        />
      ))}
    </Contact>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;