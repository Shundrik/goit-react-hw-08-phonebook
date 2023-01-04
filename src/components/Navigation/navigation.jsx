import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/hooks';
import  styled  from 'styled-components';


const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  &.active {
    color: #03e9f4;
    border-bottom: 1px solid  #03e9f4;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav style={{display:"flex",gap:"15px"}}>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
