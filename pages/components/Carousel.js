import React, { Component, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function CarouselPage({CarouselImages}) {
  return (
    <>
      <div className="img-sliders">
        <Carousel
          autoPlay={true}
          showArrows={false}
          interval={4000}
          infiniteLoop={true}
          autoFocus={true}
          showThumbs={false}
          stopOnHover={false}
        >
        {CarouselImages?.map((data) => (
          <div key={data.image}>      
          <div className="overlay" ></div>
            <Image
            className="img-slider"
            src={data.image}
            width={1920}
            height={1080}
            priority={true}
            />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}