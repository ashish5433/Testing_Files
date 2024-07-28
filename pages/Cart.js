import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

const CartPage = () => {
  const { cart } = useCart();
  const { user } = useAuth();

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
