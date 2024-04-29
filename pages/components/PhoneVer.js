import React, { useState } from 'react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { app } from '../../firebase/firebase';



const PhoneVer = () => {

    const auth = getAuth(app);
    const onSignInSubmit = async (recaptcha) => {
        console.log("helleeeee")
        
        const res = await signInWithPhoneNumber(auth, num, recaptcha)
        console.log("Hello")
        const otp = prompt("Enter the OTP")
        res.confirm(otp).then((result) => {
            setView("block")
            console.log("Success")
          }).catch((error) => {
            console.log(error)

          });
    }
    const setRec = () => {
        const recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
           
        }, auth);
        onSignInSubmit(recaptchaVerifier)
        // recaptchaVerifier.clear()
    }
        const [num, setNum] = useState("")
        const [view,setView] =useState("none")
        const getOtp = async () => {
           const res = await setRec(num)
           console.log("AWSSS")
        }
        return <>
            <label htmlFor="">Phone Number</label><br />
            <input type="tel"
                onChange={(e) => {
                    setNum(e.target.value)
                }}
            />
            {/* <div id='recaptcha-container'/> */}
            <button id='sign-in-button' onClick={getOtp}>Submit</button>


            <h1 style={{display:{view}}}>Hello World</h1>

        </>
    }

    export default PhoneVer