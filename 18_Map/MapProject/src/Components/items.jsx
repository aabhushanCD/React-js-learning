import styles from "./items.module.css";
const Item = ({ coffeeitems }) => {
  // let {coffeeitems} = props
  const handleOnclick = (event) => {
    console.log(event);
    console.log(`${coffeeitems} id clicked`);
  };
  return (
    <>
      <li className="list-group-item aabhushan">
        <span>{coffeeitems} </span>
        <button
          className={styles.BuyBtn}
          onClick={(event) => handleOnclick(event)}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
