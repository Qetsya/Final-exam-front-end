import WizardStep1 from "./Wizard/WizardStep1";
import WizardStep2 from "./Wizard/WizardSept2";

import { useState } from "react";
import { useForm } from "react-hook-form";

import formStyle from "../form.module.css"

const user = {
  email: "",
  password: "",
  repeatPassword: "",
  firstName: "",
  lastName: "",
  address: "",
  gender: "",
  terms: false,
  newsLetter: false,
}

const RegisterPage = () => {
  const [activeStep1, setActiveStep1] = useState(true);
  const [activeStep2, setActiveStep2] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: user,
  });

  const onSubmit = () => {
    console.log(`Register page form data `, user);
  };

  return (
    <div className={formStyle.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {activeStep1 && (
          <WizardStep1
            loadNextStep={() => {
              setActiveStep1(false);
              setActiveStep2(true);
            }}
            register={register}
            userData={user}
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
          />
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
