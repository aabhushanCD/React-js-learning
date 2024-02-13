import styles from "./items.module.css";
const Item = ({ coffeeitems, handiling, isClicked }) => {
  // let {coffeeitems} = props

  return (
    <>
      <li className={`list-group-item aabhushan ${isClicked && "active"}`}>
        <span>{coffeeitems} </span>
        <button className={styles.BuyBtn} onClick={handiling}>
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
