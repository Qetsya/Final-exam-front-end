import Heading from "../../../components/Heading/Heading";
import Input from "../components/Input/Input";
import { routes } from "../../../components/routes/routes";
import { Link } from "react-router-dom";

import useValidateStep1 from "./hook/useValidateStep1";

import styles from "../../../components/form.module.css";
import buttonStyle from "../../../components/button.module.css";

const WizardStep1 = ({ loadNextStep, register, userData, emptyUserData }) => {
  const { emailError, passwordError, passwordMatchError, validate } =
    useValidateStep1();

  const nextStep = async () => {
    const isValidationError = await validate(userData);
    if (!isValidationError) return;
    loadNextStep();
  };

  const getEmail = (value) => (userData.email = value);
  const getPassword = (value) => (userData.password = value);
  const getRepPassword = (value) => (userData.repeatPassword = value);

  return (
    <div className={styles.container}>
      <Heading title={"Register"} />
      <Input
        type={"email"}
        label={"Email"}
        name={"email"}
        register={register}
        onChange={getEmail}
      />
      {emailError && (
        <span className={styles.error}>
          Please insert a valid email address
        </span>
      )}
      <Input
        type={"password"}
        label={"Password"}
        name={"password"}
        register={register}
        onChange={getPassword}
      />
      {passwordError && (
        <span className={styles.error}>
          Your passwords must have at least 6 characters, <br></br>contain an
          uppercase letter and a number
        </span>
      )}
      <Input
        type={"password"}
        label={"Repeat password"}
        name={"repeatPassword"}
        register={register}
        onChange={getRepPassword}
      />
      {passwordMatchError && (
        <span className={styles.error}>Your passwords must match</span>
      )}

      <button className={buttonStyle.button} type="button" onClick={nextStep}>
        Next
      </button>
      <Link className={styles.back} to={routes.login} onClick={emptyUserData}>
        Go back
      </Link>
    </div>
  );
};

export default WizardStep1;
