import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav style={{display:"flex",gap:"15px"}}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
