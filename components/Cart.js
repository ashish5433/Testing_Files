import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { db } from "@/firebase/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Bebas_Neue, Unica_One } from "next/font/google";
const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false, weight: '400'
});
const unica = Unica_One({
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false, weight: '400'
});
const CartPage = ({ showModal, onClose }) => {
    const { cart } = useCart();
    const { user } = useAuth();
    // const [showModal, setShowModal] = useState(false);
    const updateQuantity = async (id, quantity) => {
        const productRef = doc(db, 'users', user.uid, 'cart', id);
        if (quantity > 0) {
            await updateDoc(productRef, { quantity });
        } else {
            await deleteDoc(productRef);
        }
    };

    if (!user) {
        return <p>You need to be logged in to view your cart</p>;
    }

    if (cart.length === 0) {
        return <p>Your cart is empty</p>;
    }

    return (
        <Modal show={showModal} onClose={onClose}>
        <h1 className={`${bebas.className} border-b-2  fixed`}>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="h-[175%] w-full flex flex-col justify-center items-center p-0 mt-[6.5vh]">
            {cart.map(item => (
              <li key={item.id} className={`${unica.className} flex items-center justify-center flex-col mt-1 w-full border-b-2 border-t-2 mb-1 text-center`}>
                <h2 className="text-[340%] leading-0 mb-0 max-md:text-[4vh]">{item.productName}</h2>
                <p className="text-[120%] max-md:text-[2vh]">Price: ${`${item.quantity*item.productPrice}`}</p>
                <div className="flex">

                <p className="text-[120%] max-md:text-[2vh]">Quantity: {item.quantity}</p>
                <button className=" text-[280%] leading-[0] ml-4 -translate-y-[20%] bg-white rounded-full text-black p-[0.7rem] max-md:text-[4vh] max-md:p-[12px]" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button className=" text-[280%] leading-[0] ml-4 -translate-y-[20%] bg-white rounded-full text-black p-[0.7rem] max-md:text-[4vh] max-md:p-[12px]" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Modal>
  );
};

export default CartPage;
