import styled from 'styled-components';
import { ContactList } from './ContactList/ContactList';
import { ContactsEditor } from './ContactsEditor/ContactsEditor';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { useAuth } from 'hooks/hooks'; 

const ContactCounter = styled.p`
  margin: 10px auto;
  width: 100px;
  text-align: center;
  
`;
const NameStyled = styled.b`
font-size:20px;
color:#03e9f4;
text-shadow: #03e9f4 0 0 5px,
             #03e9f4 0 0 25px ,
             #03e9f4 0 0 50px,
             #03e9f4 0 0 100px;
             /* text-shadow: #FC0 1px 0 10px; */
`;
const Title = styled.h1`
  text-align: center;
`;

export const NewPhonebook = () => {
  const contacts = useSelector(getContacts);
const {user}=useAuth()
  return (
    <>
      <div>
        <ContactCounter>
          Phonebook <NameStyled>{user.name}</NameStyled> <br />
          <span>{contacts.length} </span>
          contacts
        </ContactCounter>
      </div>
      <ContactsEditor />
      <Title>Contacts</Title>
      <Filter></Filter>

      <ContactList></ContactList>
    </>
  );
};
