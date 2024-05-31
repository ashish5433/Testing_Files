import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import CategoryCard from "./CategoryCards";
import CategoryCards2 from "./CategoryCards2";

const player = Bebas_Neue({
  subsets: ["latin"],
  display: 'swap', 
  adjustFontFallback: false, weight: '400'
});

export default function BikePage() {
  const bikes = [
    // {
    //   name: "superbike",
    //   image: "/bike3.png",
    //   bg:"/mbg-superbike.jpg"
    // },
    // {
    //   name: "naked",
    //   image: "/bike2.png",
    //   bg:"/mbg-naked.jpg"
    // },
    // {
    //   name: "electric",
    //   image: "/bike1.png",
    //   bg:"/mbg-electric.jpg"
    // },
    // {
    //   name: "cruiser",
    //   image: "/bike3.png",
    //   bg:"/mbg-cruiser.jpg"
    // },
    // {
    //   name: "classic",
    //   image: "/bike3.png",
    //   bg:"/mbg-classic.jpg"
    // },
    // {
    //   name: "ev mopad",
    //   image: "/bike3.png",
    //   bg:"/mbg-mopad.jpg"
    // },
    // {
    //   name: "touring & adventure",
    //   image: "/bike2.png",
    // },
    // {
    //   name: "dual sport",
    //   image: "/bike1.png",
    // },
    // {
    //   name: "cafe racer",
    //   image: "/bike3.png",
    // },
    // {
    //   name: "retro & classic",
    //   image: "/bike2.png",
    // },
    {
      name: "EV Mopads",
      image: "/test/mopadNo.png",
      bg: "/test/mopad.jpg",
      title: "/test/texts/4.png"

    }
    ,
    {
      name: "Electric Bikes",
      image: "/test/electricNo.png",
      bg: "/test/electric.jpg",
      title: "/test/texts/3.png"

    },
  ];
  const bikes2 = [
    {
      name: "Classic Bikes",
      image: "/test/classicNo.png",
      bg: "/test/classic.jpg",
      title: "/test/texts/1.png"

    }
    ,
    {
      name: "Cruiser Bikes",
      image: "/test/cruiserNo.png",
      bg: "/test/cruiser.jpg",
      title: "/test/texts/2.png"

    }
    ,
    {
      name: "Naked Bikes",
      image: "/test/nakedNo.png",
      bg: "/test/naked.jpg",
      title: "/test/texts/5.png"

    }
    ,
    {
      name: "Super Bikes",
      image: "/test/superNo.png",
      bg: "/test/super.jpg",
      title: "/test/texts/6.png"

    }

  ]

  return (
    <div className="menu-titles new-trending-title">
      <h1 className={player.className}>Bikes</h1>
      <hr className="hr_rule" />
      <div>
        {/* <CategoryCard products={bikes} /> */}
        <CategoryCards2 products={bikes} products2={bikes2}/>
      </div>
    </div>
  );
}
