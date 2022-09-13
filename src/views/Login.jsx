import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { login } from "../features/userSlice"
import { GoogleSingIn } from "../firebase/firebase"
import "./Login.css"

export const Login = () => {
    const dispatch = useDispatch()

    const onLogin = async() => {
        const { user } = await GoogleSingIn()


        console.log(user)

        if( user ) dispatch(login({
            email: user.user.email,
            displayName: user.user.displayName,
            photoUrl: user.user.photoURL
        }))
    }


  return (
    <div className="login">

        <div className="login_container">
            <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="gmail logo"/>

            <Button onClick={ onLogin } variant="contained" sx={{mt:3}}> Login </Button>

            
        </div>

    </div>
  )
}
