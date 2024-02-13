import styles from "./Buttons.module.css";
let Buttons = ({ ArrayBtn, handleOnclick }) => {
  return (
    <div>
      {ArrayBtn.map((btn) => (
        <button
          key={btn}
          className={styles.Buttons_}
          onClick={() => handleOnclick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
