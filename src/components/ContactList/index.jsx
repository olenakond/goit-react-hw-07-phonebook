import { useSelector } from 'react-redux';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import Contact from '../Contact';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);

  const createContactsByfilter = () => {
    if (!filter) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = createContactsByfilter();
  const contactsList = filteredContacts ?? contacts;

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
