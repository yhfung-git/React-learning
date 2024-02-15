const Answer = ({ answer, onSelect }) => {
  return (
    <li className="answer">
      <button onClick={() => onSelect(answer)}>{answer}</button>
    </li>
  );
};

export default Answer;
