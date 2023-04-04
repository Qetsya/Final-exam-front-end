import { routes } from "../../../../components/routes/routes";
import { Link } from "react-router-dom";

import styles from "../../../../components/button.module.css";

const RegisterButton = ({ label }) => {
  return (
    <Link className={styles.button} to={routes.register}>
      {label}
    </Link>
  );
};

export default RegisterButton;
