function ItemCard({ item }) {
    const statusStyles = {
      done: { textDecoration: "line-through", color: "green" },
      "in progress": { fontWeight: "bold", color: "blue" },
      pending: { color: "grey" },
    };
  
    return (
      <li className="item-card">
        <h4 style={statusStyles[item.status]}>{item.title}</h4>
        <p>{item.description}</p>
        <span style={{ color: statusStyles[item.status].color }}>{item.status}</span>
      </li>
    );
  }
  
export default ItemCard;
