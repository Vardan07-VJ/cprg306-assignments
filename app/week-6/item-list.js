'use client';
import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
  const [sortCriteria, setSortCriteria] = useState('name');

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortCriteria === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  const groupItemsByCategory = () => {
    return sortedItems.reduce((acc, item) => {
      const { category } = item;
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {});
  };

  const categorizedItems = groupItemsByCategory();

  return (
    <div>
      <div>
        <button
          onClick={() => setSortCriteria('name')}
          style={{ backgroundColor: sortCriteria === 'name' ? 'lightblue' : 'white' }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortCriteria('category')}
          style={{ backgroundColor: sortCriteria === 'category' ? 'lightblue' : 'white' }}
        >
          Sort by Category
        </button>
      </div>

      <h2>Grouped by Category:</h2>
      {Object.keys(categorizedItems).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {categorizedItems[category].map((item) => (
              <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

