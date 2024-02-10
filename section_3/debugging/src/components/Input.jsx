const Input = ({ name, label, value, onChange }) => {
  const handleChange = (event) => {
    onChange(name, +event.target.value);
  };

  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="number"
        min="1"
        value={value}
        onChange={handleChange}
        required
      />
    </p>
  );
};

export default Input;
