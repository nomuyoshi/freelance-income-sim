
const PurchasingRate = 0.5; // 簡易納税みなし仕入率 第五種 50%
const ConsumptionTaxableBorder = 10000000; // 1000万
const ConsumptionTaxRate = 0.1 // 消費税率

export default function calcConsumptionTax(sales, nonTaxable) {
  // 免税業者かつ1000万円未満は免税
  if (nonTaxable && ConsumptionTaxableBorder > sales) {
    return 0;
  }

  const consumptionTax = sales / (1 + ConsumptionTaxRate) * ConsumptionTaxRate;

  return consumptionTax - (consumptionTax * PurchasingRate);
}
