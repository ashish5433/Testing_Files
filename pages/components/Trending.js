import CardCopy from "./CardCopy.js";
import {Bebas_Neue } from "next/font/google";

const play=Bebas_Neue({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
});

const Trending = () => {
    return (
        <div className="menu-titles">
            <h1 className={play.className}>Trending Products</h1>
            <hr className="hr_rule" />
            <div>
                <CardCopy/>
            </div>
        </div>
    )
}

export default Trending