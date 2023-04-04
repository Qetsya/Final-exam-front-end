import { useState } from "react";
import { validEmail, validPassword } from "../regex";

const useValidateStep1 = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const validate = (data) => {
    setEmailError(false);
    setPasswordMatchError(false);
    setPasswordError(false);
    if (
      validEmail.test(data.email) &&
      validPassword.test(data.password) &&
      data.password === data.repeatPassword
    ) {
      return true;
    }

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
  };
  return { emailError, passwordError, passwordMatchError, validate };
};

export default useValidateStep1;
