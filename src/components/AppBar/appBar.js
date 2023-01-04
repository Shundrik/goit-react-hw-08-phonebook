import { AuthNav } from 'components/AuthNav/authNav';
import { Navigation } from 'components/Navigation/navigation';
import { UserMenu } from 'components/UserMenu/userMenu';
import { useAuth } from 'hooks/hooks';
import styled from 'styled-components';

const HeaderStyled = styled.header`
        display: flex;
        align-items: center;
        text-decoration: none;
        justify-Content: space-between;
        border-Bottom: 1px solid #03e9f4;
        padding-Bottom: 15px;
      
`

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};
