const Item = ({ name, quantity, category }) => (
  <li>
    {name} - {quantity} ({category})
  </li>
);
export default Item;

