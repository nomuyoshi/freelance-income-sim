
import './Simulator.css';
import React from 'react';

import Result from './Result';
import Condition from './Condition';

import calcKenkoHoken from '../calculator/kenkoHoken';
import calcNenkin from '../calculator/nenkin';
import calcIncomeTax from '../calculator/incomeTax';
import calcResidentTax from '../calculator/residentTax';
import calcConsumptionTax from '../calculator/consumptionTax';

import { IncomeTaxBasicKozyo, ResidentTaxBasicKozyo, ConsumptionTaxableBorder } from "../const";

class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      age: 30,
      sales: 0,
      expenses: 0,
      consumptionTaxable: false,
      incomeTaxKozyoOther: 0,
      residentTaxKozyoOther: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSimulateClick = this.handleSimulateClick.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    let value = null;
    if (target.type === 'checkbox') {
      value = target.checked;
    } else if (target.type === 'number') {
      const parsedValue = parseInt(target.value);
      value = isNaN(parsedValue) ? null : parsedValue;
    }
    const sales = (name === 'sales' && value != null) ? value : this.state.sales;
    const updatedState = {
      editing: true,
      [name]: value,
    };
    if (sales >= ConsumptionTaxableBorder) {
      updatedState.consumptionTaxable = true;
    }

    this.setState(updatedState);
  }

  handleSimulateClick() {
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
    const kozyo = IncomeTaxBasicKozyo + this.getKenkoHoken() + this.getNenkin() +  this.getIncomeTaxKozyoOther();
    return calcIncomeTax(this.getSales(), this.getExpenses(), kozyo);
  }

  getResidentTax() {
    const kozyo = ResidentTaxBasicKozyo + this.getKenkoHoken() + this.getNenkin() + this.getResidentTaxKozyoOther();
    return calcResidentTax(this.getSales(), this.getExpenses(), kozyo);
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
          consumptionTaxable={this.state.consumptionTaxable}
          handleChange={this.handleChange}
          handleSubmit={this.handleSimulateClick}
          canSubmit={this.canSimulate()}
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
