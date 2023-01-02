import { useSelector } from "react-redux";
import { getAuthIsRefreshing, getAuthUser, getAuthisLoggedIn } from "redux/auth/authSelectors";


export const useAuth = () => {
    return {
        isLoggedIn: useSelector(getAuthisLoggedIn),
        isRefreshing:useSelector(getAuthIsRefreshing),
        user:useSelector(getAuthUser),
    };
};