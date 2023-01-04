// import { useAuth } from "hooks/hooks";
import { logOut } from "redux/auth/authOperations";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const BtnStyled = styled.button`
    display: inline-block;
    padding: 2px 4px;
    background: transparent;
    color: #03e9f4;
    font-size: 14px;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    cursor:pointer;
                        
  &:hover {
    background: #03e9f4;
    border: transparent;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 100px #03e9f4;
  }
`;  
const UserMenuStyled = styled.div`
display:flex;
 alignItems:center;
 gap:5px; 

 `

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => 
    dispatch(logOut());
  

  return (
    <UserMenuStyled>
    {/* <TextStyle>Welcom, {user.name}</TextStyle> */}
    <BtnStyled type="button" onClick={handleLogOut}>Log out</BtnStyled>
    </UserMenuStyled>
  );
};
