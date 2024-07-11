import { auth, provider } from "@/firebase/firebase"
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { useEffect, useState } from "react"

const Login = () => {

    const [loginEmail, setloginEmail] = useState("")
    const [loginPassword, setloginPassword] = useState("")
    const [user, setUser] = useState({})
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            // console.log('helll')
            setUser(currentUser)
        })
    }, [])
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
    return (
        <div>                 
        <input
            type="email"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
            placeholder="Email"/>
        <input
                type="password"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
                placeholder="Password"/>
            <button className="signup-btn">SignIn</button>
        </div>
    )
}

export default Login