import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Results({ input }) {
  const results = calculateInvestmentResults(input);
  const initialInvestment =
    results[0].valueEndOfYear - results[0].interest - results[0].annual;
  console.log(results);
  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (year)</th>
        <th>Total Interest</th>
        <th>Invested Cpital</th>
      </thead>
      {results.map((yearData) => {
        const totalInterest =
          yearData.valueEndOfYear -
          yearData.annual * yearData.year -
          initialInvestment;
        const totalAmountInvestment = yearData.valueEndOfYear - totalInterest;
        return (
          <>
            <tbody key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvestment)}</td>
            </tbody>
          </>
        );
      })}
    </table>
  );
}
