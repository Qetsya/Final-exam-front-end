import { routes } from "../../../../components/routes/routes";
import { Link } from "react-router-dom";

import styles from "../../../../components/button.module.css"

const Register = ({ label }) => {
  return <Link className={styles.button} to={routes.register.toString()}>{label}</Link>;
};

export default Register;
