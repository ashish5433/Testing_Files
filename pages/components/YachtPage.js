import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import CategoryCard from "./CategoryCards";

const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function YachtPage() {

    const yachts = [
      {
        name: "motor yachts",
        image: "/boat (2).png",
      },
      {
        name: "sail boats",
        image: "/boat (1).png",
      },
      {
        name: "solar yachts",
        image: "/boat (2).png",
      },
      {
        name: "tenders",
        image: "/boat (1).png",
      },
    ];
    // const yachts = [
    //   {
    //     name: "yacht image 1",
    //     image: "/boat.png",
    //   },
    //   {
    //     name: "yacht image 2",
    //     image: "/boat (2).png",
    //   },
    //   {
    //     name: "yacht image 3",
    //     image: "/ship.png",
    //   },
    //   {
    //     name: "yacht image 4",
    //     image: "/cargo-ship.png",
    //   },
    // ];
    
  return (
    <div className="menu-titles new-trending-title">
      <h1 className={play.className}>Yachts</h1>
      <hr className="hr_rule" />
      <div>
        <CategoryCard products={yachts}/>
      </div>
    </div>
  );
}
