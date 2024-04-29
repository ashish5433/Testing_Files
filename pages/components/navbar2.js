import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import Nav_li_items from "../../Check/nav_li_items";

const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

function Navbar2() {
  const [show, setShow] = useState(false);

  const [color, setColor] = useState(false);

  const li_default = [[[]]];
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

  // useEffect(() => {
  //   window.addEventListener("scroll", handleChange);
  // });

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
            className={color ? "navbar nav-bg" : "navbar nav-bg"}
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
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  className={play.className}
                >
                  ShauKeens
                </h1>
              </div>

              <div
                className={
                  searchbar ? "hidden fadeout" : "flex justify-end fadein"
                }
              >
                <div className="carousel-search">
                  <input
                    style={{ maxWidth: "600px", minWidth: "400px", fontSize:"10px", padding:"10px", textAlign:"left"}}
                    type="text"
                    className={play.className}
                    placeholder="Search Products and Brands Anywhere"
                  />
                  <button type="submit">
                    <span
                      style={{
                        padding: "5px",
                        paddingLeft:"10px",
                        paddingRight:"10px",
                        position: "relative",
                        marginLeft: "-60px",
                        backgroundColor:"white",
                        color:"black",
                        borderRadius:"40px",
                        fontSize:"16px"
                      }}
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
                  <span className="nav-btns">For Charter</span>
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
                    Shaukeens
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
                      <Button onClick={signInClick}>Sign in / Register</Button>
                    </div>
                    <div>
                      <span class="material-symbols-outlined">recommend</span>
                      <Button>Just For You</Button>
                    </div>
                  </div>
                  <hr />
                  <div className="btn-div">
                    <div>
                      <span class="material-symbols-outlined">
                        directions_boat
                      </span>
                      <Button>Yachts</Button>
                    </div>
                    <div>
                      <span class="material-symbols-outlined">villa</span>
                      <Button>Real Estates</Button>
                    </div>
                    <div>
                      <span class="material-symbols-outlined">helicopter</span>
                      <Button>Helicopters</Button>
                    </div>
                    <div>
                      <span class="material-symbols-outlined">
                        flight_takeoff
                      </span>
                      <Button>Jets</Button>
                    </div>
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
                  </div>
                  <hr />
                  <div className="btn-div-2">
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
