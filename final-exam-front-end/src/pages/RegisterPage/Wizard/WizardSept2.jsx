import Heading from "../../../components/Heading/Heading";
import Input from "../components/Input/Input";
import Select from "../components/Select/Select";

import useValidateStep2 from "./hook/useValidateStep2";
import { useEffect, useState } from "react";
import { AiOutlineHourglass } from "react-icons/ai";

import styles from "../../../components/form.module.css";
import buttonStyle from "../../../components/button.module.css";

const WizardStep2 = ({
  loadPreviuosStep,
  register,
  userData,
  submit,
  serverError,
}) => {
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(null);
  const { firsNameError, lastNameError, termsError, validate } =
    useValidateStep2();

  useEffect(() => {
    if (serverError) {
      setError(serverError);
      setIsDisabled(false);
      setTimeout(() => {
        setError(null);
      }, 10000);
    }
  }, [serverError]);

  const beforeSubmit = async () => {
    setLoading(true);
    const isValidationError = await validate(userData);
    if (!isValidationError) {
      setLoading(false);
      setError("Failed to register");
      return;
    }
    setIsDisabled(true);
    await submit();
    setLoading(false);
  };

  const previousStep = () => {
    loadPreviuosStep();
  };

  const getFirstName = (value) => (userData.firstName = value);
  const getLastName = (value) => (userData.lastName = value);
  const getAddress = (value) => (userData.address = value);
  const getGender = (value) => (userData.gender = value);
  const getTerms = (value) => (userData.terms = value === "on" ? true : false);
  const getNewsLetter = (value) =>
    (userData.newsLetter = value === "on" ? true : false);

  return (
    <div className={styles.container}>
      <Heading title={"Register"} />
      <Input
        type={"text"}
        label={"First Name"}
        name={"firstName"}
        register={register}
        onChange={getFirstName}
        disabled={isDisabled}
      />
      {firsNameError && (
        <span className={styles.error}>Please insert your name</span>
      )}

      <Input
        type={"text"}
        label={"Last Name"}
        name={"lastName"}
        register={register}
        onChange={getLastName}
        disabled={isDisabled}
      />
      {lastNameError && (
        <span className={styles.error}>Please insert your last name</span>
      )}

      <Input
        type={"text"}
        label={"Address"}
        name={"address"}
        register={register}
        onChange={getAddress}
        disabled={isDisabled}
      />

      <Select register={register} onChange={getGender} />

      <Input
        type={"checkbox"}
        label={"I accept terms and conditions"}
        name={"terms"}
        register={register}
        onChange={getTerms}
        disabled={isDisabled}
      />
      {termsError && (
        <span className={styles.error}>
          Please agree to our terms and conditions
        </span>
      )}

      <Input
        type={"checkbox"}
        label={"Subscribe to news letter"}
        name={"newsletter"}
        register={register}
        onChange={getNewsLetter}
        disabled={isDisabled}
      />
      {error && <span className={styles.error}>{error}</span>}

      <button
        className={buttonStyle.button}
        type="button"
        onClick={previousStep}
      >
        Back
      </button>

      <button
        className={buttonStyle.button}
        type="button"
        onClick={beforeSubmit}
      >
        {loading ? <AiOutlineHourglass className={styles.loading} /> : "Submit"}
      </button>
    </div>
  );
};

export default WizardStep2;
