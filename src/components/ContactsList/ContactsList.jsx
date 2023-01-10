import { List, Item, Button } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleted } from '../../redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import { contactValue, filterValue } from 'redux/selectors';




  export default function ContactList() {
    const contacts = useSelector(contactValue);
    const filter = useSelector(filterValue);
  
    const contactsFiltered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const dispatch = useDispatch();

  if (contactsFiltered) {
  return (
    <List>
      {contactsFiltered.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button type="button" onClick={() => dispatch(deleted(id))}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
}

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};