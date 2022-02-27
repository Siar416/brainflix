import "./Video.scss";

function Video({ id, image, title, channel, handleVideoChange }) {
  return (
    <li>
      <section className="videos__item" onClick={() => handleVideoChange(id)}>
        <img className="videos__item__img" src={image} />
        <section className="videos__wrapper">
          <p className="videos__wrapper__title">{title}</p>
          <p className="videos__wrapper__channel">{channel}</p>
        </section>
      </section>
    </li>
  );
}

export default Video;
