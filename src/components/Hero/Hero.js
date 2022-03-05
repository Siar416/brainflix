import "./Hero.scss";

function Hero({ current }) {
  return (
    <section className="hero">
      <video className="hero__img" poster={current.image} controls />
    </section>
  );
}

export default Hero;
