import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export const Filter = () => {
  const filterInputId = nanoid();

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.filterLabel} htmlFor={filterInputId}>
        Find contact by name
      </label>
      <div className={css.inputBorder}>
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          placeholder="Enter name"
          id={filterInputId}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
};
