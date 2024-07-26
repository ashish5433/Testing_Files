
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/firebase/firebase";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [isUser, setisUser] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((curruser) => {
      if (curruser) {
        setUser(curruser);
        setUserName(curruser.displayName);
        setisUser(false);
        // console.log(curruser.displayName);
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const sign_Out = async () => {
    try {
      await auth.signOut();
      setUser(null);
      toast.success("Signed Out Successfully ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setisUser(true);
    //   router.push("/login");
    } catch (error) {
      toast.error("Some Error Occurred ", {
        position: "top-center",
        autoClose: 3000,
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
    <AuthContext.Provider value={{ user, sign_Out, userName, isUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
