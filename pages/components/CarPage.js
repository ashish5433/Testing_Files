import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import CategoryCard from "./CategoryCards";
import CategoryCards2 from "./CategoryCards2";

const player = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function CarPage() {
  const cars = [
    // {
    //   name: "coupe",
    //   image: "/car1.png",
    // },
    // {
    //   name: "hyper cars",
    //   image: "/car3.png",
    // },
    // {
    //   name: "super cars",
    //   image: "/car2.png",
    // },
    // {
    //   name: "convertible",
    //   image: "/car4.png",
    // },
    // {
    //   name: "vintage cars",
    //   image: "/car3.png",
    //   bg:"/mbg-vintage.jpg"
    // },
    // {
    //   name: "sedan",
    //   image: "/car1.png",
    //   bg:"/mbg-sedan.jpg"
    // },
    // {
    //   name: "suv",
    //   image: "/car5.png",
    //   bg:"/mbg-suv.jpg"
    // },
    // {
    //   name: "hatchback",
    //   image: "/car2.png",
    //   bg:"/mbg-hatchback.jpg"
    // },

    //   {
    //   name: "Luxury Cars",
    //   image: "/car3.png",
    //   bg:"/mbg-luxury.jpg"
    // },
    // {
    //   name: "EV Cars",
    //   image: "/car4.png",
    //   bg:"/mbg-evcar.jpg"
    // },
  
   
  
    {
      name: "Luxury Cars",
      image: "/test/luxuCarNo.png",
      bg: "/test/luxuCar.jpg",
      title: "/test/texts/luxury.png"

    },
    {
      name: "Vintage Cars",
      image: "/test/vintu.png",
      bg: "/test/Vintage.jpg",
      title: "/test/texts/vtbg.png"

    },
    {
      name: "EV Cars",
      image: "/test/evcarNo.png",
      bg: "/test/evcar.jpg",
      title: "/test/texts/ev.png"

    },

  ];

  const cars2=[
  
   
    {
      name: "SUV Cars",
      image: "/test/suvNo.png",
      bg: "/test/suv.jpg",
      title: "/test/texts/suvv.png"
    },
    {
      name: "Sedan Cars",
      image: "/test/sedanCarNo.png",
      bg: "/test/sedanCar.jpg",
      title: "/test/texts/sedan.png"

    },
    {
      name: "HatchBacks",
      image: "/test/hatchNo.png",
      bg: "/test/hatch.jpg",
      title: "/test/texts/hatch.png"

    },
   
  ]

  return (
    <div className="menu-titles new-trending-title">
      <h1 className={player.className}>Cars</h1>
      <hr className="hr_rule" />
      <div>
        <CategoryCards2 products={cars} products2={cars2}/>
      </div>
    </div>
  );
}
