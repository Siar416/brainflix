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
            <h2 className="about__author">By {currentVideo.channel}</h2>
            <h2 className="about__timestamp">
              {new Date(currentVideo.timestamp).toLocaleDateString()}
            </h2>
          </div>
          <div className="about__stats">
            <p className="about__views-txt">
              <img className="about__views-img" src={views} alt="views icon" />
              {currentVideo.views}
            </p>
            <p className="about__likes-txt">
              <img className="about__likes-img" src={likes} alt="heart icon" />
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
