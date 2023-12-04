import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact }) => {
  const { name, phone, id } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.listItem}>
      <span className={css.listItemText}>
        {name}: {phone}
      </span>
      <button type="button" className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
