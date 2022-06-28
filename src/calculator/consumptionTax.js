
import { PurchasingRate, ConsumptionTaxableBorder, ConsumptionTaxRate } from '../const';

export default function calcConsumptionTax(sales, nonTaxable) {
  // 免税業者かつ1000万円未満は免税
  if (nonTaxable && ConsumptionTaxableBorder > sales) {
    return 0;
  }

  const consumptionTax = sales / (1 + ConsumptionTaxRate) * ConsumptionTaxRate;

  return consumptionTax - (consumptionTax * PurchasingRate);
}
