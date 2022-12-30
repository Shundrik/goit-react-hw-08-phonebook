import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../../redux/operations';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';


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
`;
const Button = styled.button`
  margin: 0 auto;
  justify-content: center;
  max-width: 120px;
  margin-top: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: white;
  &:hover {
    box-shadow: inset -5px 10px 20px gold;
  }
`;
export const ContactsEditor = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');


const contacts = useSelector(getContacts)

const addContacts = ()=>{
   const inList = contacts.find(
    item => item.name.toLowerCase() === name.toLowerCase());
   
inList
? alert(`${name} is alrady in contacts`)
: dispatch(addContact({name, phone}))

// : state.items.unshift(action.payload);

  }

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addContacts({name, phone})
      )
    setName('');
    setPhone('');
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
          // name="nameContact"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></CreateContactFormInput>

        <CreateContactFormlabel htmlFor="number">
          Phone number
        </CreateContactFormlabel>

        <CreateContactFormInput
          onChange={e => setPhone(e.target.value)}
          value={phone}
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></CreateContactFormInput>
        <Button type="submit"> Add contact</Button>
      </CreateContactForm>
    </div>
  );
};
