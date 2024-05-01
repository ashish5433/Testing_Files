import Card from "./card.js";
import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";



const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function midSection({yo,setYo}) {
  return (
    <div className="menu-titles">
      <h1 className={play.className}>Featured Categories</h1>
      <hr className="hr_rule" />
      <div>
        <Card  yo={yo} setYo={setYo}/>
      </div>
    </div>
  );
}
