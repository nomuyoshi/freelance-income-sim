import PropTypes from 'prop-types';
import { useLayoutEffect, useRef } from 'react';
import { showYenHelper } from '../helper';

import TweetButton from './TweetButton';

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
    <div className='container'>
      <div ref={scrollBottomRef} />
      <hr />

      <div className='has-text-right'>
        <TweetButton />
      </div>
      <h2 className='title is-5'>
        <span className='icon-text has-text-success'>
          <span className='icon'><i class='fas fa-yen-sign'></i></span>
        </span>
        手取りシミュレーション結果
      </h2>
      <table className='table is-fullwidth'>
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
            <td><span className='is-underlined has-text-weight-bold'>{showYenHelper(receivedIncome)}</span></td>
          </tr>
        </tbody>
      </table>
      <section className='section p-4'>
        <article className='message is-warning'>
          <div className='message-header'>
            <p>ご利用上の注意</p>
          </div>
          <div className='message-body content is-size-7'>
            シミュレーション結果は概算のため実際の手取り額と異なる場合があります。<br />
            特に以下の条件に当てはまる場合、サイト上部に記載の前提条件から外れるため誤差が大きく生じる可能性があります。
            <ul>
              <li>売上5,000万円超</li>
              <li>所得250万円未満</li>
              <li>所得2400万円超</li>
            </ul>
          </div>
        </article>
      </section>
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
