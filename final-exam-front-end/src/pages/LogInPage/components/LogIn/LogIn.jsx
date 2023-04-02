import styles from "../../../../components/button.module.css"
const LogIn = ({ type, label, authenticate }) => {

  const handleSubmit = () => {
    authenticate();
  };

  return (
    <button className={styles.button} type={type} onClick={handleSubmit}>
      {label}
    </button>
  );
};

export default LogIn;
