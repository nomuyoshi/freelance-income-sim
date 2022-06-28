
import './Simulator.css';
import React from 'react';
import calcKenkoHoken from './kenkoHoken';
import calcNenkin from './nenkin';
import calcIncomeTax from './incomeTax';
import calcResidentTax from './residentTax';
import calcConsumptionTax from './consumptionTax';
import Result from './Result';

class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      age: 30,
      sales: 0,
      expenses: 0,
      consumptionNonTaxable: false,
      incomeTaxKozyoOther: 0,
      residentTaxKozyoOther: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSimilateClick = this.handleSimilateClick.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSimilateClick() {
    this.setState({showResult: true});
  }

  canSimulate() {
    return this.state.sales - this.state.expenses > 0;
  }

  getConsumptionTax() {
    return calcConsumptionTax(this.state.sales, this.state.consumptionNonTaxable)
  }

  getKenkoHoken() {
    return calcKenkoHoken(this.state.sales, this.state.expenses, this.state.age);
  }

  getNenkin() {
    return calcNenkin();
  }

  getIncomeTax() {
    const syakaihoken = this.getKenkoHoken() + this.getNenkin();
    return calcIncomeTax(this.state.sales, this.state.expenses, syakaihoken, this.state.incomeTaxKozyoOther);
  }

  getResidentTax() {
    const syakaihoken = this.getKenkoHoken() + this.getNenkin();
    return calcResidentTax(this.state.sales, this.state.expenses, syakaihoken, this.state.residentTaxKozyoOther);
  }

  render() {
    let consumptionTax, incomeTax, residentTax, nenkin, kenkoHoken;
    const showResult = this.state.showResult;
    if (showResult) {
      consumptionTax = this.getConsumptionTax();
      incomeTax = this.getIncomeTax();
      residentTax = this.getResidentTax();
      nenkin = this.getNenkin();
      kenkoHoken = this.getConsumptionTax();
    }

    return (
      <div className='container'>
        <div className='table-container'>
          <table className='table simulation-condition'>
            <tbody>
              <tr>
                <th>年齢</th>
                <td><input type="text" value={this.state.age} name="age" onChange={this.handleChange} /></td>
              </tr>
              <tr>
                <th>売上</th>
                <td><input type="text" value={this.state.sales} name="sales" onChange={this.handleChange} /></td>
              </tr>
              <tr>
                <th>経費</th>
                <td>
                  <input type="text" value={this.state.expenses} name="expenses" onChange={this.handleChange} /><br />
                  <span className='is-size-7 has-text-danger'>※ 前年の消費税納税額を除いた経費を入力。消費税は自動で加算されます。</span>
                </td>
              </tr>
              <tr>
                <th>青色申告<br />特別控除</th>
                <td>650,000円</td>
              </tr>
              <tr>
                <th>所得税<br />所得控除</th>
                <td>
                  所得税基礎控除: 480,000円<br />
                  社会保険料控除: 自動計算<br />
                  その他: <input type="text" value={this.state.incomeTaxKozyoOther} name="incomeTaxKozyoOther" onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <th>住民税<br />所得控除</th>
                <td>
                  所得税基礎控除: 430,000円<br />
                  社会保険料控除: 自動計算<br />
                  その他: <input type="text" value={this.state.residentTaxKozyoOther} name="residentTaxKozyoOther" onChange={this.handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='has-text-centered'>
          <button className='button is-primary' onClick={this.handleSimilateClick}>計算</button>
        </div>
        {showResult &&
          <Result
            sales={this.state.sales}
            expenses={this.state.expenses}
            consumptionTax={consumptionTax}
            incomeTax={incomeTax}
            residentTax={residentTax}
            nenkin={nenkin}
            kenkoHoken={kenkoHoken}
          />}
      </div>
    );
  }
}

export default Simulator;
