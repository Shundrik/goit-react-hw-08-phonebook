import { useAuth } from "hooks/hooks";
import { logOut } from "redux/auth/authOperations";
import { useDispatch } from "react-redux";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => 
    dispatch(logOut());
  

  return (
    <div style={{display:"flex", alignItems:"center", gap:"5px", height:"20px"}}>
    <p>Welcom, {user.name}</p>
    <button type="button" onClick={handleLogOut}>Log out</button>
    </div>
  );
};
