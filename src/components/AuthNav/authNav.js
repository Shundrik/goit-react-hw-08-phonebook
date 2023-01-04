import { NavLink } from 'react-router-dom';
import  styled  from 'styled-components';


const AuthNavStyled = styled.div`
    display:flex;
    gap:15px;
    font-size: 18px;
    text-decoration: none;
`

const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  &.active {
    color: #03e9f4;
    border-bottom: 1px solid  #03e9f4;
  }
`;

export const AuthNav = () => {
  return (
    <AuthNavStyled >
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </AuthNavStyled>
  );
};
