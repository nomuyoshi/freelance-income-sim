import calcResidentTax from "../../calculator/residentTax";

// https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm
// 扶養家族無し前提
// 調整控除は2500円固定。所得が250万円以下の場合は誤差が出る
it('calcResidentTax 所得が450,000円以下', () => {
  expect(calcResidentTax(1_300_000, 200_000, 430_000)).toEqual(0);
});

it('calcResidentTax 所得が450,000円超', () => {
  expect(calcResidentTax(7_000_000, 1_000_000, 430_000)).toEqual(494_500);
});
