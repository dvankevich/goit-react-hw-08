import { useId } from 'react';

const SearchBox = ({ search, handleSearch }) => {
  const searchInputId = useId();
  return (
    <div>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        id={searchInputId}
        onChange={evt => handleSearch(evt.target.value)}
        value={search}
      ></input>
    </div>
  );
};

export default SearchBox;
