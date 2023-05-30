import { Container, Title, ContactListTitle } from './App/App.styled';
import Form from './Form/Form';
import ContactsList from './Contact__List/Contact__List';
import Filter from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <Container>
      <Title>My Phonebook</Title>
      <Form />
      <ContactListTitle> My contacts list</ContactListTitle>
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default App;
