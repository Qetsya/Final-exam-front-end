import { routes } from "../../../../components/routes/routes";
import { Link } from "react-router-dom";

const Register = ({ label }) => {
  return <Link to={routes.register.toString()}>{label}</Link>;
};

export default Register;
