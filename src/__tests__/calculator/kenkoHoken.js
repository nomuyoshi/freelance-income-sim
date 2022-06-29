import calcKenkoHoken from "../../calculator/kenkoHoken";

// https://www.city.koto.lg.jp/250102/fukushi/kokumin/hokenryo/20170201.html
it('calcKenkoHoken 40歳未満で上限に達しない', () => {
  expect(calcKenkoHoken(6_000_000, 1_000_000, 39)).toEqual(425_348);
});

it('calcKenkoHoken 40歳未満で上限に達する', () => {
  expect(calcKenkoHoken(12_000_000, 1_000_000, 39)).toEqual(850_000);
});

it('calcKenkoHoken 40歳未満で上限に達しない', () => {
  expect(calcKenkoHoken(6_000_000, 1_000_000, 40)).toEqual(532_500);
});

it('calcKenkoHoken 40歳未満で上限に達する', () => {
  expect(calcKenkoHoken(12_000_000, 1_000_000, 40)).toEqual(1_020_000);
});
