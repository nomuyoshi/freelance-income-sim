
import './Simulator.css';
import React from 'react';

import Result from './Result';
import Condition from './Condition';

import calcKenkoHoken from '../calculator/kenkoHoken';
import calcNenkin from '../calculator/nenkin';
import { calcIncomeTax } from '../calculator/incomeTax';
import { calcResidentTax } from '../calculator/residentTax';
import calcConsumptionTax from '../calculator/consumptionTax';


class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
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
    const parsedValue = parseInt(event.target.value);
    let value = null;
    if (!isNaN(parsedValue)) {
      value = parsedValue;
    }
    this.setState({
      editing: true,
      [name]: value,
    });
  }

  handleSimilateClick() {
    if (this.canSimulate()) {
      this.setState({editing: false});
    }
  }

  canSimulate() {
    return this.getSales() - this.getExpenses() > 0;
  }

  getSales() {
    return this.state.sales ?? 0;
  }

  getExpenses() {
    return this.state.expenses ?? 0;
  }

  getIncomeTaxKozyoOther() {
    return this.state.incomeTaxKozyoOther ?? 0;
  }

  getResidentTaxKozyoOther() {
    return this.state.residentTaxKozyoOther ?? 0;
  }

  getAge() {
    return this.state.age ?? 0;
  }

  getConsumptionTax() {
    return calcConsumptionTax(this.getSales(), this.state.consumptionNonTaxable)
  }

  getKenkoHoken() {
    return calcKenkoHoken(this.getSales(), this.getExpenses(), this.getAge());
  }

  getNenkin() {
    return calcNenkin();
  }

  getIncomeTax() {
    const syakaihoken = this.getKenkoHoken() + this.getNenkin();
    return calcIncomeTax(this.getSales(), this.getExpenses(), syakaihoken, this.getIncomeTaxKozyoOther());
  }

  getResidentTax() {
    const syakaihoken = this.getKenkoHoken() + this.getNenkin();
    return calcResidentTax(this.getSales(), this.getExpenses(), syakaihoken, this.getResidentTaxKozyoOther());
  }

  render() {
    let consumptionTax, incomeTax, residentTax, nenkin, kenkoHoken;
    const showResult = !this.state.editing;
    if (showResult) {
      consumptionTax = this.getConsumptionTax();
      incomeTax = this.getIncomeTax();
      residentTax = this.getResidentTax();
      nenkin = this.getNenkin();
      kenkoHoken = this.getConsumptionTax();
    }

    return (
      <section className='section p-4'>
        <Condition
          age={this.state.age}
          sales={this.state.sales}
          expenses={this.state.expenses}
          incomeTaxKozyoOther={this.state.incomeTaxKozyoOther}
          residentTaxKozyoOther={this.state.residentTaxKozyoOther}
          handleChange={this.handleChange}
          handleSubmit={this.handleSimilateClick}
        />
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
      </section>
    );
  }
}

export default Simulator;
