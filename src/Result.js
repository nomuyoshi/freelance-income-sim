
function Result(props) {
  const expenses = props.expenses + props.consumptionTax;
  const receivedIncome = props.sales - props.expenses - props.consumptionTax -
    props.incomeTax - props.residentTax - props.nenkin - props.kenkoHoken;
  return (
    <table className='table'>
      <tbody>
        <tr>
          <th>売上</th>
          <td>{props.sales}</td>
        </tr>
        <tr>
          <th>経費</th>
          <td>{expenses}(消費税納税額{props.consumptionTax}円含む)
          </td>
        </tr>
        <tr>
          <th>所得税</th>
          <td>{props.incomeTax}</td>
        </tr>
        <tr>
          <th>住民税</th>
          <td>{props.residentTax}</td>
        </tr>
        <tr>
          <th>国民年金</th>
          <td>{props.nenkin}</td>
        </tr>
        <tr>
          <th>国民健康保険</th>
          <td>{props.kenkoHoken}</td>
        </tr>
        <tr>
          <th>手取り</th>
          <td>{receivedIncome}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Result;
