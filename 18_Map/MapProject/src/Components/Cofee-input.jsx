import styles from "./cofee-input.module.css";
const CoffeeInput = ({handleKeyDown}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter the other items"
        className={styles.coffeeinput}
        onKeyDown={handleKeyDown}
      ></input>
    </>
  );
};
export default CoffeeInput;
