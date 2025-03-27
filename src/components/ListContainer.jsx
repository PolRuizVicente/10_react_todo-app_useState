import ListHeader from "./ListHeader";
import ItemsList from "./ItemsList";

function ListContainer({ title, items }) {
  return (
    <div className="list-container">
      <ListHeader content={title} />
      <ItemsList itemsList={items} />
    </div>
  );
}

export default ListContainer;
