import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Wrap } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/contactsSlice';
import { filterValue, contactValue } from 'redux/store';



export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactValue);
  const filter = useSelector(filterValue);

  const addContact = name => {
    contacts.find(
      contact => contact.name.toLowerCase() === name.name.toLowerCase()
    )
      ? alert(`${name.name} is already in contacts`)
      : dispatch(add(name));
  };
  
  const onFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const filteredContacts = onFilteredContacts();

  return (
    <Wrap>
      <Section title={`Phonebook`}></Section>
      <ContactForm onSubmit={addContact} />
      <Section title={`Contacts`}>
        <Filter />
        <ContactsList contacts={filteredContacts} />
      </Section>
    </Wrap>
  );
}
