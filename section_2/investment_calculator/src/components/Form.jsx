import Input from "./Input";

const Form = ({ values, onChange }) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    values;

  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          name="initialInvestment"
          label="Initial Investment ($)"
          onChange={onChange}
          value={initialInvestment}
        />
        <Input
          name="annualInvestment"
          label="Annual Investment ($)"
          onChange={onChange}
          value={annualInvestment}
        />
      </div>
      <div className="input-group">
        <Input
          name="expectedReturn"
          label="Expected Return (%)"
          onChange={onChange}
          value={expectedReturn}
        />
        <Input
          name="duration"
          label="Duration (Year)"
          onChange={onChange}
          value={duration}
        />
      </div>
    </section>
  );
};

export default Form;
