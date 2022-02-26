import HeroVideo from "../../data/videos.json";
import "./Hero.scss";
import play from "../../assets/icons/play.svg";
import fullscreen from "../../assets/icons/fullscreen.svg";
import volumeUp from "../../assets/icons/volume_up.svg";

function Hero({ videos }) {
  // console.log(videos[0]);
  return (
    <hero className="hero">
      {/* <img className="hero__img" src={videos[0].image} alt="" /> */}
      <video className="hero__img" poster={videos[0].image} controls />
    </hero>
  );
}

export default Hero;
