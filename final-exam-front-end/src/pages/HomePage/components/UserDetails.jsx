import styles from "./UserDetails.module.css";
import buttonStyle from "../../../components/button.module.css";
import { routes } from "../../../components/routes/routes";

import { useNavigate } from "react-router-dom";

const UserDetails = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const logout = () => {
    onLogout();
    navigate(routes.login, { replace: true });
  };

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Hello, {user.firstName}!</h2>
      <h3 className={styles.heading}>Your account details:</h3>
      <p className={styles.detail}>Email: {user.email}</p>
      <p className={styles.detail}>First name: {user.firstName}</p>
      <p className={styles.detail}>Last name: {user.lastName}</p>
      {user.address ? (
        <p className={styles.detail}>Address: {user.address}</p>
      ) : null}

      {user.gender ? (
        <p className={styles.detail}>Gender: {user.gender}</p>
      ) : null}

      {user.newsLetter ? (
        <p className={styles.detail}>Subscribtion to news letter: Yes</p>
      ) : null}

      <button className={buttonStyle.button} onClick={logout}>
        Log out
      </button>
    </div>
  );
};

export default UserDetails;
