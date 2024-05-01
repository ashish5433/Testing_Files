import React from "react";
import styled from "styled-components";
import { useState, useEffect,useContext } from "react";
import Router, { useRouter } from "next/router";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { emailContext } from "@/pages/context/context";
import {
  onAuthStateChanged,
  signInWithPopup,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, provider } from "../firebase/firebase";

const GoogleIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

function SignIn() {
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;
  const [signInEmail, setSignInEmail] = useState(null);
  const [signInPassword, setSignInPassword] = useState(null);
  const [showPassword, setshowPassword] = useState("password");
  const [showPass, setshowPass] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  // const emailbyvoice=useContext(emailContext)
  // console.log(emailbyvoice)
  
  
  const handleShowPassword = () => {
    setshowPass(!showPass);
    showPassword === "password"
      ? setshowPassword("text")
      : setshowPassword("password");
  };

  const checkEmailExistence = async (email) => {
    const apiUrl = `https://api.zerobounce.net/v2/validate?api_key=0aced1a69c004370a71500f384d5d73b&email=${email}&ip_address=`;

    try {
      const response = await axios.get(apiUrl);
      //   console.log(response)

      // console.log(response.data.status)
      // Check if email exists based on ZeroBounce API response
      return response.data.status === "valid";
    } catch (error) {
      console.log("Error checking email existence:", error);
      return false;
    }
  };
  const signInwithgoogle = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user);
      toast.success("Signed In Successfully ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      router.push({
        pathname: "/",
      });
    } catch (e) {
      alert("Some error Occured Please refresh the page and try again");
    }
  };
  const login = async () => {
    if (signInEmail === null || signInPassword === null) {
      toast.error("Please Fill the Form Properly!! ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const emailExists = await checkEmailExistence(signInEmail);
      const checkEmail = await fetchSignInMethodsForEmail(auth, signInEmail);
      if (!emailExists) {
        toast.error("Invalid Email!! ", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (checkEmail.length == 0) {
        toast.error("User doesn't exists Please register!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            signInEmail,
            signInPassword
          );
          if (!auth.currentUser.emailVerified) {
            toast.error("Please Verify your email!! ", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            SignOut();
          } else {
            toast.success("Logged In successfully!! ", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            console.log(user);
            console.log(user.user.auth.displayName);
            router.push({
              pathname: "/",
            });
          }
        } catch (e) {
          toast.error("Invalid Credentials!! ", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(e);
        }
      }
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // setUserName(auth.currentUser.displayName);
        // setisUser(false);
        // setbtnDisable(true);
        console.log(auth.currentUser.displayName);
      } else {
        console.log("User Not Found");
      }
    });
  }, []);

  const forgetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, signInEmail);
      alert("Password reset link has been successfully send to your email");
    } catch (error) {
      // setMessage('Failed to send password reset email. Please try again.');
      alert(error.message);
      console.error("Error sending password reset email:", error.message);
    }
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const chnagepage = async () => {
    if (user) {
      await signOut(auth);
    } else {
      toast.error("User not Found!! ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <>
      {/* <div>
        <Video
          src={videoLoop}
          autoPlay
          muted
          loop
          playsInLine
          controls={false}
          className={classes.videos}
        ></Video>
      </div> */}
      {/* <Image src={leftvideo}/> */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="login_content ">
        <div className="inner_login">
          <h3 className="LoginTitle">Already have an Account</h3>
          {/* <button onClick={chnagepage}>Sign Out</button> */}
          {/* <label>EMAIL</label> */}
          <input
            className="signUpEnterEmail"
            type="email"
            // value={defaultmail}

            placeholder="Enter your Email"
            onChange={(e) => {
              setSignInEmail(e.target.value);
            }}
          />
          {/* <label>PASSWORD</label> */}
          <input
            className="signUpEnterPass"
            type={showPassword}
            placeholder="Enter your Password"
            onChange={(e) => {
              setSignInPassword(e.target.value);
            }}
          />
          
          <div className="button_div">
            <div>
             
              <p onClick={forgetPassword} style={{color:"white"}}>Forgot Password</p>
            </div>
            <button className="signupsubmitbtn" onClick={login}>
              
              Login
            </button>
           
          </div>
        </div>
      </div>
      <p className="or_text">or login with</p>
      <div className="login_icons">
        <button className="signupsubmitbtngoogle" onClick={signInwithgoogle}>
        <FontAwesomeIcon icon={faGoogle} />
        </button>
      </div>
      <div className="logo_name">
        <h1>KIR.AI</h1>
      </div>
    </>
  );
}

export default SignIn;
