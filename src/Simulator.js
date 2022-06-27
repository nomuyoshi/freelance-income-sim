
import React from 'react';
import calcKenkoHoken from './kenkoHoken';
import calcNenkin from './nenkin';
import calcIncomeTax from './incomeTax';
import calcResidentTax from './residentTax';
import calcConsumptionTax from './consumptionTax';

class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 30,
      sales: 0,
      expenses: 0,
      consumptionNonTaxable: false,
      incomeTaxKozyoOther: 0,
      residentTaxKozyoOther: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
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
    return (
      <div>
        年齢
        <input type="text" value={this.state.age} name="age" onChange={this.handleChange} />
        売上
        <input type="text" value={this.state.sales} name="sales" onChange={this.handleChange} />
        経費
        <input type="text" value={this.state.expenses} name="expenses" onChange={this.handleChange} />
        青色申告特別控除: 650,000円
        所得税所得控除（基礎控除、社会保険料控除以外）
          所得税基礎控除: 480,000円
          社会保険料控除: 自動計算
          その他所得控除:<input type="text" value={this.state.incomeTaxKozyoOther} name="incomeTaxKozyoOther" onChange={this.handleChange} />
        住民税所得控除（基礎控除、社会保険料控除以外）
          所得税基礎控除: 430,000円
          社会保険料控除: 自動計算
          その他所得控除:<input type="text" value={this.state.residentTaxKozyoOther} name="residentTaxKozyoOther" onChange={this.handleChange} />
        <div>
        消費税: <strong>{this.getConsumptionTax()}</strong>
        国民健康保険料: <strong>{this.getKenkoHoken()}</strong>
        国民年金保険料: <strong>{this.getNenkin()}</strong>
        所得税額: <strong>{this.getIncomeTax()}</strong>
        </div>
      </div>
    );
  }
}

export default Simulator;
