import React from "react";
import { motion } from "framer-motion";
import { Bebas_Neue, Unica_One } from "next/font/google";

const player = Bebas_Neue({
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false, weight: '400'
});

const unica = Unica_One({
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false, weight: '400'
});


export const MainFooter = () => {
    return (
        <section className={`${player.className} flex flex-col items-center gap-2 bg-stone-950 px-8 pt-12 pb-12 `}>
            <div className="flex justify-center items-center gap-3 md:gap-5">

                <span className="text-2xl md:text-5xl !text-green-300">- - - - - - - -</span>
                <FlipLink2 href="#">Kir.AI</FlipLink2>
                <span className="text-2xl md:text-5xl !text-green-300">- - - - - - - -</span>
            </div>
            <div className="w-full flex justify-around max-md:flex-col max-md:justify-center max-md:items-center pt-10">

                <div className="flex gap-16">
                    <div className="flex flex-col gap-2">

                        <FlipLink3 href="#">Bikes</FlipLink3>

                        <FlipLink3 href="#">Appliances</FlipLink3>

                    </div>
                    <div className="flex flex-col gap-2">
                        <FlipLink3 href="#">Cars</FlipLink3>

                        <FlipLink3 href="#">Estates</FlipLink3>

                    </div>

                </div>

                <div className="flex flex-col gap-3 max-md:!gap-1 max-md:py-4 max-md:pt-14">

                    <FlipLink href="#">Github</FlipLink>
                    <FlipLink href="#">Linkedin</FlipLink>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3 md:gap-5 pt-10">

                <span className="text-2xl md:text-2xl !text-green-300">- - - - - - - -</span>
                <FlipLink4 href="#">©  2024</FlipLink4>
                <span className="text-2xl md:text-2xl !text-green-300">- - - - - - - -</span>
            </div>

        </section>
    );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-4xl max-md:text-center  text-left tracking-wider font-black uppercase sm:text-4xl md:text-5xl lg:text-6xl !text-green-300"
            style={{
                lineHeight: 1,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-110%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0 !text-green-300">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};
const FlipLink2 = ({ children, href }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-7xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl  max-md:text-center  text-left !text-green-300"
            style={{
                lineHeight: 1,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-110%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0 !text-green-300">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};

const FlipLink3 = ({ children, href }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-4xl max-md:text-center  text-left tracking-wider font-black uppercase sm:text-4xl md:text-5xl lg:text-6xl !text-green-300"
            style={{
                lineHeight: 1,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-110%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0 !text-green-300">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};
const FlipLink4 = ({ children, href }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-xl text-center tracking-wider font-black uppercase sm:text-xl md:text-xl lg:text-2xl !text-green-300 px-3"
            style={{
                lineHeight: 1,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-110%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0 !text-green-300">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};