import { AoiroKozyo } from "./globalConst";
const BasicKozyoAmount = 430000; // 基礎控除額
const PerCapitalBasisAmount = 5000; // 均等割額（都道府県民税＋市町村民税）
const ResidentTaxRate = 0.1; // 住民税率（特別区民税＋都民税）
const ChoseiKozyo = 2500; // 調整控除（簡易的に2500円固定）

// 所得税額計算
export default function calcResidentTax(sales, expenses, syakaihoken, otherKozyo) {
  // 売上 - 経費 - 青色申告特別控除(65万円) - 住民税基礎控除（43万円）- 所得控除
  const kozyo = BasicKozyoAmount + syakaihoken + otherKozyo;
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
