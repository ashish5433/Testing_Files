import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import Nav_li_items from "../Check/nav_li_items";
import Link from "next/link";

const play = Bebas_Neue({
  subsets: ["latin"],
  display: 'swap', 
  adjustFontFallback: false, weight: '400'
});

function Navbar2() {
  const [show, setShow] = useState(false);

  const [color, setColor] = useState(false);

  const li_default = [[[]]];
  // const [searchbar, setSearchbar] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChange);
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();

  const signInClick = ()=>{
    router.push('/components/signIn')
  }
  return (
    <>
      {["lg"].map((expand) => (
        <div>
          <Navbar
            key={expand}
            expand={expand}
            className={color ? "navbar nav-bg" : "navbar nav"}
          >
            <script></script>
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
                    //class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </Button>
                <Link href="/">
                <h1
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  className={play.className}
                  >
                  KIR.AI
                </h1>
                  </Link>
              </div>

              <div
                className="flex justify-center items-center"
              >
                <div className="carousel-search">
                  <input
                    style={{ maxWidth: "600px", minWidth: "450px", fontSize:"11px", padding:"10px", paddingLeft:"20px", textAlign:"left",marginLeft:"250px"}}
                    type="text"
                    className={play.className}
                    placeholder="Search Products..."
                  />
                  <button type="submit">
                    <span
                      style={{
                        padding: "10px",
                        paddingLeft:"14px",
                        paddingRight:"14px",
                        position: "relative",
                        marginLeft: "-70px",
                        backgroundColor:"white",
                        color:"black",
                        borderRadius:"40px",
                        fontSize:"12px"
                      }}
                      className={play.className}
                    >
                      Search
                    </span>
                  </button>
                </div>
              </div>
              <div className="all-nav-btns">
              <Button className="me-2 nav-btn">
                  <span className="nav-btns">For Sale</span>
                </Button>
                <Button className="me-2 nav-btn">
                  <span className="nav-btns">Join Clubs</span>
                </Button>
                <Button className="me-2 nav-btn sign-in-btn">
                List With Us
                </Button>
              </div>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                  <Offcanvas.Title className={play.className}>
                    KIRA.AI
                  </Offcanvas.Title>
                  <Button
                    variant="primary"
                    onClick={handleClose}
                    className="me-2 nav-close-btn"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <hr />
                  <div className="btn-div">
                    <div>
                      <span className="material-symbols-outlined">
                        account_circle
                      </span>
                      
                        <Button onClick={signInClick}>
                          Sign in / Register
                        </Button>
                      
                    </div>
                    <div>
                      <span className="material-symbols-outlined">recommend</span>
                      <Button>About us</Button>
                    </div>
                    <div>
                      <span className="material-symbols-outlined">fact_check</span>
                      <Button>Best Sellers</Button>
                    </div>
                  </div>
                  <hr />
                  <div className="btn-div">
                    {/* <div>
                      <span className="material-symbols-outlined">
                        directions_boat
                      </span>
                      <Button>Yachts</Button>
                    </div> */}
                    
                    {/* <div>
                      <span className="material-symbols-outlined">helicopter</span>
                      <Button>Helicopters</Button>
                    </div>
                    <div>
                      <span className="material-symbols-outlined">
                        flight_takeoff
                      </span>
                      <Button>Jets</Button>
                    </div>*/}
                    <div> 
                      <span className="material-symbols-outlined">two_wheeler</span>
                      <Button>Bikes</Button>
                    </div>
                    <div>
                      <span className="material-symbols-outlined">
                        directions_car
                      </span>
                      <Button>Cars</Button>
                    </div>
                    <div>
                      <span className="material-symbols-outlined">Home</span>
                      <Button>Home</Button>
                    </div>
                    <div>
                      <span className="material-symbols-outlined">home_iot_device</span>
                      <Button>Home Appliances</Button>
                    </div>
                    <div>
                      <span className="material-symbols-outlined">villa</span>
                      <Button>Real Estates</Button>
                    </div>
                  </div>
                  <hr />
                  <div className="btn-div-2">
                    <Button>Dashboard</Button>
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
          </div>
      ))}
    </>
  );
}

export default Navbar2;
