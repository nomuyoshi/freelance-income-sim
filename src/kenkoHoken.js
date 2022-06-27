
import { AoiroKozyo } from "./globalConst";

const KisoKozyoAmount = 430000;
const KintowariIryoAmount = 42100;
const KintowariShienAmount = 13200;
const KintowariKaigoAmount = 16600;
const SyotokuIryoRate = 0.0716;
const SyotokuShienRate = 0.0228;
const SyotokuKaigoRate = 0.0231;
const IryoMaxLimitAmount = 650000;
const ShienMaxLimitAmount = 200000;
const KaigoMaxLimitAmount = 170000;
const KaigoMinBoderAge = 40;

// income は年間所得額(売上 - 経費 - 青色申告特別控除)
// 加入者数は1人で計算
export default function calcKenkoHoken(sales, expenses, age) {
  const syotoku = sales - expenses - AoiroKozyo - KisoKozyoAmount;
  const total = calcIryo(syotoku) + calcShien(syotoku) + calcKaigo(syotoku, age);

  return total;
}

function calcIryo(syotoku) {
  const amount = KintowariIryoAmount + syotoku * SyotokuIryoRate;
  return amount > IryoMaxLimitAmount ? IryoMaxLimitAmount : amount;
}


function calcShien(syotoku) {
  const amount = KintowariShienAmount + syotoku * SyotokuShienRate;
  return amount > ShienMaxLimitAmount ? ShienMaxLimitAmount : amount;
}

function calcKaigo(syotoku, age) {
  // 40歳未満は介護分不要
  if (age < KaigoMinBoderAge) {
    return 0;
  }

  const amount = KintowariKaigoAmount + syotoku * SyotokuKaigoRate;
  return amount > KaigoMaxLimitAmount ? KaigoMaxLimitAmount : amount;
}
