import React, { createContext, useState, useEffect, useContext } from 'react';
// import { useAuth } from '../auth';
// import { db } from '../firebase';
// import { collection, onSnapshot } from "firebase/firestore"; 
import { useAuth } from './AuthContext';
import { db } from '@/firebase/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (user) {
      const cartRef = collection(db, 'users', user.uid, 'cart');
      const unsubscribe = onSnapshot(cartRef, (snapshot) => {
        const cartItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCart(cartItems);
      });

      return () => unsubscribe();
    }
  }, [user]);

  return (
    <CartContext.Provider value={{ cart }}>
      {children}
    </CartContext.Provider>
  );
};
