'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prev => Math.min(prev + 1, 20));
  };

  const decrement = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400 rounded-xl shadow-lg flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-bold text-black">Adjust Quantity</h2>
      <div className="flex items-center space-x-6 bg-gray-100 rounded-lg p-4 shadow-md">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition duration-300 disabled:bg-blue-300"
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="text-xl font-bold text-black">{quantity}</span>
        <button
          onClick={increment}
          className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow hover:bg-yellow-500 transition duration-300 disabled:bg-yellow-300"
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
      <p className="text-sm text-black">You can select between 1 and 20 items.</p>
    </div>
  );
}
