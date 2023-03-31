import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Layout;
