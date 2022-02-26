import VideoDetail from "../../data/video-details.json";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import "./About.scss";

function About() {
  //   console.log(VideoDetail[0]);

  return (
    <section className="about">
      <section className="about__wrapper">
        <h1 className="about__title">{VideoDetail[0].title}</h1>
        <section className="about__container">
          <div className="about__info">
            <h2 className="about__info__author">By {VideoDetail[0].channel}</h2>
            <h2 className="about__info__timestamp">
              {new Date(VideoDetail[0].timestamp).toLocaleDateString()}
            </h2>
          </div>
          <div className="about__stats">
            <p className="about__stats__views-img-txt">
              <img
                className="about__stats__views-img"
                src={views}
                alt="image of views"
              />
              {VideoDetail[0].views}
            </p>
            <p className="about__stats__likes-img-txt">
              <img className="about__stats__likes-img" src={likes} alt="" />
              {VideoDetail[0].likes}
            </p>
          </div>
        </section>
      </section>
      <p className="about__description">{VideoDetail[0].description}</p>
    </section>
  );
}

export default About;
