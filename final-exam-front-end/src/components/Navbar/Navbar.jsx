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

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar_style}>
        <h1 className={styles.title}>Your APP</h1>
      <div className={styles.navbar_link_container}>
        {navbarLinks?.map((link) => {
          return (
            <NavLink
              className={styles.navbar_link_style}
              key={link.label}
              to={""}
            >
              {link.label}
            </NavLink>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Navbar;
