const Input = ({ label, type, name, register, onchange, value }) => {
  const getValue = (e) => {
    const value = e.target.value;
    onchange?.(value);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={label}
        {...register(name)}
        onChange={getValue}
        value={value}
      />
    </div>
  );
};

export default Input;
