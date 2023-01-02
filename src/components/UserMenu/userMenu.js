import { useAuth } from "hooks/hooks";
import { logOut } from "redux/auth/authOperations";
import { useDispatch } from "react-redux";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
    <p>Welcom, {user}</p>
    <button type="button" onClick={()=>dispatch(logOut())}>Loguut</button>
    </div>
  );
};
