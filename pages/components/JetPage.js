import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import CategoryCard from "./CategoryCards";

const play = Bebas_Neue({
  subsets: ["latin"],
  display: 'swap', 
  adjustFontFallback: false, weight: '400'
});

export default function JetPage() {
  const jet = [
    {
      name: "jet image 1",
      image: "/jet1.png",
    },
    {
      name: "jet image 2",
      image: "/jet2.png",
    },
    {
      name: "jet image 3",
      image: "/jet3.png",
    },
  ];

  return (
    <div className="menu-titles new-trending-title">
      <h1 className={play.className}>Jets</h1>
      <hr className="hr_rule" />
      <div>
        <CategoryCard products={jet} />
      </div>
    </div>
  );
}
