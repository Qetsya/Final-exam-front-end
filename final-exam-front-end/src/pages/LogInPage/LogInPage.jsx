import Input from "../../components/Input/Input";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Heading from "../../components/Heading/Heading";

import formStyle from "../form.module.css"

const LogInPage = ({authenticate}) => {
  return (
    <div className={formStyle.root}>
      <div className={formStyle.form_container}>
        <Heading title={"Welcome!"} />
        <Input type={"email"} label={"Email"} />
        <Input type={"password"} label={"Password"} />
        <LogIn type={"submit"} label={"Login"} authenticate={authenticate}/>
        <Register label={"Register"} />
      </div>
    </div>
  );
};

export default LogInPage;
