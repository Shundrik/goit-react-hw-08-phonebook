export const RegistrForm =()=>{


// handleChange=(e)=>{

// }

// handleSubmit = (e)=>{
// e.preventDefault()

//     }

    return(
<div>
<h2>Register</h2>
        <form>
            <label>User name</label>
            <input type="username" ></input>
          
            <label>Email</label>
            <input type="email" ></input>

            <label>Password</label>
            <input type="password" ></input>

            <button type="submit">Register</button>
        </form>
</div>
    )

}