import React, { useEffect } from "react";
import CarouselPage from "../Carousel";
import ProductCard from "../ProductCards";
import Footer from "../footer";
import classes from "./../../../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button";

import { Unica_One, Quicksand, Bebas_Neue, Raleway } from "next/font/google";
import motorYachts from "@/CategoryData/motorYachts";
import sailBoats from "@/CategoryData/sailBoats";
import jets from "@/CategoryData/jets";
import solarYachts from "@/CategoryData/solarYachts";
import tenderYachts from "@/CategoryData/tenderYachts";
import yachtCarousel from "@/CarouselImageData/yachtCarousel";
import estateCarousel from "@/CarouselImageData/estateCarousel";
import jetCarousel from "@/CarouselImageData/jetCarousel";
import bikeCarousel from "@/CarouselImageData/bikeCarousel";
import carCarousel from "@/CarouselImageData/carCarousel";
import submarineCarousel from "@/CarouselImageData/submarineCarousel";
import atvCarousel from "@/CarouselImageData/atvCarousel";
import rvCarousel from "@/CarouselImageData/rvCarousel";
import amphibiousCarousel from "@/CarouselImageData/amphibiousCarousel";
import Filter from "../Filter/filter";
import Topfilter from "../Filter/topfilter";
import Sidenav from "../sidenav";
import Navbar1 from "../navbar";
import Navbar2 from "../navbar2";
import RelatedtagsEstate from "../../../Check/Relatedtags/relatedtagsestate";
import RelatedtagsYachts from "@/Check/Relatedtags/relatedtagsyachts";
import RelatedMotorcycle from "@/Check/Relatedtags/relatedMotorcycle";
import RelatedtagsCars from "@/Check/Relatedtags/relatedCars";
const fontBebas = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const fontUnica = Unica_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function ProductsList() {

  const [showFilter, setShowFilter] = useState(false);
  const [gridOrList,setGridOrList] = useState(false)


// sample tags 

  const router = useRouter();
  const categoryDetail = router.query.categoryId;
  // console.log(categoryDetail);
  const [subcategory, setSubcategory] = useState([]);
  const [carouselImages, setCarouselImages] = useState("");
  useEffect(() => {
    if (categoryDetail === "amphibious") {
      setCarouselImages("amphibiousCarousel");
    } else if (
      categoryDetail === "motor yachts" ||
      categoryDetail === "sail boats" ||
      categoryDetail === "solar yachts" ||
      categoryDetail === "tenders"
    ) {
      setCarouselImages("yachtCarousel");
    } else if (
      categoryDetail === "villas" ||
      categoryDetail === "private islands" ||
      categoryDetail === "castle" ||
      categoryDetail === "land" ||
      categoryDetail === "beachside properties"
    ) {
      setCarouselImages("estateCarousel");
    } else if (
      categoryDetail === "jets" ||
      categoryDetail === "helicopters" ||
      categoryDetail === "hovercars" ||
      categoryDetail === "vtols"
    ) {
      setCarouselImages("jetCarousel");
    } else if (
      categoryDetail === "superbike" ||
      categoryDetail === "naked" ||
      categoryDetail === "electric" ||
      categoryDetail === "cruiser" ||
      categoryDetail === "touring & adventure" ||
      categoryDetail === "dual sport" ||
      categoryDetail === "cafe racer" ||
      categoryDetail === "retro & classic"
    ) {
      setCarouselImages("bikeCarousel");
    } else if (
      categoryDetail === "coupe" ||
      categoryDetail === "hyper cars" ||
      categoryDetail === "super cars" ||
      categoryDetail === "Vintage Cars" ||
      categoryDetail === "Sedan Cars" ||
      categoryDetail === "SUV Cars" ||
      categoryDetail === "HatchBacks" ||
      categoryDetail === "convertible"||
      categoryDetail === "EV Cars"||
      categoryDetail === "Luxury Cars"
    ) {
      setCarouselImages("carCarousel");
    } else if (categoryDetail === "submarines") {
      setCarouselImages("submarineCarousel");
    } else if (categoryDetail === "atv") {
      setCarouselImages("atvCarousel");
    } else if (categoryDetail === "rv") {
      setCarouselImages("rvCarousel");
    }
  });
  useEffect(() => {
    if (categoryDetail === "jets") {
      setSubcategory(jets);
    } else if (categoryDetail === "motor yachts") {
      setSubcategory(motorYachts);
    } else if (categoryDetail === "tenders") {
      setSubcategory(tenderYachts);
    } else if (categoryDetail === "solar yachts") {
      setSubcategory(solarYachts);
    } else if (categoryDetail === "sail boats") {
      setSubcategory(sailBoats);
    }
  });

  let mainCarousel = [...carouselImages];
  const [yacht, changeYacht] = useState(false);
  return (
    <div>
    <Navbar2/>  {/*........................... navbar */}
    <div>
      
      <div>
      <div>
        {carouselImages === "yachtCarousel" ? (
          <><RelatedtagsYachts/><Modal
      // {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal><CarouselPage CarouselImages={yachtCarousel} /></>
        ) : carouselImages === "estateCarousel" ? (
          <><RelatedtagsEstate /><CarouselPage CarouselImages={estateCarousel} /></>
        ) : carouselImages === "jetCarousel" ? (
          <CarouselPage CarouselImages={jetCarousel} />
        ) : carouselImages === "bikeCarousel" ? (
          <><RelatedMotorcycle/><CarouselPage CarouselImages={bikeCarousel} /></>
        ) : carouselImages === "carCarousel" ? (
          <><RelatedtagsCars/><CarouselPage CarouselImages={carCarousel} /></>
        ) : carouselImages === "amphibiousCarousel" ? (
          <CarouselPage CarouselImages={amphibiousCarousel} />
        ) : carouselImages === "submarineCarousel" ? (
          <CarouselPage CarouselImages={submarineCarousel} />
        ) : carouselImages === "atvCarousel" ? (
          <CarouselPage CarouselImages={atvCarousel} />
        ) : (
          <CarouselPage CarouselImages={rvCarousel} />
        )}
      </div>
      <div>
      <div className="flex flex-col absolute left-[10vw] top-[250px] w-[80%] text-neutral-50">
          <h1 style={{fontSize:"8vw"}} className={`m-auto relative ${fontBebas.className}`}>{categoryDetail}.</h1>
            <div className={`m-auto  ${classes.carousel_search}`}>
              <div><input style={{width:"30vw"}}
                type="text"
                placeholder={`search for ${categoryDetail}...`}
                className={` ${fontUnica.className}`}
              /></div>
              <div>
              <button className="relative" type="submit">
                <span className="material-symbols-outlined">search</span>
              </button>
              </div>
            </div>
            
            <div className={`   ${classes.carousel_icon_div}`}>
              {subcategory.map((data) => (
                <div className={classes.subcategory_div}>
                  <div
                    className={
                      yacht
                        ? `${classes.carousel_icons} ${classes.selected}`
                        : `${classes.carousel_icons}`
                    }
                  // onClick={yachtChangeHandler}
                  >
                    <span className="material-symbols-outlined">{data.icon}</span>
                  </div>
                  <h1
                    className={`${classes.subcategory_name} ${fontUnica.className}`}
                  >
                    {data.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
      </div>
      {/* <Topfilter show={showFilter} showFunc={setShowFilter} gridOrList={gridOrList} setGridOrList={setGridOrList} /> */}
      <div className="mx-24 ">
          <div className="py-12"><ProductCard products={yachtCarousel} view={true} /></div>
        </div>
      </div>

      </div>
      <Footer />

    </div>
  );
}
