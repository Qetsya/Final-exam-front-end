import Input from "../../components/Input/Input";
import LogInButton from "./components/LogInButton/LogInButton";
import RegisterButton from "./components/RegisterButton/RegisterButton";
import Heading from "../../components/Heading/Heading";

import formStyle from "../../components/form.module.css";
import { useState } from "react";

const LogInPage = ({ authenticate }) => {
  const [user, setUser] = useState({});

  const getEmail = (value) => {
    setUser({ email: value });
  };

  const getPassword = (value) => {
    setUser({ ...user, password: value });
  };

  return (
    <div className={formStyle.root}>
      <div className={formStyle.form_container + " " + formStyle.container}>
        <Heading title={"Welcome!"} />
        <Input type={"email"} label={"Email"} onChange={getEmail} />
        <Input type={"password"} label={"Password"} onChange={getPassword} />
        <LogInButton
          type={"submit"}
          label={"Login"}
          authenticate={authenticate}
          userData={user}
        />
        <RegisterButton label={"Register"} />
      </div>
    </div>
  );
};

export default LogInPage;
