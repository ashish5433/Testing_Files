import cls from "../styles/SellerLogin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import classes from "../styles/Login.module.css";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
const cookie = new Cookies();
const Seller = () => {
    const router = useRouter();

    const [showPass, setshowPass] = useState(false);
    const [passWord, setpassWord] = useState("password");
    const [phoneNumber, setphoneNumber] = useState(0);
    const [verification, setVerification] = useState("Verify");
    const [verificationEmail, setVerificationEmail] = useState("Verify");
    const [ver_color, setver_color] = useState("red");
    const [ver_colorEmail, setver_colorEmail] = useState("red");
    const [ver_dis, setver_dis] = useState("none");
    const [ver_disEmail, setver_disEmail] = useState("none");
    const [email, setEmail] = useState("");
    const [isEmail, setisEmail] = useState(false);
    const [isNumber, setisNumber] = useState(false);
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [cnfrmpass, setcnfrmPass] = useState("");

    const [check, setcheck] = useState(false);


    const [legalName, setLegalName] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");
    const [businessCategory, setBusinessCategory] = useState("");
    const [CIFnumber, setCIFnumber] = useState("");
    const [TAInumber, setTAInumber] = useState("");


    const printval = () => {
        // console.log(legalName, businessAddress, businessCategory, CIFnumber, TAInumber);
    }

    const passwordShow = () => {
        setshowPass(!showPass);
        passWord === "password" ? setpassWord("text") : setpassWord("password");
    };

    const verifyNum = async () => {
        // console.log(phoneNumber)
        if (phoneNumber == 0) alert("Please enter number");
        else {
            var detail = [];
            try {
                detail = await axios.get(
                    `https://phonevalidation.abstractapi.com/v1/?api_key=6c45f511cc0a4813af9190c58f88426a&phone=${phoneNumber}`
                );
            } catch (e) {
                alert("Error Occured");
            }
            // console.log(detail.data);
            if (detail.data.valid === true) {
                setVerification("Verified");
                setver_color("green");
                setver_dis("block");
                setisNumber(true);
            } else {
                alert("Invalid Number");
            }
        }
    };

    const verifyEmail = async () => {
        if (email === null) alert("Please Enter Email");
        else {
            const apiUrl = `https://api.zerobounce.net/v2/validate?api_key=0aced1a69c004370a71500f384d5d73b&email=${email}&ip_address=`;
            var data = [];
            try {
                data = await axios.get(apiUrl);
            } catch (e) {
                alert("Error Occured");
            }
            if (data.data.status === "valid") {
                setver_colorEmail("green");
                setver_disEmail("block");
                setVerificationEmail("Verified");
                setisEmail(true);
            } else {
                alert("Invalid Email");
            }
        }
    };

    const handlesubmit = () => {
        if (
            phoneNumber.length < 4 ||
            name.length < 4 ||
            email.length == 0 ||
            pass.length == 0 ||
            cnfrmpass.length == 0 ||
            check === false
        ) {
            alert("Fill the form properly");
        } else if (isEmail === false) alert("Email Not Verifired");
        else if (isNumber === false) alert("Number is not verified");
        else if (pass != cnfrmpass) alert("Password doesn't match");
        else {
            toast.success(' SuccessFull! ', {
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

    const [changeTranslate, setChangeTranslate] = useState(false)

    const nextpage = () => {
        if (changeTranslate === false)
            setChangeTranslate(true)
        else
            setChangeTranslate(false)
    }


    return (
        <div >
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
            <div className={`flex flex-col justify-center ${cls.main_div}`}>
                <div className="bg-loginbg flex flex-row logincoverbox w-[100vw]">
                    <div className={`${cls.center_div} ${changeTranslate ? "translate-x-[-100vw] transition duration-500 delay-100" : " duration-500 transition delay-100"}`}>
                        <h1>Create Your Account And Start Selling</h1>
                        <div className={cls.content_div}>
                            <p>Get Connected to Affluent Client across the World</p>
                            <h4>Fast Secured And Verified.</h4>
                            <button className={cls.login_btn}>Login</button>
                        </div>

                        <div className={cls.main_form_div}>
                            <div className={cls.form_left_div}>
                                <div>
                                    <label>Mobile Number</label>

                                    <PhoneInput
                                        // className={cls.phone_inp}
                                        copyNumbersOnly={false}
                                        className={cls.phone_inp}
                                        inputStyle={{ border: "0", outline: "none" }}
                                        buttonStyle={{
                                            border: "0",
                                            backgroundColor: "white",
                                        }}
                                        dropdownStyle={{
                                            border: "2px solid rgb(93, 23, 235)",

                                            borderRadius: "2rem",
                                        }}
                                        containerStyle={{
                                            width: "80%",
                                            border: "2px solid rgb(93, 23, 235)",
                                            padding: "5px 10px",
                                            borderRadius: "2rem",
                                        }}
                                        placeholder="XXX-XXXX-XXXX"
                                        value={phoneNumber}
                                        country={"in"}
                                        enableSearch={true}
                                        required={true}
                                        autoFocus={true}
                                        onChange={(e) => {
                                            setphoneNumber(e);
                                            setVerification("Verify");
                                            setver_color("red");
                                            setver_dis("block");
                                            setisNumber(false);
                                        }}
                                    />
                                    <button
                                        className={cls.verify_btn}
                                        style={{ color: ver_color, display: ver_dis }}
                                        onClick={verifyNum}
                                    >
                                        {verification}
                                    </button>
                                </div>
                                <div>
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Name"
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div>
                                    <label>Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your Name"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setver_disEmail("block");
                                            setver_colorEmail("red");
                                            setVerificationEmail("Verify");
                                            setisEmail(true);
                                        }}
                                    />{" "}
                                    <button
                                        className={cls.verifyemail_btn}
                                        style={{ color: ver_colorEmail, display: ver_disEmail }}
                                        onClick={verifyEmail}
                                    >
                                        {verificationEmail}
                                    </button>
                                </div>
                                <div>
                                    <label>Your Category</label>
                                    <select name="Category">
                                        <option value="Owner">Owner</option>
                                        <option value="Manufature/Builder">
                                            Manufature/Builder
                                        </option>
                                        <option value="Dealer">Dealer</option>
                                        <option value="Retailer">Retailer</option>
                                        <option value="Broker">Broker</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Create Your Password</label>

                                    <input
                                        type={passWord}
                                        placeholder="Enter your Password"
                                        onChange={(e) => {
                                            setPass(e.target.value);
                                        }}
                                    />
                                    <button className="" onClick={passwordShow}>
                                        <FontAwesomeIcon
                                            icon={showPass ? faEye : faEyeSlash}
                                            className={cls.icon}
                                        />
                                    </button>
                                </div>
                                <div>
                                    <label>Confirm Your Password</label>
                                    <input
                                        type="password"
                                        placeholder="Confirm your Password"
                                        onChange={(e) => {
                                            setcnfrmPass(e.target.value);
                                        }}
                                    />
                                </div>
                                <label>
                                    <input
                                        type="checkbox"
                                        onClick={() => {
                                            setcheck(!check);
                                        }}
                                    />
                                    <span className="signupTerms">
                                        {" "}
                                        Agree to Terms and Conditions
                                    </span>
                                </label>
                            </div>
                            <div className={cls.form_right_div}>
                                <div className={cls.right_div_content}>
                                    <h2>I am here to </h2>
                                    <input type="text" />
                                </div>
                                <div className={cls.right_form_div}>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Yacths and Boats
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> House Villas and
                                            Castle
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Luxury Cars
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Private Islands
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Private Jets
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Apartments
                                            <span></span>
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Private
                                            Helicopters
                                        </label>
                                    </div
                                    >
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Beachside
                                            Properties
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Private
                                            Submarines
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Exotic Hotels
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Jet Ski
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Castle ,Fortress
                                            and Chateau
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Jet Pack
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Luxury Motorcycle
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Industrial and
                                            Commercial Land
                                        </label>
                                    </div>
                                    <div className={cls.rad_btn}>
                                        <label>
                                            <input type="radio" name="category" /> Other
                                        </label>
                                    </div>
                                </div>

                                <div className={cls.btn_div}>
                                    <button className={cls.sub_btn} onClick={() => {
                                        handlesubmit(); nextpage();
                                    }}>
                                        <span className="material-symbols-outlined md-48">
                                            arrow_right_alt
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={` flex justify-center explorer ${changeTranslate ? "translate-x-[-93vw] duration-500 transition delay-100" : "transition duration-500 delay-100"}`}>
                        <div className="mt-56 bg-neutral-200 w-[60%] h-4/6 p-10 rounded-xl m-14 flex flex-col">
                            <div className=" flex flex-col">
                                <span className="font-semibold text-3xl mb-1 ">
                                    Create your account and Start Selling
                                </span>
                                <span>
                                    Get Connected to Affluent Clients across the world.{" "}
                                    <span className="text-orange-500 font-bold">
                                        Fast Secure and Verified
                                    </span>
                                </span>
                            </div>
                            <div className="flex w-full flex-row mt-5">
                                <div className="flex flex-col w-[50%] ml-10">
                                    <div className="flex flex-col -mt-3">
                                        <label className="pl-2 mb-1 font-semibold">
                                            Legal Name of Business
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Raunak Biswas"
                                            onChange={(e) => {
                                                setLegalName(e.target.value);
                                            }}
                                            className="w-3/6 h-10 p-2 rounded-full border-2 border-violet-600"
                                        ></input>
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <label className="pl-2 mb-1 font-semibold">
                                            Business Address
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="UAE, Dubai"
                                            onChange={(e) => {
                                                setBusinessAddress(e.target.value);
                                            }}
                                            className="w-3/6 h-10 p-2 rounded-full border-2 border-violet-600"
                                        ></input>
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <label className="pl-2 mb-1 font-semibold">
                                            Business Category
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Dealer"
                                            onChange={(e) => {
                                                setBusinessCategory(e.target.value);
                                            }}
                                            className="w-3/6 h-10 p-2 rounded-full border-2 border-violet-600"
                                        ></input>
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <label className="pl-2 mb-1 font-semibold">
                                            Company Identification Number
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="xxxx-xxxx-xxxx-xxxx"
                                            onChange={(e) => {
                                                setCIFnumber(e.target.value);
                                            }}
                                            className="w-3/6 h-10 p-2 rounded-full border-2 border-violet-600"
                                        ></input>
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <label className="pl-2 mb-1 font-semibold">
                                            Tax Identification Number
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="xxx-xxx-xxxx"
                                            onChange={(e) => {
                                                setTAInumber(e.target.value);
                                            }}
                                            className="w-3/6 h-10 p-2 rounded-full border-2 border-violet-600"
                                        ></input>
                                    </div>
                                    <button onClick={nextpage} className="w-24 mt-10 h-12 rounded-full bg-orange-500 text-neutral-100 font-bold text-lg">
                                        Prev
                                    </button>
                                </div>
                                <div className="flex flex-col -mt-5">
                                    <div>
                                        <h4 className="font -bold text-neutral-700">
                                            What you get
                                        </h4>
                                    </div>
                                    <div>
                                        <ul className="-ml-14">
                                            <li className="flex ">
                                                <span className="material-symbols-outlined p-1 text-neutral-400">
                                                    album
                                                </span>
                                                <span className="text-lg ">
                                                    Recieve Quick Enquiries
                                                </span>
                                            </li>

                                            <li className="flex ">
                                                <span className="material-symbols-outlined p-1 text-neutral-400">
                                                    album
                                                </span>
                                                <span className="text-lg ">
                                                    Sell any Products and Services in seconds
                                                </span>
                                            </li>

                                            <li className="flex ">
                                                <span className="material-symbols-outlined p-1 text-neutral-400">
                                                    album
                                                </span>
                                                <span className="text-lg ">
                                                    Repair and Maintenance
                                                </span>
                                            </li>

                                            <li className="flex ">
                                                <span className="material-symbols-outlined p-1 text-neutral-400">
                                                    album
                                                </span>
                                                <span className="text-lg ">
                                                    Connect and Collaborate with Businesses
                                                </span>
                                            </li>

                                            <li className="flex ">
                                                <span className="material-symbols-outlined p-1 text-neutral-400">
                                                    album
                                                </span>
                                                <span className="text-lg ">
                                                    Unlimited Categories
                                                </span>
                                            </li>

                                            <li className="flex ">
                                                <span className="material-symbols-outlined p-1 text-neutral-400">
                                                    album
                                                </span>
                                                <span className="text-lg ">Worldwide Listing</span>
                                            </li>

                                            <li className="flex ">
                                                <span className="material-symbols-outlined p-1 text-neutral-400">
                                                    album
                                                </span>
                                                <span className="text-lg ">
                                                    Raise a Request and Hire a Professional
                                                </span>
                                            </li>

                                            <li className="flex ">
                                                <span className="material-symbols-outlined p-1 text-neutral-400">
                                                    album
                                                </span>
                                                <span className="text-lg ">
                                                    Earn from Shaukeens
                                                </span>
                                            </li>
                                        </ul>
                                        <button onClick={printval} className="w-96 h-12 rounded-full bg-orange-500 text-neutral-100 font-bold text-lg">
                                            Submit Request
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={cls.footer_assistance}>
            <div className={classes.assistance_btn}>
                <Image
                    className={`${classes.assist_icon}`}
                    src="/profile.png"
                    width={50}
                    height={50}
                />
                <p>Seek Assistance For Account Creation</p>
            </div>
            </div> */}
                </div>
            </div>
        </div>
    );
};

export default Seller;
