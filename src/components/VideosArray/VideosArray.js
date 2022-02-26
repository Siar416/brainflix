import "./VideosArray.scss";

function VideosArray(props) {
  console.log(props.data);

  return (
    <section class="videos__container">
      <h2 className="vidoes__header">NEXT VIDEOS</h2>
      {props.data.map((item) => (
        <section className="videos">
          {<img className="videos__img" src={item.image} />}
          <section className="videos__wrapper">
            <h1 className="videos__title">{item.title}</h1>
            <h1 className="videos__channel">{item.channel}</h1>
          </section>
        </section>
      ))}
    </section>
  );
}

export default VideosArray;
