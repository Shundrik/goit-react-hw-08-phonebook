import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { RegistrForm } from './RegisterForm/registerForm';
import { LoginForm } from './loginForm/loginForm';
import { Contacts } from 'pages/Contacts';
import { AppBar } from './AppBar/appBar';

const AppWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
  background: black;
  color: white;
  list-style: none;
`;

export const App = () => {
  return (
    <AppWrapper>
      <AppBar></AppBar>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="/register" element={<RegistrForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contacts" element={<Contacts />} />
        {/* </Route> */}
      </Routes>
    </AppWrapper>
  );
};
