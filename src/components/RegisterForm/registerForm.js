import { register } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import  css  from './RegisterForm.module.css';

export const RegistrForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <div className={css.loginBox}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={css.userBox}>
            <input type="username" name="name" required=" " />
            <label>Username</label>
          </div>
          <div className={css.userBox}>
            <input type="email" name="email" required=" "/>
            <label>Email</label>
          </div>
          <div className={css.userBox}>
            <input type="password" name="password" required=" "/>
            <label>Password</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
