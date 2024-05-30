import {Bebas_Neue } from "next/font/google";

const play = Bebas_Neue({
    subsets: ["latin"],
    display: 'swap', 
  adjustFontFallback: false,
});

const OfflineStore = () => {
  return (
    <div className="menu-titles">
        <h1 className={play.className}>Offline Store</h1>
    <hr className="hr_rule" />

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4460.089950613403!2d81.02211323857266!3d26.797924828609123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1714580444469!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='maps'></iframe>
    </div>

    )
}

export default OfflineStore