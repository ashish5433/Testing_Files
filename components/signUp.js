import { createUserWithEmailAndPassword } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth, provider } from "../firebase/firebase"

export default function SignInAndSignUp() {
    const [registerEmail, setregisterEmail] = useState("")
    const [registerPassword, setregisterPassword] = useState("")

   
    const Register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            alert("Success")
            // console.log(user)
        } catch (e) {
            // console.log(e)
        }
    }
    

   

    return <>
        <div style={{ marginLeft: "40%", marginTop: "20px" }}>

            <h3>Register User</h3>
            <label htmlFor="">Enter Email :</label>
            <input type="email" placeholder=" Enter Email.." onChange={(e) => { setregisterEmail(e.target.value) }} /><br />
            <label htmlFor="">Enter password :</label>
            <input type="password" placeholder=" Enter password" onChange={(e) => { setregisterPassword(e.target.value) }} />
            <br />

            <button className="signup-btn" onClick={Register}>SignUp</button>
        </div>
       

        
    </>
}