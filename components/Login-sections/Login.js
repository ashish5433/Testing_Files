import { auth, provider } from "@/firebase/firebase"
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { Bebas_Neue, Unica_One } from "next/font/google";

const player = Bebas_Neue({
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false, weight: '400'
});

const unica = Unica_One({
    subsets: ["latin"],
    display: 'swap', 
    adjustFontFallback: false, weight: '400'
  });


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
        <>
        <div className={`${unica.className}  flex flex-wrap w-full px-[10%] gap-[2vh] justify-center`} >
            <input
                type="email"
                className="max-md:text-[1vh] text-[3vh]  bg-black/40 placeholder-[#4dffb5]/40 text-[#4dffb5]/80 border-2 border-[#4dffb5]/40 focus:!border-[#4dffb5]/80 p-2  focus:bg-black/60 focus:outline-none transition ease-in-out duration-150 w-full"
                placeholder="Email" onChange={(e) => { setloginEmail(e.target.value) }} />
            <input
                type="password"
                className="max-md:text-[1vh] text-[3vh]  bg-black/40 placeholder-[#4dffb5]/40 text-[#4dffb5]/80 border-2 border-[#4dffb5]/40 focus:!border-[#4dffb5]/80 p-2  focus:bg-black/60 focus:outline-none transition ease-in-out duration-150 w-full"
                placeholder="Password" onChange={(e) => { setloginPassword(e.target.value) }} />
            <button type="submit"
                className={`${player.className} w-full max-md:text-[2vh] text-[3vh] text-black border-2 border-[#4dffb5]/40  bg-[#4dffb5]/80 py-1 px-3 hover:!text-[#4dffb5]/80 hover:bg-transparent transition ease-in-out duration-150`} onClick={login}>Login</button>
            <button type="submit"
                className={`${player.className} w-full max-md:text-[2vh] text-[3vh] text-black border-2 border-[#4dffb5]/40  bg-[#4dffb5]/80 py-1 px-3 hover:!text-[#4dffb5]/80 hover:bg-transparent transition ease-in-out duration-150`} onClick={signInwithgoogle}>Google Login</button>
        </div>
        </>

    )
}

export default Login