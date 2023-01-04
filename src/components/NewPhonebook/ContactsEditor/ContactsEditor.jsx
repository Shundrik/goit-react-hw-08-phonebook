import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../../redux/contacts/operations';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';

const CreateContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const CreateContactFormlabel = styled.label`
  margin: 5px;
`;
const CreateContactFormInput = styled.input`
  margin: 5px;
  border-radius: 5px;
  /* outline-color:#03e9f4; */
`;
const Button = styled.button`
  color: #fff;
  margin: 0 auto;
  justify-content: center;
  max-width: 120px;
  margin-top: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid#03e9f4;
  &:hover {
    color: #03e9f4;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 40px #03e9f4,
      0 0 60px #03e9f4;
  }
`;
export const ContactsEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);

  const addContacts = () => {
    const inList = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

    inList
      ? alert(`${name} is alrady in contacts`)
      : dispatch(addContact({ name, number }));
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <CreateContactForm onSubmit={handleSubmit}>
        <CreateContactFormlabel htmlFor="nameContact">
          Name
        </CreateContactFormlabel>
        <CreateContactFormInput
          onChange={e => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></CreateContactFormInput>

        <CreateContactFormlabel htmlFor="number">
          Phone number
        </CreateContactFormlabel>

        <CreateContactFormInput
          onChange={e => setNumber(e.target.value)}
          value={number}
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></CreateContactFormInput>
        <Button type="submit">Add contact</Button>
      </CreateContactForm>
    </div>
  );
};
