import Card from "./card.js";
import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link.js";


const player = Bebas_Neue({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
});
const Banner = () => {
    return (
        <div className="menu-titles">
            <hr className="hr_rule" />
            <div className="banner-main">
                <div className="banner-bg-div">

                    <h1 className={player.className}>Product Name</h1>
                    <h2 className={player.className}>Rishav Randi</h2>
                    <p className={player.className}>lorem loremloremloremloremlorem lorem lorem loremlorem lorem lorem  lorem lorem loremlorem lorem lorem  lorem lorem loremlorem lorem lorem </p>
                    <Link href={`/components/BestSellers`} className="banner-btn"><span className={player.className}>
                        Explore Bestsellers <span className="arrow-sign">
                             &rarr;
                            
                            </span>
                        </span>
                        </Link>
                   
                </div>
                <Image src="/carCarousel3.jpg" className="banner-bg" height={2000} width={3050} />
                <Image src="/carCarousel3.jpg" className="banner-side" height={200} width={1000} />
            </div>
        </div>
    )
}

export default Banner