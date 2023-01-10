import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import  ContactsList  from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Wrap } from './App.styled';



export default function App() {

  return (
    <Wrap>
      <Section title={`Phonebook`}></Section>
      <ContactForm />
      <Section title={`Contacts`}>
        <Filter />
        <ContactsList />
      </Section>
    </Wrap>
  );
}
