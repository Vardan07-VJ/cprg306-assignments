"use client";

import React, { useState } from 'react';
import Item from './Item';

const ItemList = ({ items }) => { 
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const toggleGroupByCategory = () => {
    setGroupByCategory(prev => !prev);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = groupByCategory
    ? sortedItems.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
      }, {})
    : null;

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => handleSort("name")}
          className={`px-4 py-2 rounded-lg ${sortBy === "name" ? "bg-blue-600 text-white" : "bg-blue-300"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSort("category")}
          className={`px-4 py-2 rounded-lg ${sortBy === "category" ? "bg-blue-600 text-white" : "bg-blue-300"}`}
        >
          Sort by Category
        </button>
        <button
          onClick={toggleGroupByCategory}
          className={`px-4 py-2 rounded-lg ${groupByCategory ? "bg-green-500 text-white" : "bg-red-500"}`}
        >
          {groupByCategory ? "Ungroup by Category" : "Group by Category"}
        </button>
      </div>

      <ul className="space-y-4">
        {groupByCategory
          ? Object.keys(groupedItems).map((category) => (
              <div key={category}>
                <h3 className="capitalize text-xl font-bold">{category}</h3>
                <ul>
                  {groupedItems[category].map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </ul>
              </div>
            ))
          : sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
      </ul>
    </div>
  );
};

export default ItemList;
