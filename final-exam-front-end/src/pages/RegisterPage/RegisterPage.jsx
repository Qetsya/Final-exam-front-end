import WizardStep1 from "./Wizard/WizardStep1";
import WizardStep2 from "./Wizard/WizardSept2";
import { registerUser } from "../../services/registerUser";
import { routes } from "../../components/routes/routes";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import formStyle from "../../components/form.module.css";

let user = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  address: "",
  gender: "",
  terms: false,
  newsLetter: false,
};

const RegisterPage = () => {
  const [activeStep1, setActiveStep1] = useState(true);
  const [activeStep2, setActiveStep2] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { register } = useForm({
    defaultValues: user,
  });

  const onSubmit = async () => {
    try {
      await registerUser(user);
      navigate(routes.login);
      user = {};
    } catch (error) {
      setError("Failed to register");
      setTimeout(() => {
        setError(null);
      }, 1000);
    }
  };

  return (
    <div className={formStyle.root}>
      <form className={formStyle.form_container}>
        {activeStep1 && (
          <WizardStep1
            loadNextStep={() => {
              setActiveStep1(false);
              setActiveStep2(true);
            }}
            register={register}
            userData={user}
            emptyUserData={() => (user = {})}
          />
        )}
        {activeStep2 && (
          <WizardStep2
            loadPreviuosStep={() => {
              setActiveStep1(true);
              setActiveStep2(false);
            }}
            register={register}
            userData={user}
            submit={onSubmit}
            serverError={error}
          />
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
