import "./Hero.scss";

function Hero({ current }) {
  return (
    <hero className="hero">
      <video className="hero__img" poster={current.image} controls />
    </hero>
  );
}

export default Hero;
