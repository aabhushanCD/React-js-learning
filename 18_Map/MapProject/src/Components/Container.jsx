import styles from "./Container.module.css";

const Container = (prop) => {
  return <div className={styles.container}>{prop.children}</div>;
};

export default Container;
