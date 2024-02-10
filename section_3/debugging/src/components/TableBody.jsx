import { formatter } from "../util/investment";

const TableBody = ({ annualData, initialInvestment }) => {
  return (
    <tbody>
      {annualData.map((data) => {
        const { year, interest, valueEndOfYear, annualInvestment } = data;
        const totalInterest =
          valueEndOfYear - annualInvestment * year - initialInvestment;
        const totalAmountInvested = valueEndOfYear - totalInterest;

        return (
          <tr key={year}>
            <td>{year}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
