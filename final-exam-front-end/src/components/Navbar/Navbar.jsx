import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const navbarLinks = [
  {
    label: "Home",
  },
  {
    label: "Products",
  },
  {
    label: "Contacts",
  },
];

const Navbar = ({ isAuthenticated }) => {
  const appName = process.env.REACT_APP_NAME;
  return (
    <>
      <div className={styles.navbar_style}>
        <h1 className={styles.title}>{appName}</h1>
        <div className={styles.navbar_link_container}>
          {isAuthenticated
            ? navbarLinks?.map((link, index) => {
                return (
                  <NavLink
                    className={styles.navbar_link_style}
                    key={link.label + index}
                    to={"/home"}
                  >
                    {link.label}
                  </NavLink>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
