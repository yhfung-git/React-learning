import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";
import Section from "../Section";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        <CoreConcept concepts={CORE_CONCEPTS} />
      </ul>
    </Section>
  );
};

export default CoreConcepts;
