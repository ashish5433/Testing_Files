import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";

import Image from "next/image";
import Link from "next/link.js";

const player = Unica_One({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function Card() {
    const yo = false;
    return (
        <div>
            <div className="trending-card-div">
                <div className="trending_cards ">
                    <div className="trending-inner">
                        <div>

                            <h1 className={player.className}>Yamaha MT 15</h1>
                            <div className="spandiv">

                                <span className={player.className}>&#x2022; 155cc</span>
                                <span className={player.className}>&#x2022; 56.87 kmpl</span>
                            </div>
                            <p className={player.className}>&#8377; 17,400* <span> 
                                ╰┈➤
                            </span>
                            </p>
                        </div>
                    </div>
                    <div>

                        <Image src="/yamaha.jpg" className="trending-bg" height={800} width={800} />
                    </div>
                </div>

                <div className="trending_cards ">
                    <div className="trending-inner">
                        <div>

                            <h1 className={player.className}>Porsche Carrera GT
                            </h1>
                            <div className="spandiv">

                                <span className={player.className}>&#x2022; 5558 hp</span>
                                <span className={player.className}>&#x2022; 5.7 litre</span>
                            </div>
                            <p className={player.className}>&#8377; 1.6 lakh* <span> 
                                ╰┈➤
                            </span>
                            </p>
                        </div>
                    </div>
                    <div>

                        <Image src="/porche.jpg" className="trending-bg" height={800} width={800} />
                    </div>
                </div>
                <div className="trending_cards ">
                    <div className="trending-inner">
                        <div>

                            <h1 className={player.className}>2BHK Lucknow</h1>
                            <div className="spandiv">

                                <span className={player.className}>&#x2022; 1200sqft</span>
                                <span className={player.className}>&#x2022; balcony</span>
                            </div>
                            <p className={player.className}>&#8377;  45,000* <span>
                                ╰┈➤
                            </span>
                            </p>
                        </div>
                    </div>
                    <div>

                        <Image src="/house.jpg" className="trending-bg" height={800} width={800} />
                    </div>
                </div>
                <div className="trending_cards ">
                    <div className="trending-inner">
                        <div>

                            <h1 className={player.className}>PlayStation 5</h1>
                            <div className="spandiv">

                                <span className={player.className}>&#x2022; 3 disks</span>
                                <span className={player.className}>&#x2022; 2 remote</span>
                            </div>
                            <p className={player.className}>&#8377; 2,000* <span>
                                ╰┈➤
                            </span>
                            </p>
                        </div>
                    </div>
                    <div>

                        <Image src="/ps5.jpg" className="trending-bg" height={800} width={800} />
                    </div>
                </div>
            </div>
        </div>
    );
}
