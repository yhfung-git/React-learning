import { useState } from "react";

import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

const App = () => {
  const [content, setContent] = useState();

  const selectHandler = (selectedButton) => {
    setContent(selectedButton);
  };

  const tabContent = !content ? (
    <p>Please select a topic.</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[content].title}</h3>
      <p>{EXAMPLES[content].description}</p>
      <pre>
        <code>{EXAMPLES[content].code}</code>
      </pre>
    </div>
  );

  const tabButtons = Object.keys(EXAMPLES).map((id) => (
    <TabButton
      key={id}
      isSelected={content === id}
      onSelect={() => selectHandler(id)}
    >
      {EXAMPLES[id].title}
    </TabButton>
  ));

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
          <menu>{tabButtons}</menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
};

export default App;
