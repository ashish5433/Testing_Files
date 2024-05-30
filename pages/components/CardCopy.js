import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";

import Image from "next/image";
import Link from "next/link.js";
import { useRouter } from "next/router";
const play = Bebas_Neue({
    subsets: ["latin"],
    display: 'swap', 
  adjustFontFallback: false,
});
export default function Card() {
    const router = useRouter();
    const pusher = () => {
        router.push("/components/ProductPage2")
    }
    const bikepusher = () => {
        router.push("/components/bike_ProductPage2")
    }
    const iotpusher = () => {
        router.push("/components/appliances_ProductPage2")
    }
    const plotpusher = () => {
        router.push("/components/estate_ProductPage2")
    }
    const yo = false;
    return (
        <div>
            <div className="trending-card-div">
                <div className="trending_cards ">
                    <div className="trending-inner">
                        <div>

                            <h1 className={play.className}>Yamaha MT 15</h1>
                            <div className="spandiv">

                                <span className={play.className}>&#x2022; 155cc</span>
                                <span className={play.className}>&#x2022; 56.87 kmpl</span>
                            </div>
                            <p className={play.className} onClick={bikepusher}>&#8377; 17,400*
                            </p>
                        </div>
                    </div>
                    <div>

                        <Image src="/yamaha.jpg" className="trending-bg" height={800} width={800} alt="Bestseller Product Image" />
                    </div>
                </div>

                <div className="trending_cards ">
                    <div className="trending-inner">
                        <div>

                            <h1 className={play.className}>Porsche Carrera GT
                            </h1>
                            <div className="spandiv">

                                <span className={play.className}>&#x2022; 5558 hp</span>
                                <span className={play.className}>&#x2022; 5.7 litre</span>
                            </div>
                            <p className={play.className} onClick={pusher}>&#8377; 1.6 lakh*
                            </p>
                        </div>
                    </div>
                    <div>

                        <Image src="/porche.jpg" className="trending-bg" height={800} width={800} alt="Bestseller Product Image" />
                    </div>
                </div>
                <div className="trending_cards ">
                    <div className="trending-inner">
                        <div>

                            <h1 className={play.className}>2BHK Lucknow</h1>
                            <div className="spandiv">

                                <span className={play.className}>&#x2022; 1200sqft</span>
                                <span className={play.className}>&#x2022; balcony</span>
                            </div>
                            <p className={play.className} onClick={plotpusher}>&#8377;  45,000*
                            </p>
                        </div>
                    </div>
                    <div>

                        <Image src="/house.jpg" className="trending-bg" height={800} width={800} alt="Bestseller Product Image" />
                    </div>
                </div>
                <div className="trending_cards ">
                    <div className="trending-inner">
                        <div>

                            <h1 className={play.className}>PlayStation 5</h1>
                            <div className="spandiv">

                                <span className={play.className}>&#x2022; 3 disks</span>
                                <span className={play.className}>&#x2022; 2 remote</span>
                            </div>
                            <p className={play.className} onClick={iotpusher} >&#8377; 2,000*
                            </p>
                        </div>
                    </div>
                    <div>

                        <Image src="/ps5.jpg" className="trending-bg" height={800} width={800} alt="Bestseller Product Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}
