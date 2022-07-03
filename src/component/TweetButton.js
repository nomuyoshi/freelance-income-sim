function TweetButton() {
  const url = new URL("https://twitter.com/intent/tweet");
  url.searchParams.set("text", "フリーランスエンジニア手取りシミュレーション");
  url.searchParams.set("url", "https://tedori-sim.freelance-engineer.link/");
  url.searchParams.set("hashtags", "フリーランスエンジニア,手取り");
  return (
    <a
      href={url.toString()}
      target="_blank"
      rel="noopener noreferrer"
      className="button is-primary is-small"
    >
      <span className="icon">
        <i className="fab fa-twitter"></i>
      </span>
      <span>シェア</span>
    </a>
  );
}

export default TweetButton;
