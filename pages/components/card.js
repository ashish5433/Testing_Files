import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";

const player = Unica_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Card({yo,setYo}) {
  return (
    <div>
      <div className="card-div">
              <div className="category_cards card_comp_1">
                  <div className="category-card-overlay"></div>
          <h1 className={player.className}>Real Estates</h1>
          <span className={player.className}>1000+ Listings</span>
          <p className={player.className}>╰┈➤</p>
        </div>
        <div className={yo
                ? `category_cards card_comp_2 outline`
                : `category_cards card_comp_2`}>
          <h1 className={play.className}>Bikes</h1>
          <span className={play.className}>2000+ Listings</span>
          <p className={play.className}>╰┈➤</p>
        </div>
        <div className="category_cards card_comp_3">
          <h1 className={play.className}>Cars</h1>
          <span className={play.className}>1000+ Listings</span>
          <p className={play.className}>╰┈➤</p>
        </div>
        <div className="category_cards card_comp_4">
          <h1 className={play.className}>Appliances</h1>
          <span className={play.className}>10000+ Listings</span>
          <p className={play.className}>╰┈➤</p>
        </div>
      </div>
    </div>
  );
}
