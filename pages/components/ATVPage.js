import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import CategoryCard from "./CategoryCards";

const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: 'swap', 
  adjustFontFallback: false,
});

export default function ATVPage() {
  const aircrafts = [
    {
      name: "jets",
      image: "/jet1.png",
    },

    {
      name: "helicopters",
      image: "/helicopter3.png",
    },
    {
      name: "hovercars",
      image: "/helicopter4.png",
    },
    {
      name: "vtols",
      image: "/jet3.png",
    },
  ];

  return (
    <div className="menu-titles new-trending-title">
      <h1 className={play.className}>ATVs</h1>
      <hr className="hr_rule" />
      <div>
        <CategoryCard products={aircrafts} />
      </div>
    </div>
  );
}
