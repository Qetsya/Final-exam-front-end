import styles from "./Input.module.css"

const Input = ({ label, type }) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={label}>{label}</label>
      <input type={type} name={label} placeholder={label}/>
    </div>
  );
};

export default Input;
