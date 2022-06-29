import calcConsumptionTax from "../../calculator/consumptionTax";

it('売上1000万未満 consumptionTax', () => {
  expect(calcConsumptionTax(9999999, true)).toEqual(0);
  expect(calcConsumptionTax(9900000, false)).toEqual(450000);
});

it('売上1000万以上 consumptionTax', () => {
  expect(calcConsumptionTax(10000000, true)).toEqual(454545);
  expect(calcConsumptionTax(10000000, false)).toEqual(454545);
});
