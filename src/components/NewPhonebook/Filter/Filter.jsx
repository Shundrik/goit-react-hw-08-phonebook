
import { useDispatch, useSelector } from 'react-redux';
import {  myFilter } from 'redux/contacts/slise';
import styled from 'styled-components';
import { getFilter } from "../../../redux/contacts/selectors"


const WrapperFindForm = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Formlabel = styled.label`
  margin: 5px;
`;
const FormInput = styled.input`
  margin: 5px;
  border-radius: 5px;
`;

export const Filter = () => {
  const dispatch = useDispatch();
  const filterString = useSelector(getFilter);

const handleFilter = (e) =>{
  const value = e.target.value
 return dispatch(myFilter(value))
  
}

  return (
    <WrapperFindForm>
      <Formlabel htmlFor="filter"> Find contacts by name: </Formlabel>
      <FormInput onChange={handleFilter} value={filterString} type="text" name="filter" />
    </WrapperFindForm>
  );
};
