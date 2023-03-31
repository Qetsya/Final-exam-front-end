import Heading from "../../../components/Heading/Heading";
import Input from "../components/Input/Input";
import { validEmail, validPassword } from "./regex.js";

import { useState } from "react";

const WizardStep1 = ({ loadNextStep, register, userData }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const nextStep = async () => {
    console.log(`step1 validate data `, userData);
    const isValidationError = await validate(userData);
    if (!isValidationError) return;
    loadNextStep();
  };

  const validate = (data) => {
    setEmailError(false);
    setPasswordMatchError(false);
    setPasswordError(false);
    if (
      !validEmail.test(data.email) ||
      !validPassword.test(data.password) ||
      data.password !== data.repeatPassword
    ) {
      if (!validEmail.test(data.email)) {
        setEmailError(true);
      }
      if (!validPassword.test(data.password)) {
        setPasswordError(true);
      }
      if (data.password !== data.repeatPassword) {
        setPasswordMatchError(true);
      }
      return false;
    }
    return true;
  };

  const getEmail = (value) => {
    userData.email = value;
  };

  const getPassword = (value) => {
    userData.password = value;
  };

  const getRepPassword = (value) => {
    userData.repeatPassword = value;
  };

  return (
    <div>
      <Heading title={"Register Step1"} />
      <Input
        type={"email"}
        label={"Email"}
        name={"email"}
        register={register}
        onchange={getEmail}
      />
      {emailError && <p>Please insert a valid email address</p>}
      <Input
        type={"password"}
        label={"Password"}
        name={"password"}
        register={register}
        onchange={getPassword}
      />
      {passwordError && (
        <p>
          Your passwords must have at least 8 characters, contain an uppercase
          letter and a number.
        </p>
      )}
      <Input
        type={"password"}
        label={"Repeat password"}
        name={"repeatPassword"}
        register={register}
        onchange={getRepPassword}
      />
      {passwordMatchError && <p>Your passwords must match</p>}

      <button type="button" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};

export default WizardStep1;
