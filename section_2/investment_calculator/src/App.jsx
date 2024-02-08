import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";

const App = () => {
  const [values, setValues] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (name, newValue) => {
    setValues((preValues) => {
      return { ...preValues, [name]: newValue };
    });
  };

  const isValid = Object.values(values).every((value) => value > 0);

  return (
    <>
      <Header />
      <Form values={values} onChange={handleChange} />
      {isValid && <Result values={values} />}
      {!isValid && (
        <p className="center">
          Please enter values greater than 1 for all fields.
        </p>
      )}
    </>
  );
};

export default App;
