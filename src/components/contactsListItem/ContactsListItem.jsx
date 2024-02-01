import css from './ContactsListItem.module.css';

export const ContactsListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.item}>
      <span className={css.name}>{name}:</span>
      <span className={css.number}>{number}</span>
      <button
        className={css.button_delete}
        type="button"
        onClick={() => onDeleteContact(id)}
      > Delete
      </button>
    </li>
  );
};