import "./CoreConcept.css";

const CoreConcept = (props) => {
  return props.concepts.map((concept) => {
    return (
      <li key={concept.title}>
        <img src={concept.image} alt={concept.title} />
        <h3>{concept.title}</h3>
        <p>{concept.description}</p>
      </li>
    );
  });
};

export default CoreConcept;
