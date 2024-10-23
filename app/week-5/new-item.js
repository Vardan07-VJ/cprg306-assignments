'use client';

import { useState } from 'react';

export default function NewItem() {
  const [itemName, setItemName] = useState(''); 
  const [itemQuantity, setItemQuantity] = useState(1); 
  const [itemCategory, setItemCategory] = useState('produce'); 

  const increaseQuantity = () => {
    setItemQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
  };

  const decreaseQuantity = () => {
    setItemQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); 

    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };

    console.log(newItem);

    alert(`Name: ${itemName}\nQuantity: ${itemQuantity}\nCategory: ${itemCategory}`);

    setItemName('');
    setItemQuantity(1);
    setItemCategory('produce');
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-bold text-white">Add New Item</h2>

      <form onSubmit={handleFormSubmit} className="space-y-4 w-full">
        
        <div className="flex flex-col">
          <label className="text-white font-semibold">Item Name</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
            className="p-2 rounded-lg shadow-md border border-gray-300"
            placeholder="Enter item name"
          />
        </div>

        <div className="flex items-center space-x-6 bg-white rounded-lg p-4 shadow-md">
          <button
            type="button"
            onClick={decreaseQuantity}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-400 transition duration-300 disabled:bg-red-200"
            disabled={itemQuantity === 1}
          >
            -
          </button>
          <span className="text-xl font-bold text-gray-700">{itemQuantity}</span>
          <button
            type="button"
            onClick={increaseQuantity}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-400 transition duration-300 disabled:bg-green-200"
            disabled={itemQuantity === 20}
          >
            +
          </button>
        </div>

        <div className="flex flex-col">
          <label className="text-white font-semibold">Category</label>
          <select
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
            className="p-2 rounded-lg shadow-md border border-gray-300 bg-gray-800 text-white focus:bg-gray-700 focus:text-white"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-400 transition duration-300"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

