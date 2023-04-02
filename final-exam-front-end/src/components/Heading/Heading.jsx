import styles from "./Heading.module.css"

const Heading = ({ title }) => {
  return <h2 className={styles.heading}>{title}</h2>;
};

export default Heading;
