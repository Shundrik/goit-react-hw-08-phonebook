import { register } from "redux/auth/authOperations";
import { useDispatch } from "react-redux";

export const RegistrForm =()=>{

const dispatch = useDispatch();

const handleSubmit = (e)=>{
e.preventDefault();
const form = e.currentTarget;

dispatch(register({
  name:form.elements.name.value,
  email:form.elements.email.value,
  password:form.elements.password.value,
})
)
form.reset()
  };

    return(
<div>
<h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <label>User name</label><br/>
            <input type="username" name="name"></input><br/>
          
            <label>Email</label><br/>
            <input type="email" name="email"></input><br/>

            <label>Password</label><br/>
            <input type="password" name="password"></input><br/>

            <button type="submit">Register</button>
        </form>
</div>
    )

}