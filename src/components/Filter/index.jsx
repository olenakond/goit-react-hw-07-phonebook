import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { setFilter } from 'redux/filterSlice';
import { Input } from './Filter.styled';

const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <Input onChange={handleFilter} id={filterInputId} type="text" />
    </>
  );
};

export default Filter;
