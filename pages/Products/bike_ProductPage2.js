import Link from "next/link";
import classes from "../../components/ProductPage2.module.css";
import Navbar1 from "../../components/navbar";
import Image from "next/image";
import Navbar2 from "../../components/navbar2";
import { db, storage } from "@/firebase/firebase";
import { collection, getDocs, addDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";

export default function bike_ProductPage2({ data }) {
  const { user } = useAuth();
  
  // State to store the current big image source
  const [bigImageSrc, setBigImageSrc] = useState("/bikecarousel4.jpg");

  const addToCart = async () => {
    if (!user) {
      alert("You need to be logged in to add items to your cart");
      return;
    }

    const productId = "Suzuki_Hayabusa";
    const productRef = doc(db, 'users', user.uid, 'cart', productId);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      await setDoc(productRef, {
        quantity: productSnap.data().quantity + 1
      }, { merge: true });
    } else {
      await setDoc(productRef, {
        productName: "Suzuki Hayabusa",
        productOwner: "Ashish Bhardwaj",
        productPrice: 4500,
        quantity: 1,
      });
    }
  };

  const router = useRouter();
  const pusher = () => {
    router.push("/components/History");
  };

  // Function to handle small image click
  const handleImageClick = (src) => {
    setBigImageSrc(src); // Update the big image source
  };

  return (
    <div>
      <div className={classes.first}>
        <h1>Suzuki Hayabusa</h1>
        <h3>~ Ashish Bhardwaj</h3>
        <div>
          <div className={classes.big_image_div}>
            <Image
              className={classes.big_image}
              src={bigImageSrc} // Use the big image source from state
              width={1920}
              height={1080}
              alt="Main Product"
            />
            <div className={classes.overlay_big}></div>
            <div className={classes.small_image_div}>
              {/* Clicking on small images will change the big image */}
              <Image
                className={classes.small_image}
                src="/bikecarousel3.jpg"
                width={1920}
                height={1080}
                alt="Small Product Image"
                onClick={() => handleImageClick("/bikecarousel3.jpg")}
              />
              <Image
                className={classes.small_image}
                src="/bikecarousel5.jpg"
                width={1920}
                height={1080}
                alt="Small Product Image"
                onClick={() => handleImageClick("/bikecarousel5.jpg")}
              />
              <Image
                className={classes.small_image}
                src="/bikecarousel7.jpg"
                width={1920}
                height={1080}
                alt="Small Product Image"
                onClick={() => handleImageClick("/bikecarousel7.jpg")}
              />
              <Image
                className={classes.small_image}
                src="/bikecarousel6.jpg"
                width={1920}
                height={1080}
                alt="Small Product Image"
                onClick={() => handleImageClick("/bikecarousel6.jpg")}
              />
              <div className={classes.more_div}>
                <h3>more photos</h3>
              </div>
            </div>
          </div>
          <div className={classes.price_and_others}>
            <h1>
              <span>&#8377; </span> 4,500 . 00 /day
            </h1>
            <div className={classes.currencies}>
              <p>inr</p>
              <p>usd</p>
              <p>eur</p>
            </div>
            <button onClick={addToCart}>rent now</button>
            <button onClick={pusher}>View History</button>
            <h3>add to wishlist</h3>
            <div className={classes.icons2_div}>
              <div>
                <Image
                  className={classes.icons2}
                  src="/location-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"
                />
                <p>visit</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/call-phone-heart-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"
                />
                <p>call</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/chat-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"
                />
                <p>chat</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/live-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"
                />
                <p>live view</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/meeting-of-a-couple-of-men-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"
                />
                <p>meet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className={classes.seller}>About Seller</h1>

      <div className={classes.agent_card}>
        <div>
          <Image
            className={classes.agent_card_img}
            src="/bikecarousel3.jpg"
            width={1920}
            height={1080}
            alt="Agent Cover"
          />
          <div className={classes.agent_card_overlay}></div>
          <div className={classes.agent_profile}>
            <Image
              className={classes.agent_card_profile}
              src="/bikecarousel3.jpg"
              width={500}
              height={500}
              alt="Agent Image"
            />
          </div>
          <div className={classes.agent_detail}>
            <div className={classes.agent_name_and_functions}>
              <h1>Milind Palaria</h1>
              <div className={classes.agent_functions}>
                <div>
                  <Image
                    className={classes.icons2}
                    src="/call-phone-heart-svgrepo-com.svg"
                    width={50}
                    height={50}
                    alt="Contact Image"
                  />
                  <p>call</p>
                </div>
                <div>
                  <Image
                    className={classes.icons2}
                    src="/chat-svgrepo-com.svg"
                    width={50}
                    height={50}
                    alt="Contact Image"
                  />
                  <p>chat</p>
                </div>
              </div>
            </div>
            <p>Direct owner / broker at sunseeker</p>
            <div>
              <div>
                <span>• </span>
                <span>Location : </span>
                <span>Chennai</span>
              </div>
              <div>
                <span>• </span>
                <span>Listings : </span>
                <span>21</span>
              </div>
              <div>
                <span>• </span>
                <span>Sold : </span>
                <span>5</span>
              </div>
              <div>
                <span>• </span>
                <span>Role : </span>
                <span>Owner</span>
              </div>
              <div>
                <span>• </span>
                <span>Reviews : </span>
                <span>19</span>
              </div>
            </div>
            <div className={classes.company_details}>
              <Image
                className={classes.company_logo}
                src="/company.png"
                width={200}
                height={200}
                alt="Company Logo"
              />
              <div>
                <h2>Company Name</h2>
                <p>direct owner / broker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
