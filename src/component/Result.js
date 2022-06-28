import PropTypes from 'prop-types';
import { useLayoutEffect, useRef } from 'react';
import { showYenHelper } from '../helper';

function Result({ sales, expenses, consumptionTax, incomeTax, residentTax, nenkin, kenkoHoken }) {
  const totalExpenses = expenses + consumptionTax;
  const receivedIncome = sales - expenses - consumptionTax -
    incomeTax - residentTax - nenkin - kenkoHoken;

  const scrollBottomRef = useRef(null);
  useLayoutEffect(() => {
    if(scrollBottomRef && scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView();
    }
  }, [scrollBottomRef]);
  return (
    <div className='block'>
      <hr />
      <h2 className='title is-5'>手取りシミュレーション結果</h2>
      <table className='table'>
        <tbody>
          <tr>
            <th>売上</th>
            <td>{showYenHelper(sales)}</td>
          </tr>
          <tr>
            <th>経費</th>
            <td>{showYenHelper(totalExpenses)}<br />(消費税納税額{showYenHelper(consumptionTax)}含む)
            </td>
          </tr>
          <tr>
            <th>所得税</th>
            <td>{showYenHelper(incomeTax)}</td>
          </tr>
          <tr>
            <th>住民税</th>
            <td>{showYenHelper(residentTax)}</td>
          </tr>
          <tr>
            <th>国民年金</th>
            <td>{showYenHelper(nenkin)}</td>
          </tr>
          <tr>
            <th>国民健康保険</th>
            <td>{showYenHelper(kenkoHoken)}</td>
          </tr>
          <tr>
            <th>手取り</th>
            <td>{showYenHelper(receivedIncome)}</td>
          </tr>
        </tbody>
      </table>
      <div ref={scrollBottomRef} />
    </div>
  );
}

Result.propTypes = {
  sales: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  consumptionTax: PropTypes.number.isRequired,
  incomeTax: PropTypes.number.isRequired,
  residentTax: PropTypes.number.isRequired,
  nenkin: PropTypes.number.isRequired,
  kenkoHoken: PropTypes.number.isRequired,
};

export default Result;