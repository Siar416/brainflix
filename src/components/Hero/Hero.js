import "./Hero.scss";

function Hero({ currentVideo }) {
  return (
    <hero className="hero">
      <video className="hero__img" poster={currentVideo.image} controls />
    </hero>
  );
}

export default Hero;
