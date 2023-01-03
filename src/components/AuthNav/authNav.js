import { NavLink } from 'react-router-dom';


export const AuthNav = () => {
  return (
    <div style={{display:"flex",gap:"15px"}}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
};
