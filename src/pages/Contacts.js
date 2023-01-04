import { NewPhonebook } from 'components/NewPhonebook/NewPhonebook';
import { Helmet } from 'react-helmet';

export default function Contacts () {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <NewPhonebook />
    </>
  );
};
