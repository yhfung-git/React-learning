import { useState } from "react";

import { log } from "../../log";

const CounterConfigure = ({ onSet }) => {
  log("<CounterConfigure /> rendered", 1);

  const [enteredNumber, setEnteredNumber] = useState(0);

  const handleChange = (event) => {
    setEnteredNumber(+event.target.value);
  };

  const handleSetClick = () => {
    onSet(enteredNumber);
    setEnteredNumber(0);
  };

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
};

export default CounterConfigure;
