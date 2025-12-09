import React from "react";
import { useCart } from "../components/ContextCart";

const Cart = ({props}) => {
  const { items, total, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600">Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 bg-white shadow rounded-lg">
            <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
              {item.image ? (
                <img src={item.image} alt={item.title} className="max-w-full max-h-full"/>
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>

            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>

            <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800 font-semibold">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-50 rounded-lg shadow flex justify-between items-center">
        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>

        <button onClick={clearCart} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;