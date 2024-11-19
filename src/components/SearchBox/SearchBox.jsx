import { useId } from 'react';
import s from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const searchInputId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);
  const handleSearch = filter => dispatch(changeFilter(filter));

  return (
    <div className={s.box}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        className={s.field}
        id={searchInputId}
        onChange={evt => handleSearch(evt.target.value)}
        value={filter}
      ></input>
    </div>
  );
};

export default SearchBox;
