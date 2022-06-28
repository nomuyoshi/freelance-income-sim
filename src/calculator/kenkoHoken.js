
import {
  AoiroKozyo, KenkoHokenBasicKozyo, KintowariIryoAmount,
  KintowariShienAmount, KintowariKaigoAmount, SyotokuIryoRate, SyotokuShienRate,
  SyotokuKaigoRate, IryoMaxLimitAmount, ShienMaxLimitAmount, KaigoMaxLimitAmount, KaigoMinBoderAge
} from "../const";


// income は年間所得額(売上 - 経費 - 青色申告特別控除)
// 加入者数は1人で計算
export default function calcKenkoHoken(sales, expenses, age) {
  const syotoku = sales - expenses - AoiroKozyo - KenkoHokenBasicKozyo;
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
