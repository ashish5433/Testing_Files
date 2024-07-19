import React from 'react'
import { Bebas_Neue, Unica_One } from "next/font/google";
const unica = Unica_One({
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false, weight: '400'
});
const navUser = ({ usersName }) => {
    return (
        <div className='w-4 h-4'>
            <span className={`${unica.className} nav-btns`}>
                {usersName}
            </span>
        </div>
    )
}

export default navUser