import HeroVideo from "../../data/videos.json";
import "./Hero.scss";
import play from "../../assets/icons/play.svg";
import fullscreen from "../../assets/icons/fullscreen.svg";
import volumeUp from "../../assets/icons/volume_up.svg";

function Hero() {
  return (
    <hero className="hero">
      <img
        className="hero__img"
        src={HeroVideo[0].image}
        alt={HeroVideo[0].title}
      />
      <section className="hero__mediaBtn">
        <img className="hero__mediaBtn__play" src={play} alt="" />
        <div className="hero__mediaBtn__right">
          <img className="hero__mediaBtn__fullscreen" src={fullscreen} alt="" />
          <img className="hero__mediaBtn__volumeUp" src={volumeUp} alt="" />
        </div>
      </section>
    </hero>
  );
}

export default Hero;
