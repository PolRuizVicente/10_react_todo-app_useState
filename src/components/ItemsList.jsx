import ItemCard from "./ItemCard";

function ItemsList({ itemsList }) {
  return (
    <ul className="items-list">
      {itemsList.map((item) => (
        <li key={item.id}>
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ItemsList;
