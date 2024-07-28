import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { db } from "@/firebase/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

const CartPage = () => {
  const { cart } = useCart();
  const { user } = useAuth();

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
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <h2>{item.productName}</h2>
            <p>Price: ${item.productPrice}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
