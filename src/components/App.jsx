import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Container, Title, TitleList } from './App.styled';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleList>Contacts</TitleList>
      <Filter />
      {isLoading && !error && <p>Loading...</p>}
      {error && <p>Something went wrong. Please, try again.</p>}
      <ContactList />
    </Container>
  );
};

export default App;
