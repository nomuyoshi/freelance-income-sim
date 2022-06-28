import { AoiroKozyo, FukkoTokubetsuRate, IncomeTaxBasicKozyo } from "../const";

// 所得税額計算
export function calcIncomeTax(sales, expenses, syakaihoken, otherKozyo) {
  const kozyo = IncomeTaxBasicKozyo + syakaihoken + otherKozyo;
  const taxableIncome = calcTaxableIncome(sales, expenses, kozyo);
  const [rate, kozyoByRate] = getIncomeTaxRateWithKozyo(taxableIncome);

  console.log(taxableIncome, rate, kozyoByRate);
  return (taxableIncome * rate - kozyoByRate) * (1 + FukkoTokubetsuRate);
}

// 課税所得
// 課税所得は1000円未満の端数は切り捨てる
function calcTaxableIncome(sales, expenses, kozyo) {
  const value = sales - expenses - AoiroKozyo - kozyo;
  return Math.floor(value / 1000) * 1000;
}

function getIncomeTaxRateWithKozyo(taxableIncome) {
  if (taxableIncome >= 1000 && taxableIncome <= 1949000) {
    return [0.05, 0];
  } else if (taxableIncome >= 1950000 && taxableIncome <= 3299000) {
    return [0.1, 97500];
  } else if (taxableIncome >= 3300000 && taxableIncome <= 6949000) {
    return [0.2, 427500];
  } else if (taxableIncome >= 6950000 && taxableIncome <= 8999000) {
    return [0.23, 636000];
  } else if (taxableIncome >= 9000000 && taxableIncome <= 17999000) {
    return [0.33, 1536000];
  } else if (taxableIncome >= 18000000 && taxableIncome <= 39999000) {
    return [0.4, 2796000];
  } else if (taxableIncome >= 40000000) {
    return [0.45, 4796000];
  }

  return [0, 0];
}

