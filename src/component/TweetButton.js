import { TwitterShareButton } from 'react-share';

function TweetButton() {
  return (
    <TwitterShareButton
      url='https://tedori-sim.freelance-engineer.link/'
      title='フリーランスエンジニア手取りシミュレーション'
      hashtags={['フリーランスエンジニア', '手取り']}
      className='button is-primary is-small'
      resetButtonStyle={false}
    >
      <span className="icon">
        <i className="fab fa-twitter"></i>
      </span>
      <span>Tweet</span>
    </TwitterShareButton>
  );
}

export default TweetButton;
