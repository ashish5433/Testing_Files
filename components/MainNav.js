import React from 'react'
import classes from "../styles/MainNav.module.css"
import { Bebas_Neue } from "next/font/google";


const player = Bebas_Neue({
    subsets: ["latin"],
    display: 'swap', 
    adjustFontFallback: false, weight: '400'
  });
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { app } from "../firebase/firebase";
  
const MainNav = (props) => {
    const [userName, setUserName] = useState("");
    const [show, setShow] = useState(false);
    const [isUser, setisUser] = useState(true);
    const [color, setColor] = useState(false);

    const auth = getAuth(app);
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserName(auth.currentUser.displayName);
          setisUser(false);
          setbtnDisable(true);
          console.log(auth.currentUser.displayName);
        } else {
          console.log("User Not Found");
        }
      });
    }, []);

    const sign_Out = () => {
        signOut(auth)
          .then(() => {
            toast.success("Signed Out Successfully ", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            // setisUser(true);
          })
          .catch((error) => {
            toast.error("Some Error Occured ", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          });
      };

  return (
    <>
        <nav>
            <ul>
                <li>KIR.AI</li>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            </ul>
        </nav>
    </>
  )
}

export default MainNav