const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center p-3 bg-gray-800 rounded-md shadow mb-2">
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-50">{name}</span>
        <span className="text-sm text-gray-400">Category: {category}</span>
      </div>
      <span className="text-sm text-gray-400">Qty: {quantity}</span>
    </li>
  );
};

export default Item;
