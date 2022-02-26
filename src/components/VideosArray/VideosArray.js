import "./VideosArray.scss";
import Video from "../Video/Video";

function VideosArray({ videos, currentVideo, handleVideoChange }) {
  // console.log(videos);

  return (
    // <section class="videos__container">
    //   <h2 className="vidoes__header">NEXT VIDEOS</h2>
    //   {videos.map((item) => (
    //     <section className="videos">
    //       {<img className="videos__img" src={item.image} />}
    //       <section className="videos__wrapper">
    //         <h1 className="videos__title">{item.title}</h1>
    //         <h1 className="videos__channel">{item.channel}</h1>
    //       </section>
    //     </section>
    //   ))}
    // </section>

    <section className="videos__container">
      <h2 className="videos__header">NEXT VIDEOS</h2>
      <ul className="videos">
        {videos
          .filter((item) => item.id !== currentVideo.id)
          .map((item) => {
            return (
              <Video
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                channel={item.channel}
                handleVideoChange={handleVideoChange}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default VideosArray;
