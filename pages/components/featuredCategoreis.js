import Card from "./card.js";
import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";



const player = Bebas_Neue({
  subsets: ["latin"],
  display: 'swap', 
  adjustFontFallback: false,
});

export default function midSection({yo,setYo}) {
  return (
    <div className="menu-titles">
      <h1 className={player.className}>Featured Categories</h1>
      <hr className="hr_rule" />
      <div>
        <Card/>
      </div>
    </div>
  );
}
