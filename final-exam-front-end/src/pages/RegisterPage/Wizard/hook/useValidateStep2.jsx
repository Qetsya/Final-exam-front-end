import { useState } from "react";

const useValidateStep2 = () => {
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
  return { firsNameError, lastNameError, termsError, validate };
};

export default useValidateStep2;
