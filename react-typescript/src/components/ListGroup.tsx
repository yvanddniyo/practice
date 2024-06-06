import { useState} from "react"

interface props {
    items: string[],
    heading: string
}

const ListGroup = ({items, heading}:props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const message = items.length === 0 ? <p>No item founds</p> : null; // we can type in better way of minize codes.

  return (
    <div>
      <h1>{heading}</h1>
      {message}
      {items.length === 0 && <p>No item founds</p>}{" "}
      {/* this is the better way for working on this */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index? "list-group-item active": "list-group-item" }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListGroup;
