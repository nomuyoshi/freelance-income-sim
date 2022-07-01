import PropTypes from 'prop-types';
import { useState } from 'react';
import { showYenHelper } from '../helper';
import { AoiroKozyo, IncomeTaxBasicKozyo, ResidentTaxBasicKozyo } from '../const';
import Modal from './Modal';

function Condition({age, sales, expenses, incomeTaxKozyoOther, residentTaxKozyoOther,
  consumptionTaxable, handleChange, handleSubmit, canSubmit}) {
  const [showModal, setShowModal] = useState(false);

  const questionIcon = () => {
    return (
      <span className="icon-text" style={{cursor: 'pointer'}} onClick={() => {setShowModal(true)}}>
        <span className="icon has-text-info">
          <i className="fas fa-circle-question"></i>
        </span>
      </span>
    );
  };

  return (
    <div className='block'>
      <h2 className='title is-5'>手取りシミュレーション条件</h2>
      <div className='table-container'>
        <table className='table simulation-condition'>
          <tbody>
            <tr>
              <th>年齢</th>
              <td><input type='number' value={age ?? ''} name='age' onChange={handleChange} /></td>
            </tr>
            <tr>
              <th>売上</th>
              <td>
                <div className='field'>
                  <div className='control'>
                    <input type='number' value={sales ?? ''} name='sales' onChange={handleChange} />
                  </div>
                </div>
                <div className='field'>
                  <div className='control'>
                    <label className='checkbox'>
                      <input type='checkbox' name='consumptionTaxable' onChange={handleChange} checked={consumptionTaxable} />
                      消費税課税事業者
                    </label>
                  </div>
                </div>
              </td>
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
                基礎控除: {showYenHelper(IncomeTaxBasicKozyo)}<br />
                社会保険料控除: 自動計算<br />
                その他: <input type="number" value={incomeTaxKozyoOther ?? ''} name="incomeTaxKozyoOther" onChange={handleChange} />
                {questionIcon()}
              </td>
            </tr>
            <tr>
              <th>住民税<br />所得控除</th>
              <td>
                基礎控除: {showYenHelper(ResidentTaxBasicKozyo)}<br />
                社会保険料控除: 自動計算<br />
                その他: <input type="number" value={residentTaxKozyoOther ?? ''} name="residentTaxKozyoOther" onChange={handleChange} />
                {questionIcon()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='has-text-centered'>
        <button className='button is-primary' disabled={!canSubmit} onClick={handleSubmit}>計算</button>
      </div>
      <Modal title='所得控除？' handleClose={() => setShowModal(false)} visible={showModal}>
        <div>
          <strong>基礎控除、社会保険料控除以外の所得控除額を入力してください。</strong>
          <br />
          <br />
          【Tips】「小規模企業共済等掛金控除」を利用して節税するのが一般的<br />
          「小規模企業共済等掛金控除」とはiDeCoや小規模企業共済の掛金が全額所得控除となる制度です。<br />
          <br />
          iDeCoや小規模企業共済に上限額まで拠出した場合、所得控除額は次の通り。
          <div className='content'>
            <ul>
              <li>iDeCo(掛金6.8万円/月) → 6.8万円 x 12ヶ月 = <strong>81.6万円</strong></li>
              <li>小規模企業共済(掛金7万円/月) → 7万円 x 12ヶ月 = <strong>84万円</strong></li>
            </ul>
          </div>
          <span className='is-size-7'>※ iDeCoと小規模企業共済は併用可能</span>
        </div>
      </Modal>
    </div>
  );
}

Condition.propTypes = {
  age: PropTypes.number,
  sales: PropTypes.number,
  expenses: PropTypes.number,
  incomeTaxKozyoOther: PropTypes.number,
  residentTaxKozyoOther: PropTypes.number,
  consumptionTaxable: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  canSubmit: PropTypes.bool.isRequired,
};

Condition.defaultProps = {
  age: 0,
  sales: 0,
  expenses: 0,
  incomeTaxKozyoOther: 0,
  residentTaxKozyoOther: 0,
  consumptionTaxable: false,
  handleChange: () => {},
  handleSubmit: () => {},
  canSubmit: false,
};

export default Condition;
