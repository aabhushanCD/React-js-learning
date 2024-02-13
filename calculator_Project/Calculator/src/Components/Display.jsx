import styles from "./Display.module.css";
function Display({ displayValue }) {
  return (
    <div>
      <input
        placeholder="Displaying!!!"
        className={styles.Screen}
        readOnly
        value={displayValue}
      ></input>
    </div>
  );
}

export default Display;
