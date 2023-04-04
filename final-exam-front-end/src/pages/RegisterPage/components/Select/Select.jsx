import styles from "./Select.module.css";

const Select = ({ register, onChange }) => {
  const getValue = (e) => {
    const value = e.target.value;
    onChange?.(value);
  };

  return (
    <select
      className={styles.select}
      name="gender"
      {...register("gender")}
      onChange={getValue}
    >
      <option value="">Choose gender...</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  );
};

export default Select;
