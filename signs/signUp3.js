import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  
  getAuth,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import Toast from "@/components/Toast";

/////////////////////////// Email Verification...........///////////////////////////////

const checkEmailExistence = async (email) => {
  const apiUrl = `https://api.zerobounce.net/v2/validate?api_key=0aced1a69c004370a71500f384d5d73b&email=${email}&ip_address=`;

  try {
    const response = await axios.get(apiUrl);
    //   console.log(response)

    // console.log(response.data.status)
    // Check if email exists based on ZeroBounce API response
    return response.data.status === "valid";
  } catch (error) {
    // console.log("Error checking email existence:", error);
    return false;
  }
};

const GoogleIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

const SignUp = () => {
  const [showPass, setshowPass] = useState(false);
  const [showPassword, setshowPassword] = useState("password");
  const [isChecked2, setIsChecked2] = useState(false);
 
  const [registerEmail, setregisterEmail] = useState("");
  const [registerName, setregisterName] = useState("");
  const [registerPassword, setregisterPassword] = useState("");
  const [registercnfrmPassword, setregistercnfrmPassword] = useState("");

  

  // Register User with Email And Password.............

  const auth = getAuth();

  const Register = async () => {
    const emailExists = await checkEmailExistence(registerEmail);
    // console.log(emailExists)
    
    if (
      registerEmail === "" ||
      registerPassword === "" ||
      registercnfrmPassword === "" ||
      registerName === ""
    ) {
      toast.error('Please Fill the Form Properly!! ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    }else if(!emailExists) {
      toast.error("Email doesn't exist!!", {
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
    else if (registerPassword !== registercnfrmPassword) {
     {
      toast.error("Password didn't matched!! ", {
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
    } else if (isChecked2 === false) {
     {
      toast.error('Please accept terms and conditons!! ', {
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
    } else {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        {
          toast.success('Registered Successfully and Email verification Sent!! ', {
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
        sendEmailVerification(auth.currentUser).then(() => {
          // console.log("Email Sent");
        });
        updateProfile(auth.currentUser, {
          displayName: registerName,
        })
          .then(() => {
            console.log("Profile Updated");
          })
          .catch((error) => {
            console.log(error);
          });
        // console.log(user);
      } catch (e) {
        // console.log(e);
        alert(e);
      }
    }
  };
  
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  

  const handleShowPassword = () => {
    setshowPass(!showPass);
    showPassword === "password"
      ? setshowPassword("text")
      : setshowPassword("password");
  };

  const handlecnfrmPassword = (e) => {
    setregistercnfrmPassword(e.target.value);
  };

  return (
    <>
      <Toast/>
      <div className="secondsignupcont">
        <h2 className="explorer_title">Create an Explorer Account</h2>
        <div className="name_n_loc">
          <div>
            {/* <label>Your Name</label> */}
            <input
              className="signUpEnterFields"
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => {
                setregisterName(e.target.value);
              }}
            />
          </div>
          <div>
            {/* <label>Location</label> */}
            <input
              className="signUpEnterFields"
              type="text"
              placeholder="Enter your Location"
            />
          </div>
        </div>
        <div className="email_n_code">
          <div>
            {/* <label>Your Email</label> */}
            <input
              color="white"
              className="signUpEnterFields"
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => {
                setregisterEmail(e.target.value);
              }}
            />
          </div>
          <div>
            {/* <label>Confirm Your Email</label> */}
            <input
              className="signUpEnterFields"
              type="text"
              placeholder="Confirm Your Email"
            />
          </div>
        </div>
        <div className="password_n_conf">
          <div>
            {/* <label>Enter Password</label> */}
            <input
              className="signUpEnterPass"
              type={showPassword}
              placeholder="Enter your Password"
              onChange={(e) => {
                setregisterPassword(e.target.value);
              }}
            />
           
          </div>
          <div>
            {/* <label>Confirm Password</label> */}
            <input
              className="signUpEnterEmail"
              type="password"
              onChange={(e) => {
                handlecnfrmPassword(e);
              }}
              placeholder="Confirm your Password"
            />
          </div>
        </div>
        <div className="mobile_num">
          <div>
            {/* <label>Mobile Number</label> */}
            <input
              className="signUpEnterEmail"
              type="number"
              placeholder="XXX-XXX-XXX"
            />
          </div>
        </div>
        <div className="terms_n_conditions">
          
          <label>
            <input
              type="checkbox"
              checked={isChecked2}
              onChange={handleCheckboxChange2}
            />
            <span className="signupTerms"> Agree to Terms and Conditions</span>
          </label>
         
         
        </div>
              <div className="sign_up_btn">
              <button className="signupsubmitbtn2" onClick={Register}>
              Sign Up
              </button>
              </div>
      </div>
    </>
  );
};

export default SignUp;
