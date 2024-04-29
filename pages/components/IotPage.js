import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import CategoryCard from "./CategoryCards";

const play = Bebas_Neue({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function IotPage() {
    const iots = [
        {
            name: "television",
            image: "/television.png",
            bg: "/mbg-tv.jpg"
        },
        {
            name: "washing machine",
            image: "/washing-machine.png",
            bg: "/mbg-machine.jpg"
        },
        {
            name: "game console",
            image: "/game-console.png",
            bg: "/mbg-console.jpg"
        },
        {
            name: "Microwave Ovens",
            image: "/oven.png",
            bg: "/mbg-oven.jpg"
        },
        {
            name: "air conditioner",
            image: "/air-conditioner.png",
            bg: "/mbg-ac.jpg"
        },
        {
            name: "Refrigerator",
            image: "/refrigerator.png",
            bg: "/mbg-fridge.jpg"
        },
    ];

    return (
        <div className="menu-titles new-trending-title">
            <h1 className={play.className}>Appliances</h1>
            <hr className="hr_rule" />
            <div>
                <CategoryCard products={iots} />
            </div>
        </div>
    );
}
