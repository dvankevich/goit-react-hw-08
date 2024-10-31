import { useId } from 'react';
import s from "./SearchBox.module.css"

const SearchBox = ({ search, handleSearch }) => {
  const searchInputId = useId();
  return (
    <div className={s.box}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input className={s.field}
        id={searchInputId}
        onChange={evt => handleSearch(evt.target.value)}
        value={search}
      ></input>
    </div>
  );
};

export default SearchBox;
