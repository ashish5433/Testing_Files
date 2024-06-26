import { Bebas_Neue, Unica_One } from "next/font/google";
import { useEffect, useState } from "react";
import { useGSAP } from '@gsap/react';
import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(useGSAP);


const player = Bebas_Neue({
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false, weight: '400'
});
const fontUnica = Unica_One({
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false, weight: '400'
});

const Loading = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const count = setInterval(() => {
            setCounter((counter) =>
                counter < 100
                    ? counter + 4
                    : (clearInterval(count), setCounter(100), reveal())
            );
        }, 125);
    }, []);

    const reveal = () => {

        const t1 = gsap.timeline({
            onComplete: () => {
                console.log("completed");
            },
        });
        t1.to("#text", {
            filter: "blur(20px)", duration: 0.6,
            ease: Expo.easeOut, opacity: 0,
        }).to("#text", {
                display: "none", duration: 0.4, delay: 0.3,
                ease: Expo.easeInOut,
            }).to(".bar", {
                height: "100%",
                ease: Expo.easeInOut,
                duration: 0.7,
                delay: 0,
            }).to(".bar", {
                x: "100vw", duration: 0.75, ease: Expo.easeInOut,
            })
            .to(".loading-screen", { opacity: 0, duration: 1, delay: 1, display: "none" })
    };

    return (
        <div className="loading-screen">
            {/* <div className="spinner"></div> */}
            <h1 className={player.className} id="text">{counter}%</h1>
            <div
                className="hide bar"
                id="progress-bar"
                style={{ width: counter + "%" }}
            ></div>
            <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: black; 
          z-index: 9999999;
        }
          .loading-screen h1{
          
          font-size:20rem;
          color:white;
          line-height: 0.65;
          }
          .bar{
          position: absolute;
          left: 0;
          background-color: #fff;
          height: 2px;
          width: 0;
          transition: 0.4s ease-out;
          }
        .spinner {
          border: 16px solid #f3f3f3;
          border-top: 16px solid #3498db;
          border-radius: 50%;
          width: 120px;
          height: 120px;
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default Loading;
