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
      <span className="icon-text is-clickable" onClick={() => {setShowModal(true)}}>
        <span className="icon has-text-info">
          <i className="fas fa-circle-question"></i>
        </span>
      </span>
    );
  };

  return (
    <div className='container'>
      <h2 className='title is-5'>
        <span className='icon-text has-text-success'>
          <span className='icon'><i className='fas fa-calculator'></i></span>
        </span>
        手取りシミュレーション条件
      </h2>
      <table className='table is-fullwidth simulation-condition'>
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
            <th>青色申告特別控除</th>
            <td>{showYenHelper(AoiroKozyo)}</td>
          </tr>
          <tr>
            <th>所得税 控除</th>
            <td>
              基礎控除: {showYenHelper(IncomeTaxBasicKozyo)}<br />
              社会保険料控除: 自動計算<br />
              その他所得控除: <input type="number" value={incomeTaxKozyoOther ?? ''} name="incomeTaxKozyoOther" onChange={handleChange} />
              {questionIcon()}
            </td>
          </tr>
          <tr>
            <th>住民税 控除</th>
            <td>
              基礎控除: {showYenHelper(ResidentTaxBasicKozyo)}<br />
              社会保険料控除: 自動計算<br />
              その他所得控除: <input type="number" value={residentTaxKozyoOther ?? ''} name="residentTaxKozyoOther" onChange={handleChange} />
              {questionIcon()}
            </td>
          </tr>
        </tbody>
      </table>
      <div className='has-text-centered'>
        <button className='button is-primary' disabled={!canSubmit} onClick={handleSubmit}>計算</button>
        {!canSubmit && <p className='has-text-danger is-size-7'>マイナス入力値がある場合や所得が0円以下の場合はシミュレーションできません</p>}
      </div>
      <Modal title='所得控除？' handleClose={() => setShowModal(false)} visible={showModal}>
        <div className='is-size-6'>
          「基礎控除」、「社会保険料控除」<strong>以外</strong>の所得控除を入力してください。
          <br />
          <br />
          【参考】<br />
          「小規模企業共済等掛金控除」を利用して節税するのが一般的<br />
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
