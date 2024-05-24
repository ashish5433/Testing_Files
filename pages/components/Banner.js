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
        <div className="menu-titles outer-banner">
        <h1 className={player.className}>Bestseller</h1>

            <hr className="hr_rule" />
            <div className="banner-main">
                <div className="banner-bg-div">

                    <h1 className={player.className}>lamborghini aventador</h1>
                    <h2 className={player.className}>Milind Palaria</h2>
                    <p className={player.className}><span>Engine</span> --- 6498 cc  </p>
                    <p className={player.className}><span>Mileage</span> --- 7.69 kmpl   </p>
                    
                    <p className={player.className}><span>Transmission</span> --- Automatic   </p>
                    <p className={player.className}><span>Power</span> --- 760 bhp   </p>


                    <Link href={`/components/lamborghini_ProductPage`} className="banner-btn"><span className={player.className}>
                        Explore Bestsellers <span className="arrow-sign">
                             &rarr;
                            
                            </span>
                        </span>
                        </Link>
                   
                </div>
                <Image src="/carCarousel3.jpg" className="banner-bg" height={2000} width={3050} alt="Banner Cover"/>
                <Image src="/carCarousel3.jpg" className="banner-side" height={200} width={1000} alt="Banner Image"/>
            </div>
        </div>
    )
}

export default Banner