import styles from "../../../../components/Input/Input.module.css"

const Input = ({ label, type, name, register, onChange, disabled }) => {
  const getValue = (e) => {
    const value = e.target.value;
    onChange?.(value);
  };

  return (
    <div className={styles.root}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={label}
        {...register(name)}
        onChange={getValue}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
