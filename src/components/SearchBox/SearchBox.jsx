import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { Box, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBox = () => {
  const searchInputId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);
  const handleSearch = filter => dispatch(changeFilter(filter));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        marginTop: '20px',
        width: '100%',
      }}
    >
      <TextField
        id={searchInputId}
        variant="outlined"
        onChange={evt => handleSearch(evt.target.value)}
        value={filter}
        fullWidth={false}
        sx={{ width: '60%' }}
        placeholder="Search contacts by Name or number ..."
      />
      <Search />
    </Box>
  );
};

export default SearchBox;
