import PropTypes from 'prop-types';
import { showYenHelper } from '../helper';
import { AoiroKozyo, IncomeTaxBasicKozyo, ResidentTaxBasicKozyo } from '../const';

function Condition({age, sales, expenses, incomeTaxKozyoOther, residentTaxKozyoOther, handleChange, handleSubmit}) {

  return (
    <div className='block'>
      <h2 className='title is-5'>手取りシミュレーション条件</h2>
      <div className='table-container'>
        <table className='table simulation-condition'>
          <tbody>
            <tr>
              <th>年齢</th>
              <td><input type="number" value={age ?? ''} name="age" onChange={handleChange} /></td>
            </tr>
            <tr>
              <th>売上</th>
              <td><input type="number" value={sales ?? ''} name="sales" onChange={handleChange} /></td>
            </tr>
            <tr>
              <th>経費</th>
              <td>
                <input type="number" value={expenses ?? ''} name="expenses" onChange={handleChange} /><br />
                <span className='is-size-7 has-text-danger'>※ 前年の消費税納税額を除いた経費を入力。消費税は自動で加算されます。</span>
              </td>
            </tr>
            <tr>
              <th>青色申告<br />特別控除</th>
              <td>{showYenHelper(AoiroKozyo)}</td>
            </tr>
            <tr>
              <th>所得税<br />所得控除</th>
              <td>
                所得税基礎控除: {showYenHelper(IncomeTaxBasicKozyo)}<br />
                社会保険料控除: 自動計算<br />
                その他: <input type="number" value={incomeTaxKozyoOther ?? ''} name="incomeTaxKozyoOther" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>住民税<br />所得控除</th>
              <td>
                基礎控除: {showYenHelper(ResidentTaxBasicKozyo)}<br />
                社会保険料控除: 自動計算<br />
                その他: <input type="number" value={residentTaxKozyoOther ?? ''} name="residentTaxKozyoOther" onChange={handleChange} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='has-text-centered'>
        <button className='button is-primary' onClick={handleSubmit}>計算</button>
      </div>
    </div>
  );
}

Condition.propTypes = {
  age: PropTypes.number,
  sales: PropTypes.number,
  expenses: PropTypes.number,
  incomeTaxKozyoOther: PropTypes.number,
  residentTaxKozyoOther: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

Condition.defaultProps = {
  age: 0,
  sales: 0,
  expenses: 0,
  incomeTaxKozyoOther: 0,
  residentTaxKozyoOther: 0,
  handleChange: () => {},
  handleSubmit: () => {},
}

export default Condition;
