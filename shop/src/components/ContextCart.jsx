import React, { createContext, useContext, useEffect, useState } from "react";

const CartCon = createContext();
const STORAGE_KEY = "comp4513_cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        console.warn("Invalid cart in storage, resetting.");
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(product) {
    setItems((prev) => [...prev, product]);
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setItems([]);
  }

  const total = items.reduce((sum, p) => sum + Number(p.price || 0), 0);

  return (
    <CartCon.Provider
      value={{ items, addItem, removeItem, clearCart, total }}
    >
      {children}
    </CartCon.Provider>
  );
}

export function useCart() {
  return useContext(CartCon);
}
