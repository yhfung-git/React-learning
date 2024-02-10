import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { calculateInvestmentResults } from "../util/investment";

const Result = ({ values }) => {
  const annualData = calculateInvestmentResults(values);

  return (
    <table id="result">
      <TableHead />
      <TableBody
        annualData={annualData}
        initialInvestment={values.initialInvestment}
      />
    </table>
  );
};

export default Result;
