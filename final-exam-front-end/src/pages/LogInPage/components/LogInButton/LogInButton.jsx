import styles from "../../../../components/button.module.css";
import formStyle from "../../../../components/form.module.css";
import { AiOutlineHourglass } from "react-icons/ai";

import { loginUser } from "../../../../services/loginUser.js";

import { useState } from "react";

const LogInButton = ({ type, label, authenticate, userData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const loginResponse = await loginUser(userData);
      authenticate(loginResponse.id);
    } catch (error) {
      setError("Email or password doesn't match");
      setTimeout(() => {
        setError(null);
      }, 10000);
    }
    setLoading(false);
  };

  return (
    <>
      {error && <span className={formStyle.error}>{error}</span>}
      <button className={styles.button} type={type} onClick={handleSubmit}>
        {loading ? <AiOutlineHourglass className={formStyle.loading} /> : label}
      </button>
    </>
  );
};

export default LogInButton;
