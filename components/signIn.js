import { useEffect, useState } from "react"
import {  onAuthStateChanged, signInWithPopup } from "firebase/auth"

import { signInWithEmailAndPassword, signOut} from "firebase/auth"
import { auth, provider } from "../firebase/firebase"

const SignIn =()=>{

    const [loginEmail, setloginEmail] = useState("")
    const [loginPassword, setloginPassword] = useState("")
    const [user, setUser] = useState({})
     useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
        // console.log('helll')
        setUser(currentUser)
    })
    },[])

   
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            alert("Successfully Logged in")
            // console.log(auth.currentUser.displayName)
        } catch (e) {
            alert("Invalid Credentials")
            // console.log(e)
        }
    }

    const signOutuser = async () => {
        await signOut(auth)
    }

    const signInwithgoogle = async () => {
        const user = await signInWithPopup(auth, provider)
        // console.log(user)
    }
    // console.log("hello")
    return <>
                <h4>{user?.email}</h4>

        <div style={{ marginLeft: "40%", marginTop: "20px" }}>
            <h3>Login User</h3>
            <label htmlFor="">Enter Email :</label>
            <input type="email" placeholder=" Enter Email.." onChange={(e) => { setloginEmail(e.target.value) }} /><br />
            <label htmlFor="">Enter password :</label>
            <input type="password" placeholder=" Enter password" onChange={(e) => { setloginPassword(e.target.value) }} />
            <br />
             <button className="signup-btn" onClick={login}>SignIn</button>
            <button className="signup-btn" onClick={signOutuser}>SignOut</button>
            <br />
             <button onClick={signInwithgoogle}>SignInWithGoogle</button> 
        </div>
    </>
}


export default SignIn