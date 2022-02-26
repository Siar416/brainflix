import "./Video.scss";

function Video({ id, image, title, channel, handleVideoChange }) {
  //   console.log(image);
  return (
    <li>
      <section className="videos__item">
        <img
          className="videos__item__img"
          src={image}
          onClick={() => handleVideoChange(id)}
        />
        <section className="videos__wrapper">
          <p className="videos__wrapper__title">{title}</p>
          <p className="videos__wrapper__channel">{channel}</p>
        </section>
      </section>
    </li>
  );
}

export default Video;
