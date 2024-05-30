import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import CategoryCard from "./CategoryCards";
import CategoryCards2 from "./CategoryCards2";

const player = Bebas_Neue({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
    display: 'swap', 
  adjustFontFallback: false,
});

export default function IotPage() {
    const iots = [
        // {
        //     name: "television",
        //     image: "/television.png",
        //     bg: "/mbg-tv.jpg"
        // },
        // {
        //     name: "washing machine",
        //     image: "/washing-machine.png",
        //     bg: "/mbg-machine.jpg"
        // },
        // {
        //     name: "game console",
        //     image: "/game-console.png",
        //     bg: "/mbg-console.jpg"
        // },
        // {
        //     name: "Microwave Ovens",
        //     image: "/oven.png",
        //     bg: "/mbg-oven.jpg"
        // },
        // {
        //     name: "air conditioner",
        //     image: "/air-conditioner.png",
        //     bg: "/mbg-ac.jpg"
        // },
        // {
        //     name: "Refrigerator",
        //     image: "/refrigerator.png",
        //     bg: "/mbg-fridge.jpg"
        // },
            
          {
            name: "Televisions",
            image: "/test/tvNo.png",
            bg: "/test/tv.jpg",
            title: "/test/texts/tvv.png"
      
          },
        
         

          {
            name: "Gaming Consoles",
            image: "/test/gmNo.png",
            bg: "/test/gm.jpg",
            title: "/test/texts/gmm.png"
      
          },
         
    ];
    const iots2=[
                 
          
        {
            name: "Refrigertors",
            image: "/test/rfNo.png",
            bg: "/test/rf.jpg",
            title: "/test/texts/fdd.png"
      
          },
          {
            name: "Washing Machines",
            image: "/test/wmNo.png",
            bg: "/test/wm.jpg",
            title: "/test/texts/wmm.png"
      
          },
          
        {
            name: "Air Conditioning",
            image: "/test/acNo.png",
            bg: "/test/ac.jpg",
            title: "/test/texts/acc.png"
      
          },
          {
            name: "Microwave Ovens",
            image: "/test/ovenNo.png",
            bg: "/test/oven.jpg",
            title: "/test/texts/ovenn.png"
      
          },
         
    ]

    return (
        <div className="menu-titles new-trending-title">
            <h1 className={player.className}>Appliances</h1>
            <hr className="hr_rule" />
            <div>
                {/* <CategoryCard products={iots} /> */}
                <CategoryCards2 products={iots} products2={iots2}/>
            </div>
        </div>
    );
}
