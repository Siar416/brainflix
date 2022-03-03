import "./Hero.scss";

function Hero({ current }) {
  return (
    <hero className="hero">
      <video className="hero__img" poster={current} controls />
    </hero>
  );
}

export default Hero;
