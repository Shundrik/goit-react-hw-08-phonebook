import { RegistrForm } from 'components/RegisterForm/registerForm';
import { Helmet } from 'react-helmet';

export default function Register () {
  return (
    <div>
           <h1>REG</h1>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrForm />
    </div>
  );
};
