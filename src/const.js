export const AoiroKozyo = 650000; // 青色申告特別控除
// 所得税
export const FukkoTokubetsuRate = 0.021; // 復興特別所得税率
export const IncomeTaxBasicKozyo = 480000; // 所得税基礎控除額

// 住民税
export const PerCapitalBasisAmount = 5000; // 均等割額（都道府県民税＋市町村民税）
export const ResidentTaxRate = 0.1; // 住民税率（特別区民税＋都民税）
export const ChoseiKozyo = 2500; // TODO: ちゃんと計算する 調整控除（簡易的に2500円固定） 
export const NonTaxableBorder = 450000; // 所得が45万円以下の場合非課税(扶養無し)
export const ResidentTaxBasicKozyo = 430000; // 基礎控除額

// 国民健康保険料
export const KenkoHokenBasicKozyo = 430000;
export const KintowariIryoAmount = 42100;
export const KintowariShienAmount = 13200;
export const KintowariKaigoAmount = 16600;
export const SyotokuIryoRate = 0.0716;
export const SyotokuShienRate = 0.0228;
export const SyotokuKaigoRate = 0.0231;
export const IryoMaxLimitAmount = 650000;
export const ShienMaxLimitAmount = 200000;
export const KaigoMaxLimitAmount = 170000;
export const KaigoMinBoderAge = 40;

// 国民年金
// https://www.nenkin.go.jp/service/kokunen/hokenryo/20150331-02.html
export const NenkinMonthlyAmount = 16590;

// 消費税
export const PurchasingRate = 0.5; // 簡易納税みなし仕入率 第五種 50%
export const ConsumptionTaxableBorder = 10000000; // 1000万
export const ConsumptionTaxRate = 0.1 // 消費税率
