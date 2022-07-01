
import { PurchasingRate, ConsumptionTaxableBorder, ConsumptionTaxRate } from '../const';

// MEMO: 売上5000万円を超えると簡易課税制度は利用できないが考慮しない
export default function calcConsumptionTax(sales, taxable) {
  // 免税業者かつ1000万円未満は免税
  if (!taxable && ConsumptionTaxableBorder > sales) {
    return 0;
  }

  const totalConsumptionTax = sales - (sales / (1 + ConsumptionTaxRate));
  const tax =  totalConsumptionTax - (totalConsumptionTax * PurchasingRate);
  return Math.round(tax);
}
