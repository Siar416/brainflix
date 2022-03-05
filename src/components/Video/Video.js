import "./Video.scss";
import { Link } from "react-router-dom";

function Video({ id, image, title, channel, handleVideoChange }) {
  return (
    <li>
      <Link to={`/videos/${id}`}>
        <section className="videos__item">
          <img className="videos__item__img" src={image} />
          <section className="videos__wrapper">
            <p className="videos__wrapper__title">{title}</p>
            <p className="videos__wrapper__channel">{channel}</p>
          </section>
        </section>
      </Link>
    </li>
  );
}

export default Video;
