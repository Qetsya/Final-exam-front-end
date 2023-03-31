import Heading from "../../../components/Heading/Heading";
import Input from "../components/Input/Input";

import { useState } from "react";

const WizardStep2 = ({ loadPreviuosStep, register, userData }) => {
  const [firsNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [termsError, setTermsError] = useState(false);

  const validate = (data) => {
    setFirstNameError(false);
    setLastNameError(false);
    setTermsError(false);
    if (!data.firstName || !data.lastName || !data.terms) {
      if (!data.firstName) {
        setFirstNameError(true);
      }
      if (!data.lastName) {
        setLastNameError(true);
      }
      if (!data.terms) {
        setTermsError(true);
      }
      return false;
    }
    return true;
  };

  const onSubmit = async (data) => {
    const isValidationError = await validate(data);
    if (!isValidationError) return;
    console.log("you have submited!");
    console.log(data);
  };

  const previousStep = () => {
    loadPreviuosStep();
  };

  const getFirstName = (value) => (userData.firstName = value);
  const getLastName = (value) => (userData.lastName = value);
  const getAddress = (value) => (userData.address = value);
  const getGender = (value) => (userData.gender = value);
  const getTerms = (value) => (userData.terms = value);
  const getNewsLetter = (value) => (userData.newsletter = value);

  return (
    <div>
      <Heading title={"Register Step2"} />
      <Input
        type={"text"}
        label={"First Name"}
        name={"firstName"}
        register={register}
        onchange={getFirstName}
      />
      {firsNameError && <p>Please insert your name</p>}
      <Input
        type={"text"}
        label={"Last Name"}
        name={"lastName"}
        register={register}
        onchange={getLastName}
      />
      {lastNameError && <p>Please insert your last name</p>}
      <Input
        type={"text"}
        label={"Address"}
        name={"address"}
        register={register}
        onchange={getAddress}
      />

      <select name="gender">
        <option value="choose">Choose gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <Input
        type={"checkbox"}
        label={"I accept terms and conditions checkbox"}
        name={"terms"}
        register={register}
        onchange={getTerms}
      />
      {termsError && <p>Please agree to our terms and conditions</p>}
      <Input
        type={"checkbox"}
        label={"Subscribe to news letter"}
        name={"newsletter"}
        register={register}
        onchange={getNewsLetter}
      />

      <button type="button" onClick={previousStep}>
        Back
      </button>
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default WizardStep2;
