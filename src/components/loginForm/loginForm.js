import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from "./LoginForm.module.css";


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
      <div className={css.loginBox}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={css.userBox}>
            <input type="email" name="email" required=" " />
            <label>Email</label>
          </div>
          <div className={css.userBox}>
            <input type="password" name="password" required=" " />
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
  );
};
