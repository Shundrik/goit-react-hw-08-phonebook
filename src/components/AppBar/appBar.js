import { AuthNav } from 'components/AuthNav/authNav';
import { Navigation } from 'components/Navigation/navigation';
import { UserMenu } from 'components/UserMenu/userMenu';
import { useAuth } from 'hooks/hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid gold',
        paddingBottom: '10px',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
