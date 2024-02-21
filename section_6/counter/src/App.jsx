import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import CounterConfigure from "./components/Counter/CounterConfigure.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";

const App = () => {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  const handleSetCount = (newCount) => {
    setChosenCount(newCount);
  };

  return (
    <>
      <Header />
      <main>
        <CounterConfigure onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
};

export default App;
