import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authOperations";

export const LoginForm =()=>{
   
const dispatch = useDispatch();

const handleSubmit = (e)=>{
e.preventDefault()
const form = e.currentTarget;
dispatch(logIn({
    email:form.elements.email.value,
    password:form.elements.password.value,
}))
    }

    return(
<div>
<h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label>email</label><br/>
            <input type="email" name="email"></input><br/>
            <label>password</label><br/>
            <input type="password" name="password"></input><br/>
            <button type="submit">login</button>
        </form>
</div>
    )
}