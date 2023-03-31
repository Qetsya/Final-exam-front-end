const Input = ({ label, type }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} name={label} />
    </div>
  );
};

export default Input;
