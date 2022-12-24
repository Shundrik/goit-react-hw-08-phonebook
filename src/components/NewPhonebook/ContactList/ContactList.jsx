import {  useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact,  } from "../../../redux/operations";
import * as contactsOperations from "../../../redux/operations"
import { useDispatch } from 'react-redux';


import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';

const ContactsList = styled.ul`
  margin: 0;
  padding: 0;
`;
const typing = keyframes`
  from {
    width: 0;
  }
   `;
const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid white;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1, 1);
  /* animation: ${typing} 2s steps(22), blink 1s step-end infinite alternate; */

  &:hover {
    transform: scale(1, 1.1);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    border-color: gold;
  }
`;

const ButtonItem = styled.button`
  justify-content: center;

  padding: 2px 15px;
  border-radius: 5px;
  background-color: white;
  &:hover {
    box-shadow: inset -5px 10px 20px gold;
  }
`;

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const normalaise = filter.toLowerCase();
  const getContactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalaise)
  );
useEffect(()=>{
  dispatch(contactsOperations.fetchContacts())
},[dispatch])

  return (
    <ContactsList>
      {getContactsFilter.map(({ id, name, number, phone }) => {
// 1-422-661-2129 x6551
        // const phoneNormalize = phone.match(/[х]/gi);
        // console.log(phoneNormalize);
        return (
          <ContactItem key={id}>
            <p>
              {name}: {number || phone}
            </p>
            <ButtonItem onClick={
              // console.log("deleteButton")
              () => dispatch(deleteContact(id))
              }>
              Delete
            </ButtonItem>
          </ContactItem>
        );
      })}
    </ContactsList>
  );
};
