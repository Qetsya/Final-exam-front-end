import styles from "./Input.module.css";

const Input = ({ label, type, onChange }) => {
  const getValue = (e) => {
    const value = e.target.value;
    onChange?.(value);
  };

  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <input type={type} name={label} placeholder={label} onChange={getValue} />
    </div>
  );
};

export default Input;
