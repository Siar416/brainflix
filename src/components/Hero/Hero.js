import "./Hero.scss";

function Hero({ current }) {
  return (
    <figure className="hero">
      <video className="hero__img" poster={current.image} controls />
    </figure>
  );
}

export default Hero;
