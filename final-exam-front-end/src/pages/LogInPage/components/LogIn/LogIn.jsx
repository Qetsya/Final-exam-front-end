const LogIn = ({ type, label }) => {
  const handleSubmit = () => {
    console.log({ label });
  };

  return (
    <button type={type} onClick={handleSubmit}>
      {label}
    </button>
  );
};

export default LogIn;
