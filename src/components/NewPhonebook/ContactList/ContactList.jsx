import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { deleteContact } from '../../../redux/contacts/operations';
import * as contactsOperations from '../../../redux/contacts/operations';
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
  transform: scale(1);
  /* animation: ${typing} 2s steps(22), blink 1s step-end infinite alternate; */

  &:hover {
    color:#03e9f4;
    transform: scale(1.01);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    border-color: #03e9f4;
  }s
`;

const ButtonItem = styled.button`
  justify-content: center;
color:#fff;
  padding: 2px 15px;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid #03e9f4;
  &:hover {
    color:#03e9f4;;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 40px #03e9f4,
                0 0 60px #03e9f4;
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
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ContactsList>
      {getContactsFilter.map(({ id, name, number, phone }) => {
        // 1-422-661-2129 x6551
        // const phoneNormalize = phone.match(/[х]/gi);
        // console.log(phoneNormalize);
        return (
          <ContactItem  key={id}>
            <p >
              {name}: {number || phone}
            </p>
            <ButtonItem onClick={() => dispatch(deleteContact(id))}>
              Delete
            </ButtonItem>
          </ContactItem>
        );
      })}
    </ContactsList>
  );
};
