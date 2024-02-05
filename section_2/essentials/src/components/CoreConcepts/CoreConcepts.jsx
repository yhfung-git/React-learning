import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        <CoreConcept concepts={CORE_CONCEPTS} />
      </ul>
    </section>
  );
};

export default CoreConcepts;
