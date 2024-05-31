import React from "react";
import NavbarL from "./beforeLoginNavbar";
import ProductCard from "./ProductCards";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import yachtCarousel from "@/CarouselImageData/yachtCarousel";
function HomeBeforelogin() {
  return (
    <div>
      <div>
        <NavbarL />
      </div>
      <div className="top-40 p-16">lkjlkjl</div>
      <div className="px-16">
        <div className="flex justify-between mb-3">
          <div>
            <h3> <span className="material-symbols-outlined">
radio_button_checked
</span>Market Place</h3>
          </div>
          <div>
            <Button
              style={{ backgroundColor: "white", color: "indigo" }}
              className=" px-3 mx-2"
              variant="secondary"
            >
              <h5>Photos</h5>
            </Button>
            <Button
              style={{ backgroundColor: "white", color: "indigo" }}
              className=" px-3 mx-2"
              variant="secondary"
            >
              <h5>Videos</h5>
            </Button>
          </div>
          <div className="flex ">
            <Button
              style={{
                backgroundColor: "white",
                color: "gray",
                border: "solid black",
              }}
              className=" px-3 mx-2 flex"
              variant="secondary"
            >
              <span>Condition</span>{" "}
              <span className="p-0 m material-symbols-outlined ">expand_more</span>
            </Button>
            <Button
              style={{
                backgroundColor: "white",
                color: "gray",
                border: "solid black",
              }}
              className=" px-3 mx-2"
              variant="secondary"
            >
              Sort By Relevence{" "}
              <span className="p-0 m-0 material-symbols-outlined">expand_more</span>
            </Button>
          </div>
        </div>
        <ProductCard products={yachtCarousel} view={true} />
        <ProductCard products={yachtCarousel} view={true} />
      </div>
    </div>
  );
}

export default HomeBeforelogin;
