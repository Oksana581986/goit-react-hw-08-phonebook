import { ContactsListItem } from 'components/contactsListItem/ContactsListItem';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/operations';
import { selectVisibleContacts } from '../../redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};