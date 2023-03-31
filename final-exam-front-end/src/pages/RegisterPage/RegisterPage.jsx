import WizardStep1 from "./Wizard/WizardStep1";
import WizardStep2 from "./Wizard/WizardSept2";

import { useState } from "react";
import { useForm } from "react-hook-form";

const user = {
  email: "",
  password: "",
  repeatPassword: "",
  firstName: "",
  lastName: "",
  address: "",
  gender: null,
  terms: false,
  newsletter: false,
};

const RegisterPage = () => {
  const [activeStep1, setActiveStep1] = useState(true);
  const [activeStep2, setActiveStep2] = useState(false);

  const { register, handleSubmit } = useForm({
    userData: user,
  });

  // const [userData, setUserData] = useState({});

  // const getData = (value) => {
  //   const newData = value;
  //   setUserData({ ...userData, newData });
  //   console.log(`Register PAGE `, userData);
  // };

  const onSubmit = (data) => {
    console.log(`Register page form data `, data);
  };

  return (
    <div>
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
          />
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
