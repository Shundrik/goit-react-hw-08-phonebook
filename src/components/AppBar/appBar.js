import { AuthNav } from "components/AuthNav/authNav"
import { Navigation } from "components/UserMenu/Navigation/navigation"
import { UserMenu } from "components/UserMenu/userMenu"
// import { Outlet } from "react-router-dom"

export const AppBar = ()=>{
    return(
        <header style={{display:"flex",justifyContent:"space-around",borderBottom: "1px solid gold",
        paddingBottom: "10px"}}>  
        
    <Navigation></Navigation> 
       {!true ? <UserMenu/> : <AuthNav/>}
            
        </header>
    )
}
