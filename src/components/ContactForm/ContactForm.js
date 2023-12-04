import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.warning(`${name} is already in contacts :)`, {
        position: 'center-top',
        timeout: 5000,
      });
      form.reset();
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel} htmlFor={nameInputId}>
        Name
      </label>
      <input
        className={css.formInput}
        type="text"
        pattern="[a-zA-Z\s'\-]*"
        name="name"
        id={nameInputId}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.formLabel} htmlFor={phoneInputId}>
        Number
      </label>
      <input
        className={css.formInput}
        type="tel"
        name="number"
        id={phoneInputId}
        pattern="[0-9\s\-]+"
        title="Phone number must be digits and can contain spaces and dashes"
        required
      />
      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
};
