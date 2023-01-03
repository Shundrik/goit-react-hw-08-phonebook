import styled from 'styled-components';
import { ContactList } from './ContactList/ContactList';
import { ContactsEditor } from './ContactsEditor/ContactsEditor';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';

const ContactCounter = styled.p`
  margin: 10px auto;
  width: 100px;
  text-align: center;
`;
const Title = styled.h1`
  text-align: center;
`;

export const NewPhonebook = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <div>
        <ContactCounter>
          Phonebook <br />
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
