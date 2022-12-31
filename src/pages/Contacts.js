import { NewPhonebook } from 'components/NewPhonebook/NewPhonebook';
import { Helmet } from 'react-helmet';

export const Contacts = () => {
  return (
    <>
       <h1>CONTACTS</h1>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <NewPhonebook />
    </>
  );
};
