import VideoDetail from "../../data/video-details.json";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import "./About.scss";

function About({ currentVideo }) {
  return (
    <section className="about">
      <section className="about__wrapper">
        <h1 className="about__title">{currentVideo.title}</h1>
        <section className="about__container">
          <div className="about__info">
            <h2 className="about__info__author">By {currentVideo.channel}</h2>
            <h2 className="about__info__timestamp">
              {new Date(currentVideo.timestamp).toLocaleDateString()}
            </h2>
          </div>
          <div className="about__stats">
            <p className="about__stats__views-img-txt">
              <img
                className="about__stats__views-img"
                src={views}
                alt="image of views"
              />
              {currentVideo.views}
            </p>
            <p className="about__stats__likes-img-txt">
              <img className="about__stats__likes-img" src={likes} alt="" />
              {currentVideo.likes}
            </p>
          </div>
        </section>
      </section>
      <p className="about__description">{currentVideo.description}</p>
    </section>
  );
}

export default About;
