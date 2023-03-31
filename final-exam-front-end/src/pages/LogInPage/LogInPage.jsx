import Input from "../../components/Input/Input";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Heading from "../../components/Heading/Heading";

const LogInPage = () => {
  return (
    <div>
      <div>
        <Heading title={"Log In"} />
        <Input type={"email"} label={"Email"} />
        <Input type={"password"} label={"Password"} />
        <LogIn type={"submit"} label={"Log In"} />
        <Register label={"Register"} />
      </div>
    </div>
  );
};

export default LogInPage;
