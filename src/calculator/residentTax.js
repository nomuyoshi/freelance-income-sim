import { AoiroKozyo, PerCapitalBasisAmount, ResidentTaxRate, ChoseiKozyo, NonTaxableBorder, ResidentTaxBasicKozyo } from "../const";

// 所得税額計算
export function calcResidentTax(sales, expenses, syakaihoken, otherKozyo) {
  // 所得が45万円以下の場合非課税
  if (NonTaxableBorder >= (sales - expenses - AoiroKozyo)) {
    return 0;
  }

  // 売上 - 経費 - 青色申告特別控除(65万円) - 住民税基礎控除（43万円）- 所得控除
  const kozyo = ResidentTaxBasicKozyo + syakaihoken + otherKozyo;
  const taxableIncome = calcTaxableIncome(sales, expenses, kozyo);
  // 課税標準額 x 0.1(住民税率) - 調整控除
  const incomeLevy = taxableIncome * ResidentTaxRate - ChoseiKozyo;

  return PerCapitalBasisAmount + incomeLevy;
}

// 課税標準額
// 課税標準額は1000円未満の端数は切り捨てる
function calcTaxableIncome(sales, expenses, kozyo) {
  const value = sales - expenses - AoiroKozyo - kozyo;
  return Math.floor(value / 1000) * 1000;
}
