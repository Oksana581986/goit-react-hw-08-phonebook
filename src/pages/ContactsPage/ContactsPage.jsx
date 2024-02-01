import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { SectionSubtitle } from 'components/SectionSubtitle/SectionSubtitle';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactsFilter } from 'components/filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrap}>
      <NotificationContainer />
      <SectionTitle title="Phonebook" />
      <ContactForm />
      <SectionSubtitle subtitle="Contacts" />
      <ContactsFilter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </div>
  );
};
export default ContactsPage;
