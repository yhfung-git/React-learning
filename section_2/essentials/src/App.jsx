import { useState } from "react";

import Header from "./components/Header";
import TabButton from "./components/TabButton";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import { EXAMPLES } from "./data";

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
    <>
      <Header />
      <main>
        <CoreConcepts />
        <section id="examples">
          <h2>Examples</h2>
          <menu>{tabButtons}</menu>
          {tabContent}
        </section>
      </main>
    </>
  );
};

export default App;
