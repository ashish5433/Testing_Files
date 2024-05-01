import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";

const player = Unica_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Card() {
  return (
    <div>
      <div className="card-div">
              <div className="category-cards card-comp-1">
                  <div className="category-card-overlay"></div>
          <h1 className={player.className}>Real Estates</h1>
          <span className={player.className}>1000+ Listings</span>
          <p className={player.className}>╰┈➤</p>
        </div>
        <div className="category-cards card-comp-2">
          <h1 className={player.className}>Bikes</h1>
          <span className={player.className}>2000+ Listings</span>
          <p className={player.className}>╰┈➤</p>
        </div>
        <div className="category-cards card-comp-3">
          <h1 className={player.className}>Cars</h1>
          <span className={player.className}>1000+ Listings</span>
          <p className={player.className}>╰┈➤</p>
        </div>
        <div className="category-cards card-comp-4">
          <h1 className={player.className}>Appliances</h1>
          <span className={player.className}>10000+ Listings</span>
          <p className={player.className}>╰┈➤</p>
        </div>
      </div>
    </div>
  );
}
