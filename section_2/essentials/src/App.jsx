import { useState } from "react";

import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";

const App = () => {
  const [content, setContent] = useState("");

  const selectHandler = (selectedButton) => {
    setContent(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept concepts={CORE_CONCEPTS} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => selectHandler("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => selectHandler("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => selectHandler("props")}>Props</TabButton>
            <TabButton onSelect={() => selectHandler("state")}>State</TabButton>
          </menu>
          {content}
        </section>
      </main>
    </div>
  );
};

export default App;
