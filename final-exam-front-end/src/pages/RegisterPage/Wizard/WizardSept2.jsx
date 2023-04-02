import Heading from "../../../components/Heading/Heading";
import Input from "../components/Input/Input";
import Select from "../components/Select/Select";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../../form.module.css";
import buttonStyle from "../../../components/button.module.css"

const WizardStep2 = ({ loadPreviuosStep, register, userData, submit }) => {
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [firsNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const navigate = useNavigate();

  const validate = (data) => {
    console.log(`step2 validation data`, data)
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

  const onSubmit = async () => {
    const isValidationError = await validate(userData);
    if (!isValidationError) return;
    setLoading(true);
    submit();
    setIsDisabled(true);
    setLoading(false);
    console.log("you have submited!");
    navigate(-1);
  };

  const previousStep = () => {
    loadPreviuosStep();
  };

  const getFirstName = (value) => (userData.firstName = value);
  const getLastName = (value) => (userData.lastName = value);
  const getAddress = (value) => (userData.address = value);
  const getGender = (value) => (userData.gender = value);
  const getTerms = (value) => (userData.terms = value);
  const getNewsLetter = (value) => (userData.newsLetter = value);

  return (
    <div className={styles.form_container}>
      <Heading title={"Register"} />
      <Input
        type={"text"}
        label={"First Name"}
        name={"firstName"}
        register={register}
        onChange={getFirstName}
        disabled={isDisabled}
      />
      {firsNameError && <p>Please insert your name</p>}
      <Input
        type={"text"}
        label={"Last Name"}
        name={"lastName"}
        register={register}
        onChange={getLastName}
        disabled={isDisabled}
      />
      {lastNameError && <p>Please insert your last name</p>}
      <Input
        type={"text"}
        label={"Address"}
        name={"address"}
        register={register}
        onChange={getAddress}
        disabled={isDisabled}
      />

    <Select register={register} onChange={getGender}/>


      <Input
        type={"checkbox"}
        label={"I accept terms and conditions"}
        name={"terms"}
        register={register}
        onChange={getTerms}
        disabled={isDisabled}
      />
      {termsError && <p>Please agree to our terms and conditions</p>}
      <Input
        type={"checkbox"}
        label={"Subscribe to news letter"}
        name={"newsletter"}
        register={register}
        onChange={getNewsLetter}
        disabled={isDisabled}
      />

      <button className={buttonStyle.button} type="button" onClick={previousStep}>
        Back
      </button>
      <button className={buttonStyle.button} type="button" onClick={onSubmit}>
        {loading ? "Loading" : "Submit"}
      </button>
    </div>
  );
};

export default WizardStep2;
