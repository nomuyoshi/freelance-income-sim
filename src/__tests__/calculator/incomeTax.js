import calcIncomeTax from "../../calculator/incomeTax";

// https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm
// 復興特別所得税込
it('calcIncomeTax 課税所得1,000円 から 1,949,000円まで', () => {
  // 青色申告特別控除65万円を含めて課税所得194.9万円
  expect(calcIncomeTax(3_379_000, 300_000, 480_000)).toEqual(99_496);
});

it('calcIncomeTax 1,950,000円 から 3,299,000円まで', () => {
  // 青色申告特別控除65万円を含めて課税所得195万円
  expect(calcIncomeTax(3_380_000, 300_000, 480_000)).toEqual(99_547);
  // 青色申告特別控除65万円を含めて課税所得329.9万円
  expect(calcIncomeTax(4_729_000, 300_000, 480_000)).toEqual(237_280);
});

it('calcIncomeTax 3,300,000円 から 6,949,000円まで', () => {
  // 青色申告特別控除65万円を含めて課税所得333万円
  expect(calcIncomeTax(4_730_000, 300_000, 480_000)).toEqual(237_382);
  // 青色申告特別控除65万円を含めて課税所得694.9万円
  expect(calcIncomeTax(8_379_000, 300_000, 480_000)).toEqual(982_508);
});

it('calcIncomeTax 6,950,000円 から 8,999,000円まで', () => {
  // 青色申告特別控除65万円を含めて課税所得695万円
  expect(calcIncomeTax(8_380_000, 300_000, 480_000)).toEqual(982_712);
  // 青色申告特別控除65万円を含めて課税所得899.9万円
  expect(calcIncomeTax(10_429_000, 300_000, 480_000)).toEqual(1_463_879);
});

it('calcIncomeTax 9,000,000円 から 17,999,000円まで', () => {
  // 青色申告特別控除65万円を含めて課税所得900万円
  expect(calcIncomeTax(10_430_000, 300_000, 480_000)).toEqual(1_464_114);
  // 青色申告特別控除65万円を含めて課税所得1799.9万円
  expect(calcIncomeTax(19_429_000, 300_000, 480_000)).toEqual(4_496_147);
});

it('calcIncomeTax 18,000,000円 から 39,999,000円まで', () => {
  // 青色申告特別控除65万円を含めて課税所得1800万円
  expect(calcIncomeTax(19_430_000, 300_000, 480_000)).toEqual(4_496_484);
  // 青色申告特別控除65万円を含めて課税所得3999.9万円
  expect(calcIncomeTax(41_429_000, 300_000, 480_000)).toEqual(13_480_876);
});

it('calcIncomeTax 40,000,000円以上', () => {
  // 青色申告特別控除65万円を含めて課税所得4000万円
  expect(calcIncomeTax(41_430_000, 300_000, 480_000)).toEqual(13_481_284);
});
