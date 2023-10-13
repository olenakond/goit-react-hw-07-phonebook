import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import Contact from '../Contact';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contactsList = useSelector(selectFilteredContacts);

  return (
    <>
      {contactsList && (
        <List>
          {contactsList.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
