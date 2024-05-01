import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Bebas_Neue } from "next/font/google";
import Dropdown from "react-bootstrap/Dropdown";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import classes from "./../../styles/responsive.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav_li_items from "../../Check/nav_li_items";
import Sidenav from "./sidenav";
import { app } from "../../firebase/firebase";
import Link from "next/link";
import Dashboard from "./Dashboard/Dashboard";
import { emailContext } from "../context/context";
const player = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

function Navbar1(props) {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);
  const [isUser, setisUser] = useState(true);
  const [btnDisable, setbtnDisable] = useState(false);
  const [color, setColor] = useState(false);
  // const data=useContext(emailContext)
  // const li_default = [[[]]];

  const [default_item, setdefaultItem] = useState("");

  // const li1_items = [
  //   [
  //     ["Popular Builders"],
  //     [
  //       "Sunseeker",
  //       "Azimut",
  //       "Riva",
  //       "Benetti",
  //       "Custom",
  //       "Cranchi",
  //       "Beneteau",
  //       "Ferretti",
  //     ],
  //     [
  //       "Sea Ray",
  //       "Sunreef",
  //       "Chris Craft",
  //       "Heesen",
  //       "Pershing",
  //       "Hatteras",
  //       "Princess",
  //       "Viking",
  //     ],
  //   ],
  // ];
  // const li2_items = [
  //   [
  //     ["Top Countries"],
  //     [
  //       "United States",
  //       "Spain",
  //       "Italy",
  //       "France",
  //       "Portugal",
  //       "Canada",
  //       "United Kingdom",
  //       "Greece",
  //     ],
  //     [
  //       "Switzerland",
  //       "United Arab Emirates",
  //       "Mexico",
  //       "South Africa",
  //       "Australia",
  //       "Germany",
  //       "Netherlands",
  //       "Japan",
  //     ],
  //   ],

  //   [
  //     ["Top Cities"],
  //     [
  //       "Los Angeles",
  //       "Marbella",
  //       "London",
  //       "New York",
  //       "Paris",
  //       "Miami",
  //       "Ibiza",
  //       "Beverly Hills",
  //     ],
  //     [
  //       "Cannes",
  //       "Mallorca",
  //       "Madrid",
  //       "Lisbon",
  //       "Rome",
  //       "Milan",
  //       "Nice",
  //       "Toronto",
  //     ],
  //   ],

  //   [
  //     ["Top Regions"],
  //     [
  //       "French Riviera",
  //       "Costa del Sol",
  //       "French and Swiss Alps",
  //       "Costa Blanca",
  //       "California, USA",
  //       "Hamptons, NY, USA",
  //       "Florida, USA",
  //       "Tuscany",
  //     ],
  //     [
  //       "Algarve",
  //       "Greek Islands",
  //       "Balearic Islands",
  //       "Caribbean",
  //       "Dubai",
  //       "Amalfi Coast",
  //       "Lombardy",
  //       "Costa Brava",
  //     ],
  //   ],
  // ];
  // const li6_items = [
  //   [
  //     ["Popular Makes"],
  //     [
  //       "Bugatti",
  //       "Pagani",
  //       "Koenigsegg",
  //       "Ferrari",
  //       "Lamborghini",
  //       "Mercedes",
  //       "Rolls-Royce",
  //       "McLaren",
  //     ],
  //     [
  //       "Brabus",
  //       "Porsche",
  //       "Aston Martin",
  //       "Bentley",
  //       "Maybach",
  //       "BMW",
  //       "Ford",
  //       "Audi",
  //     ],
  //   ],
  //   [
  //     ["Popular Models"],
  //     [
  //       "Ferrari LaFerrari",
  //       "Bugatti Chiron",
  //       "Ferrari F40",
  //       "Lamborghini Aventador",
  //       "McLaren P1",
  //       "Porsche 918",
  //       "Ford GT",
  //       "Mercedes SLR McLaren",
  //     ],
  //     [
  //       "Pagani Huayra",
  //       "Porsche Carrera GT",
  //       "Lamborghini Urus",
  //       "Lamborghini Murcielago",
  //       "Ferrari Enzo",
  //       "Lexus LFA",
  //       "Brabus G-Class",
  //       "Rolls-Royce Cullinan",
  //     ],
  //   ],
  // ];
  // const li4_items = [
  //   [
  //     ["Popular Manufacturer"],
  //     [
  //       "Embraer",
  //       "Dassault",
  //       "Gulfstream",
  //       "Bombardier",
  //       "Cessna",
  //       "Boeing",
  //       "Pilatus",
  //     ],
  //   ],
  // ];
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
 
  
  // const [li_content, set_li_content] = useState(li_default);

  const [nav2, setNav2] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
    if (window.scrollY >= 400) {
      setNav2(false);
      setSearchbar(false);
    } else {
      setNav2(true);
      setSearchbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChange);
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();

  const signInClick = () => {
    router.push("/login");
  };
  const dashboardClick = () => {
    router.push("/components/Dashboard/Dashboard");
  };

  const Explorer_account = () => {
    router.push("/components/Explorer");
  };
  const ShowDetails =()=>{
    props.setToshow(true)
  }
  const HideDetails =()=>{
    props.setToshow(false)
  }
  return (
    <>
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
      {["lg"].map((expand) => (
        <div>
          <Navbar
            key={expand}
            expand={expand}
            className={color ? "mb-3 navbar nav-bg" : "mb-3 navbar nav"}
          >
            <Container fluid>
              <div className="left-nav">
                <Button
                  variant="primary"
                  onClick={handleShow}
                  className="me-2 nav-btn"
                >
                  <svg
                    className="-ml-0 scale-125 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </Button>
                <h1
                  style={{ fontSize: "1.5rem", fontWeight: "bold", letterSpacing:"2px"}}
                  className={player.className}
                >
                  KIR.AI
                </h1>
                {/* <h3>{data.emailbyvoice}</h3> */}
              </div>

              <div
                className={
                  searchbar ? "hidden fadeout" : "flex justify-end fadein"
                }
              >
                <div className={`${classes.smallnav} carousel-search`}>
                  <input
                    style={{ maxWidth: "500px", minWidth: "400px" }}
                    type="text"
                    className={player.className}
                  />
                  <button type="submit">
                    <span
                      style={{
                        padding: "9px",
                        position: "relative",
                        marginLeft: "-60px",
                      }}
                      className="material-symbols-outlined "
                    >
                      search
                    </span>
                  </button>
                </div>
              </div>
              <div className={`${classes.small} all-nav-btns`}>
                <Button className="me-2 nav-btn">
                  <span onClick={Explorer_account} className="nav-btns">
                    Just For You
                  </span>
                </Button>
                <Button className="me-2 nav-btn">
                  <span className="nav-btns" onClick={
                    ()=>{
                      {data.setEmailbyvoice("Asyush")}
                    }
                  } >List With Us</span>
                </Button>
                <Button
                  className="me-2 nav-btn login-name-button"
                  // disabled={btnDisable}
                >
                  {isUser ? (
                    <span
                      id="signin"
                      onClick={() => {
                        router.push("/login");
                      }}
                    >
                      Login
                    </span>
                  ) : (
                    <span>
                      <Dropdown className="mt-3.5">
                        <Dropdown.Toggle
                          variant="transparent"
                          id="dropdown-basic"
                        >
                          <p className="inline-flex  text-neutral-50">
                            <span className="material-symbols-outlined py-3">
                              person
                            </span>
                            <span className="py-3">{userName}</span>
                          </p>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="hover:bg-slate-100">
                          <Dropdown.Item
                            className="focus:bg-slate-100"
                            href="#/action-1"
                            onMouseEnter={ShowDetails}
                            onMouseLeave={HideDetails}
                          >
                            Account Details
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="focus:bg-slate-100"
                            //href="#/action-2"
                            onClick={sign_Out}
                           

                          >
                            Sign Out
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </span>
                  )}
                </Button>
              </div>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                  <Offcanvas.Title className={player.className}>
                    KIR.AI
                  </Offcanvas.Title>
                  <Button
                    variant="primary"
                    onClick={handleClose}
                    className="me-2 nav-close-btn"
                  >
                    <span class="material-symbols-outlined">close</span>
                  </Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <hr />
                  <div className="btn-div">
                    <div>
                      <span class="material-symbols-outlined">
                        account_circle
                      </span>
                      {isUser ? (
                        <Button
                         onClick={signInClick}
                         
                         >
                          Sign in / Register
                        </Button>
                      ) : (
                        <p style={{ marginLeft: "3rem", marginTop: "-37px" }}>
                          {userName}
                        </p>
                      )}
                    </div>
                    <div>
                      <span class="material-symbols-outlined">recommend</span>
                      <Button>About us</Button>
                    </div>
                    <div>
                      <span class="material-symbols-outlined">fact_check</span>
                      <Button>Best Sellers</Button>
                    </div>
                  </div>
                  <hr />
                  <div className="btn-div">
                    {/* <div>
                      <span class="material-symbols-outlined">
                        directions_boat
                      </span>
                      <Button>Yachts</Button>
                    </div> */}
                    
                    {/* <div>
                      <span class="material-symbols-outlined">helicopter</span>
                      <Button>Helicopters</Button>
                    </div>
                    <div>
                      <span class="material-symbols-outlined">
                        flight_takeoff
                      </span>
                      <Button>Jets</Button>
                    </div>*/}
                    <div> 
                      <span class="material-symbols-outlined">two_wheeler</span>
                      <Button>Bikes</Button>
                    </div>
                    <div>
                      <span class="material-symbols-outlined">
                        directions_car
                      </span>
                      <Button>Cars</Button>
                    </div>
                    <div>
                      <span class="material-symbols-outlined">Home</span>
                      <Button>Home</Button>
                    </div>
                    <div>
                      <span class="material-symbols-outlined">home_iot_device</span>
                      <Button>Home Appliances</Button>
                    </div>
                    <div>
                      <span class="material-symbols-outlined">villa</span>
                      <Button>Real Estates</Button>
                    </div>
                  </div>
                  <hr />
                  <div className="btn-div-2">
                    <Button onClick={dashboardClick}>Dashboard</Button>
                    <Button>List With Us</Button>
                    <Button>Help & FAQ</Button>
                    <Button>About</Button>
                    <Button>Contact</Button>
                  </div>
                  <hr />
                </Offcanvas.Body>
              </Offcanvas>
            </Container>
          </Navbar>
          <div className={nav2 ? "hidden" : "absolute w-full"}>
            <div className={color ? "second_nav" : "second_nav2"}></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Navbar1;