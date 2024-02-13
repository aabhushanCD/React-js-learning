import { useState } from "react";
import Item from "./items";
const CoffeeItems = ({ arg }) => {
  // let { arg } = props;
  let [activeItem, setActive] = useState([]);
  let onBuyButton = (item) => {
    let newitem = [...activeItem, item];
    setActive(newitem);
  };
  return (
    <>
      <ul className="list-group">
        {arg.map((item) => (
          <Item
            key={item}
            coffeeitems={item}
            handiling={() => onBuyButton(item)}
            isClicked={activeItem.includes(item)}
          ></Item>
        ))}
      </ul>
    </>
  );
};

export default CoffeeItems;
