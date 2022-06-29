import Simulator from './Simulator';

function App() {
  return (
    <>
      <section className="section has-background-primary has-text-light">
        <h1 className='title is-4 has-text-light'>フリーランスエンジニア手取りシミュレーター</h1>
        <p>
        フリーランスエンジニアに特化した手取りシミュレーター。<br />
        少ない入力項目で精度の高いシミュレーション可能です。
        </p>
      </section>
      <section className='section p-4'>
        <article className='message'>
          <div className='message-header'>
            <p>前提条件</p>
          </div>
          <div className='message-body content is-size-7'>
            <ul>
              <li>個人事業税は対象外（準委任契約のフリーランスエンジニアは個人事業税対象外）</li>
              <li>消費税は簡易課税制度を利用。区分は第五種事業（みなし仕入率50%）</li>
              <li>国民健康保険加入前提</li>
              <ul>
                <li>国民健康保険と住民税は東京都江東区の条件で算出</li>
                <li>加入者は1人</li>
              </ul>
              <li>前年も同一の売上、経費とする</li>
            </ul>
          </div>
        </article>
      </section>
      <Simulator />
    </>
  );
}

export default App;
