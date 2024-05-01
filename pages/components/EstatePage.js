import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import CategoryCard from "./CategoryCards";
import Relatedtags from "@/Check/Relatedtags/relatedtagsestate";
import CategoryCards2 from "./CategoryCards2";

const player = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function EstatePage() {
  const estate = [
    // {
    //   name: "villas",
    //   image: "/estate6.png",
    //   bg:"/mbg-villa.jpg"
    // },
    // {
    //   name: "Apartments",
    //   image: "/apartment.png",
    //   bg:"/mbg-apartment.jpg"
    // },
    // {
    //   name: "Office Space",
    //   image: "/office.png",
    //   bg:"/mbg-office.jpg"
    // },
    // {
    //   name: "house",
    //   image: "/estate5.png",
    //   bg:"/mbg-house.jpg"
    // },
    // {
    //   name: "studio",
    //   image: "/studio.png",
    //   bg:"/mbg-studio.jpg"
    // },
    // {
    //   name: "garage",
    //   image: "/estate6.png",
    // },
    // {
    //   name: "private islands",
    //   image: "/estate5.png",
    // },
    // {
    //   name: "castle",
    //   image: "/estate4.png",
    // },
    // {
    //   name: "land",
    //   image: "/estate3.png",
    // },
    // {
    //   name: "beachside properties",
    //   image: "/estate6.png",
    // },
    ,
    {
      name: "villas",
      image: "/test/mansionNo.png",
      bg: "/test/mansion.jpg",
      title: "/test/texts/villa.png"

    },
    {
      name: "Apartments",
      image: "/test/houseNo.png",
      bg: "/test/house.jpg",
      title: "/test/texts/apart.png"

    }
    ,
    {
      name: "Houses",
      image: "/test/house2Nu.png",
      bg: "/test/house2.jpg",
      title: "/test/texts/house.png"

    },
    {
      name: "Studio Spaces",
      image: "/test/studioNo.png",
      bg: "/test/studio.jpg",
      title: "/test/texts/studd.png"

    }
    ,
    {
      name: "Office Spaces",
      image: "/test/officeNo.png",
      bg: "/test/office.jpg",
      title: "/test/texts/office.png"

    }
    ,
  
  ];
  const estate2=[]

  return (
    <div className="menu-titles new-trending-title">
      <h1 className={player.className}>Estates</h1>
      <hr className="hr_rule" />
      <div>
        {/* <CategoryCard products={estate}  /> */}
        <CategoryCards2 products={estate} products2={estate2}/>
      </div>
    </div>
  );
}
