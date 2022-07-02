function Notice(props) {
  return (
    <section className='section p-4'>
      <article className='message'>
        <div className='message-header'>
          <p>前提条件</p>
        </div>
        <div className='message-body content is-size-7'>
          <ul>
            <li>前年も同一の売上、経費とする</li>
            <li>個人事業税は対象外（準委任契約のフリーランスエンジニアは個人事業税対象外）</li>
            <li>消費税は簡易課税制度を利用。区分は第五種事業（みなし仕入率50%）</li>
            <li>国民健康保険加入とし加入者数は1人</li>
            <li>住民税の調整控除は2,500円</li>
            <li>国民健康保険と住民税は東京都江東区の条件で算出</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Notice;
