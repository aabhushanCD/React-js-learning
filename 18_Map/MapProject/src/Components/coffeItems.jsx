import Item from "./items";
const CoffeeItems = ({ arg }) => {
  // let { arg } = props;
  return (
    <>
      <ul className="list-group">
        {arg.map((item) => (
          <Item key={item} coffeeitems={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default CoffeeItems;
