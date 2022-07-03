function Links() {
  return (
    <section className='section p-4'>
      <div className='container'>
        <hr />
        <h2 className='title is-5'>
          <span className='icon-text has-text-success'>
            <span className='icon'><i className='fas fa-check-square'></i></span>
          </span>
          フリーランスエンジニアお役立ち情報</h2>
        <a href='https://free-engineer.life/how-to-be-freelance-engineer/'>
          <article className='media'>
            <figure className='media-left'>
              <p className='image is-64x64'>
                <img src={process.env.PUBLIC_URL + 'todo-150x150.jpeg'} alt='フリーランスエンジニアになるには？必要な手続き8項目' />
              </p>
            </figure>
            <div className='media-content'>
              <div className='content has-text-black'>
                <p className='has-text-weight-bold'>フリーランスエンジニアになるには？必要な手続き8項目</p>
                <p className='is-size-7'>フリーランスエンジニアになるまでの流れ、必要な手続きを知りたい人にオススメ。</p>
              </div>
            </div>
          </article>
        </a>
        <hr />
        <a href='https://free-engineer.life/freelance-agents-consultation/'>
          <article className='media'>
            <figure className='media-left'>
              <p className='image is-64x64'>
                <img src={process.env.PUBLIC_URL + 'consultation-150x150.jpeg'} alt='フリーランスエンジニアに興味があるならエージェントに相談しよう' />
              </p>
            </figure>
            <div className='media-content'>
              <div className='content has-text-black'>
                <p className='has-text-weight-bold'>【実体験】フリーランスエンジニアに興味があるならエージェントに相談しよう！！</p>
                <p className='is-size-7'>エージェントに相談をすると今までの経験をもとに、狙えそうな案件情報を見せてくれます。<br />
                「なんとなく不安」、「自分だと単価いくら？」、「どんな案件がある？」といった不安がある人にオススメ。</p>
              </div>
            </div>
          </article>
        </a>
        <hr />
        <a href='https://free-engineer.life/freelance-engineer-qa/'>
          <article className='media'>
            <figure className='media-left'>
              <p className='image is-64x64'>
                <img src={process.env.PUBLIC_URL + 'qa-150x150.jpeg'} alt='フリーランスエンジニアの実態を解説' />
              </p>
            </figure>
            <div className='media-content'>
              <div className='content has-text-black'>
                <p className='has-text-weight-bold'>フリーランスエンジニアの実態を解説「年収・案件・仕事内容・社会保障など」</p>
                <p className='is-size-7'>「案件はすぐに見つかるのか」、「最低でも単価どれくらいを狙えるのか」、「仕事内容・環境」、「税金・社会保障」などフリーランスエンジニアの実態について知りたい方にオススメ。</p>
              </div>
            </div>
          </article>
        </a>
      </div>
    </section>
  );
}

export default Links;
